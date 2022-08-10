import { useCallback, useEffect, useRef } from 'react';
import { TMessageObj } from 'types';
interface Containerprops {
  messages: TMessageObj[];
}
export const MessageContainer: React.FC<Containerprops> = ({ messages }) => {

  //const messageRef = useRef<HTMLDivElement>(null);

  const setScroll = useCallback((element: HTMLDivElement) => {
    const { scrollHeight, clientHeight } = element;
    element.scrollTo({
			left: 0,
			top: scrollHeight - clientHeight,
			behavior: 'smooth',
		});
  }, []);

  // useEffect(() => {
  //   if (messageRef && messageRef.current) {
  //     const { scrollHeight, clientHeight } = messageRef.current;
  //     messageRef.current?.scrollTo({
  //       left: 0,
  //       top: scrollHeight - clientHeight,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [messages]);

  return (
		<div
			ref={setScroll}
			className="p-2 row-span-5  col-span-4 
      md:col-span-3 dark:bg-gray-dark
      relative
      overflow-auto touch-auto
      transition duration-500">
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
