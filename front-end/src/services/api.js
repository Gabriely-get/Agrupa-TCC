<<<<<<< HEAD
import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `API key ${token}`;
  }
  return config;
});

=======
import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8080"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

>>>>>>> 32ff6618120562340e42134b5f5e27e9f5ea9916
export default api;