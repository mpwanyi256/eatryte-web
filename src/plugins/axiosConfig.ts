import axios from 'axios';
import config from '../config/appConfig';
import store from '../store';
import router from '../router';

const api = config.api;

axios.defaults.baseURL = `${api.baseURL}:${api.port}`;
axios.defaults.timeout = 10000;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.common['x-api-key'] = api.apiKey;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// Intercept the request to make sure the token is injected into the header.
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, (err) => {
    return Promise.reject(err);
});

// Intercept the response and…
axios.interceptors.response.use((res) => {
    return res;
}, (err) => {
    const { response } = err;
    if (response) {
        switch (response.status) {
            case 401:
                // if you're not authorized, log out the user
                store.dispatch('auth/signoutUser');
                router.push({ name: 'login' });
                break;
            // case 403:
            //     // if you're forbidden from accessing something, redirect to the home page
            //     router.push({ name: 'home' });
            //     break;
            // case 404:
            //     // if the resource is not found, redirect to the home page
            //     router.push({ name: 'home' });
            //     break;
            // case 500:
            //     // if the server explodes, redirect to the home page
            //     router.push({ name: 'home' });
            //     break;
        }
    }
    return Promise.reject(err);
});

export default axios;
