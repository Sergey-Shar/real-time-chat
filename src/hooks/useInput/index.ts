import React, { useCallback, useState } from 'react';
import useSound from 'use-sound';

import typingSound from '../../sounds/typing.mp3';
interface UseInputValue {
	clear: () => void;
	value: string;
	onChahge: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}
export const useInput = (initialValue: string): UseInputValue => {
  const [value, setValue] = useState(initialValue);
  const [play] = useSound(typingSound);

  const onChahge = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(event.target.value);
      play();
    },
    [play],
  );

  const clear = useCallback(() => setValue(''), []);

  return {
    clear,
    value,
    onChahge,
  };
};
