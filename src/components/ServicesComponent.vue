<template>
  <div class="title-screen ml-lg-5 pl-lg-5">
    <div class="align-items-center d-flex">
      <div class="col-lg-11">
        <div class="title-first">
          Services
        </div>
      </div>
      <router-link
        to="/services"
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
              :to="{ name: 'ServicesPage', params: { showComponent: workType.to } }"
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
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/services%2F%D1%81ommercial.jpeg?alt=media&token=c3f7f133-206c-44db-af69-3b9558a58b66&_gl=1*1r9tz3q*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM4MTY2My45LjEuMTY5ODM4MTc5My4xNi4wLjA.',
          name: 'Commercial',
          to: 'Commercial',
          isHovered: false
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/services%2Fresidential.jpeg?alt=media&token=53fccedc-c22c-40cd-89f7-004dcb998360&_gl=1*9c9b6l*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM4MTY2My45LjEuMTY5ODM4MTg0OS42MC4wLjA.',
          name: 'Residential',
          to: 'Residential',
          isHovered: false
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/services%2Fglazing-solution.jpeg?alt=media&token=2919f568-3c18-4733-8deb-6e70f224fa96&_gl=1*14zcxfo*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM4MTY2My45LjEuMTY5ODM4MTkwOC4xLjAuMA..',
          name: 'Glazing Solution',
          to: 'Glazing-Solution',
          isHovered: false
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/services%2Fcurtain-walls.jpeg?alt=media&token=0b7eac68-96a1-4733-b5fd-6da884c5c413&_gl=1*1ahiycm*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODM4MTY2My45LjEuMTY5ODM4MTkyNC40NS4wLjA.',
          name: 'Curtain walls',
          to: 'Curtain-walls',
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
  margin-top: 13rem;
  font-size: 5rem;
  align-items: center;
}

@media (max-width: 768px) {
  .title-screen {
    font-size: 2.5rem !important;
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
