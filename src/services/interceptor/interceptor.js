import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(
    (request) => {
        // const token = localStorage.getItem('token');
        if (!request.url?.includes("file")) {
            request.headers['Content-Type'] = 'application/json';
        }
        // request.headers['Authorization'] = `Bearer ${token}`;
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;