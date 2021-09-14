import axios from "./axios";

const url = 'https://hibredu-api.herokuapp.com'

export const auth = (params) => {
    return axios.post(`${url}/auth`, params);
};

export const createTeacher = (params) => {
    return axios.post(`${url}/teacher`, params);
};