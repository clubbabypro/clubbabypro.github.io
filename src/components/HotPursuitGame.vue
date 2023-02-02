<template>
    <div class="about">
      <HotPursuitBG/>
      <b-container> 
        <b-row>
          <b-col class="d-flex align-items-center">
            <div>
              <b-img :src="require('@/assets/in_game_phone.png')" fluid alt="Responsive image"></b-img>
            </div>
          </b-col>
          <b-col class="d-flex align-items-center">
            <div>
              <b-row><p class="font-weight-bold">{{ languages[language].game_description_title }}</p></b-row>
              <b-row><p class="my-auto">{{ languages[language].game_description }}</p></b-row>
            </div>
            </b-col>
        </b-row>
      </b-container>
      <hr>
      <b-container> 
        <b-row>
          <b-col class="d-flex align-items-center">
            <div>
              <b-row><p class="font-weight-bold">CUSTOMISATION</p></b-row>
              <b-row><p>{{ languages[language].game_customisation }}</p></b-row>
            </div>
          </b-col>
          <b-col>
            <VehiculesSlider />
          </b-col>
        </b-row>
      </b-container>
      <hr>
      <b-container class="download-button">
        <a href='https://play.google.com/store/apps/details?id=com.ClubBabyPro.HotPursuit&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img class="googleplay w-25" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
      </b-container>
    </div>
</template>

<script>
import en from '../en'
import fr from '../fr'
import HotPursuitBG from '@/components/BackGroundHotPursuit.vue'
import VehiculesSlider from '@/components/VehiculesSlider.vue'


export default {
  name: 'HotPursuit',
  props: {
    msg: String
  },
  components: {
    HotPursuitBG,
    VehiculesSlider,
  },
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

<style scoped lang="scss">
  .about {
    font-family: agency;
    font-size: 20px;
  }
  hr {
    margin-top: 3rem;
    margin-bottom: 3rem;
    border: 5;
    border-top: 1px solid rgba(0, 0, 0, 1);
  }
  .my_text {
    margin-top: auto;
    margin-bottom: auto;
  }
  .download-button {
    padding-bottom: 3rem; /* height of the footer */
  }
  @media (max-width: 800px) {
    .about {
      font-family: agency;
      font-size: 15px;
    }
  }
</style>
