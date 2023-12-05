<template>
  <div>
    <MainHeader
      ref="mainHeader"
      :link-border-color="'#4d4d4d'"
      :image-src="'/images/supreme_logo.png'"
    />
  </div>
  <div class="mx-3 mx-lg-5 px-lg-4">
    <div class="header-text">
      What <span style="color: #c52729;">we do</span>
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="mx-3 mx-lg-5 px-lg-4 mt-5">
    <div id="ExpertiseBlock">
      <div class="row">
        <div
          class="col-lg-4 mt-3"
          style="font-size: 2.5rem;"
        >
          Expertise and Experience
        </div>
        <div class="text-about-work col-lg-7 pt-3">
          At Supreme Facade Inc., we specialize in both commercial and residential projects. Our team of professionals brings years of expertise to every job, ensuring your project is in the hands of knowledgeable and skilled experts.
          <div
            class="row"
            style="margin-top: 4vw;"
          >
            <div class="col-lg-6 mb-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fexpertise_1.jpeg?alt=media&token=e5583a25-1378-4bf7-a2f7-4999b0a65b57&_gl=1*a4guyq*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM0NTA1MS44LjEuMTY5ODM0NTA4OC4yMy4wLjA."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Waterfront by Bosa, Vancouver, BC
              </h3>
            </div>
            <div class="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fexpertise_2.jpeg?alt=media&token=42a44a56-b9fc-4313-a2a4-cdebb295dd40&_gl=1*1ck7z1o*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM0NTA1MS44LjEuMTY5ODM0NTE0OS42MC4wLjA."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Telus Sky, AB
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-container mt-5">
      <div
        class="line "
        style="margin-top: 10vw;"
      />
    </div>
    <div id="SolutionsBlock">
      <div class="row">
        <div
          class="col-lg-4 mt-3"
          style="font-size: 2.5rem;"
        >
          Custom Solutions
        </div>
        <div class="text-about-work col-lg-7 pt-3">
          We understand that each project is unique, and we take pride in delivering tailored solutions to meet your specific needs. Whether you're looking for sleek, modern windows for a commercial building or elegant architectural glazing for your dream home, we have you covered.
          <div
            class="row"
            style="margin-top: 4vw;"
          >
            <div class="col-lg-6 mb-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fcustomer_1.jpeg?alt=media&token=013d67ea-047c-4b76-a147-f61d2db3750e&_gl=1*pon0gm*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2NjgxNi4yLjEuMTY5NjA2ODA1MS41NC4wLjA."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Waterfront by Bosa, Vancouver, BC
              </h3>
            </div>
            <div class="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fcustomer_2.jpeg?alt=media&token=d04a97a7-2755-4064-8b33-c25f8b09a108&_gl=1*ilp4ar*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2NjgxNi4yLjEuMTY5NjA2ODA5MC4xNS4wLjA."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Telus Sky, AB
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-container mt-5">
      <div
        class="line "
        style="margin-top: 10vw;"
      />
    </div>
    <div id="EfficiencyBlock">
      <div class="row">
        <div
          class="col-lg-4 mt-3"
          style="font-size: 2.5rem;"
        >
          Energy Efficiency
        </div>
        <div class="text-about-work col-lg-7 pt-3">
          Our commitment to sustainability means we offer energy-efficient solutions. Installing our window systems and architectural glazing can help you reduce energy costs and make your space more eco-friendly.
          <div
            class="row"
            style="margin-top: 4vw;"
          >
            <div class="col-lg-6 mb-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fenergy_1.jpeg?alt=media&token=2c7d6c5b-e140-4c3a-9de0-0927a90070d9&_gl=1*a6tcrm*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2NjgxNi4yLjEuMTY5NjA2ODczNC43LjAuMA.."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Waterfront by Bosa, Vancouver, BC
              </h3>
            </div>
            <div class="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fenergy_2.jpeg?alt=media&token=92ee7981-2c32-41de-8768-41e5f4d216b9&_gl=1*8ccywd*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2NjgxNi4yLjEuMTY5NjA2ODc1NS42MC4wLjA."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Telus Sky, AB
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line-container mt-5">
      <div
        class="line "
        style="margin-top: 10vw;"
      />
    </div>
    <div id="MaterialsBlock">
      <div class="row">
        <div
          class="col-lg-4 mt-3"
          style="font-size: 2.5rem;"
        >
          Quality Materials
        </div>
        <div class="text-about-work col-lg-7 pt-3">
          We source only the finest materials for our projects. Expect top-tier products that not only look great but also stand the test of time.
          <div
            class="row"
            style="margin-top: 4vw;"
          >
            <div class="col-lg-6 mb-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fmaterials_1.jpeg?alt=media&token=0cde7ce2-d046-44db-bfcb-fcffd051aa0e&_gl=1*1iu0kr5*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2NjgxNi4yLjEuMTY5NjA2OTEzOS4yMy4wLjA."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Waterfront by Bosa, Vancouver, BC
              </h3>
            </div>
            <div class="col-lg-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/what_we_do%2Fmaterials_2.jpeg?alt=media&token=2b92104c-030a-40d5-9c58-1572a7ea227b&_gl=1*1lu87vt*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5NjA2NjgxNi4yLjEuMTY5NjA2OTE1Ny41LjAuMA.."
                alt="worker"
                class="custom-img w-100"
              >
              <h3 class="mt-4">
                Telus Sky, AB
              </h3>
            </div>
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
import { scrollTo } from 'vue-scrollto'

export default {
  name: 'WhatWeDoPage',
  components: {
    MainHeader,
    MainFooter
  },
  computed: {
    receivedValue () {
      return this.$route.params.showComponent
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    const elementId = this.$route.params.showComponent
    if (elementId) {
      this.scrollToElement(elementId)
    }
  },
  methods: {
    scrollToElement (elementId) {
      scrollTo(`#${elementId}`, 1000, { offset: -300 })
    },
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
    font-size: 4rem;
    margin-top: 5vw
}

@media (max-width: 768px) {
    .header-text {
        font-size: 12vw;
    }
}

.title-first {
    margin-top: -100px;
}

@media (max-width: 768px) {
    .title-first {
        margin-top: -40px;
    }
}

.text-about-work {
    font-size: 2.1em;
}

@media (max-width: 768px) {
    .text-about-work {
        font-size: 2rem;
    }
}

</style>
