import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


import avatar from '../../assets/profile-11.jpg';
import { BiSearch } from 'react-icons/bi';

function Navbar() {
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
                    <div className="app__navbar-dropdown">
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;