import React from 'react'
import { Link } from 'react-router-dom';
import { FormHeader, FormLink } from '../componets/forms';
import '../styles/form.css';

function AccountVerify() {
  return (
        <div className="app__account-verify app__form">
            <h2> Email verification succes! </h2>
            <div className="app__form-field__container">
                <p> Please proceed to login into your account. </p> 
            </div>
            <div className="app__form-button">
                <Link to="/login"> Login </Link>
            </div>
        </div>
    )
}

export default AccountVerify;