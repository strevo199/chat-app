import React,{useEffect} from 'react'
import { ChatBody } from '../../component/ChatBody';
import { ChatNav } from '../../component/ChatNav';
import { ChatFooter } from '../../component/ChatFooter';
import uuid from 'react-uuid';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { viewOneConversation } from '../../state';
import { useSelector } from 'react-redux';


export function ChatView() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {chats} = useSelector((state) => state.conversation)

 useEffect(() => {
   dispatch(viewOneConversation(id))
 }, [])



  return (
    chats ? 
    ( <div className=' bg-slate-50 shadow-inner  flex-1 mx-auto flex flex-col'>
      <ChatNav receiver ={chats.name} title={"Chats"} />
      <ChatBody chatList= {chats.chatsList} />
     <ChatFooter id = {chats.id} />
    </div>)
    : 
    (<div>Loading...</div>)
    
  )
}


// w-1/3