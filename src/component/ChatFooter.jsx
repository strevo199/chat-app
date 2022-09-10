import React from 'react'
import './footer.style.css'
import { useDispatch } from 'react-redux';
import { addChat } from '../state';

export function ChatFooter({id}) {
  const dispatch = useDispatch();
  const [msg, setmsg] = React.useState('')

  const handleSendMsg =() => {
    const body  ={
      content: {content:msg,
                id: 2,
                sender: 'me'
              },
      receiver: id
    }
    dispatch(addChat(body)) 
  }

  return (
    <div className='chatfooter h-11 flex justify-between p-3 bg-blue-600'>
          <textarea onChange={(e) => setmsg(e.target.value)} placeholder='start typing...' type="text" className=' bg-slate-100 rounded-2xl flex-1 p-1 text-xs outline-none' />
          <div className=' flex justify-center items-center'>
            <button onClick={handleSendMsg} className='px-4 bg-slate-300 ml-2 font-bold rounded-xl'>Send</button>
          </div>
      </div>
  )
}

