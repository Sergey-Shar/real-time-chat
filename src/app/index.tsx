import { Lobby } from 'features/Lobby';
import { Chat } from 'features/Chat';
import { useSignalR } from 'common/hooks/useSignalR';
import { Header } from 'features/Header';

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
        <Chat messages={messages} sendMessage={sendMessage} users={users} />
      )}
    </div>
  );
};

