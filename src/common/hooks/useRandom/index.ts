import { useState, useEffect } from 'react';

export const useRandom = (arr:string[]) => {
  const [element, setElement] = useState(arr[0]);
   
  useEffect(() => {
    const i = Math.floor(Math.random() * arr.length);
    setElement(arr[i]);
  }, [arr]);
    
  return element;
}; 