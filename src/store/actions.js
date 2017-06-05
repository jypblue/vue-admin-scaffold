import * as types from './mutation-types';

export const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened);
