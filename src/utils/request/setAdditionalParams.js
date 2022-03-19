/*
 * @Author: zhanxuwen
 * @Date: 2022/3/8 14:11
 * @LastEditors: zhanxuwen
 * @LastEditTime: 2022/3/8 14:11
 * @Description:
 */

import param from "./param";

/**
 * 配置额外的请求参数
 * @param path 路径
 * @param paramsData? 请求参数
 */
export default (path, paramsData = {}) => {
    const requestParams = {...paramsData};
    requestParams.t = `${new Date().getTime()}`;
    const params = param(requestParams); const paramsUrl = path.includes('?') ? `${path}&${params}` : `${path}?${params}`;
    return paramsUrl;
}