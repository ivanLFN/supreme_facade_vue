<template>
  <MainHeader
    ref="mainHeader"
    :link-border-color="'#4d4d4d'"
    :image-src="'/images/supreme_logo.png'"
  />
  <div class="mx-3 mx-lg-5 px-lg-4">
    <div class="header-text">
      Changing page content
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="ml-lg-5 pl-lg-3 pr-lg-5 mt-5">
    <div class="d-flex align-items-start accordion">
      <div
        id="v-pills-tab"
        class="nav flex-column nav-pills me-3"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          id="v-pills-home-tab"
          class="nav-button active"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Home Page
        </button>
        <button
          id="v-pills-services-tab"
          class="nav-button"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-services"
          type="button"
          role="tab"
          aria-controls="v-pills-services"
          aria-selected="false"
        >
          Services
        </button>
        <button
          id="v-pills-aboutus-tab"
          class="nav-button"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-aboutus"
          type="button"
          role="tab"
          aria-controls="v-pills-aboutus"
          aria-selected="false"
        >
          About Us
        </button>
        <button
          id="v-pills-portfolio-tab"
          class="nav-button"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-portfolio"
          type="button"
          role="tab"
          aria-controls="v-pills-portfolio"
          aria-selected="false"
        >
          Portfolio
        </button>
        <button
          id="v-pills-contact-tab"
          class="nav-button"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-contact"
          type="button"
          role="tab"
          aria-controls="v-pills-contact"
          aria-selected="false"
        >
          Contact
        </button>
      </div>
      <div
        id="v-pills-tabContent"
        class="tab-content"
      >
        <div
          id="v-pills-home"
          class="tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <HomeTabAdmin class="ml-5" />
        </div>
        <div
          id="v-pills-services"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="v-pills-services-tab"
        >
          <ServicesTabAdmin class="ml-5" />
        </div>
        <div
          id="v-pills-aboutus"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="v-pills-aboutus-tab"
        >
          <AboutUsTabAdmin />
        </div>
        <div
          id="v-pills-portfolio"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="v-pills-portfolio-tab"
        >
          Portfolio area
        </div>
        <div
          id="v-pills-contact"
          class="tab-pane fade"
          role="tabpanel"
          aria-labelledby="v-pills-contact-tab"
        >
          Contact area
        </div>
      </div>
    </div>
  </div>
  <MainFooter
    id="main-footer"
    class="main-footer"
  />
</template>
<script>
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'
import HomeTabAdmin from '@/components/HomeTabAdmin.vue'
import ServicesTabAdmin from '@/components/ServicesTabAdmin.vue'
import AboutUsTabAdmin from '@/components/AboutUsTabAdmin.vue'

export default {
  components: {
    MainFooter,
    MainHeader,
    HomeTabAdmin,
    ServicesTabAdmin,
    AboutUsTabAdmin
  },
  mounted () {
    localStorage.setItem('expirationTime', new Date().getTime() + this.$authenticationTime * 60 * 1000)
  }
}
</script>

<style>
.main-footer {
  margin-top: 18vh;
}

.header-text {
  text-align: start;
  font-size: 4rem;
  margin-top: 5.7rem;
}

@media (max-width: 768px) {
  .header-text {
    font-size: 12vw;
  }
}

.nav-button {
  text-align: center !important;
  font-size: 1.8rem !important;
  border: 2px solid #212529;
  border-radius: 30px;
  background-color: white;
  margin-bottom: 2rem;
  padding: 0 40px;
}

.accordion {
  margin-top: 6rem;
}

.nav-pills .nav-button.active {
    background-color: #494d51;
    color: white;
}

</style>

<style src="../../public/styles.css"></style>
