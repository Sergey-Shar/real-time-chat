import { useEffect, useRef } from 'react';
import { TMessageObj } from 'types';


interface Containerprops {
  messages: TMessageObj[];
}

export const MessageContainer: React.FC<Containerprops> = ({ messages }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    if(messageRef && messageRef.current){
      const{scrollHeight, clientHeight} = messageRef.current;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      messageRef.current?.scrollTo({
        left:0,top:scrollHeight - clientHeight,
        behavior:'smooth',
      });
    }
  },[messages]);

  return (
    <div ref={messageRef}>
      {messages.map((item:TMessageObj, i) => {
       
        return (
          <div key={i}>
            <div>{item?.message}</div>
            <div>{item?.user}</div>
          </div>
        );
       
      })}
    </div>
  );
};
