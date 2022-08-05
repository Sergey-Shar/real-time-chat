interface ConnectedUserProps{
    users:string[]
}
export const ConnectedUsers:React.FC<ConnectedUserProps> = ({users}) => {
  return(
    <div>
      <h4>Connected Users:</h4>
      {users.map((user:string, index:number) => <p style={{color:'green'}} key={index}>{user}</p>)}
    </div>
  );
};