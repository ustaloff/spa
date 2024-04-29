import {createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import auth from '@/store/auth';
import axios from "axios";

const store = createStore({
    state: {
        baseData: undefined,
        bar: false,
    },

    getters: {
        baseData(state) {
            return state.baseData;
        },

        bar(state) {
            return state.bar;
        },
    },

    mutations: {
        SET_BASE_DATA(state, value) {
            state.baseData = value;
        },

        SET_BAR_EXPANDED(state, value) {
            state.bar = value;
        },
    },

    actions: {
        getBaseData({commit}) {
            return axios.get('/api/get-base-data').then(({data}) => {
                commit('SET_BASE_DATA', data);
            }).catch(({response: {data}}) => {

            })
        },
    },

    plugins: [
        createPersistedState()
    ],

    modules: {
        auth
    }
})

export default store;
