<template>
  <div>
    <MainHeader
      ref="mainHeader"
      :link-border-color="'#4d4d4d'"
      :image-src="'/images/supreme_logo.png'"
    />
  </div>
  <div class="mx-3 mx-lg-5 px-lg-4 mt-5">
    <div class="header-text">
      Portfolio
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
    <GalleryComponent />
  </div>

  <div
    class="mx-0"
    style="margin-top: 10vw;"
  >
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import GalleryComponent from '@/components/GalleryComponent.vue'

export default {
  components: {
    MainHeader,
    MainFooter,
    GalleryComponent
  },
  mounted () {
    this.slideWidth = this.$el.offsetWidth
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
    },
    prevSlide () {
      this.translateValue += this.slideWidth
      this.checkBounds()
    },
    nextSlide () {
      this.translateValue -= this.slideWidth
      this.checkBounds()
    },
    checkBounds () {
      const maxTranslate = -this.$el.scrollWidth + this.slideWidth
      if (this.translateValue > 0) {
        this.translateValue = 0
      } else if (this.translateValue < maxTranslate) {
        this.translateValue = maxTranslate
      }
    }
  }
}
</script>

<style scoped>
.line-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  height: 1px;
  background-color: #999999;
  width: 100%;
}

.header-text {
  font-size: 5rem;
  margin-top: 5.7rem !important;
}

@media (max-width: 768px) {
  .header-text {
      font-size: 12vw;
  }
}

.image-item {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.image-item:hover {
  transform: scale(1.2);
}

</style>
