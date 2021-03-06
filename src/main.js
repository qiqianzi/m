// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from "vuex"
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false

// 将全局样式文件写在 main.js
import '@/assets/less/reset.less'
import '@/assets/less/iconfont.less'

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
