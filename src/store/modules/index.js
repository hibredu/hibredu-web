import {
    createTeacher,
    updateTeacher,
    teacherById,
    auth,
    student,
    studentById,
    classroom,
    classroomById,
    alertByClassroomId,
    attendanceSpreadSheetTeams,
    attendance,
    attendanceById,
    alertByStudentId,
    school,
    classroomBySchoolId,
    activitySpreadSheetTeams,
    activity,
    activityByClassroomId,
    overviewAttendance,
    overviewActivities,
    overviewClassroom,
    overviewAlerts,
    overviewAttendanceActivities,
    overviewAttendanceActivitiesByStudentId,
    schoolSubjects,
    schoolSubjectsByTeacher,
    hibreduRewards
} from "../../services/index"

export const indexStore = {
    state: () => ({
        token: '',
        teacher: {
            id: '',
            name: ''
        },
        returnSpreadsheet: [],
        // suggestions: [],
        subjects: [],
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
        SET_RETURN_SEND_SPREADSHEET(state, payload) {
            state.returnSpreadsheet = payload;
            // for (let i = 0; i < state.returnSpreadsheet.columns.length; i++) {
            //     this.suggestions.push({
            //         value: state.returnSpreadsheet.columns[i][0].suggestion,
            //     });
            // }
        },
        SET_RETURN_SEND_SPREADSHEET_ACTIVITY(state, payload) {
            state.returnSpreadsheetActivity = payload;
            // for (let i = 0; i < state.returnSpreadsheet.columns.length; i++) {
            //     this.suggestions.push({
            //         value: state.returnSpreadsheet.columns[i][0].suggestion,
            //     });
            // }
        },
        SET_SUBJECTS(state, payload) {
            state.subjects = payload;
        },
        SET_CLASSROOMS(state, payload) {
            state.classrooms = payload;
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
        async action_updateTeacher(context, payload) {
            return await updateTeacher(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },
        async action_teacherById(context, payload) {
            return await teacherById(payload).then(response => {
                return response.data;
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
        async action_attendanceSpreadSheetTeams(context, payload) {
            context.commit("SET_RETURN_SEND_SPREADSHEET", []);
            return await attendanceSpreadSheetTeams(payload).then(response => {
                context.commit("SET_RETURN_SEND_SPREADSHEET", response.data);
                return response;
            }).catch(err => console.error(err));
        },
        async action_attendance(context, payload) {
            return await attendance(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },
        async action_attendanceById(context, payload) {
            return await attendanceById(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },

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
            Actvity
        */
        async action_activitySpreadSheetTeams(context, payload) {
            context.commit("SET_RETURN_SEND_SPREADSHEET_ACTIVITY", []);
            return await activitySpreadSheetTeams(payload).then(response => {
                context.commit("SET_RETURN_SEND_SPREADSHEET_ACTIVITY", response.data);
                return response;
            }).catch(err => console.error(err));
        },
        async action_activity(context, payload) {
            return await activity(payload).then(response => {
                return response;
            }).catch(err => console.error(err));
        },
        async action_activityByClassroomId(context, payload) {
            return await activityByClassroomId(payload).then(response => {
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
        async action_overviewAttendanceActivitiesByStudentId(context, payload) {
            return await overviewAttendanceActivitiesByStudentId(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            School Subjects
        */
        async action_schoolSubjects(context, payload) {
            return await schoolSubjects(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
        async action_schoolSubjectsByTeacher(context, payload) {
            context.commit("SET_SUBJECTS", []);
            return await schoolSubjectsByTeacher(payload).then(response => {
                context.commit("SET_SUBJECTS", response.data);
                return response.data;
            }).catch(err => console.error(err));
        },


        /*
            Hibredu Rewards
        */
        async action_hibreduRewards(context, payload) {
            return await hibreduRewards(payload).then(response => {
                return response.data;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;