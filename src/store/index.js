import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import hello from './modules/hello'

Vue.use(Vuex)

const debug = process.env.NODE_ENV != 'production'


export default new Vuex.Store({
    actions,
    modules: {
        hello
    },
    // plugins: middlewares,
    strict: debug
})
