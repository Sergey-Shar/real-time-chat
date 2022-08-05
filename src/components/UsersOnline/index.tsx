import { UserCountProps } from 'types';

export const UsersCount: React.FC<UserCountProps> = ({ countUsers }) => {
    return (
        <div>
            <span>{countUsers}</span>
            <span>Users online</span>
       </div>
    )
    
};