const state = {
  token: '',
}

const mutations = {
  
}

const actions = {
  login(_, userinfo) {
    const { username, password } = userinfo
    console.log('login', username, password)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}