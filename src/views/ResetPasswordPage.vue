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
      Reset password
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="row justify-content-center col-12">
    <div class="login-form col-lg-3 col-12 mb-5">
      <form
        v-if="showForm"
        @submit.prevent="resetPassword"
      >
        <div class="form-group">
          <h5 class="mt-4">
            Enter your email: *
          </h5>
          <input
            id="Email"
            v-model="email"
            type="text"
            class="form-input"
            required
          >
        </div>
        <div class="line-container">
          <div class="line" />
        </div>
        <div class="line-container">
          <div class="line" />
        </div>
        <button
          type="submit"
          class="submit-btn mt-5"
        >
          Reset
        </button>
      </form>
    </div>
  </div>
  <div
    class="mx-0"
    style="margin-top: 10vw;"
  >
    <MainFooter />
  </div>
  <div
    v-if="showToast"
    class="custom-toast"
    :class="{ 'toast-appear': showToast }"
    @mouseover="closeToast"
  >
    {{ sendingResult }}
  </div>
</template>
<script>
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

export default {
  name: 'ResetPasswordPage',
  components: {
    MainFooter,
    MainHeader
  },
  data () {
    return {
      email: '',
      showToast: false,
      auth: null,
      sendingResult: '',
      showForm: true
    }
  },
  created () {
    this.auth = getAuth()
  },
  methods: {
    showMyToast: function () {
      this.showToast = true
    },
    closeToast: function () {
      this.showToast = false
    },
    resetPassword () {
      const email = this.email

      sendPasswordResetEmail(this.auth, email)
        .then(() => {
          console.log('sending: OK')
          this.sendingResult = 'Follow the instructions in the letter'
          this.showMyToast()
          this.showForm = false
        })
        .catch((error) => {
          console.error('Reset email error:', error)
          this.sendingResult = 'Incorect email'
          this.showMyToast()
        })
    }
  }
}
</script>

<style scoped>

.header-text {
  font-size: 5rem;
  margin-top: 5.7rem;
}

@media (max-width: 768px) {
  .header-text {
    font-size: 12vw;
  }
}

</style>
