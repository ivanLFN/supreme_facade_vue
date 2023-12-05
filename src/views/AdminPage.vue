<template>
  <div class="row header col-12 justify-content-between">
    <div class="img-el col-2">
      <img
        class="img-fluid"
        src="/images/supreme_logo.png"
        alt="supreme logo"
      >
    </div>
    <div class="btn-menu col-1 d-flex justify-content-center align-items-center">
      <button
        class="left-menu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <img
          class="img-fluid"
          src="/images/menu-icon.png"
          alt="button-menu"
        >
      </button>
    </div>
  </div>
  <div class="main-srceen">
    <GalleryManagement v-if="showGalleryManagement" />
    <div
      v-if="!showGalleryManagement"
      class="first-screen container-fluid"
    >
      <img
        style="width: 21%; margin-bottom: 8rem;"
        src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/settings.png?alt=media&token=ae56a0c8-ca43-43eb-983d-d44da73079a2"
        alt="open-and-wrench"
      >
    </div>
  </div>
  <div
    id="offcanvasScrolling"
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="offcanvas-header">
      <h5
        id="offcanvasScrollingLabel"
        class="title-menu"
      >
        Main Menu
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="offcanvas-body">
      <div class="main-menu-links mx-5">
        <div class="link">
          <router-link
            to="/services"
            class="menu-link"
          >
            Services
          </router-link>
        </div>
        <div class="link mt-4">
          <router-link
            to="/who_we_are"
            class="menu-link"
          >
            About Us
          </router-link>
        </div>
        <div class="link mt-4">
          <router-link
            to="/portfolio"
            class="menu-link"
          >
            Portfolio
          </router-link>
        </div>
        <div class="link mt-4">
          <router-link
            to="/contact"
            class="menu-link"
          >
            Contact
          </router-link>
        </div>
      </div>
      <div class="title-menu mt-5">
        Management
      </div>
      <div class="main-menu-links mx-5">
        <div class="link mt-4">
          <a
            href="#"
            class="menu-link"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            @click="toggleGalleryManagement"
          >
            Gallery settings
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-0">
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import GalleryManagement from '@/components/GalleryManagement.vue'

export default {
  components: {
    MainFooter,
    GalleryManagement
  },
  data () {
    return {
      showGalleryManagement: false
    }
  },
  mounted () {
    this.slideWidth = this.$el.offsetWidth
    window.addEventListener('scroll', this.handleScroll)
    localStorage.setItem('expirationTime', new Date().getTime() + this.$authenticationTime * 60 * 1000)
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
    },
    toggleGalleryManagement () {
      this.showGalleryManagement = !this.showGalleryManagement
    }
  }
}
</script>

<style scoped>
.left-menu {
  border: none;
  background-color: white;
}

.title-menu {
  font-size: 3rem !important;
  font-weight: 400;
}

.link {
  text-align: center !important;
  font-size: 1.8rem !important;
  border: 2px solid #212529;
  border-radius: 30px;
  transition: transform 0.3s ease-in-out;
}

.link:hover {
  transform: scale(1.05);
}

.menu-link {
  color: #212529;
  text-decoration: none;
}

.main-srceen {
  text-align: center;
}
</style>
