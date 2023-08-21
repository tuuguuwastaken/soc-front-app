import axios from 'axios';
import { env } from '@/environment/environment';

const instance = axios.create();
let backendUrl = env.api



if (backendUrl) {
  instance.defaults.baseURL = backendUrl;

  instance.interceptors.request.use(
    (request) => {
      if (!request.url?.includes("file")) {
        request.headers['Content-Type'] = 'application/json';
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Handle the error here
      console.error('An error occurred in interceptor:', error);
      return Promise.reject(error);
    }
  );
}

export default instance;





