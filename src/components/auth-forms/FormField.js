import React from "react";
import { useFormikContext } from 'formik';
import { ErrorMessage, FormInput } from './'

function FormField({ change_visibility, Icon, name, placeholder, type }){
    const { errors, handleChange, touched, values} = useFormikContext()
    return (
        <div className="app__form-field__container">
            <FormInput 
                change_visibility={change_visibility}
                Icon={Icon}
                handleChange={handleChange}
                name={name}
                placeholder={placeholder}
                type={type}
                value={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </div>
    )
}

export default FormField;