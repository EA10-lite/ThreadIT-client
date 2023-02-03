import React from 'react';
import { Link } from 'react-router-dom';
import validation from '../utils/validation';
import { Form, FormField, FormButton } from '../components/auth-forms';
import { MdEmail } from 'react-icons/md';

function ResetPassword() {
    return (
        <Form
            handleSubmit={(values)=> console.log(values)}
            initialValues={{ email: '' }}
            validationSchema={validation.reset_password}
            >
                <div className="app__form-header">
                    <h2> Forgot Password </h2>
                </div>
                <div className="app__form-field__container">
                    <p className="app__form-link"> Enter your email below and a link will be sent your mail to complete the reset password process. </p> 
                </div>

                <FormField 
                    Icon={MdEmail}
                    name="email"
                    placeholder="email"
                    type="email"
                />
                <p className='app__form-link'> <Link to="/login"> click here </Link> to login </p>
                
                <div className="app__form-buttons">
                    <FormButton 
                        loading={false}
                        title="Send Verification mail"
                        type="button"
                    />
                </div>
            </Form>
    )
}

export default ResetPassword;