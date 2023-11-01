import axios from "axios";

export const server = axios.create({
    baseURL: 'http://10.50.0.36:3000',

})