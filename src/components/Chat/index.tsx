import { ConnectedUsers } from 'components/ConnectedUsers';
import { MessageContainer } from 'components/MessageContainer';
import { SendMessageForm } from 'components/SendMessageForm';
import { TMessageObj, TSendMessage } from 'common/types';
interface ChatProps {
	messages: TMessageObj[];
	sendMessage: TSendMessage;
	users: string[];
}

export const Chat: React.FC<ChatProps> = ({ messages, sendMessage, users }) => {
  return (
    <div className="h-screen grid grid-flow-row grid-rows-6 grid-cols-4  pt-[50px]">
      <ConnectedUsers users={users} />
      <MessageContainer messages={messages} />
      <SendMessageForm sendMessage={sendMessage} />
    </div>
  );
};
