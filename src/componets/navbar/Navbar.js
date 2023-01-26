import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


import avatar from '../../assets/profile-11.jpg';
import { BiSearch } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';
import Notifications from '../notifications/Notifications';

function Navbar({ open_notifications, close_notifications }) {
  return (
    <nav className="app__navbar">
        <div className="app__navbar-container">
            <div className="app__navbar-container__row">
                <div className="app__navbar-left">
                    <Link to="/"> Thread-IT </Link>
                </div>
                <div className="app__navbar-searchbox">
                    <BiSearch />
                    <input 
                        placeholder='Search for something...'
                        type="text" 
                    />
                </div>
                <div className="app__navbar-right">
                    <div className="app__navbar-item">
                        <MdNotificationsNone onClick={open_notifications} />
                        <Notifications 
                            close_notifications={close_notifications}
                        />
                    </div>
                    <Link to="/profile/ea10">
                        <div className="app__navbar-dropdown">
                            <img src={avatar} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;