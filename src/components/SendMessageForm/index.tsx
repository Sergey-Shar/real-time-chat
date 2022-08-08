import { useInput } from 'hooks/useInput';
import { useCallback } from 'react';
import { TSendMessage } from 'types';
import useSound from 'use-sound';

import sendMessageSound from '../../sounds/send-message.mp3';
import sendMessageIcon from '../../common/icons/send.png';
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
    <form
      className="relative 
      col-span-4
      md:col-span-3
      flex 
      h-20
      transition duration-500
       dark:bg-gray-dark "
      onSubmit={onSubmit}>
      <textarea
        className="
        dark:bg-gray-dark
        dark:text-white
        transition duration-500
        border border-chat dark:border-gray 
        resize-none 
        w-full h-12 md:h-20
         m-2 rounded-lg 
         p-2 pr-10 outline-0"
        value={inputMessage.value}
        onChange={inputMessage.onChahge}
        placeholder="Сообщение..."
      />
      {inputMessage.value && (
        <button
          className="
        absolute 
        right-6
        top-2
        inset-y-0.5
        // h-12 md:h-20"
          type="submit">
          <img src={sendMessageIcon} alt="send icons"></img>
        </button>
      )}
    </form>
  );
};
