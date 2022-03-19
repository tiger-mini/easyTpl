import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const content = modulesFiles(modulePath)
    modules[moduleName] = content.default
    return modules
}, {});

const featureModelContext = require.context('../views', true, /\/module\.js$/); // 业务Model文件（页面级）
const featureModelFiles = featureModelContext.keys().map((key) => featureModelContext(key));
featureModelFiles.forEach((item) => {
    const moduleName = item.default?.name;
    if (moduleName) {
        modules[moduleName] = item.default;
    }
});

export default new Vuex.Store({
    modules
});
