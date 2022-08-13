import { UserCountProps } from 'common/types';

export const UsersCount: React.FC<UserCountProps> = ({ countUsers }) => {
  return (
    <div className="text-gray dark:text-purple hidden md:block">
      <span className="mr-2">Пользователи онлайн:</span>
      <span>{countUsers}</span>
    </div>
  );
    
};