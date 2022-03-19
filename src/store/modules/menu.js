const state = {
    footerMenuNames: ['home', 'report', 'me', 'about'], // 菜单名称
    active: 0, // 当前选中的菜单,
    isMenu: false, // 是否是主菜单
};

const mutations = {
    SET_ACTIVE: (state, index) => {
        state.active = index;
    },
    SET_IS_MENU: (state, result) => {
        state.isMenu = result;
    }
};

const actions = {
    setActive({commit}, count) {
        commit('SET_ACTIVE', count);
    },
    setIsMenu({commit}, result) {
        commit('SET_IS_MENU', result);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
