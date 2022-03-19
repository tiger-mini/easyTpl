/*
 * @Author: zhanxuwen
 * @Date: 2022/3/8 15:52
 * @LastEditors: zhanxuwen
 * @LastEditTime: 2022/3/8 15:52
 * @Description: 封装axios
 */
import axios from "axios";

import instance from './interceptor';
import setAdditionalParams from "./setAdditionalParams";

/**
 * 处理请求
 * @param url 请求地址
 * @param params 请求参数
 * @param method 请求方法
 * @param options 请求配置，针对本次请求
 * options = {
 *     loadingContainer: string; loading 展示地方的选择器，有值默认开启loading
 *     isShowError: boolean|undefined; 是否展示错误信息，为false时关闭
 * }
 * @param fetchOption axios配置信息，可增加额外配置
 */
function request(url, params, method, options= {}, fetchOption = {}) {
    let loadingInstance;
    // 请求前loading
    if (options.loadingContainer) {

    }

    return new Promise((resolve, reject) => {
        let data = {}
        // get请求使用params字段
        if(method =='get') {
            data = {params};
        }
        // post请求使用data字段
        if(method =='post') {
            data = {data: params};
        }
        instance({
            url: setAdditionalParams(url),
            method,
            ...data,
            ...fetchOption,
        }).then((res)=>{
            if(res.status === 0){
                resolve(res.data);
            }else{
                // 通过配置可关闭错误提示
                if(options.isShowError !== false) {

                }
                reject(res);
            }
        }).catch((error)=>{
            // 请求是否被取消
            if (axios.isCancel(error)) {
                console.log('Request canceled');
            } else {
                // 错误提示
                //  Toast.fail('失败文案');
            }
        }).finally(()=>{
            // 加载关闭
            // loadingInstance.close();
        })
    });
}

/**
 * 封装get请求
 * @param url
 * @param params
 * @param options
 * @param fetchOption
 * @returns {Promise<unknown>}
 */
function get(url, params, options = {}, fetchOption = {}) {
    return request(url, params, 'get', options, fetchOption);
}

/**
 * 封装post请求
 * @param url
 * @param params
 * @param options
 * @param fetchOption
 * @returns {Promise<unknown>}
 */
function post(url, params, options = {}, fetchOption = {}) {
    return request(url, params, 'post', options, fetchOption);
}

export default { get, post };
