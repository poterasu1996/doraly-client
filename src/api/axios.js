import axios from 'axios';

export const client = axios.create({
    baseURL: `${process.env.VUE_APP_BASE_URL}`
})