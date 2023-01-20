import React from 'react';
import { Link } from 'react-router-dom';

function FormLink({ title, url}) {
  return (
    <div className="app__form-button__link">
        <Link to={url}>
            { title }
        </Link>
    </div>
  )
}

export default FormLink;