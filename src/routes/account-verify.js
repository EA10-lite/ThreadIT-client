import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/form.css';

function AccountVerify() {
  return (
        <div className="app__account-verify app__form">
            <div className="app__form-header">
                <h2> Email verification succes! </h2>
            </div>
            <div className="app__form-field__container">
                <p className="app__form-link"> Your account has been verified, You can now Please proceed to login into your account. </p> 
            </div>
            <div className="app__form-button">
                <Link to="/login"> Login </Link>
            </div>
        </div>
    )
}

export default AccountVerify;