import React, { useState } from 'react';
import './chat.css';

import { BiSearch } from 'react-icons/bi';

function ChatContainer() {
  const [ active_filter, set_active_filter ] = useState("all");

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
        <div className="app__chat-header__filter">
          <div 
            className={active_filter === "all" && "app__chat-filter__active"}
            onClick={()=> set_active_filter("all")}
          > All </div>
          <div 
            className={active_filter === "unread" && "app__chat-filter__active"}
            onClick={()=> set_active_filter("unread")}
          > Unread <span> 1 </span>  </div>
          <div 
            className={active_filter === "request" && "app__chat-filter__active"}
            onClick={()=> set_active_filter("request")}
          > Requests <span> 3 </span>  </div>
        </div>
      </div>
    </div>
  )
}

export default ChatContainer;