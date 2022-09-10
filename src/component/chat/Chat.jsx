import React, {useState} from 'react'
import { ChatBubble } from './ChatBubble';
import './chat.style.css'
import { receiveruser, senderuser } from '../../assets/index';

export function Chat({chat}) {


  return (
    <>
    {
        chat.sender ==="me" 
        ? 

        (<div className='flex  w-11/12 my-2 ml-6'>
        <ChatBubble msg ={chat.content}/>
        <div className=' relative w-1/4 flex justify-start  ml-2'>
            <img src={senderuser} className="chatImg" alt="" />
        </div>
    </div>)
    :
        (<div className='flex w-11/12 my-2 '>
        <div className='relative w-1/4 flex justify-end mr-2'>
            <img src={receiveruser} className="chatImg" alt="" />
        </div>
        <ChatBubble msg ={chat.content}/>
    </div>)
    }
    </>
    
  )
}

