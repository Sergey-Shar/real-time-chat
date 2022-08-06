
import { Lobby } from 'components/Lobby';
import { Chat } from 'components/Chat';
import { useSignalR } from 'hooks/useSignalR';
import { Header } from 'components/Header';
import { UsersCount } from 'components/UsersOnline';

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
		</div>
	);
};


