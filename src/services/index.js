import axios from "./axios";

const url = 'https://hibredu-api.herokuapp.com'

/*
    Teacher
*/
export const createTeacher = (params) => {
    return axios.post(`${url}/teacher`, params);
};
export const updateTeacher = (params) => {
    return axios.patch(`${url}/teacher/${params.teacherId}`, params);
};
export const teacherById = (params) => {
    return axios.get(`${url}/teacher/${params.teacherId}`, params);
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
export const attendanceSpreadSheetTeams = (params) => {
    return axios.post(`${url}/attendance/spreadsheet/teams`, params);
};
export const attendance = (params) => {
    return axios.post(`${url}/attendance`, params);
};
export const attendanceById = (params) => {
    return axios.get(`${url}/attendance/${params.attendanceId}`, params);
};


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
    Activity
*/
export const activitySpreadSheetTeams = (params) => {
    return axios.post(`${url}/activity/spreadsheet/teams`, params);
};
export const activity = (params) => {
    return axios.post(`${url}/activity/teams`, params);
};
export const activityByClassroomId = (params) => {
    return axios.get(`${url}/activity/classroom/${params.classroomId}`, params);
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
export const overviewAttendanceActivitiesByStudentId = (params) => {
    return axios.get(`${url}/overview/student/attendance/activities/${params.studentId}`, params);
};


/*
    School Subjects
*/
export const schoolSubjects = (params) => {
    return axios.get(`${url}/subject`, params);
};
export const schoolSubjectsByTeacher = (params) => {
    return axios.get(`${url}/teacher/school_subjects`, params);
};


/*
    Hibredu Rewards    
*/
export const hibreduRewards = (params) => {
    return axios.get(`${url}/hibredu_rewards`, params);
};