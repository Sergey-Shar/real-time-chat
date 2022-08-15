import React from 'react';
import { useEffect, useRef } from 'react';
import { TMessageObj } from 'common/types';

import { container } from './styles';

interface Containerprops {
	messages: TMessageObj[];
}
export const MessageContainer: React.FC<Containerprops> = React.memo(
  ({ messages }) => {
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (messageRef && messageRef.current) {
        const { scrollHeight, clientHeight } = messageRef.current;
        messageRef.current?.scrollTo({
          left: 0,
          top: scrollHeight - clientHeight,
          behavior: 'smooth',
        });
      }
    }, [messages]);

    return (
      <div ref={messageRef} className={container.join(' ')}>
        {messages.map((item: TMessageObj, i) => {
          return (
            <div
              className="m-2 px-5 py-3 w-fit bg-chat dark:bg-dark-blue rounded-3xl"
              key={i}>
              <div className="text-purple dark:text-gray text-xs transition duration-500">
                {item?.user}
              </div>
              <div className="dark:text-white transition duration-500 text-sm">
                {item?.message}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
