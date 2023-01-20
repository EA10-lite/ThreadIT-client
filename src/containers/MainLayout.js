import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
        <h4> Main Layout </h4>
        <Outlet />
    </>
  )
}

export default MainLayout;