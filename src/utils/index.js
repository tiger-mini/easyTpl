import ConstantConfig from '@constants/index';

/**
 * 货币格式化 123456.00 为 123,456.00
 * @param value
 * @param decimal 小数
 * @returns {string|*}
 */
function formatMoney(value, decimal = 2) {
    if (value) {
        const val = (value / 1).toFixed(decimal).replace(',', '.');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return value;
}

/**
 * 获取localstorage中存储的token值
 * @returns {string}
 */
function getToken() {
    // return '49152084e904c92b70b4a9d82ac420d9c7d72a4d';
    return window.localStorage.getItem(ConstantConfig.TOKEN);
}

/**
 * 获取localstorage中存储的tenant_code值
 * @returns {string}
 */
function getTenantCode() {
    // return 'alpha';
    return window.localStorage.getItem(ConstantConfig.TENANT_CODE);
}

/**
 * 获取localstorage中存储的user值
 */
export const getUserInfo = () => {
    const userInfoStr = window.localStorage.getItem(ConstantConfig.APP_CONTEXT_USER);
    return userInfoStr ? JSON.parse(userInfoStr).value : {};
};

export default {
    formatMoney,
    getTenantCode,
    getToken,
};
