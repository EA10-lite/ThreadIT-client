import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/form.css';

function AuthLayout() {
  return (
    <div className="app__form-layout">
        <div className="app__form-layout__overlay" />
        <div className="app__form-layout__container">
            <Outlet />
        </div>
    </div>
  )
}

export default AuthLayout;