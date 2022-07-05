// import { config } from "@fortawesome/fontawesome-svg-core";
import axios from 'axios';
import { getAccessToken, getModsToken } from '../services/localStorage';

export const API_ENDPOINT_URL = 'http://103.74.253.88:8000';
// export const API_ENDPOINT_URL = 'http://localhost:8000';
// var config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };



axios.interceptors.request.use(
  (config) => {
    if (config.url.includes('facebook')) {
      console.log('hi');
      console.log(config);
      // config.headers = {
      //   // 'Access-Control-Allow-Origin': 'http://localhost:8000/oauth/facebook',
      //   // 'Access-Control-Allow-Origin': 'https://www.facebook.com',
      // };

      return config;
    }
    // if (config.url.startsWith('/admin')) {
    //   const modtoken = getModsToken();
    //   if (modtoken) {
    //     co nfig.headers.Authorization = 'Bearer ' + modtoken;
    //   }
    // } else {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    // }
    return config;
  },
  (err) => Promise.reject(err)
);
