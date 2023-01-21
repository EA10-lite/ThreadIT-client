import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/profile.css';

import avatar from '../assets/profile-11.jpg';
import cover_photo from '../assets/coverphoto.jpg';

function ProfileLayout() {
  return (
    <div className="app__profile">
        <div className="app__profile-container">
            <div className="app__profile-container__header">
                <div className="app__profile-coverphoto">
                    <img src={cover_photo}  />
                </div>
                <div className="app__profile-info">
                    <img src={avatar} />
                    <div className="app__profile-info__names">
                        <h4> Chris Emmanuel </h4>
                        <p> chris.jr </p>
                    </div>
                </div>
            </div>

            <div className="app__profile-container__navigations"></div>
            <div className="app__profile-container__content">
                <h1> LAYOUT CONTENT APPEARS BELOW </h1>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default  ProfileLayout;