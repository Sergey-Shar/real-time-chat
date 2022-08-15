import { useRandom } from 'common/hooks/useRandom';
import { emodji } from 'common/models';

import { container, userContainer } from './style';
interface ConnectedUserProps {
	users: string[];
}

export const ConnectedUsers: React.FC<ConnectedUserProps> = ({ users }) => {

  const avatar = useRandom(emodji);

  return (
    <div className={container.join(' ')}>
      <h4 className="dark:text-gray">Участники чата:</h4>

      {users.map((user: string, index: number) => (
        <div
          key={index}
          className="flex border-b border-chat dark:border-gray py-3">
          <div className={userContainer.join(' ')}>
            <span className="text-2xl">{avatar}</span>
          </div>
          <p className="text-purple text-lg ml-2">{user}</p>
        </div>
      ))}
    </div>
  );
};
