import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes
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
