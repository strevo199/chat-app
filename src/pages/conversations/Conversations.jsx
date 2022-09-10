import React from 'react'
import { ChatBody } from '../../component/ChatBody';
import { ChatNav } from '../../component/ChatNav';
import { ChatFooter } from '../../component/ChatFooter';
import uuid from 'react-uuid';
import { receiveruser } from '../../assets/index';
import { useDispatch } from 'react-redux';
import './Conversations.style.css'
import { Link } from 'react-router-dom';
import {chatsActionCareators} from '../../state';
import { useSelector } from 'react-redux';


export function Conversations() {

  const {conversations,user} = useSelector((state) => state.conversation)


  return (
    <div className=' w-2/4 shadow-inner bg-slate-50  flex-1 mx-auto flex flex-col'>
      <ChatNav title ={'Conservations'} user={user} />
      <div className='Conversations'>
          {
            conversations.length ?
            (
              conversations.map(conversation => (
                <Link state={{user: conversation}} to={conversation.id} className='flex m-1 p-1 border-b-2 mb-1 bg-white'  key={conversation.id}>
                  <div className='mr-4'>
                    <img className=' w-11' src={receiveruser} alt="" />
                  </div>
                  <div>
                    <div className=' text-sm font-semibold'>{conversation.name}</div>
                    <div className='text-xs'>okat let's chat...</div>
                  </div>
                </Link>
              ))
            ):
            (<p>No</p>)
          }

      </div>

    </div>
  )
}


// w-1/3
