
import { useInput } from 'hooks/useInput';
import { useCallback } from 'react';
import { TSendMessage } from 'types';

interface SendMessageFormProps {
  sendMessage: TSendMessage;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  sendMessage,
}) => {
  const inputMessage = useInput('');

  const onSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      sendMessage(inputMessage.value);
      inputMessage.clear();
    },
    [inputMessage, sendMessage],
  );
  return (
    <form onSubmit={onSubmit}>
      <input
        value={inputMessage.value}
        onChange={inputMessage.onChahge}
        placeholder="Send a message..."
      />
      <button type="submit" disabled={!inputMessage.value}>
        Send
      </button>
    </form>
  );
};
