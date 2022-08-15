import React, { useCallback } from 'react';
import { TSendMessage } from 'common/types';
import useSound from 'use-sound';
import { useInput } from 'common/hooks/useInput';

import sendMessageSound from '../../common/sounds/send-message.mp3';
import sendMessageIcon from '../../common/icons/send.png';

import { form, sendButton, textArea } from './styles';
interface SendMessageFormProps {
	sendMessage: TSendMessage;
}
export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  sendMessage,
}) => {
  const inputMessage = useInput('');

  const [play] = useSound(sendMessageSound);

  const onSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      sendMessage(inputMessage.value);
      play();
      inputMessage.clear();
    },
    [inputMessage, play, sendMessage],
  );

  return (
    <form className={form.join(' ')} onSubmit={onSubmit}>
      <textarea
        className={textArea.join(' ')}
        value={inputMessage.value}
        onChange={inputMessage.onChahge}
        placeholder="Сообщение..."
      />
      {inputMessage.value && (
        <button
          className={sendButton.join(' ')}
          type="submit">
          <img className="" src={sendMessageIcon} alt="send message"></img>
        </button>
      )}
    </form>
  );
};
