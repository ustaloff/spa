import axios from 'axios';
//import {useRoute, useRouter} from 'vue-router'

//const router = useRouter();

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: {}
    },

    getters: {
        authenticated(state) {
            return state.authenticated;
        },

        user(state) {
            return state.user;
        },
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value;
        },

        SET_USER(state, value) {
            state.user = value;
        },
    },

    actions: {
        login({commit}) {
            return axios.get('/api/user').then(({data}) => {
                console.log('login', data)

                commit('SET_USER', data);
                commit('SET_AUTHENTICATED', true);
                //router.push({name: 'index'});
            }).catch(({response: {data}}) => {
                commit('SET_USER', {});
                commit('SET_AUTHENTICATED', false);
            })
        },

        logout({commit}) {
            commit('SET_USER', {});
            commit('SET_AUTHENTICATED', false);
            //router.push({name: 'index'});
        },
    }
}
