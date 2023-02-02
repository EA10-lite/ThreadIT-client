import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';

import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { 
    MdOutlineHome, 
    MdOutlineExplore,
    MdLogout,
} from 'react-icons/md';
import { SiGooglemessages } from 'react-icons/si';
import { FaUsers } from 'react-icons/fa';

// mock data
import user from '../../data/user';

const MenuLink = ({ Icon, title, url }) => {
    const location = useLocation();
    return (
        <li> 
            <Link 
                to={url}
                className={location.pathname === url ? "active" : undefined}
            >
                <div className="app__sidebar-menu__links">
                    <Icon />
                    <span> { title } </span>
                </div>
            </Link>
        </li>
    )
}

const MenuButton = ({ handle_click, Icon, title }) => {
    return (
        <li onClick={handle_click}>
            <div className="app__sidebar-menu__links btn">
                <Icon />
                <span> { title } </span>
            </div>
        </li>
    )
}

function Sidebar() {
    const location = useLocation(); 

    const open_menu = () => {
        document.querySelector(".app__sidebar-menu").style.width = "100%";
    }

    useEffect(() => {
        const menu = document.querySelector(".app__sidebar-menu");
        const btn = document.querySelector(".app__sidebar-menu__btns");
        const handle_click = (e) => {
            if(window.innerWidth <= 560){
                if(btn.contains(e.target)){
                    menu.style.width = '100%';
                    btn.style.display = "none";
                } else {
                    menu.style.width = 0;
                    btn.style.display = "flex";
                }
            }
        }

        document.addEventListener("click", handle_click)
        return ()=> document.removeEventListener("click", handle_click);
    }, []);

    useEffect(()=> {
        const menu = document.querySelector(".app__sidebar-menu");
        const btn = document.querySelector(".app__sidebar-menu__btns");
        const handle_resize = () => {
            if(window.innerWidth > 560){
                btn.style.display = "none";
                menu.style.width = "100%";
            } else {
                menu.style.width = 0;
                btn.style.display = "flex";
            }
        }
        window.addEventListener("resize", handle_resize);
        return ()=> window.addEventListener("resize", handle_resize);
    },[])
    

    return (
        <aside className="app__sidebar">
            <div className={`app__sidebar-profile  ${location.pathname === `/profile/${user.id}` && "active"}`}>
                <img src={user?.avatar} alt="" />
                <div>
                    <p> { user?.name} </p>
                    <Link to={`/profile/${user.id}`}> { user?.username} </Link>
                </div>
            </div>
            
            <ul className="app__sidebar-menu">
                <MenuLink Icon={MdOutlineHome} url="/" title="Home" />
                <MenuLink Icon={FaUsers} url="/friends" title="Find New People" />
                <MenuLink Icon={MdOutlineExplore} url="/explore" title="Explore" />
                <MenuButton Icon={SiGooglemessages} title="Messages" />
                <MenuLink Icon={IoMdSettings} url="/settings" title="Settings" />
                <MenuLink Icon={MdLogout} url="/login" title="Logout" />
            </ul>

            <div className="app__sidebar-menu__btns" onClick={open_menu} >
                <BiMenuAltRight /> 
            </div>
        </aside>
    )
}

export default Sidebar;