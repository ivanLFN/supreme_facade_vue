<template>
  <div
    class="col-12"
    :class="{ 'fixed-header': isFixed, 'small-header': isSmallHeader }"
    :style="{ backgroundColor: headerBackgroundColor }"
  >
    <div class="row">
      <div class="col-lg-2 col-4">
        <router-link
          to="/"
          class="navbar-brand"
        >
          <img
            class="header-logo"
            :src="imageSrc"
            alt="Logo"
          >
        </router-link>
      </div>
      <div class="col-lg-10 col-8">
        <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
          <div class="container-fluid">
            <button
              class="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleMenu"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div
              id="navbarNav"
              class="collapse navbar-collapse"
              :class="{ 'show': isMenuOpen }"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item custom-nav-item">
                  <router-link
                    to="/services"
                    class="nav-link custom-nav-link"
                    :style="{ '--link-border-color': linkBorderColor }"
                  >
                    Services
                  </router-link>
                </li>
                <li class="nav-item active custom-nav-item">
                  <router-link
                    to="/who_we_are"
                    class="nav-link custom-nav-link"
                    :style="{ '--link-border-color': linkBorderColor }"
                  >
                    About Us
                  </router-link>
                </li>
                <li class="nav-item custom-nav-item">
                  <router-link
                    to="/portfolio"
                    class="nav-link custom-nav-link"
                    :style="{ '--link-border-color': linkBorderColor }"
                  >
                    Portfolio
                  </router-link>
                </li>
                <li class="nav-item custom-nav-item">
                  <router-link
                    to="/contact"
                    class="nav-link custom-nav-link"
                    :style="{ '--link-border-color': linkBorderColor }"
                  >
                    Contact
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    linkBorderColor: {
      type: String,
      default: 'white'
    },
    imageSrc: {
      type: String,
      default: '/images/supreme_logo_white.png'
    }
  },
  data () {
    return {
      isMenuOpen: false,
      isFixed: false,
      isSmallHeader: false
    }
  },
  computed: {
  },
  mounted () {
    this.handleScroll()
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    handleScroll () {
      const mainHeader = this.$refs.mainHeader
      if (mainHeader) {
        if (window.scrollY > 0) {
          mainHeader.$el.querySelector('.header-logo').classList.add('small-logo')
          mainHeader.$el.classList.add('fixed-header')
        } else {
          mainHeader.$el.querySelector('.header-logo').classList.remove('small-logo')
          mainHeader.$el.classList.remove('fixed-header')
        }
      }
    }
  }

}
</script>

<style scoped>
.header-logo {
  max-width: 100%;
  height: auto;
}

.custom-nav-item {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
  overflow: hidden;
}

.custom-nav-link {
  font-size: 1.1rem !important;
  border: 2px solid white;
  border-color: var(--link-border-color, white);
  color: var(--link-border-color, white) !important;
  border-radius: 30px;
  padding: 12px 65px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.custom-nav-link:hover {
  transform: scale(0.9);
}

.custom-navbar {
  background-color: transparent !important;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(204, 204, 204, 0.5);
  transition: height 0.5s ease;
  height: 110px;
  overflow: hidden;
  border-bottom: 1px solid #cccccc;
}

.header-logo {
  max-width: 100%;
  height: auto;
  transition: transform 0.5s ease;
}

.fixed-header .header-logo {
  transform: scale(0);
  transition: transform 0.5s ease;
}

.fixed-header.small-header {
  height: 110px;
  transition: height 0.5s ease;
}

@media (max-width: 768px) {
  .fixed-header {
    position: static;
    background-color: transparent;
    height: auto;
    overflow: visible;
  }

  .fixed-header .header-logo {
    transform: scale(1);
  }

  .fixed-header.small-header {
    height: auto;
  }
}
</style>
