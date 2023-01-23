import * as Yup from 'yup';

const email = Yup.string().email().required();
const name = Yup.string().min(5).max(255)
.matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'Name must contain first and last name.').required()

const username = Yup.string().min(3).max(50).required();
const password = Yup.string().label('Password').required().matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 characters, One Uppercase, One Lowercase, One Number and one special case character"
);

const login_schema = Yup.object().shape({
    username,
    password
});

const registration_schema = Yup.object().shape({
    email,
    name,
    password,
    username,
});

const reset_password = Yup.object().shape({
    email,
});

const set_password = Yup.object().shape({
    password,
    new_password: Yup.string().required().oneOf([Yup.ref('password')], 'Password must match')
});

const validate = {
    login_schema,
    registration_schema,
    reset_password,
    set_password
}

export default validate;