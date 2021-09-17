import {
    auth,
    createTeacher,
    overviewClassroom,
    classroom,
    overviewActivities,
    overviewAttendance,
    school,
    classroomBySchoolId,
    alertByClassroomId,
    overviewAttendanceActivities
} from "../../services/index"

export const indexStore = {
    state: () => ({
    }),
    mutations: {
    },
    actions: {
        async action_auth(context, payload) {
            return await auth(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },
        async action_createTeacher(context, payload) {
            return await createTeacher(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },
        async action_overviewClassroom(context, payload) {
            return await overviewClassroom(payload).then(response => {
                return response.data;
            }).catch(err => { console.error(err) });
        },
        async action_classroom(context, payload) {
            return await classroom(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewActivities(context, payload) {
            return await overviewActivities(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_overviewAttendance(context, payload) {
            return await overviewAttendance(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
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
        async action_alertByClassroomId(context, payload) {
            return await alertByClassroomId(payload).then(response => {
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