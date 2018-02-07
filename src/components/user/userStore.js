export default {
  state: {
    userName: 'User Name',
  },
  getters: {
    getUserName(state) {
      return state.userName
    },
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName
    },
  },
  actions: {
    getUserInfo() {

    },
  },
}
