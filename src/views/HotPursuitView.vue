<template>
  <HotPursuit msg="This is about HotPursuit Game"/>
  <!-- <div class="about">
    <h1>This is about HotPursuit Game</h1>
    
  </div> -->
</template>

<script>
// @ is an alias to /src
import HotPursuit from '@/components/HotPursuitGame.vue'

export default {
  name: 'HotPursuitView',
  components: {
    HotPursuit
  }
}
</script>