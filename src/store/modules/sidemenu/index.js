import * as types from '../../mutation-types';

const state = {
  sidebar: {
    opened: false,
  },
};

const mutations = {
  [types.TOGGLE_SIDEBAR](State, opened) {
    State.sidebar.opened = opened;
  },
};

export default {
  state,
  mutations,
};
