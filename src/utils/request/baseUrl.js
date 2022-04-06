/**
 * 获取baseurl
 * @returns {string}
 */
export default function getBaseUrl() {
    let baseUrl = '';
    if (process.env.NODE_ENV === 'production') {
        baseUrl = 'https://rental.myfuwu.com.cn/';
    } else if (process.env.NODE_ENV === 'test') {
        baseUrl = 'https://rental.test.myspacex.cn/';
    } else {
        // serve 开发环境
        // baseUrl = '';
    }
    return baseUrl;
}
