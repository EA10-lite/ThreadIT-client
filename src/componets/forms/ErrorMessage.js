import React from 'react';

function ErrorMessage({ error, visible}) {
    if(!error || !visible) return null;
    return (
        <p className="app__form-errormessage"> { error } </p>
    )
}

export default ErrorMessage;