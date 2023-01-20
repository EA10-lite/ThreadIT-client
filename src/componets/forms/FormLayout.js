import React from 'react'

function FormLayout({ children }) {
  return (
    <div className="app__form-layout">
        <div className="app__form-layout__overlay" />
        <div className="app__form-layout__container">
            { children }
        </div>
    </div>
  )
}

export default FormLayout;