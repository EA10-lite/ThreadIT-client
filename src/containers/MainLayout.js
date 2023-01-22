import React from 'react';
import '../styles/main.css';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar, Users } from '../componets';

function MainLayout() {
  return (
    <div className="app">
        <Navbar />
        <main className="app__main">
          <div className="app__main-container">
            <div className="app__main-container__row">
              <div className="app__main-left">
                <Sidebar />
              </div>
              <div className="app__main-center">
                <Outlet />
              </div>
              <div className="app__main-right">
                {/* FRIENDS */}
                <div className="app__users">
                  <Users />
                </div>

                {/* Meesages */}
                <div className="app__chats">
                  <h3> CHATS </h3>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default MainLayout;