import React from 'react';
import { Formik } from 'formik';

function Form({ children, initialValues, handleSubmit, validationSchema }) {
  return (
    <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
    >
        {()=> (
            <form className="app__form">
                { children }
            </form>
        )}
    </Formik>
  )
}

export default Form;