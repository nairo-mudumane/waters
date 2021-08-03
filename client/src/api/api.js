import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost/fontenaria/server/',
});

export default api;
