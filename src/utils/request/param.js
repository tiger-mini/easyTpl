/*
 * @Author: zhanxuwen
 * @Date: 2022/3/8 14:27
 * @LastEditors: zhanxuwen
 * @LastEditTime: 2022/3/8 14:27
 * @Description: 将查询参数加到url
 */
export default function param(paramData) {
    let key;
    let val;
    const params = [];
    const escape = window.encodeURIComponent;
    if (!paramData || typeof paramData !== 'object') {
        return '';
    }

    params.add = function (k, v) {
        this.push(`${escape(k)}=${escape(v)}`);
    };

    for (key in paramData) {
        if (Object.prototype.hasOwnProperty.call(paramData, key)) {
            val = paramData[key];
            if (val === undefined || val === null) val = '';
            params.add(key, val);
        }
    }

    return params.join('&');
}