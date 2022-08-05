import { Lobby } from 'components/Lobby';
import { Chat } from 'components/Chat';
import { useSignalR } from 'hooks/useSignalR';
import { Header } from 'components/Header';
import { UsersCount } from 'components/UsersOnline';
import { useEffect } from 'react';


export const App: React.FC = () => {
  const {
		messages,
		users,
		connection,
		isConnection,
		countUsers,
		joinRoom,
		sendMessage,
		closeConnection,
  } = useSignalR();
  


  return (
		<div>
			<Header>{ connection && <UsersCount countUsers={countUsers} />}</Header>
			{  !isConnection ? (
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
