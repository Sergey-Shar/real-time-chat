import { createContext, useCallback, useState } from 'react';

interface IDisadledContext {
	isDisabled: boolean;
	setIsDisabled: () => void;
	setNotDisabled: () => void;
}

export const DisabledContext = createContext<IDisadledContext>({
  isDisabled: false,
  setIsDisabled: () => true,
  setNotDisabled: () => false,
});

export const DisabledState = ({ children }: { children: React.ReactNode }) => {
  const [isDisabled, setDisabled] = useState(false);
	
  const setIsDisabled = useCallback(() => setDisabled(true),[]);
  const setNotDisabled = useCallback(() => setDisabled(false),[]);
  return (
    <DisabledContext.Provider value={{ isDisabled, setIsDisabled, setNotDisabled }}>
      {children}
    </DisabledContext.Provider>
  );
};
