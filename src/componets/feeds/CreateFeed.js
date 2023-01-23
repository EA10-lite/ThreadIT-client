import React from 'react';
import './feeds.css';
import avatar from '../../assets/profile-11.jpg';
import { MdOutlineInsertPhoto } from 'react-icons/md';

function CreateFeed({ set_caption, handler_submit }) {
    return (
        <div className="app__feed-create">
            <img src={avatar} alt="" />
            <input 
                type="text" 
                placeholder="Post something...."
            />
            <MdOutlineInsertPhoto />
        </div>
    )
}

export default CreateFeed;