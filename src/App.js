import React from 'react';
import { ChatView } from './pages/chat-view';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Conversations } from './pages/conversations/Conversations';
import {Provider} from 'react-redux'
import { store } from './state';



function App(props) {
    return (
        <Provider store={store}>
            <div className='app'>
                <Routes>                
                    <Route path='/chats' element= {<Conversations/>}/>
                    <Route path='/chats/:id' element= {<ChatView/>}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
