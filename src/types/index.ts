export type TSendMessage = (message: string) => Promise<void>; 

export type TCloseconnection = () => void;

export type TJoinRoom = (...value: string[]) => Promise<void>;

export type UserCountProps = {
	countUsers: number;
};

export interface TMessageObj {
  user: string;
  message: string;
}
