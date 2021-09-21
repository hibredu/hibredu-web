import axios from "./axios";

const url = 'https://hibredu-api.herokuapp.com'

/*
    Teacher
*/
export const createTeacher = (params) => {
    return axios.post(`${url}/teacher`, params);
};


/*
    Auth
*/
export const auth = (params) => {
    return axios.post(`${url}/auth`, params);
};


/*
    Student
*/
export const student = (params) => {
    return axios.get(`${url}/student`, params);
};
export const studentById = (params) => {
    return axios.get(`${url}/student/${params.studentId}`, params);
};


/*
    Classroom
*/
export const classroom = (params) => {
    return axios.get(`${url}/classroom`, params);
};
export const classroomById = (params) => {
    return axios.get(`${url}/classroom/${params.classroomId}`, params);
};


/*
    Attendance
*/


/*
    Alert
*/
export const alertByClassroomId = (params) => {
    return axios.get(`${url}/alert/class/${params.classroomId}`, params);
};
export const alertByStudentId = (params) => {
    return axios.get(`${url}/alert/student/${params.studentId}`, params);
};


/*
    School
*/
export const school = (params) => {
    return axios.get(`${url}/school`, params);
};
export const classroomBySchoolId = (params) => {
    return axios.get(`${url}/school/${params.schoolId}/classrooms`, params);
};


/*
    Overview
*/
export const overviewAttendance = (params) => {
    return axios.get(`${url}/overview/attendance`, params);
};
export const overviewActivities = (params) => {
    return axios.get(`${url}/overview/activities`, params);
};
export const overviewClassroom = (params) => {
    return axios.get(`${url}/overview/classroom`, params);
};
export const overviewAlerts = (params) => {
    return axios.get(`${url}/overview/alerts`, params);
};
export const overviewAttendanceActivities = (params) => {
    return axios.get(`${url}/overview/attendance/activities`, params);
};