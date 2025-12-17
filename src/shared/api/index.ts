import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const http = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': baseURL,
    'ngrok-skip-browser-warning': true,
  },
});

http.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
    return Promise.reject(error);
  },
);
