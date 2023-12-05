<template>
  <div
    class="custom-toast"
    :class="{ 'toast-appear': showToast }"
    @mouseover="closeToast"
  >
    <img
      width="48"
      height="48"
      :src="iconSrc"
      alt="ok--v1"
    >
    {{ caption }}
  </div>
</template>

<script>

export default {
  props: {
    caption: {
      type: String,
      default: 'Ok'
    },
    iconSrc: {
      type: String,
      default: 'https://img.icons8.com/ios/50/000000/info--v1.png'
    }
  }
}
</script>

<style scoped>

.custom-toast {
  font-size: 1.4rem;
  font-weight: 600;
  position: fixed;
  bottom: 60%;
  right: 30px;
  background-color: #333;
  color: white;
  padding: 20px 40px;
  border-radius: 15px;
  z-index: 9999;
}

.toast-appear {
  animation: toastAppear 0.5s ease-in-out;
}

@keyframes toastAppear {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
