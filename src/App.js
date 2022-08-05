
import { Lobby } from 'components/Lobby';
import { Chat } from 'components/Chat';
import { useSignalR } from 'hooks/useSignalR';
import { Header } from 'components/Header';
import { UsersCount } from 'components/UsersOnline';
import useSound from 'use-sound';

import sound from './common/sounds/drop.mp3';

export const App= () => {
  const {
		messages,
		users,
		connection,
		countUsers,
		joinRoom,
		sendMessage,
		closeConnection,
  } = useSignalR();
  
  const [play] = useSound(sound);
  
  return (
		<div>
			<Header>{connection && <UsersCount countUsers={countUsers} />}</Header>
			{!connection ? (
				<Lobby joinRoom={joinRoom} />
			) : (
				<Chat
					messages={messages}
					sendMessage={sendMessage}
					closeConnection={closeConnection}
					users={users}
				/>
      )}
      
      <button onClick={play}>Boop!</button>
		</div>
	);
};


