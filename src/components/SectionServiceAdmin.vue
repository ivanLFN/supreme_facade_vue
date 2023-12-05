<template>
  <div class="services-admin">
    <div>
      <h3 class="mb-5">
        {{ fbDoc }}
      </h3>
      <textarea
        v-model="fieldText"
        class="text-area w-100"
        @input="checkChange"
      />
      <div class="text-apply d-flex justify-content-end align-items-center">
        <div
          v-if="groupButtons"
          class="d-flex justify-content-between align-items-center"
        >
          <a
            href="#"
            class="link submit mr-2"
            @click="updateText"
          >Submit</a>
          <a
            class="link"
            href="#"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/office/40/cancel.png"
              alt="cancel"
            >
          </a>
        </div>
      </div>
      <div class="mt-4 image-area">
        <div class="row d-flex">
          <div class="col-6">
            <img
              class="col-5"
              :src="fieldLeftImage"
              alt="imageL"
            >
          </div>
          <div class="col-6">
            <img
              class="col-5"
              :src="fieldRightImage"
              alt="imageR"
            >
          </div>
        </div>
        <input
          ref="fileInput"
          type="file"
          style="display: none"
          @change="handleFileChange"
        >
        <div class="buttons-el">
          <div class="row d-flex justify-content-between">
            <div class="col-6">
              <div class="form-check ml-3 mt-3">
                <input
                  id="leftImageRadio"
                  v-model="selectedImage"
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="left"
                >
              </div>
            </div>
            <div class="col-6">
              <div class="form-check ml-3 mt-3">
                <input
                  id="RightImageRadio"
                  v-model="selectedImage"
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="right"
                >
              </div>
            </div>
            <div class="row d-flex justify-content-end">
              <div
                v-if="! loading"
                class="col-md-6"
              >
                <div class="change-img-link mt-5 text-right">
                  <a
                    href="#"
                    class="link submit mr-2"
                    @click="triggerFileInput"
                  >
                    Replace Image
                  </a>
                </div>
              </div>
              <div
                v-if="loading"
                class="d-flex align-items-center mt-4"
              >
                <strong style="font-size: 1.4rem;">Loading...</strong>
                <div
                  class="spinner-border ms-auto"
                  role="status"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData, updateData, uploadImage } from '@/firebase'
export default {
  name: 'SectionServiceAdmin',
  props: {
    fbCollection: {
      type: String,
      default: 'ServicesPage'
    },
    fbDoc: {
      type: String,
      default: 'Commercial'
    }
  },
  data () {
    return {
      collection: this.fbCollection,
      doc: this.fbDoc,
      fieldText: '',
      fieldLeftImage: '',
      fieldRightImage: '',

      fieldTextTemp: '',
      groupButtons: false,
      selectedImage: 'right',
      loading: false
    }
  },
  async mounted () {
    const docData = await getData(this.fbCollection, this.fbDoc)
    if (docData) {
      // eslint-disable-next-line
      this.fieldText = docData['text']
      // eslint-disable-next-line
      this.fieldLeftImage = docData['imageLeft']
      // eslint-disable-next-line
      this.fieldRightImage = docData['imageRight']
      this.fieldTextTemp = this.fieldText
    }
  },
  methods: {
    async updateText () {
      const textData = {
        // eslint-disable-next-line
        'text': this.fieldText
      }
      await updateData(this.fbCollection, this.fbDoc, textData)
      this.groupButtons = false
    },
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    async handleFileChange (event) {
      const file = event.target.files[0]
      this.loading = true
      if (file) {
        const imageURL = await uploadImage('services_page/', file)
        if (this.selectedImage === 'left') {
          const imageData = {
            // eslint-disable-next-line
            'imageLeft': imageURL
          }
          await updateData(this.fbCollection, this.fbDoc, imageData)
          this.fieldLeftImage = imageURL
        } else {
          const imageData = {
            // eslint-disable-next-line
            'imageRight': imageURL
          }
          await updateData(this.fbCollection, this.fbDoc, imageData)
          this.fieldRightImage = imageURL
        }
        this.loading = false
      } else {
        console.error('File not selected')
      }
    },
    checkChange () {
      this.groupButtons = this.fieldText !== this.fieldTextTemp
    }
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
  padding: 5px 30px !important;
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
