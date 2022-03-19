import Vue from 'vue';
import VueRouter from 'vue-router';

import rootRoutes from './routes';

Vue.use(VueRouter);

// 遍历分布式路由
let routes = [];
// 遍历全部路由文件
const routesContext = require.context('../views/', true, /routes\.js$/);
const routesFiles = routesContext.keys().map((key) => routesContext(key));
routesFiles.forEach((module) => {
    routes = [...routes, ...module.default];
});

const router = new VueRouter({
    mode: 'hash',
    routes: [...rootRoutes, ...routes],
});

router.beforeEach((to, from, next) => {
    const menuArr = router.app.$options.store._modulesNamespaceMap["menu/"].state.footerMenuNames;
    const menuState = router.app.$options.store._modulesNamespaceMap["menu/"].context;
    const headerState =  router.app.$options.store._modulesNamespaceMap["header/"].context;
    if (menuArr.includes(to.name)) {
        menuState.dispatch('setIsMenu', true);
        menuState.dispatch('setActive', menuArr.indexOf(to.name));
    } else {
        menuState.dispatch('setIsMenu', false);
    }
    headerState.dispatch('setHiddenGlobalHeader', false);
    headerState.dispatch('setRightTemp', []);
    next();
});

export default router;
