import { IValid, ISchema } from 'common/types';
import { useEffect, useMemo, useState } from 'react';

export const useValidation = (value: string, schema: ISchema | undefined):IValid => {
    
  const [errorEmpty, setErrorEmpty] = useState('');
  const [errorName, setErrorName] = useState('');

  const [isEmpty, setEmpty] = useState(true);
  const [isName, setName] = useState(true);

  const regEX = useMemo(() => /^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$/, []);
    
  useEffect(() => {
    for (const validation in schema) {
      switch (validation) {
      case 'isEmpty':
        if (value.trim().length) {
          setEmpty(false);
        }
        else {
          setEmpty(true);
          setErrorEmpty('Поле не может быть пустым');
        }
        break;
      case 'isName':     
        if (regEX.test(value)) {
          setName(false);
        } else {
          setName(true);
          setErrorName('Введите корректное имя');
        }
        break;
      }
    }
  }, [regEX, schema, value]);

     
  return{isEmpty,isName,errorEmpty,errorName};
};