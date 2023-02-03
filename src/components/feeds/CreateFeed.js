import React, { useRef } from 'react';
import './feeds.css';
import avatar from '../../assets/profile-11.jpg';
import { MdOutlineInsertPhoto } from 'react-icons/md';

function CreateFeed({ open_upload_menu }) {
    const input_ref = useRef();
    
    return (
        <div className="app__feed-create">
            <img src={avatar} alt="" />
            <input 
                type="text" 
                placeholder="Post something...."
                ref={input_ref}
            />
            <div className="app__feed-create__options">
                <MdOutlineInsertPhoto />
                <span> Photos </span>
            </div>
        </div>
    )
}

export default CreateFeed;