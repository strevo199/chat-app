import React from 'react';
import { ChatView } from './pages/chat-view';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Conversations } from './pages/conversations/Conversations';

function App(props) {
    return (
        <div className='app'>
            <Routes>                
                <Route path='/chats' element= {<Conversations/>}/>
                <Route path='/chats/:id' element= {<ChatView/>}/>
            </Routes>
        </div>
    );
}

export default App;
