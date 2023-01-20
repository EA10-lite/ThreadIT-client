import React from 'react';
import { useFormikContext } from 'formik';

function FormButton({ loading, title }){
    const { handleSubmit } = useFormikContext();
    return (
        <button 
            className="app__form-button"
            onClick={handleSubmit}
            type="button" 
            disabled={loading}
        >   
            { !loading && <div>{ title }</div> }
            { loading && <div className="app__form-button__overlay">
                <span> { title + "..." } </span>
            </div> }
        </button>
    )
}

export default FormButton;