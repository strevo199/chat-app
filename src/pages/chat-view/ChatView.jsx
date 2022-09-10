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
 
  console.log('--------',chats);




  const [chatList, setchatList] = React.useState([
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset",
        sender: "me"
      },
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset",
        sender: "client"
      },
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset",
        sender: "client"
      },
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset",
        sender: "me"
      },
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset",
        sender: "client"
      },
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset  was popularised in the 1960s with the release of Letraset",
        sender: "client"
      },
      {
        id: uuid(),
        content: " It was popularised in the 1960s with the release of Letraset",
        sender: "me"
      },
     

  ])

  return (
    <div className=' w-2/4 bg-slate-100  flex-1 mx-auto flex flex-col'>
      <ChatNav user ={id} title={"Chats"} />
      <ChatBody chatList= {chatList} />
     <ChatFooter/>

    </div>
  )
}


// w-1/3