import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import api from './utils/api.js' // 导入api接口
Vue.prototype.$api = api; // 将api挂载到vue的原型上

import 'lib-flexible';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
