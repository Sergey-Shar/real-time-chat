import { useInput } from 'common/hooks/useInput';
import React, { FC, useCallback } from 'react';
import { TJoinRoom } from 'common/types';
interface Lobbyprops {
  joinRoom: TJoinRoom
}
export const Lobby: FC<Lobbyprops> = ({ joinRoom }) => {

  const inputUser = useInput('');
  const inputRoom = useInput('');

  const setFocus = useCallback((element: HTMLInputElement) => {
    element?.focus();
  }, []);

  const onSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      joinRoom(inputUser.value, inputRoom.value);
    },
    [inputRoom.value, inputUser.value, joinRoom],
  );
  return (
    <div
      className="flex justify-center items-center 
     w-full h-screen dark:bg-gray-dark transition duration-500 ">
      <form
        className="flex flex-col justify-around items-center  w-96 h-[230px]"
        onSubmit={onSubmit}>
        <input
          ref={setFocus}
          id="username"
          className="w-64 md:w-80 
          h-[50px] pl-2  border
           border-gray
           dark:border-chat 
          rounded-lg placeholder:text-gray"
          type="text"
          placeholder="Ввидите имя..."
          value={inputUser.value}
          onChange={inputUser.onChahge}
        />
        <input
          id="room"
          className="w-64 md:w-80  h-[50px] pl-2  
          border border-gray dark:border-chat rounded-lg
          placeholder:text-gray"
          type="text"
          placeholder="Ввидите название чата..."
          value={inputRoom.value}
          onChange={inputRoom.onChahge}
        />
        <button
          className="bg-blue 
          transition duration-500
          disabled:opacity-60  
          w-64 md:w-80  h-[50px] text-white  rounded-lg"
          type="submit"
          disabled={!inputUser.value || !inputRoom.value}>
					Присоединиться
        </button>
      </form>
    </div>
  );
};


