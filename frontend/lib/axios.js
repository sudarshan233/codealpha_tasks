import axios from 'axios';

const BASE_URl = import.meta.env.MODE === 'development' ? 'http://localhost:5000/api/tasks' : '/api';
export const api = axios.create({
    baseURL: BASE_URl,
})
