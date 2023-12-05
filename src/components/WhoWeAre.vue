<template>
  <div>
    <div class="title-screen ml-lg-5 pl-lg-5">
      <div class="align-items-center d-flex">
        <div class="col-lg-11">
          <div class="title-first">
            Who <span style="color: #c52729;">we</span> are
          </div>
        </div>
        <router-link
          to="/who_we_are"
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
    </div>``
    <SectionLine style="margin-top: -20px;" />
    <div class="row ml-3 mr-3 mt-5">
      <div class="col-lg-4">
        <img
          class="pt-5 pl-5"
          src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/construction_crew.jpeg?alt=media&token=37d2a76b-d187-497b-9532-0c50f02a0218&_gl=1*1p7f9co*_ga*MTkyNjUwNjY3Mi4xNjk2MDYyMDM1*_ga_CW55HF8NVT*MTY5ODEyNzUyMi41LjEuMTY5ODEyODI2MC41Ny4wLjA."
          style="width: 100%;"
        >
      </div>
      <div class="text-about-us col-lg-7 mt-2  pt-3 pl-5">
        Are you looking to enhance the aesthetics, energy efficiency, and overall functionality of your commercial or residential property? Look no further than Supreme Facade Inc. We are your trusted partners for all things related to window systems and architectural glazing. With our extensive experience and commitment to excellence, we can turn your vision into reality.
        <div class="line-container mt-5">
          <div class="line" />
        </div>
        <div class="photo-description mt-4">
          By fostering strong relationships, providing value engineering, and offering innovative solutions, we empower our clients to navigate the challenges of complex projects with confidence.
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

.company-link {
  transition: transform 0.3s ease;
  transform-origin: center;
}

.company-link:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .company-link {
    margin-top: -40px;
  }
}

.text-about-us {
  font-size: 2.1em;
}

@media (max-width: 768px) {
  .title-first {
    margin-top: -40px;
  }
  .text-about-us {
    font-size: 2rem;
  }
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

.photo-description {
  font-size: 2.1rem;
  color: #707070;
}

@media (max-width: 768px) {
  .photo-description {
    font-size: 1.5rem;
  }
}

</style>
