import { HubConnection } from '@microsoft/signalr';
import { UsersCount } from 'components/UsersOnline';
import { useDarkMode } from 'common/hooks/useDarkMode';
import { TCloseconnection } from 'common/types';
import useSound from 'use-sound';
import { useCallback } from 'react';

import darkMode from '../../common/icons/dark-mode.png';
import lightMode from '../../common/icons/light-mode.png';
import typingSound from '../../common/sounds/typing.mp3';

import { button, header } from './styles';
interface HeaderProps {
	connection: HubConnection | undefined;
	countUsers: string;
	closeConnection: TCloseconnection;
}

export const Header: React.FC<HeaderProps> = ({
  connection,
  countUsers,
  closeConnection,
}) => {
  const { colorTheme, setTheme } = useDarkMode();

  const [play] = useSound(typingSound);

  const toogleTheme = useCallback(() => {
    setTheme(colorTheme);
    play();
  }, [colorTheme, play, setTheme]);

  return (
    <div
      className={header.join(' ')}>
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md">
        <button
          className={button.join(' ')}
          onClick={toogleTheme}>
          <img
            className="transition duration-500"
            src={colorTheme === 'dark' ? darkMode : lightMode}
            alt="mode icon"
          />
        </button>
        {connection && <UsersCount countUsers={countUsers} />}
        {connection && (
          <button
            className="text-white rounded-2xl bg-green px-3 py-2 text-xs"
            onClick={closeConnection}>
						Покинуть чат
          </button>
        )}
      </nav>
    </div>
  );
};
