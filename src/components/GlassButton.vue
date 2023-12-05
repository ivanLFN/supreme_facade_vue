<template>
  <div
    class="tilt-container"
    @mousemove="handleMouseMove"
    @mouseleave="resetTransform"
  >
    <div
      class="tilt"
      :style="{ transform: tiltTransform }"
    >
      <div class="wrap">
        <div class="content">
          <router-link
            to="/"
            class="text-center d-block highlight-el mb-3 mb-lg-0"
          >
            {{ title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tiltTransform: 'none'
    }
  },
  methods: {
    handleMouseMove (event) {
      // eslint-disable-next-line no-unused-vars
      const tilt = event.currentTarget.querySelector('.tilt')
      const containerBounding = event.currentTarget.getBoundingClientRect()
      const mouseX = event.clientX - containerBounding.left
      const mouseY = event.clientY - containerBounding.top
      const tiltX = ((mouseX / event.currentTarget.offsetWidth) - 0.5) * 15
      const tiltY = ((mouseY / event.currentTarget.offsetHeight) - 0.5) * (-30)
      this.tiltTransform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`
    },
    resetTransform () {
      this.tiltTransform = 'none'
    }
  }
}
</script>

<style scoped>
.tilt-container {
  perspective: 1000px;
}

.tilt {
  transition: transform 0.8s ease;
}

.highlight-el {
  font-size: 4rem;
}

.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  text-align: center;
  letter-spacing: 5px;
  color: rgba(255, 255, 255, 0.811);
  backdrop-filter: blur(5px);
  border: 1px solid #ffffff35;
  box-shadow: inset 0px 0px 20px 0px rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 30px;
}

.highlight-el {
  font-size: 4vw;
  text-decoration: none;
  color: white;
  transition: text-shadow 0.3s;
}

@media (max-width: 768px) {
  .highlight-el {
    font-size: 4rem;
  }
}

</style>
