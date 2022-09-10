import React from 'react'
import './footer.style.css'

export function ChatFooter() {
  const [msg, setmsg] = React.useState('')

  const handleSendMsg =() => {
    console.log(msg, 'msg');
  }

  return (
    <div className='chatfooter h-11 flex justify-between p-5 bg-blue-600'>
          <textarea onChange={(e) => setmsg(e.target.value)} placeholder='start typing...' type="text" className=' bg-slate-100 rounded-2xl flex-1 px-1 text-xs' />
          <button onClick={handleSendMsg} className='px-4 bg-slate-300 ml-2 font-bold rounded-xl'>Send</button>
      </div>
  )
}

