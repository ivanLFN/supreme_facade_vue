<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <h5 class="mt-4">
        Name: *
      </h5>
      <input
        id="name"
        v-model="name"
        placeholder="John Smith"
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
        Email: *
      </h5>
      <input
        id="email"
        v-model="email"
        placeholder="example@gmail.com"
        type="email"
        class="form-input"
        required
      >
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
    <div class="form-group">
      <h5 class="mt-4">
        Phone:
      </h5>
      <input
        id="phone"
        v-model="phone"
        placeholder="+1(999)-999999"
        type="tel"
        class="form-input"
        required
      >
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
    <div class="form-group">
      <h5 class="mt-4">
        Message:
      </h5>
      <textarea
        id="message"
        v-model="message"
        placeholder="Write your message"
        class="form-input"
        required
      />
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
    <button
      type="submit"
      class="submit-btn mt-4"
    >
      Send
    </button>
  </form>
</template>

<script>

export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    handleSubmit () {
      // const formData = {
      //   name: this.name,
      //   email: this.email,
      //   phone: this.phone,
      //   message: this.message
      // }
    }
  }
}
</script>

<style scoped>

.form-input {
  width: 100%;
  background-color: white;
  border: none;
  outline: none;
  font-size: 1.5rem;
}

.line-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  height: 1px;
  background-color: #dbdbdb;
  width: 100%;
}

.submit-btn:hover {
  transform: scale(0.9);
}

</style>

<style src="../../public/styles.css"></style>
