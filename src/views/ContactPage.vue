<template>
  <div>
    <MainHeader
      ref="mainHeader"
      :link-border-color="'#4d4d4d'"
      :image-src="'/images/supreme_logo.png'"
    />
  </div>
  <div
    class="mx-3 mx-lg-5 px-lg-4 mt-5"
  >
    <div class="row">
      <div class="header-text col-12 col-lg-10">
        <div style="color: #c52729;">
          Contact
        </div>
      </div>
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="mx-3 mx-lg-5 px-lg-4 contact-el">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-4">
        <ContactForm />
      </div>
      <div class="col-12 col-lg-3 mt-3 pl-5">
        <h5 style="color: #838383;">
          Phone:
        </h5>
        <h4 class="mt-3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/contact-icons%2Fphone-icon.png?alt=media&token=9c15ff96-e8f2-4edd-9d94-c1d3b5a4b246"
            alt="phone-icon"
          >
          778-819-9999
        </h4>
        <h5
          class="mt-5"
          style="color: #838383;"
        >
          E-mail:
        </h5>
        <h4 class="mt-3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/contact-icons%2Fmail-icon.png?alt=media&token=e374fec6-ff1f-461a-82d3-e0b4799163a6"
            alt="mail-icon"
          >
          supreme@gmail.com
        </h4>
        <h5
          class="mt-5"
          style="color: #838383;"
        >
          Address:
        </h5>
        <h4 class="mt-3">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/contact-icons%2Flocation-icon.png?alt=media&token=1fd576b8-cf6e-4f1b-9085-64f82f15bc2e"
            alt="loca-icon"
          >
          Supreme Group, 317 Golden forest rd, <br>
          Canada
        </h4>
      </div>
    </div>
  </div>
  <div class="col-12 mt-8">
    <div @click="openLightbox(0)">
      <img
        class="w-100"
        src="https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/map-small.png?alt=media&token=232c6016-1cae-446c-b2cc-9dcc4b72d662"
        alt="area"
      >
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      @hide="onHide"
    />
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
import ContactForm from '@/components/ContactForm.vue'
import VueEasyLightbox from 'vue-easy-lightbox'
// eslint-disable-next-line no-unused-vars
import { ref, defineComponent } from 'vue'

export default {
  components: {
    MainHeader,
    MainFooter,
    ContactForm,
    VueEasyLightbox
  },
  setup () {
    const visibleRef = ref(false)
    const indexRef = ref(0)
    const imgsRef = ref([
      {
        src: 'https://firebasestorage.googleapis.com/v0/b/testproject-a9ab5.appspot.com/o/map-large.png?alt=media&token=c4ef62fe-5880-4e75-a8b5-fd02c3e27abf'
      }
    ])

    const onShow = () => {
      visibleRef.value = true
    }

    const openLightbox = (imgIndex) => {
      indexRef.value = imgIndex
      onShow()
    }

    const onHide = () => {
      visibleRef.value = false
    }

    return {
      visibleRef,
      indexRef,
      imgsRef,
      openLightbox,
      onHide
    }
  },
  data () {
    return {
      lightboxVisible: false
    }
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
.mt-8 {
  margin-top: 8rem;
}
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
  margin-top: 2.8rem !important;
}

@media (max-width: 768px) {
  .header-text {
      font-size: 12vw;
  }
}

.contact-el {
  margin-top: 8rem;
}
</style>
