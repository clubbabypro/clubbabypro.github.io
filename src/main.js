import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
// import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/sass/style.scss'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faInstagram, faGooglePlay, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faFacebook, faTwitter, faInstagram, faGooglePlay, faGithub, faGoogle, faEnvelope)

Vue.use(Vuex)

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

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')



