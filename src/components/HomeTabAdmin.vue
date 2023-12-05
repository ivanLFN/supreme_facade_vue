<template>
  <div class="home-admin">
    <div class="description">
      <h3>Description</h3>
      <textarea
        v-model="descFirstChapter"
        class="text-area w-100"
      />
      <div class="line-container mb-4">
        <div class="line" />
      </div>
      <textarea
        v-model="descSecondChapter"
        class="text-area down w-100"
      />
    </div>
    <div class="who-we-are">
      <h3>Who We Are</h3>
      <textarea
        v-model="whoWeAreFirstChapter"
        class="text-area w-100"
      />
      <div class="line-container mb-4">
        <div class="line" />
      </div>
      <textarea
        v-model="whoWeAreSecondChapter"
        class="text-area down w-100"
      />
      <div class="mt-4 image-area">
        <img
          class="col-5"
          :src="imageUrl"
          alt="home-image"
        >
        <input
          ref="fileInput"
          type="file"
          style="display: none"
          @change="handleFileChange"
        >
        <div class="change-img-link col-5 mt-4">
          <a
            class="change-img"
            href="#"
            @click="triggerFileInput"
          >
            <img
              src="../../public/images/replace-50.png"
              alt="upload-img"
            >
            Replace Image
          </a>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <div class="accept-update">
        <a
          href="#"
          class="accept-update-link mt-5"
          @click="updateHomePage"
        >
          Accept All
        </a>
      </div>
    </div>
  </div>
  <ToastComponent
    v-if="showToast"
    :caption="'Done'"
    @mouseover="closeToast"
  />
</template>
<script>
import { getData, updateData, uploadImage } from '@/firebase'
import ToastComponent from './ToastComponent.vue'
export default {
  name: 'HomeTabAdmin',
  components: {
    ToastComponent
  },
  data () {
    return {
      descFirstChapter: '',
      descSecondChapter: '',
      whoWeAreFirstChapter: '',
      whoWeAreSecondChapter: '',
      imageUrl: '',

      showToast: false
    }
  },
  async mounted () {
    const descriptionData = await getData('MainPage', 'description')
    if (descriptionData) {
      this.descFirstChapter = descriptionData['first-chapter']
      this.descSecondChapter = descriptionData['second-chapter']
    }
    const whoWeAreData = await getData('MainPage', 'who-we-are')
    if (whoWeAreData) {
      this.whoWeAreFirstChapter = whoWeAreData['first-text']
      this.whoWeAreSecondChapter = whoWeAreData['second-text']
      this.imageUrl = whoWeAreData['image-url']
    }
  },
  methods: {
    async updateHomePage () {
      const descriptionData = {
        'first-chapter': this.descFirstChapter,
        'second-chapter': this.descSecondChapter
      }
      const whoWeAreData = {
        'first-text': this.whoWeAreFirstChapter,
        'second-text': this.whoWeAreSecondChapter
      }
      await updateData('MainPage', 'description', descriptionData)
      await updateData('MainPage', 'who-we-are', whoWeAreData)
      this.showToast = true
    },
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    async handleFileChange (event) {
      const file = event.target.files[0]

      if (file) {
        const imageURL = await uploadImage('home_page/', file)
        const imageData = {
          'image-url': imageURL
        }
        await updateData('MainPage', 'who-we-are', imageData)
        this.imageUrl = imageURL
      } else {
        console.error('Файл не выбран')
      }
    },
    showMyToast: function () {
      this.showToast = true
    },
    closeToast: function () {
      this.showToast = false
    }
  }
}
</script>

<style>

.down {
  color: #707070;
}

.home-admin {
  width: 75vw;
  margin-bottom: 5vw;
  margin-left: 45px;
}

.change-img {
  font-size: 1.5rem;
  font-weight: 600;
  background-color: white;
  text-decoration: none;
  color: #212529;
  padding: 15px 20px;
  border-radius: 5px;
  border: 2px solid #212529;
}

.image-area {
  border-radius: 5px;
  border: 1px solid #212529;
  padding: 20px;
}

.accept-update-link {
  background-color: #c52729;
  font-size: 2rem !important;
  border: 2px solid #c52729;
  color: white !important;
  border-radius: 30px;
  padding: 5px 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  transform-origin: center;
  text-decoration: none !important;
}

.accept-update-link:hover {
  transform: scale(0.9);
}

</style>
