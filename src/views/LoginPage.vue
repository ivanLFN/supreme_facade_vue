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
      Login
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="row justify-content-center col-12">
    <div class="login-form col-lg-3 col-12">
      <LoginForm />
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
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',
  components: {
    MainHeader,
    MainFooter,
    LoginForm
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

.line {
  height: 1px;
  background-color: #999999;
  width: 100%;
}

.header-text {
  font-size: 5rem;
  margin-top: 5.7rem;
}

@media (max-width: 768px) {
  .header-text {
    font-size: 12vw;
  }
}

.login-form {
  margin-top: 8rem;
}

</style>

<style src="../../public/styles.css"></style>
