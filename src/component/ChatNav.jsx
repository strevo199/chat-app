import React from 'react'
import { useLocation } from 'react-router-dom'


export function ChatNav({title,user}) {
  return (
    <div className='chatnav p-2 z-10  h-14 shadow-md bg-blue-500 justify-between items-center flex'>
          <div className='text-2xl font-bold text-white'>{title}</div>
          <div className='text-md font-bold text-white'>{user && user}</div>
    </div>
  )
}

