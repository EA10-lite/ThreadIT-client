import React from 'react';
import './feeds.css';

import { MdOutlineInsertPhoto } from 'react-icons/md';

function CreateFeed({ set_caption, handler_submit }) {
    return (
        <div className="app__feed-create">
            <div className="app__feed-create__input-container">
                <input 
                    type="text" 
                    placeholder="Post something...."
                />
                <MdOutlineInsertPhoto />
            </div>
            <div className="app__feed-create__btns">
                <button type="button"> Post </button>
            </div>
        </div>
    )
}

export default CreateFeed;