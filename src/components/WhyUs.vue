<template>
  <div>
    <div class="title-screen ml-lg-5 pl-lg-5">
      <div class="align-items-center d-flex">
        <div class="col-lg-11">
          <div class="title-first">
            Why <span style="color: #c52729;">Supreme Facade</span> Inc.
          </div>
        </div>
        <router-link
          to="/what_we_do"
          class="company-link mr-4"
        >
          <img
            class="button-arrow"
            style="width: 4rem;"
            src="/images/right.png"
            alt="ButtonForward"
          >
        </router-link>
      </div>
    </div>
    <SectionLine />
    <div class="ml-lg-5 pl-lg-3 pr-lg-5 mt-5">
      <div class="align-items-center d-flex">
        <div
          class="col-lg-12"
          style="margin-top: 5vw;"
        >
          <div class="row">
            <div
              v-for="(workType, index) in workTypes"
              :key="index"
              class="col-lg-3 mb-5 link-container"
            >
              <router-link
                :to="{ name: 'WhatWeDoPage', params: { showComponent: workType.to } }"
                class="work-type card-link"
              >
                <img
                  :src="workType.imageSrc"
                  class="w-100"
                  alt="work type"
                >
                <div class="line-container mt-3">
                  <div class="line" />
                </div>
                <div class="row mt-2">
                  <div class="ml-3">
                    {{ workType.name }}
                  </div>
                  <img
                    v-if="workType.isHovered"
                    src="/images/work_types/arrow_animate.gif"
                    alt="GIF work type"
                    class="gif-on-hover ml-3"
                  >
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row ml-3 mr-3 mt-5 mb-lg-5">
      <div class="col-lg-4" />
      <div class="text-about-work col-lg-7 mt-lg-5 pt-3">
        We excel in the supply and installation of top-of-the- line cladding and glazing systems, catering to the distinctive needs of high-rise buildings, institutional facilities, and industrial structures.
        <div class="line-container mt-5">
          <div class="line" />
        </div>
        <div class="description mt-4">
          Our commitment to excellence ensures that we deliver superior solutions for each project, seamlessly combining aesthetics, functionality, and durability.
        </div>
      </div>
    </div>
  </div>
  <div
    class="d-flex justify-content-center align-items-center"
    style="margin-top: 8rem;"
  >
    <router-link
      to="/contact"
      class="contact-us-link"
    >
      Contact us
    </router-link>
  </div>
  <div
    class="container-xl"
    style="margin-bottom: 8rem;"
  />
</template>
<script>
import SectionLine from '@/components/SectionLine.vue'

export default {
  components: {
    SectionLine
  },
  data () {
    return {
      workTypes: [
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/works_type%2Fwhy_us_0.jpeg?alt=media&token=e85c760c-367c-4d21-9014-0148e87ad46a&_gl=1*y9od32*_ga*MTMzOTUxOTk5OC4xNjk1OTY3Mzkw*_ga_CW55HF8NVT*MTY5NTk3Nzk1OC4yLjEuMTY5NTk3ODA5MS42MC4wLjA.',
          name: 'Expertise and Experience',
          to: 'ExpertiseBlock',
          isHovered: false
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/works_type%2Fwhy_us_1.jpeg?alt=media&token=9f37350f-b8af-4a75-b3fb-d4e646547154&_gl=1*1if0rwl*_ga*MTMzOTUxOTk5OC4xNjk1OTY3Mzkw*_ga_CW55HF8NVT*MTY5NTk3Nzk1OC4yLjEuMTY5NTk3ODE1Mi42MC4wLjA.',
          name: 'Custom Solutions',
          to: 'SolutionsBlock',
          isHovered: false
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/works_type%2Fwhy_us_2.jpeg?alt=media&token=0901666b-2f91-4dd3-bae2-fc8d6758d2a5&_gl=1*10zgcuh*_ga*MTMzOTUxOTk5OC4xNjk1OTY3Mzkw*_ga_CW55HF8NVT*MTY5NTk3Nzk1OC4yLjEuMTY5NTk3ODE3MC40Mi4wLjA.',
          name: 'Energy Efficiency',
          to: 'EfficiencyBlock',
          isHovered: false
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/works_type%2Fwhy_us_3.jpeg?alt=media&token=20683634-bc30-470a-a953-e5e46b988b96&_gl=1*1plx51d*_ga*MTMzOTUxOTk5OC4xNjk1OTY3Mzkw*_ga_CW55HF8NVT*MTY5NTk3Nzk1OC4yLjEuMTY5NTk3ODE4NS4yNy4wLjA.',
          name: 'Quality Materials',
          to: 'MaterialsBlock',
          isHovered: false
        }
      ],
      coreValues: ['Commitment', 'Respect', 'Integrity'],
      currentIndex: 0,
      currentWord: '',
      isHovered: false
    }
  }
}
</script>

<style scoped>
.button-arrow {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .button-arrow {
    max-width: 80%;
  }

}

.title-screen {
  font-size: 5rem;
  align-items: center;
}

@media (max-width: 768px) {
  .title-screen {
    font-size: 2.5rem !important;
  }
}

.container-xl {
  margin-top: 20vh;
}

@media (max-width: 768px) {
  .container-xl {
    margin-top: 10vh;
  }
}

.company-link {
  transition: transform 0.3s ease;
  transform-origin: center;
}

.company-link:hover {
  transform: scale(1.1);
}

.line-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  height: 1px;
  background-color: #e0e0e0;
  width: 100%;
}

.work-type {
  font-size: 2rem;
  color: black;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.text-about-work {
  font-size: 2.1rem;
}

.description {
  font-size: 2.1rem;
  color: #707070;
}

@media (max-width: 768px) {
  .text-about-work {
    font-size: 2rem;
  }

  .description {
    font-size: 1.3rem;
  }
}

.contact-us-link {
  font-size: 2.1rem !important;
  border: 1px solid #c52729;
  border-radius: 70px;
  padding: 25px 160px !important;
  color: white !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.8s ease;
  transform-origin: center;
  background-color: #c52729;
  text-decoration: none;
}

@media (max-width: 768px) {
  .contact-us-link {
    padding: 20px 100px !important;
    font-size: 2rem !important;
  }
}

.contact-us-link:hover {
  transform: scale(0.95);
}

.link-container {
  font-size: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-link {
  color: rgb(0, 0, 0);
  text-decoration: none;
  position: relative;
}

.card-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%;
  height: 2px;
  background-color: rgb(0, 0, 0);
  transition: right 0.3s ease-out;
}

.card-link:hover::before {
  right: 0;
}
</style>
