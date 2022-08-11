import { useCallback, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr';
import { TJoinRoom, TMessageObj, TSendMessage } from 'types';
import { useAppSnackbar } from 'hooks/useSnackBar';
import useSound from 'use-sound';

import soundSuccess from '../../sounds/success-bell.mp3';

export const useSignalR = () => {
  const [connection, setConnection] = useState<HubConnection>();

  const [messages, setMessages] =
		useState<[] | ((messages: string[]) => (string | TMessageObj)[])>([]);

  const [users, setUsers] = useState([]);

  const [countUsers, setCountUsers] = useState<string>('0');

  const snack = useAppSnackbar();

  const [play] = useSound(soundSuccess);

  const joinRoom: TJoinRoom = async (user, room) => {
    try {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl('https://signalr-test-chat.herokuapp.com/chat', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets,
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();

      connection.on('UsersInRoom', (users) => {
        setUsers(users);
        setCountUsers(users.length);
      });

      connection.on('ReciveMessage', (user, message) => {
        setMessages((messages: string[]) => [...messages, { user, message }]);
      });

      connection.onclose((e) => {
        setConnection(undefined);
        setMessages([]);
        setUsers([]);
        setCountUsers('0');
      });

      await connection.start();

      await connection.invoke('JoinRoom', { user, room });

      snack(`Добро пожаловать в чат, ${user}!`, 'success', 3000);
      play();
      setConnection(connection);
    } catch (error) {
      const e = error as Error;
      snack(`Error:${e?.message}!`, 'error', 3000);
    }
  };

  const sendMessage: TSendMessage = useCallback(
    async (message: string) => {
      try {
        await connection?.invoke('SendMessage', message);
      } catch (error) {
        const e = error as Error;
        snack(`Error:${e?.message}!`, 'error', 3000);
      }
    },
    [connection, snack],
  );

  const closeConnection = useCallback(async () => {
    try {
      await connection?.stop();
    } catch (error) {
      const e = error as Error;
      snack(`Error:${e?.message}!`, 'error', 3000);
    }
  }, [connection, snack]);

  return {
    messages,
    users,
    connection,
    countUsers,
    joinRoom,
    sendMessage,
    closeConnection,
  };
};
