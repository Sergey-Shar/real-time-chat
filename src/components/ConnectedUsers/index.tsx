import { container } from './style';

interface ConnectedUserProps {
	users: string[];
}
export const ConnectedUsers: React.FC<ConnectedUserProps> = ({ users }) => {
  return (
    <div className={container.join(' ')}>
      <h4 className="dark:text-gray">Участники чата:</h4>

      {users.map((user: string, index: number) => (
        <p className="text-purple text-lg" key={index}>
          {user}
        </p>
      ))}
    </div>
  );
};
