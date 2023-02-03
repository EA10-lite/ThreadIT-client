import React, { useState } from 'react';
import '../styles/main.css';
import { Outlet } from 'react-router-dom';
import {  ChatContainer, Navbar,  Sidebar, Upload } from '../components';

function MainLayout() {
  const [ toggle_upload, set_toggle_upload ] = useState(false);
  const open_upload_menu = () => set_toggle_upload(true);
  const close_upload_menu = () => set_toggle_upload(false);

  const open_notifications = () => {
    const notifications_bar = document.querySelector(".app__notifications");
    notifications_bar.classList.add("active");

  };
  const close_notifications = () => {
    const notifications_bar = document.querySelector(".app__notifications");
    notifications_bar.classList.remove("active");

  };
  return (
    <div className="app">
        <Navbar 
          open_notifications={open_notifications} 
          close_notifications={close_notifications} 
        />
        <main className="app__main">
          <div className="app__main-container">
            <div className="app__main-container__row">
              <div className="app__main-left">
                <Sidebar />
              </div>
              <div className="app__main-center">
                { toggle_upload && <Upload close_upload_menu={close_upload_menu} />}
                <Outlet 
                  context={open_upload_menu}
                />
              </div>
              <div className="app__main-right">

                {/* Meesages */}
                <div className="app__chats">
                  <ChatContainer />
                </div>

                {/* FRIENDS */}
                {/* <div className="app__users">
                  <Users />
                </div> */}
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default MainLayout;