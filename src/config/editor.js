/**
 * Created by zhaiyunzhi on 2017/2/4.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Vueditor from 'vueditor'

import 'vueditor/dist/css/vueditor.min.css'

// your config here
let config = {
    toolbar: [
        'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor'
    ],
    fontName: [
        {val: 'arial black'}, {val: 'times new roman'}, {val: 'Courier New'}
    ],
    fontSize: ['12px', '14px', '16px', '18px', '0.8rem', '1.0rem', '1.2rem', '1.5rem', '2.0rem'],
    emoji: ['1f600', '1f601', '1f602', '1f923', '1f603'],
    lang: 'en',
    mode: 'default',
    iframePath: '',
    fileuploadUrl: ''
}

Vue.use(Vuex)
Vue.use(Vueditor, config)

//服务接口声明
export const MyEditor = '';