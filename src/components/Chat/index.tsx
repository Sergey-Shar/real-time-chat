import { ConnectedUsers } from 'components/ConnectedUsers';
import { MessageContainer } from 'components/MessageContainer';
import { SendMessageForm } from 'components/SendMessageForm';
import { TCloseconnection, TMessageObj, TSendMessage } from 'types';

 interface ChatProps  {
   messages: TMessageObj[];
   sendMessage: TSendMessage;
   closeConnection: TCloseconnection;
   users:string[];
 }

export const Chat: React.FC <ChatProps> = ({ messages, sendMessage, closeConnection, users }) => {
  return (
    <>
      <div>
        <button onClick={closeConnection}>Leave Room</button>
      </div>
      <ConnectedUsers users={users}/>
      <div>
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
      </div>
    </>
  );
};
