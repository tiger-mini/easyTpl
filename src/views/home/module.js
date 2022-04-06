import request from '@utils/request/request';
import dayjs from 'dayjs';

import { homeAPiXXX } from './api';
export const MODULE_NAME = 'home-list';

/**
 * mutations name
 */
const SET_FILTER_PARAMS = 'SET_FILTER_PARAMS';
const GET_LIST = 'GET_LIST';
const SET_TOTAL = 'SET_TOTAL';
const SET_PAGE = 'SET_PAGE';
const SET_RESET = 'SET_RESET';

/**
 * action name
 */
export const GetListAction = `${MODULE_NAME}_getList`;
export const SetTotalAction = `${MODULE_NAME}_setTotal`;
export const SetPageAction = `${MODULE_NAME}_setPage`;
export const ResetAction = `${MODULE_NAME}_setReset`;
export const SetFilterParamsAction = `${MODULE_NAME}_setFilterParams`;
export const setFilterResetAction = `${MODULE_NAME}_setFilterReset`;

const initState = {
    filterParams: {
        // 公司
        companyValues: { company_name: '全部公司', company_id: '' },
        // 租客
        renterValues: { renter_name: '', renter_id: '' },
        // 资源
        project_id_list: [],
        subdistrict_id_list: [],
        building_id_list: [],
        floor_id_list: [],
        room_id_list: [],
        // 显示已选择的资源名称 用于回显
        showProjectSelected: '',
        // 逾期时间
        dates: [],
    },
    page: 1,
    page_size: 20,
    total: 0,
    list: [],
};

const mutations = {
    [SET_FILTER_PARAMS](state, payload) {
        state.filterParams = {
            ...state.filterParams,
            ...payload,
        };
    },
    [GET_LIST]: (state, list) => {
        state.list = list;
    },
    [SET_TOTAL]: (state, total) => {
        state.total = total;
    },
    [SET_PAGE]: (state, pageNumber) => {
        state.page = pageNumber;
    },
    [SET_RESET]: (state) => {
        state.page = 1;
        state.page_size = 20;
        state.total = 0;
        state.list = [];
    },
};

const actions = {
    [GetListAction]({ commit, state }) {
        const filterParams = state.filterParams;
        const bodyParams = {
            company_id: filterParams.companyValues.company_id,
            renter_id: filterParams.renterValues.renter_id,
            project_id_list: filterParams.project_id_list,
            subdistrict_id_list: filterParams.subdistrict_id_list,
            building_id_list: filterParams.building_id_list,
            floor_id_list: filterParams.floor_id_list,
            room_id_list: filterParams.room_id_list,
            deadline_start_date: filterParams.dates[0] ? dayjs(filterParams.dates[0]).format('YYYY-MM-DD') : '',
            deadline_end_date: filterParams.dates[1] ? dayjs(filterParams.dates[1]).format('YYYY-MM-DD') : '',
            page_num: state.page,
            page_size: state.page_size,
        };
        return request.post(homeAPiXXX, bodyParams).then(({ flag, data }) => {
            if (flag) {
                // 数据预处理
                const responseList = data.list;
                const _list = state.page === 1 ? [...responseList] : [...state.list, ...responseList];
                commit(GET_LIST, _list);
                commit(SET_TOTAL, data.total);
                commit(SET_PAGE, state.page + 1);
            }
        });
    },
    [SetTotalAction]({ commit }, total) {
        commit(SET_TOTAL, total);
    },
    [SetPageAction]({ commit }, pageNumber) {
        commit(SET_PAGE, pageNumber);
    },
    [ResetAction]({ commit }) {
        commit(SET_RESET);
    },
    [SetFilterParamsAction]({ commit }, payload) {
        commit(SET_FILTER_PARAMS, payload);
    },
    [setFilterResetAction]({ commit }) {
        commit(SET_FILTER_PARAMS, { ...initState.filterParams });
    },
};

export default {
    namespaced: true,
    name: MODULE_NAME,
    state: { ...initState },
    mutations,
    actions,
};
