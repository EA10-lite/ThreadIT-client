import React from 'react'

function FormInput({ change_visibility, Icon, handleChange, name, placeholder, type, value}) {
  return (
    <div className="app__form-input__container">
        { Icon && <Icon onClick={change_visibility} /> }
        <input
            name={name} 
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    </div>
  )
}

export default FormInput;