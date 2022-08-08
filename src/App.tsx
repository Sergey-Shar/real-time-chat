import { Lobby } from 'components/Lobby';
import { Chat } from 'components/Chat';
import { useSignalR } from 'hooks/useSignalR';
import { Header } from 'components/Header';

export const App: React.FC = () => {
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
    <div className="dark:bg-gray-dark transition duration-500">
      <Header
        connection={connection}
        closeConnection={closeConnection}
        countUsers={countUsers}
      />  
      {!connection ? (
        <Lobby joinRoom={joinRoom} />
      ) : (
        <Chat
          messages={messages}
          sendMessage={sendMessage}
          users={users}
        />
      )}
    </div>
  );
};
