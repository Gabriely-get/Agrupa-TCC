import axios from 'axios';
import { campotoken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});

const token = localStorage.getItem(campotoken);

api.interceptors.request.use(async config => {
  config.headers.common['x-access-token'] = token;

  return config;
},  
  error => { return Promise.reject(error); }
);

export default api;
