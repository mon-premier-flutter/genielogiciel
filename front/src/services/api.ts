import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // L'URL par défaut de NestJS
});

export default api;