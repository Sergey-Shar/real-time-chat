import { ISchema } from 'common/types';
import React, { useCallback, useEffect, useState } from 'react';
import useSound from 'use-sound';

import typingSound from '../../sounds/typing.mp3';
import {useValidation } from '../useValidate';
interface UseInputValue {
	clear: () => void;
	value: string;
	onChahge: (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	ref?: (element: HTMLInputElement) => void;
	isDirty: boolean;
	isEmpty?:boolean
	isName?:boolean
	errorEmpty?:string
  errorName?: string
  error: string
}
export const useInput = (
  initialValue: string,schema?:ISchema): UseInputValue => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const [error, setError] = useState('');

  const [play] = useSound(typingSound);

  const onChahge = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(event.target.value);
      play();
    },
    [play],
  );

  const onBlur = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
  }, []);

  const ref = useCallback((element: HTMLInputElement) => {
    element?.focus();
  }, []);

  const clear = useCallback(() => setValue(''), []);

  const { isEmpty, isName, errorEmpty, errorName } = useValidation(
    value,
    schema,
  );
  
  useEffect(() => {
    if (isEmpty) {
      setError(errorEmpty);
    } else if (isName) {
      setError(errorName);
    }
    else{
      setError('');
    }
  }, [errorEmpty, errorName, isEmpty, isName]);
  
 
  return {
    value,
    onChahge,
    ref,
    clear,
    onBlur,
    isDirty,
    error,
  };
};
