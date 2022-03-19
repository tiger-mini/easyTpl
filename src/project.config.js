/*
 * @Author: zhanxuwen
 * @Date: 2022/3/8 11:14
 * @LastEditors: zhanxuwen
 * @LastEditTime: 2022/3/8 11:14
 * @Description: 关于项目的配置
 */
// 需要隐藏头部的path
const HeaderComponentHiddenPath = ['/bill-list'];
const config = {
    DEV: process.env.NODE_ENV === 'development', // 开发环境
    TEST: window.location.hostname.indexOf('test') !== -1, // 测试环境
    apiDomain: '/api', // 代理请求前缀
    serverPort: 8807,
    baseAlias: '/charging-web',
    headerComponentHiddenPath: HeaderComponentHiddenPath,
};

export default config;
