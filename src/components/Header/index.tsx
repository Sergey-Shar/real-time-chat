
import { UsersCount } from 'components/UsersOnline';
import { UserCountProps } from 'types';

interface HeaderProps {
    children: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children}) => {
	return (
		<nav className="flex justify-between items-center h-[50px] px-5 shadow-md">
			<h3>Чат тест</h3>
			{children}
		</nav>
	);
};