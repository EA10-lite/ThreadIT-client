import React, { useEffect, useRef } from 'react'

function Upload() {
    const upload_ref = useRef();

    useEffect(() => {
    }, [])
    return (
        <div className="app__upload" ref={upload_ref}>

        </div>
    )
}

export default Upload;