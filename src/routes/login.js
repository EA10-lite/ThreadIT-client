import React, { useState } from 'react';
import '../styles/form.css';
import { 
    Form, 
    FormButton, 
    FormField, 
    FormHeader,
    FormLink } from '../componets/forms';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLockOpen, MdLockOutline } from 'react-icons/md';

// utils
import validation from '../utils/validation';

function Login() {
    const [ visible, set_visible ] = useState(false);
    const change_visibility = ()=> {
        set_visible(!visible);
    }
    return (
        <Form
            handleSubmit={(values)=> console.log(values)}
            initialValues={{ username: '', password: ''}}
            validationSchema={validation.login_schema}
        >
            <FormHeader
                title="Login"
            />
            <FormField 
                Icon={AiOutlineUser}
                name="username"
                placeholder="username"
                type="text"
            />
            <FormField 
                change_visibility={change_visibility}
                Icon={visible ? MdLockOpen : MdLockOutline}
                name="password"
                placeholder="password"
                type={visible ? "text" : "password"}
            />
            <p className='app__form-link'> Lost Password ? <a href="/"> click here </a> </p>
            
            <div className="app__form-buttons">
                <FormButton 
                    loading={false}
                    title="Login"
                    type="button"
                    />
                <FormLink 
                    title="sign up"
                    url="/signup"
                />
            </div>
        </Form>
    )
}

export default Login;