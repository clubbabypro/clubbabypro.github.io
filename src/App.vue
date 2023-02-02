<template>
  <div id="app">
    <div class="content">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <h3><router-link to="/">{{ languages[language].home }}</router-link></h3>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <h5><router-link to="/hotpursuit">HotPursuit</router-link></h5>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <h5><b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item v-on:click="changeLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item v-on:click="changeLanguage('fr')">FR</b-dropdown-item>
            </b-nav-item-dropdown></h5>
          </b-navbar-nav>
      </b-navbar>

    </div>
    <router-view/>
    <main class="content" />
    <footer class="bg-light text-center">
      <b-container>
        <b-row>
          <b-col>
            <p>Copyright ©2023 Club Baby Pro</p>
          </b-col>
          <b-col class="text-right">
            <b-link href="https://play.google.com/store/apps/details?id=com.ClubBabyPro.HotPursuit" target="_blank" rel="noopener" class="text-decoration-none social-link">
              <font-awesome-icon :icon="['fab', 'google-play']"></font-awesome-icon>
            </b-link>
            <b-link href="https://github.com/clubbabypro" target="_blank" rel="noopener" class="text-decoration-none social-link">
              <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
            </b-link>
            <b-link href="mailto:club.babypro@gmail.com" target="_blank" rel="noopener" class="text-decoration-none social-link">
              <font-awesome-icon :icon="['fa', 'envelope']"></font-awesome-icon>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
import en from './en'
import fr from './fr'

export default {
  data () {
    return {
      languages: {
        en,
        fr
      }
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$store.commit('changeLanguage', lang)
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100vh;

  }

  .content {
    flex: 1;
  }

  nav {
    padding: 30px;

    a {
      // font-weight: bold;
      color: #fcfcfc;
      font-family: fightt;
      &.router-link-exact-active {
        color: #ffffff;
      }
    }
    .navbar-nav {
      padding-left:30px;
      padding-right:50px;
    }
    .navbar-brand {
      padding-left:40px;
    }
  }

  .social-link {
    margin-right: 15px;
  }
</style>
