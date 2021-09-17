import axios from "./axios";

const url = 'https://hibredu-api.herokuapp.com'

export const auth = (params) => {
    return axios.post(`${url}/auth`, params);
};

export const createTeacher = (params) => {
    return axios.post(`${url}/teacher`, params);
};

export const overviewClassroom = (params) => {
    return axios.get(`${url}/overview/classroom`, params);
};

export const classroom = (params) => {
    return axios.get(`${url}/classroom`, params);
};

export const overviewActivities = (params) => {
    return axios.get(`${url}/overview/activities`, params);
};

export const overviewAttendance = (params) => {
    return axios.get(`${url}/overview/attendance`, params);
};

export const school = (params) => {
    return axios.get(`${url}/school`, params);
};

export const classroomBySchoolId = (params) => {
    return axios.get(`${url}/school/${params.schoolId}/classrooms`, params);
};

export const alertByClassroomId = (params) => {
    return axios.get(`${url}/alert/class/1`, params);
};

export const overviewAttendanceActivities = (params) => {
    return axios.get(`${url}/overview/attendance/activities`, params);
};
