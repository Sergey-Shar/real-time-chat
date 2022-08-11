import { HubConnection } from '@microsoft/signalr';
import { UsersCount } from 'components/UsersOnline';
import { useDarkMode } from 'hooks/useDarkMode';
import { TCloseconnection } from 'types';
import useSound from 'use-sound';
import { useCallback } from 'react';

import darkMode from '../../common/icons/dark-mode.png';
import lightMode from '../../common/icons/light-mode.png';
import typingSound from '../../sounds/typing.mp3';
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
      className=" dark:bg-dark-gray dark:border-b
		 dark:border-gray fixed w-full z-50 transition duration-500 ">
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md">
        <button
          className="h-[40px] w-[40px]
          dark:bg-chat rounded-3xl flex 
           items-center justify-center 
           transition duration-500"
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
