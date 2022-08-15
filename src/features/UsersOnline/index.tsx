import { UserCountProps } from 'common/types';
import React from 'react';

export const UsersCount: React.FC<UserCountProps> = React.memo(({ countUsers }) => {
  return (
    <div className="text-gray dark:text-purple hidden md:block">
      <span className="mr-2">Пользователи онлайн:</span>
      <span>{countUsers}</span>
    </div>
  );  
});