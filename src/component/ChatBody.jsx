import React from 'react'
import { Chat } from './chat/Chat'
import './chat/chat.style.css'

export function ChatBody({chatList}) {
  return (
    <div className=' bg-slate-50 chatbody overflow-y-scroll  py-2 '>
      {
        chatList.length ?
        (
          chatList.map(chat => {
            return (<Chat chat ={chat} key={chat.id} />)
          })
        ):
        (<p>No</p>)
      }
        
      </div>
  )
}