import { auth } from "../../services/index"

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
                context.commit("SET_TOKEN", response);
                return response;
            }).catch(err => console.error(err));
        },
    },
    getters: {}
}

export default indexStore;