<template>
  <form @submit.prevent="loginUser">
    <div class="form-group">
      <h5 class="mt-4">
        Email: *
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
    <div class="form-group">
      <h5 class="mt-4">
        Password: *
      </h5>
      <input
        id="Password"
        v-model="password"
        type="password"
        class="form-input"
        required
      >
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
    <div class="d-flex align-items-center mt-5">
      <router-link
        to="/reset-password"
        class="reset-password col-6 text-center"
      >
        Forgot your password
      </router-link>
      <button
        type="submit"
        class="submit-btn"
      >
        Login
      </button>
    </div>
  </form>
  <div
    v-if="showToast"
    class="custom-toast"
    :class="{ 'toast-appear': showToast }"
    @mouseover="closeToast"
  >
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/fluency/48/cancel.png"
      alt="cancel"
    >
    Incorrect data (email/password)
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
// import firebase from 'firebase/app'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      auth: null,
      showToast: false
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
    loginUser () {
      const email = this.email
      const password = this.password

      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
          console.log('Logged in:', userCredential.user)
          const user = this.auth.currentUser
          const currentTime = new Date().getTime()
          const expirationTime = currentTime + 10 * 60 * 1000

          localStorage.setItem('currentUser', JSON.stringify(user))
          localStorage.setItem('expirationTime', expirationTime)
          this.$router.push({ name: 'AdminPage' })
        })
        .catch((error) => {
          console.error('Login error:', error)
          this.showMyToast()
        })
    }
  }
}
</script>

<style scoped>

.reset-password {
  font-size: 1.3rem;
  text-decoration: none;
  color: #242424;
}

.reset-password:hover {
  color: #242424;
}

</style>
