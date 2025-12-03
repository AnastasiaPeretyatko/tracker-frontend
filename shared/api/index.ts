import axios from 'axios';

const baseURL = process.env.API_URL;

export const http = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': baseURL,
    'ngrok-skip-browser-warning': true,
  },
});
