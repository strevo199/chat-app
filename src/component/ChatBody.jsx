import React from 'react'
import { Chat } from './chat/Chat'

export function ChatBody({chatList}) {
  return (
    <div className=' bg-slate-50  py-2 flex-1'>
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

