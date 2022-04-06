export default {
    ACCOUNT: 'account',
    TOKEN: 'token',
    TENANT_CODE: 'tenantCode',
    APP_CONTEXT_USER: 'app-context-user',
};
// 1:保证金，2:意向金，3:租金 4：滞纳金，5：其他收入，6其他支出
export const ChargeType = {
    保证金: 1,
    意向金: 2,
    租金: 3,
    滞纳金: 4,
    其他收入: 5,
    其他支出: 6,
};

export const ChargeFeeStatus = {
    待收款: 2,
    已结清: 4,
};
