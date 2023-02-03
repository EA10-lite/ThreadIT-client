import React from 'react';
import './chat.css';

import { BiSearch } from 'react-icons/bi';
import active_chats from '../../data/chats';

function ChatContainer() {

  return (
    <div className="app__chat-container">
      <div className="app__chat-header">
        <div className="app__chat-header__title">
          <h4> Messages </h4>
        </div>
        <div className="app__chat-header__searchbox">
          <BiSearch />
            <input 
                placeholder='Search message..'
                type="text" 
            />
        </div>
        <div className="app__chat-active__users">
          { active_chats.map(chats => (
            <div className="app__chat-active__user" key={chats?.chat_id}>
              <div className="app__chat-active__user-img">
                <img src={chats?.user?.avatar} alt="" />
                <div className="box">
                  <div className='active-box' />
                </div>
              </div>
                <p> { chats?.user?.username.slice(0, 10) } </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatContainer;