/**
 * 是否运行在云空间APP中
 * 选用MicCore对象的原因是 明源的混合APP中 MicCore是核心组件 必须安装
 * 文档地址：https://appcloud-static.mypaas.com.cn/plugin/readme/mysoft-plugin-core/3.4.4/index.html
 */
function isInSuperApp() {
    return !!(window.MicCore && window.MicCore.connect);
}

/**
 * 是否运行在企业微信内
 * @returns {boolean}
 */
function isWXWork() {
    const ua = window.navigator.userAgent.toLowerCase();
    const messResult = ua.match(/MicroMessenger/i) || [];
    const wxWorkResult = ua.match(/wxwork/i) || [];
    return messResult.length > 0 && wxWorkResult.length > 0;
}

/**
 * 是否是iOS
 * @returns {boolean}
 */
function isIOS() {
    const u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

export default {
    isInSuperApp,
    isWXWork,
    isIOS,
};
