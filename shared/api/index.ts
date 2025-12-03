import axios from 'axios';

const baseURL = 'http://192.168.1.43:7000';

export const http = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': baseURL,
    'ngrok-skip-browser-warning': true,
  }
});
