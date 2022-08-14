export type TSendMessage = (message: string) => Promise<void>; 

export type TCloseconnection = () => void;

export type TJoinRoom = (...value: string[]) => Promise<void>;

export type UserCountProps = {
	countUsers: string;
};

export interface TMessageObj {
  user: string;
  message: string;
}

export interface IValidations {
	isEmpty: boolean;
	isName?: boolean;
}

export interface IValid {
	isEmpty: boolean;
	isName: boolean;
	errorEmpty: string;
  errorName: string;
}

