<template>
    <b-carousel
        id="carousel-fade"
        class="d-flex align-items-center"
        style="text-shadow: 0px 0px 2px #000"
        fade
        img-fluid
        img-src="16by9"
        :interval="3000"
    >
        <b-carousel-slide
        img-src="../assets/pickup.png"
        ></b-carousel-slide>
        <b-carousel-slide
        img-src="../assets/sport.png"
        ></b-carousel-slide>
        <b-carousel-slide
        img-src="../assets/camion.png"
        ></b-carousel-slide>
    </b-carousel>
</template>
  
<script>
  export default {
    name: 'VehiculesSlider',
    // data() {
    //     return {
    //     currentIndex: 0,
    //     slides: [
    //         { imgSrc: require("@/assets/pickup.png"), imgAlt: 'Image 1'},
    //         { imgSrc: require("@/assets/sport.png"), imgAlt: 'Image 2'},
    //         { imgSrc: require("@/assets/camion.png"), imgAlt: 'Image 3'}
    //     ]
    //     }
    // }
  };
</script>
  
<style>
  #carousel-fade {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 800px) {
    #carousel-fade {
      height: 150px;
    }
  }
</style>