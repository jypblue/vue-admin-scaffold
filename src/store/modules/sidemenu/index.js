import * as types from '../../mutation-types'

const state = {
  sidebar: {
    opened: false
  }
}

const mutations = {
  [types.TOGGLE_SIDEBAR] (state, opened) {
    state.sidebar.opened = opened
  }
}

export default {
  state,
  mutations
}
