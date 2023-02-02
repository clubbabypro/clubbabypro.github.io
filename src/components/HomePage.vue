<template>
  <div class="hello">
    <h1>{{ languages[language].home_welcome }}</h1>
    <p>
      {{ languages[language].home_team_description }}
    </p>
  </div>
</template>

<script>
import en from '../en'
import fr from '../fr'

export default {
  name: 'HomePage',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .hello {
      font-family: agency;
      font-size: 20px;
    }

  @media (max-width: 800px) {
    .hello {
      font-family: agency;
      font-size: 15px;
    }
  }

</style>
