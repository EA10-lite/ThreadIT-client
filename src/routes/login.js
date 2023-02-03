import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import '../styles/form.css';
import { 
    Form, 
    FormButton, 
    FormField, 
    FormHeader,
    FormLink } from '../components/auth-forms';
import { AiOutlineUser } from 'react-icons/ai';
import { MdLockOpen, MdLockOutline } from 'react-icons/md';

// utils
import api from '../apis/auth';
import validation from '../utils/validation';

function Login() {
    const [ visible, set_visible ] = useState(false);
    const change_visibility = ()=> {
        set_visible(!visible);
    }
    
    const [ loading, set_loading ] = useState(false);
    const handle_submit = async (values, reset_form) => {
        set_loading(true);
        try {
            await api.login(values);
            reset_form();
            toast.success("Login successful.")
        } catch (error) {
            toast.error(`Login Failed. ${error?.response?.data?.error}`);
        } finally {
            set_loading(false);
        }
    }

    return (
        <Form
            handleSubmit={(values, { resetForm })=> handle_submit(values, resetForm)}
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
            <p className='app__form-link'> Lost Password ? <Link to="/reset-password"> click here </Link> </p>
            
            <div className="app__form-buttons">
                <FormButton 
                    loading={loading}
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