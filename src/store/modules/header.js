const state = {
    isHiddenGlobalHeader: false, // 隐藏全局导航
    title: '首页', // header 名称
    isShowLeftIcon: false, // 显示左侧返回
    rightTemp: [] // 右侧放置显示的图标或文字按钮
};

const mutations = {
    SET_HIDDEN_GLOBAL_HEADER: (state, result) => {
        state.isHiddenGlobalHeader = result;
    },
    SET_TITLE: (state, title) => {
        state.title = title;
    },
    SET_RIGHT_TEMP: (state, data) => {
        state.rightTemp = data;
    }
};

const actions = {
    setHiddenGlobalHeader({commit}, result) {
        commit('SET_HIDDEN_GLOBAL_HEADER', result);
    },
    setTitle({commit}, title) {
        commit('SET_TITLE', title);
    },
    setRightTemp({commit}, data) {
        commit('SET_RIGHT_TEMP', data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}