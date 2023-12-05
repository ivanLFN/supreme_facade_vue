<template>
  <div class="home-element">
    <HomeElement />
  </div>
  <div class="activity-areas">
    <ServicesComponent />
  </div>
  <div class="why-us-screen">
    <WhyUs />
  </div>
  <div class="who-we-are-screen">
    <WhoWeAre />
  </div>
  <div class="ml-0 mr-0 main-footer">
    <MainFooter />
  </div>
</template>

<script>
import WhoWeAre from '@/components/WhoWeAre.vue'
import WhyUs from '@/components/WhyUs.vue'
import HomeElement from '@/components/HomeElement.vue'
import MainFooter from '@/components/MainFooter.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'

export default {
  components: {
    WhoWeAre,
    WhyUs,
    HomeElement,
    MainFooter,
    ServicesComponent
  }
}
</script>

<style scoped>
.why-us-screen {
  overflow-x: hidden;
  margin-top: 13rem;
}
@media (max-width: 768px) {
  .why-us-screen {
    margin-top: 3rem;
  }
}
.main-footer {
  margin-top: 18vh;
}
</style>
