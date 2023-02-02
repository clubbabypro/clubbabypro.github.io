// store.js
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    language: 'en'
  },
  mutations: {
    changeLanguage (state, language) {
      state.language = language
    }
  }
})

export default store