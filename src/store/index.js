import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const modulesFiles = require.context('./modules', true, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1') //获取文件名：app,permission,user
    const content = modulesFiles(modulePath) //通过路径获取每个文件的内容
    modules[moduleName] = content.default //比如app.js文件,modules.app等于export default的内容
    return modules
}, {});

export default new Vuex.Store({
    modules
});
