import { Lobby } from 'components/Lobby';
import { Chat } from 'components/Chat';
import { useSignalR } from 'hooks/useSignalR';
import { Header } from 'components/Header';
import { UsersCount } from 'components/UsersOnline';
import { useEffect } from 'react';

import * as signalR from '@microsoft/signalr';


export const App: React.FC = () => {
  const {
		messages,
		users,
		connection,
		isConnection,
		countUsers,
		user,
		room,
		joinRoom,
		sendMessage,
		closeConnection,
		setConnection,
	} = useSignalR();
  
    
  

  useEffect(() => {
   const connection = new signalR.HubConnectionBuilder()
			.withUrl('https://signalr-test-chat.herokuapp.com/chat', {
				skipNegotiation: true,
				transport: signalR.HttpTransportType.WebSockets,
			})
			.withAutomaticReconnect()
			.configureLogging(signalR.LogLevel.Information)
     .build();
    
    setConnection(connection)
  }, [setConnection])
  
  return (
		<div>
			<Header>{ connection && <UsersCount countUsers={countUsers} />}</Header>
			{  !isConnection ? (
				<Lobby joinRoom={joinRoom} connection={connection} />
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
