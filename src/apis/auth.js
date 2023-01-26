import axios from 'axios';

const base_url = "http://localhost:4000/api";

const client = axios.create({
    baseURL: base_url,
    headers: {
        "content-type": "application/json"
    }
});

const login_url = "/auth/login";
const register_url = "/auth/register";

const login = (body) => {
    return client.post(login_url, {...body});
};

const register = (body) => {
    return client.post(register_url, {...body});
}

const auth_api =  {
    login,
    register
}

export default auth_api

