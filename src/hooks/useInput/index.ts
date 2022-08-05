import React, { useCallback, useState } from 'react';

interface UseInputValue {
  clear: () => void;
  value: string;
  onChahge: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initialValue: string): UseInputValue => {
  const [value, setValue] = useState(initialValue);

  const onChahge = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const clear = useCallback(() => setValue(''), []);

  return {
    clear,
    value,
    onChahge,
  };
};
