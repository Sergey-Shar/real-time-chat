import { useCallback, useState } from 'react';
import * as signalR from '@microsoft/signalr';

import { HubConnection } from '@microsoft/signalr';

import { TJoinRoom,TSendMessage } from 'types';

import { useAppSnackbar } from 'hooks/useSnackBar';
import useSound from 'use-sound';

import sound from '../../sounds/drop.mp3';

export const useSignalR = () => {

    const [connection, setConnection] = useState<HubConnection>();

    const [messages, setMessages] = useState<any>();

    const [users, setUsers] = useState<string[]>(['']);

    const [countUsers, setCountUsers] = useState<string>('0');

	const snack = useAppSnackbar();

	const [play] = useSound(sound);

    const joinRoom: TJoinRoom = async (user, room) => {
			try {
				const connection = new signalR.HubConnectionBuilder()
					.withUrl('https://signalr-test-chat.herokuapp.com/chat', {
						skipNegotiation: true,
						transport: signalR.HttpTransportType.WebSockets,
					})
					.withAutomaticReconnect()
					.configureLogging(signalR.LogLevel.Information)
					.build();

				connection.on('UsersInRoom', (users) => {
					setUsers(users);
					setCountUsers(users.length);
					play()
				});

				connection.on('ReciveMessage', (user:string, message:string) => {
					setMessages((messages:string[]) => [...messages, { user, message }]);
				});

				connection.onclose((e) => {
					setConnection(undefined);
					setMessages([]);
                    setUsers([]);
                    setCountUsers('0');
				});

				await connection.start();

				await connection.invoke('JoinRoom', { user, room });

				snack(`Hi ${user}!`, 'success', 3000);
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
