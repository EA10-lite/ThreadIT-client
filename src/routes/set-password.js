import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLockOutline, MdLockOpen } from 'react-icons/md';
import { Form, FormButton, FormField} from '../components/auth-forms';
import validatiton from '../utils/validation';

function SetPassword() {
    const [ visible, set_visible ] = useState(false);
    const change_visibility = ()=> {
        set_visible(!visible);
    }
    return (
        <Form
            handleSubmit={(values)=> console.log(values)}
            initialValues={{ password: '', new_password: '' }}
            validationSchema={validatiton.set_password}
            >
                <div className="app__form-header">
                    <h2> Change Password </h2>
                </div>

                <FormField 
                    change_visibility={change_visibility}
                    Icon={visible ? MdLockOpen : MdLockOutline}
                    name="password"
                    placeholder="password"
                    type={visible ? "text" : "password"}
                />
                <FormField 
                    Icon={MdLockOutline}
                    name="new_password"
                    placeholder="retype password"
                    type={"password"}
                />
                <p className='app__form-link'> <Link to="/login"> Continue </Link> to login </p>
                
                <div className="app__form-buttons">
                    <FormButton 
                        loading={false}
                        title="Set New password"
                        type="button"
                    />
                </div>
        </Form>
    )
}

export default SetPassword;