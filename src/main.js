import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false


Vue.use(Vant);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
