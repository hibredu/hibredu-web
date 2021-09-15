import { auth, createTeacher, overviewClassroom } from "../../services/index"

export const indexStore = {
    state: () => ({
        token: '',
    }),
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
    },
    actions: {
        async action_auth(context, payload) {
            return await auth(payload).then(response => {
                context.commit("SET_TOKEN", response.data.token);
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
                return response;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;