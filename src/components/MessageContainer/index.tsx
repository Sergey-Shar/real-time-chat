import { TMessageObj } from 'types';
interface Containerprops {
  messages: TMessageObj[];
}
export const MessageContainer: React.FC<Containerprops> = ({ messages }) => {
  return (
    <div className="p-2 row-span-5 col-span-3 dark:bg-gray-dark overflow-auto touch-auto transition duration-500">
      {messages.map((item: TMessageObj, i) => {
        return (
          <div className="m-2 p-2 w-fit rounded-lg" key={i}>
            <div className="text-gray dark:text-purple text-xs transition duration-500">
              {item?.user}
            </div>
            <div className="dark:text-white transition duration-500">
              {item?.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};
