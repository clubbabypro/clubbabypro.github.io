<template>
    <div>
      <!-- background image -->
        <b-img :src="require('@/assets/home.jpg')" fluid alt="Responsive image"></b-img>
        <!-- <img alt="Responsive image" class="img-fluid" src="https://clubbabypro.github.io/hotpursuit/img/home.jpg"> -->
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