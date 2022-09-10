import React,{useState} from 'react';

export const ChatBubble = ({msg}) => {
console.log(msg);

    return (
        <div className={msg.sender !== "me" ?'mt-6 bg-blue-500 text-white p-2 w-3/4 rounded-md': 'mt-6 bg-blue-100 text-slate-600 p-2  rounded-md'}>
            <div className=' text-xs'>{msg.content} </div>
        </div>
    );
}

