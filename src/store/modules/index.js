import {
    createTeacher,
    auth,
    student,
    studentById,
    classroom,
    classroomById,
    alertByClassroomId,
    alertByStudentId,
    school,
    classroomBySchoolId,
    overviewAttendance,
    overviewActivities,
    overviewClassroom,
    overviewAlerts,
    overviewAttendanceActivities,
} from "../../services/index"

export const indexStore = {
    state: () => ({
        token: '',
        teacher: {
            id: '',
            name: ''
        },
        classrooms: []
    }),
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
        SET_TEACHER(state, payload) {
            state.teacher.id = payload.id;
            state.teacher.name = payload.name;
        },
        SET_CLASSROOMS(state, payload) {
            state.classrooms = payload
        }
    },
    actions: {
        /*
            Teacher
        */
        async action_createTeacher(context, payload) {
            return await createTeacher(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },


        /*
            Auth
        */
        async action_auth(context, payload) {
            return await auth(payload).then(response => {
                context.commit("SET_TOKEN", response.data.token);
                context.commit("SET_TEACHER", response.data.teacher);
                return response;
            }).catch(err => console.error(err));
        },


        /*
            Student
        */
        async action_student(context, payload) {
            return await student(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_studentById(context, payload) {
            return await studentById(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            Classroom
        */
        async action_classroom(context, payload) {
            context.commit("SET_CLASSROOMS", []);
            return await classroom(payload).then(response => {
                context.commit("SET_CLASSROOMS", response.data);
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_classroomById(context, payload) {
            return await classroomById(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            Attendance
        */


        /*
            Alert
        */
        async action_alertByClassroomId(context, payload) {
            return await alertByClassroomId(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_alertByStudentId(context, payload) {
            return await alertByStudentId(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            School
        */
        async action_school(context, payload) {
            return await school(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_classroomBySchoolId(context, payload) {
            return await classroomBySchoolId(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            Overview
        */
        async action_overviewAttendance(context, payload) {
            return await overviewAttendance(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewActivities(context, payload) {
            return await overviewActivities(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewClassroom(context, payload) {
            return await overviewClassroom(payload).then(response => {
                return response.data;
            }).catch(err => { console.error(err) });
        },
        async action_overviewAlerts(context, payload) {
            return await overviewAlerts(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewAttendanceActivities(context, payload) {
            return await overviewAttendanceActivities(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;