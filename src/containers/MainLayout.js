import React from 'react';
import '../styles/main.css';
import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from '../componets';

function MainLayout() {
  return (
    <>
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
                <h3> RIGHT SIDEBAR </h3>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default MainLayout;