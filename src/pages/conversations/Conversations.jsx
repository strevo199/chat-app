import React from 'react'
import { ChatBody } from '../../component/ChatBody';
import { ChatNav } from '../../component/ChatNav';
import { ChatFooter } from '../../component/ChatFooter';
import uuid from 'react-uuid';
import { receiveruser } from '../../assets/index';

import './Conversations.style.css'
import { Link } from 'react-router-dom';


export function Conversations() {

  const [Conversations, setConversations] = React.useState([
      {
        id: uuid(),
        name: " Mark Benson",
        initmsg: "a talk, especially an informal one, between two or more people, in which news and ideas are exchanged"
      },
      {
        id: uuid(),
        name: " Solomon Micheal",
        initmsg: "a talk, especially an informal one, between two or more people, in which news and ideas are exchanged"
      },
      {
        id: uuid(),
        name: " Mark Benson",
        initmsg: "a talk, especially an informal one, between two or more people, in which news and ideas are exchanged"
      },
      {
        id: uuid(),
        name: " Mark Benson",
        initmsg: "a talk, especially an informal one, between two or more people, in which news and ideas are exchanged"
      },
      {
        id: uuid(),
        name: " Mark Benson",
        initmsg: "a talk, especially an informal one, between two or more people, in which news and ideas are exchanged"
      },
      {
        id: uuid(),
        name: " Mark Benson",
        initmsg: "a talk, especially an informal one, between two or more people, in which news and ideas are exchanged"
      },
  ])

  return (
    <div className=' w-2/4 bg-slate-100  flex-1 mx-auto flex flex-col'>
      <ChatNav title ={'Conservations'} />
      <div className='Conversations'>
          {
            Conversations.length ?
            (
              Conversations.map(conversation => (
                <Link state={{user: conversation}} to={conversation.id} className='flex m-1 p-1 border-b-2 mb-1 bg-white'  key={conversation.id}>
                  <div className='mr-4'>
                    <img className=' w-11' src={receiveruser} alt="" />
                  </div>
                  <div>
                    <div className=' text-sm font-semibold'>{conversation.name}</div>
                    <div className='text-xs'>{conversation.initmsg.substring(0,40)}...</div>
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