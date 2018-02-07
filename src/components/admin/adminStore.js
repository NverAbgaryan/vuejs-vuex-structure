export default {
  state: {
    adminName: 'Admin',
  },
  getters: {
    getAdminName(state) {
      return state.adminName
    },
  },
  mutations: {
    setAdminName(state, adminName) {
      state.name = adminName
    },
  },
  actions: {
    getAdmenInfo() {

    },
  },
}
