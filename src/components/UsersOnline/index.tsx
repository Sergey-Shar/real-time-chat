import { UserCountProps } from 'types';


export const UsersCount: React.FC<UserCountProps> = ({ countUsers }) => {
    return (
        <div>
            <span>{countUsers}</span>
            <h5>Users online</h5>
       </div>
    )
    
};