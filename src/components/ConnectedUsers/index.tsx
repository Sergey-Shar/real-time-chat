interface ConnectedUserProps {
	users: string[];
}
export const ConnectedUsers: React.FC<ConnectedUserProps> = ({ users }) => {
  return (
    <div
      className=" dark:bg-gray-dark
    hidden md:block
    border-r border-chat
     dark:border-gray transition
     duration-500  row-span-6  p-3 ">
      <h4 className="dark:text-gray">Участники чата:</h4>
      {users.map((user: string, index: number) => (
        <p className="text-blue dark:text-purple text-lg" key={index}>
          {user}
        </p>
      ))}
    </div>
  );
};
