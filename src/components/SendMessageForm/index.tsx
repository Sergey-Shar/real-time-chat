
import { useInput } from 'hooks/useInput';
import { useCallback } from 'react';
import { TSendMessage } from 'types';

import useSound from 'use-sound';

import sound from '../../sounds/drop.mp3';

interface SendMessageFormProps {
  sendMessage: TSendMessage;
}

export const SendMessageForm: React.FC<SendMessageFormProps> = ({
  sendMessage,
}) => {
	const inputMessage = useInput('');

	const [play] = useSound(sound);

	const onSubmit = useCallback(
		(event: React.MouseEvent<HTMLFormElement>) => {
			event.preventDefault();
      sendMessage(inputMessage.value);
      play()
			inputMessage.clear();
		},
    [inputMessage, play, sendMessage],
	);
	return (
		<form onSubmit={onSubmit}>
			<input
				value={inputMessage.value}
				onChange={inputMessage.onChahge}
				placeholder="Сообщение..."
			/>
			<button type="submit" disabled={!inputMessage.value}>
				Send
			</button>
		</form>
	);
};
