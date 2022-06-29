// import { config } from "@fortawesome/fontawesome-svg-core";
import axios from 'axios';
import { getAccessToken, getModsToken } from '../services/localStorage';

// export const API_ENDPOINT_URL = 'http://103.74.253.88:8000';
export const API_ENDPOINT_URL = 'http://localhost:8000';

axios.interceptors.request.use(
  (config) => {
    if (config.url.startsWith('/admin')) {
      const modtoken = getModsToken();
      if (modtoken) {
        config.headers.Authorization = 'Bearer ' + modtoken;
      }
    } else {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
    }
    return config;
  },
  (err) => Promise.reject(err)
);
