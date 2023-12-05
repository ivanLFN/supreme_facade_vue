<template>
  <div>
    <MainHeader
      ref="mainHeader"
      :link-border-color="'#4d4d4d'"
      :image-src="'/images/supreme_logo.png'"
    />
  </div>
  <div class="header mx-3 mx-lg-5 px-lg-4">
    <div class="header-text">
      Our <span style="color: #c52729;">story</span>
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="mx-3 mx-lg-5 px-lg-4">
    <div class="row">
      <div class="col-lg-6">
        <div class="img-crew col-12">
          <div class="image-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/crew_image.jpg?alt=media&token=4bd204ef-12b1-4f69-8dd8-1f2eee69dc0e&_gl=1*q9a6ze*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM5MTQ4NC4xMC4xLjE2OTgzOTE1OTQuNTcuMC4w"
              alt="crew_img"
              class="custom-img"
            >
            <div class="img-overlay">
              <p class="img-overlay-text">
                Since 2007
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-about-work col-lg-6 mt-5 pt-3">
        When you choose Supreme Facade Inc., you're choosing excellence in window systems and architectural glazing. Our team of experts is dedicated to providing you with tailored solutions that meet your specific needs. From design to installation, we ensure a seamless process and impeccable results.
        <div class="line-container mt-5 pt-5">
          <div class="line-short" />
        </div>
        <div
          class="desc"
          style="font-size: 2.1rem;"
        >
          Ready to transform your space with Supreme Facade Inc.?
        </div>
        <div
          class="desc"
          style="font-size: 2.1rem;"
        >
          Contact us today for a consultation. We'll discuss your project, offer expert guidance, and provide you with a customized quote. Elevate your commercial or residential property with our premier services.
        </div>
      </div>
    </div>
  </div>
  <div class="crew mx-3 mx-lg-5">
    <div class="header-text">
      Our <span style="color: #c52729;">team</span>
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
    <div class="row">
      <div class="col-lg-4" />
      <div class="text-about-work col-lg-7 mt-5 pt-3">
        At Supreme Facade Inc. we believe in utilizing the uniqueness of each team member to play their role at our company according to their strengths. We believe if a person works from the heart, it goes a long way towards achieving a successful outcome.
        <div
          class="row"
          style="margin-top: 10vw;"
        >
          <div class="col-lg-4 mb-3">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/no_image.png?alt=media&token=c0a92929-5b76-40f0-bd67-400d656f05de&_gl=1*1xb2bdm*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2MjAzNS4xLjEuMTY5NjA2MjA5Ny42MC4wLjA."
              alt="worker"
              class="custom-img"
            >
            <h2 class="mt-4">
              Sarah Johnson
            </h2>
            <h3 style="color: #727272;">
              Founder and CEO
            </h3>
          </div>
          <div class="col-lg-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/no_image.png?alt=media&token=c0a92929-5b76-40f0-bd67-400d656f05de&_gl=1*1xb2bdm*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2MjAzNS4xLjEuMTY5NjA2MjA5Ny42MC4wLjA."
              alt="worker"
              class="custom-img"
            >
            <h2 class="mt-4">
              Michael Rodriguez
            </h2>
            <h3 style="color: #727272;">
              Chief Operations Officer
            </h3>
          </div>
          <div class="col-lg-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/no_image.png?alt=media&token=c0a92929-5b76-40f0-bd67-400d656f05de&_gl=1*1xb2bdm*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2MjAzNS4xLjEuMTY5NjA2MjA5Ny42MC4wLjA."
              alt="worker"
              class="custom-img"
            >
            <h2 class="mt-4">
              Emily Clark
            </h2>
            <h3 style="color: #727272;">
              Lead Designer
            </h3>
          </div>
        </div>
      </div>
    </div>
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

export default {
  components: {
    MainHeader,
    MainFooter
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.scrollTo(0, 0)
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

data() {
    return {
      pageTitleValue: 'Заголовок страницы'
    };
  }
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

.line-short {
    height: 1px;
    background-color: #d9d9d9;
    width: 100%;
}

.header-text {
    font-size: 5rem;
}

@media (max-width: 768px) {
    .header-text {
        font-size: 2.5rem
    }
}

.text-about-work {
    font-size: 2.1rem;
}

@media (max-width: 768px) {
    .text-about-work {
        font-size: 2rem;
    }
}

.desc {
    color: #727272;
    margin-top: 2.1vw;
}

.title-photo {
    text-align: right;
    color: #c52729;
    font-size: 4vw;
    margin-top: 6vw;
    margin-bottom: 2vw;
}

@media (max-width: 768px) {
    .title-photo {
        font-size: 10vw;
    }
}

.custom-img {
    width: 100%;
    height: auto;
}

.crew {
    margin-top: 10vw;
}
.header {
    margin-top: 5.7rem;
}

@media (max-width: 768px) {
  .header {
    margin-top: 4rem;
  }
}

.img-crew {
  margin-top: 5rem;
}

.image-container {
  position: relative;
  overflow: hidden;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Цвет затемнения */
  opacity: 0;
  transition: opacity 0.5s; /* Добавляем плавность при появлении */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.img-overlay-text {
  color: white;
  font-size: 2.5rem;
  padding: 20px;
  z-index: 1;
}

.image-container:hover .img-overlay {
  opacity: 1;
}

</style>
