<template>
  <SectionServiceAdmin
    :fb-collection="'ServicesPage'"
    :fb-doc="'Commercial'"
  />
  <SectionServiceAdmin
    :fb-collection="'ServicesPage'"
    :fb-doc="'Residential'"
  />
  <SectionServiceAdmin
    :fb-collection="'ServicesPage'"
    :fb-doc="'Glazing Solution'"
  />
  <SectionServiceAdmin
    :fb-collection="'ServicesPage'"
    :fb-doc="'Curtain Walls'"
  />
</template>

<script>
import SectionServiceAdmin from './SectionServiceAdmin.vue'
export default {
  name: 'ServicesTabAdmin',
  components: {
    SectionServiceAdmin
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.link {
  font-size: 1.7rem;
  border: 2px solid #333;
  text-decoration: none !important;
  border-radius: 30px;
  transition: transform 0.3s ease;
}

.link:hover {
  transform: scale(0.9);
}

.submit {
  color: white;
  background-color: #454242;
  padding: 4px 30px;
}

.submit:hover {
 color: white;
}

.cancel {
  padding: 5px 5px;
  color: black;
}

.cancel:hover {
  background-color: rgb(205, 75, 75);
  color: white;
}

.services-admin {
  width: 75vw;
  margin-bottom: 5vw;
  margin-left: 45px;
}

.form-check-input {
  width: 30px;
  height: 30px;
}

.form-check-label {
  font-size: 1.5rem;
}

.form-check-input:checked {
  border-color: #454242;
  background-color: #454242;
}
</style>
