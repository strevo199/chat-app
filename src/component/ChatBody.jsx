import React, {useEffect,useRef} from 'react'
import { Chat } from './chat/Chat'
import './chat/chat.style.css'

export function ChatBody({chatList}) {
  const divRef = useRef(null);

  
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  


  return (
    <div className=' bg-slate-50 flex flex-col  chatbody overflow-y-scroll  py-2 '>
      {
        chatList.length ?
        (
          chatList.map(chat => {
            return (<Chat chat ={chat} key={chat.id} />)
          })
        ):
        (<p>No</p>)
      }
       <div ref={divRef} />
      </div>
  )
}