import React from 'react';
import './feeds.css';
import avatar from '../../assets/profile-11.jpg';
import { MdOutlineInsertPhoto } from 'react-icons/md';

function CreateFeed({ open_upload_menu }) {
    
    return (
        <div className="app__feed-create">
            <img src={avatar} alt="" />
            <div className="input"
                onClick={open_upload_menu}
            >
                what is on your mind?
            </div>
            <div className="app__feed-create__options" onClick={open_upload_menu}>
                <MdOutlineInsertPhoto />
                <span> Photos </span>
            </div>
        </div>
    )
}

export default CreateFeed;