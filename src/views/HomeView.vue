<template>
  <div class="home">
    <img alt="Vue logo" width="200" height="200" src="../assets/logo_cbp.png">
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/components/HomePage.vue'
export default {
  name: 'HomeView',
  components: {
    HomePage
  },
}
</script>
