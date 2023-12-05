<template>
  <div class="accordion-item">
    <button
      class="accordion-button"
      :class="{ 'active': isOpen }"
      @click="toggleAccordion"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div
          class="title-activity"
        >
          {{ title }}
        </div>
        <img
          class=""
          src="/images/arrow-down.png"
          alt="arrow-down"
        >
      </div>
    </button>
    <div
      class="accordion-content"
      :style="contentStyle"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    title: String
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    contentStyle () {
      return {
        maxHeight: this.isOpen ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.5s'
      }
    }
  },
  methods: {
    toggleAccordion () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.accordion-button {
  width: 100%;
  text-align: left;
  background-color: white;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-button.active {
  background-color: white;
}
activity-area
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
}

.accordion-content.open {
  max-height: 50px;
}

.title-activity {
  font-size: 4rem;
  font-weight: 360;
}
</style>
