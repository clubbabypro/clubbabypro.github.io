<template>
    <div>
      <!-- background image -->
        <b-img src="../assets/home.jpg" fluid alt="Responsive image"></b-img>

      <p></p>
    </div>
  </template>
  
<script>
    export default {
    name: 'HotPursuitBG ',
    data() {
        return {
        hidden: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
        if (window.pageYOffset > 0) {
            this.hidden = true;
        } else {
            this.hidden = false;
        }
        },
    },
    };
</script>

<style>
    .disappear {
        display: none;
    }
</style>