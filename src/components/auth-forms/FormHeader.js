import React from 'react';
import logo from '../../assets/logo.png';

function FormHeader({ title }) {
  return (
    <div className="app__form-header">
      <div className="app__form-header__logo">
        <img src={logo} alt="" />
      </div>
      <h2> { title } </h2>
      <div className="app__form-header__border" />
    </div>
  )
}

export default FormHeader;