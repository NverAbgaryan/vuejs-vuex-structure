import adminState from '@/components/admin/adminStore';
import userState from '@/components/user/userStore';


const state = Object.assign({}, adminState.state, userState.state);
const getters = Object.assign({}, adminState.getters, userState.getters);
const mutations = Object.assign({}, adminState.mutations, userState.mutations);
const actions = Object.assign({}, adminState.actions, userState.actions);

export default {
  state,
  getters,
  mutations,
  actions,
};
