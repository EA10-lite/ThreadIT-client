import React, { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import './upload.css';

import { MdCancel } from 'react-icons/md';

function Upload({ close_upload_menu }) {
    const upload_ref = useRef();

    useEffect(() => {
    }, [])
    return (
        <div className="app__upload" ref={upload_ref}>
            <div className="app__upload-overlay">
                <MdCancel onClick={close_upload_menu} />
            </div>
            <div className="app__upload-container">
                <h1> UPLOAD MENU </h1>
                {/* input */}
                {/* options */}
            </div>
        </div>
    )
}

export default Upload;