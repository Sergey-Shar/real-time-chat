import { UserCountProps } from 'types';

export const UsersCount: React.FC<UserCountProps> = ({ countUsers }) => {
  return (
    <div className="text-gray hidden md:block">
      <span className="mr-2">Пользователи онлайн:</span>
      <span>{countUsers}</span>
    </div>
  );
    
};