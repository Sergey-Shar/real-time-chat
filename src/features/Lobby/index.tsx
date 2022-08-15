import { useInput } from 'common/hooks/useInput';
import React, { FC, useCallback, useContext} from 'react';
import { TJoinRoom } from 'common/types';
import { DisabledContext } from 'common/context';

import { button } from './styles';
interface Lobbyprops {
  joinRoom: TJoinRoom
}

export const Lobby: FC<Lobbyprops> = ({ joinRoom }) => {
  const inputUser = useInput('', { isEmpty: true, isName: true });
  const inputRoom = useInput('', { isEmpty: true });
  const { isDisabled, setIsDisabled } = useContext(DisabledContext);

  const borderUser= inputUser.error ? 'border-red' : 'border-green';
  const borderRoom = inputRoom.isDirty && inputRoom.error ? 'border-red' : 'border-green';

  const onSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (inputRoom.error || inputUser.error) {
        return;
      } 
      joinRoom(inputUser.value, inputRoom.value);
      setIsDisabled();
    },
    [inputRoom.error, inputRoom.value, inputUser.error,
      inputUser.value, joinRoom, setIsDisabled],
  );
  return (
    <div
      className="flex justify-center items-center 
     w-full h-screen dark:bg-gray-dark transition duration-500 ">
      <form
        className="relative flex flex-col justify-around items-center 
        rounded-lg bg-chat py-4 w-96 h-[270px] mx-3"
        onSubmit={onSubmit}>
        <input
          ref={inputUser.ref}
          id="username"
          className={`${borderUser} border w-64 md:w-80 h-[50px] 
          pl-2 outline-gray rounded-lg placeholder:text-gray`}
          type="text"
          placeholder="Ввидите имя..."
          value={inputUser.value}
          onChange={inputUser.onChahge}
          onBlur={inputUser.onBlur}
        />
        <span className="absolute top-20 left-5 md:left-10 text-xs text-red">
          {inputUser.isDirty && inputUser.error}
        </span>

        <input
          id="room"
          className={`${borderRoom} border w-64 md:w-80 h-[50px] 
          pl-2 outline-gray rounded-lg placeholder:text-gray`}
          type="text"
          placeholder="Ввидите название чата..."
          value={inputRoom.value}
          onChange={inputRoom.onChahge}
          onBlur={inputRoom.onBlur}
        />
        <span className="absolute bottom-24 left-5 md:left-10   text-xs text-red">
          {inputRoom.isDirty && inputRoom.error}
        </span>

        <button
          className={button.join(' ')}
          type="submit"
          disabled={isDisabled}>
					Присоединиться
        </button>
      </form>
    </div>
  );
};


