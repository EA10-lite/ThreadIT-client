import React from 'react'

function FormHeader({ title }) {
  return (
    <div className="app__form-header">
      <h2> { title } </h2>
      <div className="app__form-header__border" />
    </div>
  )
}

export default FormHeader;