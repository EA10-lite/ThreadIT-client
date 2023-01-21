import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

import avatar from '../../assets/profile-11.jpg';
import { IoMdSettings } from 'react-icons/io';
import { 
    MdOutlineHome, 
    MdOutlineExplore,
    MdNotificationsNone,
    MdLogout,
} from 'react-icons/md';
import { SiGooglemessages } from 'react-icons/si';

const MenuLink = ({ Icon, title, url }) => {
    const location = useLocation();
    return (
        <li> 
            <Link 
                to={url}
                className={location.pathname === url ? "active" : undefined}
            >
                <div className="app__profile-menu__links">
                    <Icon />
                    <span> { title } </span>
                </div>
            </Link>
        </li>
    )
}

const MenuButton = ({ handle_click, Icon, title }) => {
    return (
        <li>
            <div className="app__profile-menu__links btn">
                <Icon />
                <span> { title } </span>
            </div>
        </li>
    )
}

function Sidebar() {
    return (
        <aside className="app__sidebar">
            <div className="app__sidebar-profile">
                <img src={avatar} alt="" />
                <Link to="/profile"> EA10-Lite </Link>
            </div>
            
            <ul className="app__sidebar-profile__menu">
                <MenuLink Icon={MdOutlineHome} url="/" title="Home" />
                <MenuLink Icon={MdOutlineExplore} url="/explore" title="Explore" />
                <MenuButton Icon={SiGooglemessages} title="Messages" />
                <MenuButton Icon={MdNotificationsNone} title="Notifications" />
                <MenuLink Icon={IoMdSettings} url="/settings" title="Settings" />
                <MenuLink Icon={MdLogout} url="/login" title="Logout" />
            </ul>
        </aside>
    )
}

export default Sidebar;