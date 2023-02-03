import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/form.css';
import { 
    Form, 
    FormButton, 
    FormField, 
    FormHeader,
    FormLink } from '../components/auth-forms';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLockOpen, MdLockOutline, MdEmail } from 'react-icons/md';

// utils
import validation from '../utils/validation';

function Signup() {
    const [ visible, set_visible ] = useState(false);
    const change_visibility = ()=> {
        set_visible(!visible);
    }
    return (
        <Form
            handleSubmit={(values)=> console.log(values)}
            initialValues={{ email: '', name: '', username: '', password: ''}}
            validationSchema={validation.registration_schema}
        >
            <FormHeader
                title="Register"
            />
            <FormField 
                Icon={AiOutlineUser}
                name="name"
                placeholder="name"
                type="text"
            />
            <FormField 
                Icon={AiOutlineUser}
                name="username"
                placeholder="username"
                type="text"
            />
            <FormField 
                Icon={MdEmail}
                name="email"
                placeholder="email"
                type="email"
            />
            <FormField 
                change_visibility={change_visibility}
                Icon={visible ? MdLockOpen : MdLockOutline}
                name="password"
                placeholder="password"
                type={visible ? "text" : "password"}
            />
            <p className='app__form-link'> Lost Password ? <Link to="/reset-password"> click here </Link> </p>
            
            <div className="app__form-buttons">
                <FormButton 
                    loading={false}
                    title="register"
                    type="button"
                    />
                <FormLink 
                    title="login"
                    url="/login"
                />
            </div>
        </Form>
    )
}

export default Signup;