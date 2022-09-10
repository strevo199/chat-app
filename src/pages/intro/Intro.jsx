import React,{useState} from 'react'
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../state';
import { useNavigate } from 'react-router-dom';

export function Intro() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const state = useSelector((state) => state.conversation);
  const [name, setname] = useState("")
  
  const handleSign = () => {
    if (name) {
        const body = {
          id: uuid(),
          conversations:[],
          name
        }
        dispatch(loginUser(body))

        navigate('chats');

    }
  }


  return (
    <div className=' bg-slate-50 min-h-screen   mx-auto flex flex-col shadow-inner'>
          <div className=' my-10 px-2'>
            <div  className='text-6xl'>Hi</div>
          </div>
          <div className=' flex-col items-center justify-between flex-1 flex'>
            <input onChange={(e) => setname(e.target.value)} type="text" className='mx-2 px-2 text-xl border h-14 w-full' placeholder='enter your name' name="" id="" />
              <button  onClick={handleSign}  className=' bg-slate-600 h-12 w-full text-2xl justify-center flex items-center font-bold text-white border-0'>Start Chat</button>
          </div>
    </div>
  )
}


// w-1/3