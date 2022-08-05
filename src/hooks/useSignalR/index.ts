import { useCallback, useState } from 'react';
import * as signalR from '@microsoft/signalr';

import { HubConnection } from '@microsoft/signalr';

import { TJoinRoom, TMessageObj, TSendMessage } from 'types';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { useAppSnackbar } from 'hooks/useSnackBar';

export const useSignalR = () => {
	const [connection, setConnection] = useState<HubConnection>();

	const [isConnection, setIsConnection] = useLocalStorage<boolean>(
		false,
		'connection',
	);

	const [messages, setMessages] = useLocalStorage<TMessageObj[]>(
		[],
		'messages',
	);

    const [users, setUsers] = useLocalStorage<string[]>([''], 'users');
    
    const [countUsers, setCountUsers] = useLocalStorage<string | number>('0', 'usersOnline');

	const snack = useAppSnackbar();

	const joinRoom: TJoinRoom = async (user, room) => {
		try {
			const connection = new signalR.HubConnectionBuilder()
				.withUrl('http://localhost:5086/chat')
				.configureLogging(signalR.LogLevel.Information)
				.build();

			connection.on('UsersInRoom', (users: string[]) => {
                setUsers(users);
                setCountUsers(users.length)
			});

			connection.on('ReciveMessage', (user, message) => {
				setMessages((messages: string[]) => [...messages, { user, message }]);
			});

			connection.onclose((e) => {
				setConnection(undefined);
			});

			await connection.start();

			await connection.invoke('JoinRoom', { user, room });

			snack(`Hi ${user}!`, 'success', 3000);

			setIsConnection(!!connection);
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
			setIsConnection(false);
			setMessages([]);
            setUsers([]);
            setCountUsers('0');
		} catch (error) {
			const e = error as Error;
			snack(`Error:${e?.message}!`, 'error', 3000);
		}
	}, [connection, setCountUsers, setIsConnection, setMessages, setUsers, snack]);

	return {
		messages,
		users,
        isConnection,
        countUsers,
		joinRoom,
		sendMessage,
		closeConnection,
	};
};
