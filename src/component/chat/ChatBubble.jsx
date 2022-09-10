import React,{useState} from 'react';

export const ChatBubble = ({msg}) => {


    return (
        <div className='mt-6 bg-blue-500 text-white p-2 w-3/4 rounded-md'>
            <div className=' text-xs'>{msg} </div>
        </div>
    );
}

