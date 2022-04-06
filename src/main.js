import '@tailwindcss/postcss7-compat/tailwind.css';
import './styles/index.less';

import Vue from 'vue';

import App from './App.vue';
import router from './router/index';
import store from './store/index';
import request from './utils/request/request';

Vue.config.productionTip = false;

Vue.prototype.request = request;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
