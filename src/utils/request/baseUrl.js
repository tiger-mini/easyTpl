/**
 * 获取baseurl
 * @returns {string}
 */
export default function getBaseUrl() {
    let baseUrl = '';
    if (process.env.NODE_ENV === 'production') {
        // 第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境
        if (process.env.VUE_APP_FLAG === 'pro') {
            // production 生产环境
            baseUrl = 'https://rental.myfuwu.com.cn/';
        } else {
            // test 测试环境
            baseUrl = 'https://rental.test.myspacex.cn/';
        }
    } else {
        // serve 开发环境
        // baseUrl = '';
    }
    return baseUrl
}
