import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../componets';

function MainLayout() {
  return (
    <>
        <Navbar />
        <main className="app__main">
          <div className="app__main-container">
            <div className="app__main-container__row">
              <div className="app__main-left">
                <h3> LEFT SIDEBAR </h3>
                <Link to="/login"> Login </Link>
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