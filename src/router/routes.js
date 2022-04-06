// 遍历分布式路由
let routes = [];
// 遍历全部路由文件
const routesContext = require.context('../views/', true, /routes\.js$/);
const routesFiles = routesContext.keys().map((key) => routesContext(key));
routesFiles.forEach((module) => {
    routes = [...routes, ...module.default];
});

export default [
    {
        path: '/',
        redirect: 'home',
    },
    ...routes,
];
