import React, { useEffect, useRef, useState } from 'react';
import './upload.css';

import { BsEmojiSmile } from 'react-icons/bs';
import { MdCancel, MdOutlineLocationOn, MdPhoto } from 'react-icons/md';

// mock data
import profiles from '../../data/profile';

function Upload({ close_upload_menu }) {
    const [ loading, set_loading ] = useState(false);
    const upload_ref = useRef();

    useEffect(() => {
    }, [])
    return (
        <div className="app__upload" ref={upload_ref}>
            <div className="app__upload-overlay" />
            <div className="app__upload-container">
                <div className="app__upload-header">
                    <h2> Create Thread </h2>
                    <MdCancel onClick={close_upload_menu} />
                </div>
                <div className="app__upload-body">
                    <div className="app__upload-body__user">
                        <img src={profiles[0].avatar} alt="" />
                        <div>
                            <p> { profiles[0].username } </p>
                            <div className="app__upload-body__user-location">
                                <MdOutlineLocationOn />
                                <p> San Marino </p>
                            </div>
                        </div>
                    </div>
                    <div className="app__upload-body__upload">
                        <div className="app__upload-body__upload-input">
                            <input 
                                placeholder={`What is on your mind? ${profiles[0].username
                                }`}
                                type="text" 
                            />
                            <BsEmojiSmile />
                        </div>
                        <div className="app__upload-body__upload-media">
                            <label>
                                <input type="file" />
                                <div>
                                    <MdPhoto />
                                </div>
                                <span> Add Photos/Videos </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="app__upload-footer">
                    <button disabled={!loading}>
                        { !loading && <div className="btn-overlay" /> }
                        Post
                    </button>
                </div>
                {/* input */}
                {/* options */}
            </div>
        </div>
    )
}

export default Upload;