import { useInput } from 'hooks/useInput';
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { FC, useCallback } from 'react';
import { TJoinRoom } from 'types';


interface Lobbyprops {
  // joinRoom: TJoinRoom
  joinRoom:(...value:any) => void
  connection:any
}
export const Lobby: FC<Lobbyprops> = ({ joinRoom, connection }) => {

  const inputUser = useInput('');
  const inputRoom = useInput('');


  const onSubmit = useCallback(
    (event: React.MouseEvent<HTMLFormElement>) => {
      event.preventDefault();
      joinRoom(connection,inputUser.value, inputRoom.value);
    },
    [connection, inputRoom.value, inputUser.value, joinRoom],
  );

  return (
    <form  onSubmit={onSubmit}>
      <input type="text" placeholder="name" value={inputUser.value} onChange={inputUser.onChahge}/>
      <input type="text" placeholder="room" value={inputRoom.value} onChange={inputRoom.onChahge}/>
      <button  type="submit"  disabled={!inputUser.value || !inputRoom.value}>
        Join
      </button>
    </form>
  );
};


