import runtimeEnv from '@plugins/runtimeEnvironment';
import Vue from 'vue';
import VueRouter from 'vue-router';

import projectConfig from '../project.config';
import rootRoutes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: rootRoutes,
});

const getTrueRoutePath = (currentPath) => {
    // 当该项目以子应用运行在主应用(超级APP)内时，原子应用的路由会被拼接上子应用的code
    if (runtimeEnv.isInSuperApp()) {
        return currentPath.replace(`/${projectConfig.appName}`, '');
    }
    return currentPath;
};

const getTrueRouteName = (currentName) => {
    if (runtimeEnv.isInSuperApp()) {
        return currentName.replace(`${projectConfig.appName}-`, '');
    }
    return currentName;
};

router.beforeEach((to, from, next) => {
    const menuArr = router.app.$options.store._modulesNamespaceMap['menu/'].state.footerMenuNames;
    const menuState = router.app.$options.store._modulesNamespaceMap['menu/'].context;
    const headerState = router.app.$options.store._modulesNamespaceMap['header/'].context;
    if (menuArr.includes(to.path)) {
        menuState.dispatch('setIsMenu', true);
        menuState.dispatch('setActive', menuArr.indexOf(to.name));
    } else {
        menuState.dispatch('setIsMenu', false);
    }
    // 需要隐藏头部
    const isHiddenHeader = projectConfig.headerComponentHiddenPath.includes(getTrueRoutePath(to.path));
    headerState.dispatch('setHiddenGlobalHeader', isHiddenHeader);

    headerState.dispatch('setRightTemp', []);

    // 根据routes.js文件中name自动设置页面title 这就要求 name配置为页面名称 页面路由跳转尽量是用path方式跳转
    if (to.name) {
        const name = getTrueRouteName(to.name);
        headerState.dispatch('setTitle', name);
        document.title = name;
    }

    next();
});

export default router;
