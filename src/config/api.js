import axios from 'axios';

export const api = axios.create({
    baseURL: "127.0.0.1:8000/api/", // TODO куда ходить на бэк
    responseType: 'json',
    transformRequest: [],
});