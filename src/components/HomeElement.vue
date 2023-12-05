<template>
  <div class="head-screen body">
    <div class="background-container">
      <MainHeader
        ref="mainHeader"
      />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 button-link">
            <GlassButton title="Commercal" />
          </div>
          <div class="col-12 col-lg-4 button-link">
            <GlassButton title="Residential" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import GlassButton from './GlassButton.vue'
export default {
  components: {
    MainHeader,
    GlassButton
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const mainHeader = this.$refs.mainHeader
      if (mainHeader) {
        if (window.scrollY > 0) {
          mainHeader.$el.classList.add('fixed-header')
        } else {
          mainHeader.$el.classList.remove('fixed-header')
        }
      }
    }
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}

.head-screen {
  height: 100vh;
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: slideImages 30s infinite linear;
  background-size: cover;
}

@keyframes slideImages {
  0% {
      background-image: url('/public/images/backround_img/image_backround_one.jpg');
  }
  25% {
      background-image: url('/public/images/backround_img/image_backround_two.jpg');
  }
  50% {
      background-image: url('/public/images/backround_img/image_backround_three.jpg');
  }
  75% {
      background-image: url('/public/images/backround_img/image_backround_four.jpg');
  }
  100% {
      background-image: url('/public/images/backround_img/image_backround_five.jpg');
  }
}

@media (max-width: 768px) {
  .background-container {
    background-image: url('/public/images/backround_img/head_screen_mobile.png');
    animation: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.container-fluid {
   position: absolute;
  bottom: 13rem;
  left: 0;
  width: 100%;
}

</style>
