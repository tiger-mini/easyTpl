/**
 * 返回基础的axios对象，并对请求和响应做处理
 * 前后端约定接口返回结构规范
 * {
 *     code: number,
 *     data: T,
 *     message: string;
 * }
 */
import axios from 'axios';

import { DEV } from '../../project.config';
import getBaseUrl from './baseUrl';

// 创建独立的axios实例
const service = axios.create({
    // 设置baseUr地址,如果通过proxy跨域可直接填写base地址
    baseURL: getBaseUrl(), // DEV ? apiDomain : '',
    // 定义统一的请求头部
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    // 配置请求超时时间
    timeout: 10000,
});

// 请求拦截
service.interceptors.request.use((config) => {
    // 自定义header
    // config.headers['tenant-code'] = 'tenant-code';
    return config;
});
// 返回拦截
service.interceptors.response.use(
    (response) => {
        // 获取接口返回结果
        const res = response.data;
        // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
        if (res.code === 0) {
            return res;
        } else if (response.status === 401 || response.status === 307) {
            // 未登录
            if (!DEV) {
                location.href = res.login_url + '?returnUrl=' + decodeURIComponent(location.href);
            } else {
                const loginUrl = res.login_url
                    ? res.login_url.replace(/^(.+)\?(.*)/, '$1')
                    : 'https://passport-ykj-test.myfuwu.com.cn/auth/login';
                location.href = loginUrl + '?returnUrl=' + decodeURIComponent(location.origin);
            }
            return res;
        }
    },
    () => {
        // Message.error('网络请求异常，请稍后重试!');
    }
);
export default service;
