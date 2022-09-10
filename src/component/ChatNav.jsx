import React from 'react'
import { useLocation } from 'react-router-dom'


export function ChatNav({user,receiver,title}) {

  console.log(user);
if (user) {
  
}
  return (
    <div className='chatnav p-2 z-10  h-14 shadow-md bg-blue-500 justify-between items-center flex'>
         {user && <div className='text-2xl font-bold text-white'>Hi {user.name}</div>}
         {!user && <div className='text-2xl font-bold text-white'>{title}</div>}
          <div className='text-md font-bold text-white'>{receiver && receiver}</div>
    </div>
  )
}

