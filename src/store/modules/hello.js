/**
 * Created by lesonli on 2016/11/17.
 */
import * as types from '../types'
import { helloWorld } from 'src/api/hello'

const state = {
    message: '默认消息'
}

// getters
// actions
const actions = {
    getMessage ({ commit }) {
        commit(types.TEST_MESSAGE_LOADING);
        helloWorld().then(function (res) {
            commit(types.TEST_MESSAGE_LOADED,res.data.hello);
        });
    }
}
// mutations
const mutations = {
    [types.TEST_MESSAGE_LOADING] (state) {
        state.message = "请求中...";
    },
    [types.TEST_MESSAGE_LOADED] (state,message) {
        state.message = message || state.message;
    }
}

export default {
    state,
    actions,
    mutations
}
