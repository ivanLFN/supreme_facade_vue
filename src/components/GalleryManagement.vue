<template>
  <div class="mx-3 mx-lg-5 px-lg-4">
    <div class="header-text">
      Gallery Settings
    </div>
    <div class="line-container">
      <div class="line" />
    </div>
  </div>
  <div class="container gallery-el">
    <div class="d-flex header-table justify-content-end">
      <input
        ref="newimg"
        type="file"
        style="display: none"
        @change="handleFileUpload"
      >
      <a
        href="#"
        class="upload-img"
        @click="triggerFileInput"
      >
        <img
          src="../../public/images/upload-img.png"
          alt="upload-img"
        >
        Up Load Image
      </a>
    </div>
    <table class="table text-left">
      <thead>
        <tr>
          <th scope="col">
            Name
          </th>
          <th scope="col">
            Size
          </th>
          <th scope="col">
            Type
          </th>
          <th scope="col">
            Last modified
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(image, index) in galleryImages"
          :key="index"
        >
          <td>
            <a
              :href="image.url"
              class="img-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../../public/images/img-icon.png"
                alt="upload-img"
              >
              {{ getFileName(image.name) }}
            </a>
          </td>
          <td>{{ image.sizeKb }} KB</td>
          <td>{{ image.contentType }}</td>
          <td>{{ image.CreatedDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    v-if="showToast"
    class="custom-toast"
    :class="{ 'toast-appear': showToast }"
    @mouseover="closeToast"
  >
    <img
      width="48"
      height="48"
      src="https://img.icons8.com/color/48/ok--v1.png"
      alt="ok--v1"
    >
    Image uploaded
  </div>
</template>

<script>
import { storage } from '@/firebase'
import { ref, uploadBytes, listAll, getDownloadURL, getMetadata } from 'firebase/storage'
import getFileName from '../utils/Method'

export default {
  name: 'GalleryManagement',
  mixins: [getFileName],
  data () {
    return {
      showToast: false,
      galleryImages: []
    }
  },
  created () {
    this.fetchGalleryImages()
  },
  methods: {
    showMyToast: function () {
      this.showToast = true
    },
    closeToast: function () {
      this.showToast = false
    },
    triggerFileInput () {
      this.$refs.newimg.click()
    },
    handleFileUpload (event) {
      const file = event.target.files[0]
      const storageRef = ref(storage, 'gallery/' + file.name)
      uploadBytes(storageRef, file).then(
        (snapshot) => {
          console.log('Image uploaded')
          this.showMyToast()
          this.fetchGalleryImages()
        }
      ).catch((error) => {
        console.error('Error upload:', error)
      })
    },
    async fetchGalleryImages () {
      const galleryRef = ref(storage, 'gallery')

      try {
        const listResult = await listAll(galleryRef)
        const imagePromises = listResult.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef)
          const metadata = await getMetadata(itemRef)
          const sizeKb = (await metadata.size / 1024).toFixed(3)
          const contentType = metadata.contentType
          const CreatedDate = new Date(metadata.timeCreated).toLocaleDateString()
          // eslint-disable-next-line object-shorthand
          return {
            name: itemRef.name,
            url,
            sizeKb,
            contentType,
            CreatedDate
          }
        })

        const images = await Promise.all(imagePromises)
        this.galleryImages = images
        console.log('Gallery Images:', images)
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      }
    }
  }
}
</script>

<style scoped>
.header-table {
  font-size: 1.3rem;
  background-color: #212529;
  color: white;
  padding: 15px 15px;
  border-radius: 20px 20px 0 0;
}

.gallery-el {
  margin-top: 5rem;
  margin-bottom: 15rem;
}

.upload-img {
  font-size: 1.5rem;
  font-weight: 600;
  background-color: white;
  text-decoration: none;
  color: #212529;
  padding: 5px 20px;
  border-radius: 15px;
}

.table {
  font-size: 1.4rem;
}

.line {
  height: 1px;
  background-color: #999999;
  width: 100%;
}

.header-text {
  text-align: start;
  font-size: 4rem;
  margin-top: 5.7rem;
}

@media (max-width: 768px) {
  .header-text {
    font-size: 12vw;
  }
}

.img-link {
  text-decoration: none;
  color: #212529;
}

.img-link:hover {
  text-decoration: 2px underline #212529;
}

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

<style src="../../public/styles.css"></style>
