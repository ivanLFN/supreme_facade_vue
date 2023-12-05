/* eslint-disable */
<template>
  <div>
    <div class="container-lg mt-5">
      <div class="row text-center">
        <div
          v-for="(img, colIndex) in cols"
          :key="colIndex"
          class="col-12 col-md-4 mb-5 image-column"
        >
          <div
            v-for="(img, imgIndex) in img"
            :key="imgIndex"
            class="image-item"
          >
            <div @click="openLightbox(colIndex, imgIndex)">
              <img
                :src="img.src"
                :alt="img.name"
              >
              <div class="image-caption">
                {{ getFileName(img.name) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-easy-lightbox
      :visible="visibleRef"
      :imgs="galleryImages"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref as VueRef, defineComponent } from 'vue'
import { storage } from '@/firebase'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import getFileName from '../utils/Method'

export default defineComponent({
  components: {
    VueEasyLightbox
  },
  mixins: [getFileName],
  setup () {
    const visibleRef = VueRef(false)
    const indexRef = VueRef(0)
    const galleryImages = VueRef([])

    const cols = VueRef([])

    const onShow = () => {
      visibleRef.value = true
    }

    const openLightbox = (colIndex, imgIndex) => {
      const globalImgIndex = colIndex * 3 + imgIndex
      indexRef.value = globalImgIndex
      onShow()
    }

    const onHide = () => {
      visibleRef.value = false
    }

    const fetchGalleryImages = async () => {
      const galleryRef = ref(storage, 'gallery')

      try {
        const listResult = await listAll(galleryRef)
        const imagePromises = listResult.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef)
          return { name: itemRef.name, src: url }
        })

        const images = await Promise.all(imagePromises)
        galleryImages.value = images
        console.log('Gallery Images:', images)

        cols.value = Array.from(
          { length: Math.ceil(galleryImages.value.length / 3) },
          (_, i) => {
            return galleryImages.value.slice(i * 3, (i + 1) * 3)
          }
        )
      } catch (error) {
        console.error('Error fetching gallery images:', error)
      }
    }

    fetchGalleryImages()

    return {
      visibleRef,
      indexRef,
      galleryImages,
      openLightbox,
      onHide,
      cols
    }
  }
})
</script>

<style scoped>

.image-column {
  max-width: 33.33%;
}

.image-item {
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 0 3px white, 0 5px 8px 3px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  padding: 0;
  margin-top: 1rem;
}

.image-item img {
  max-width: 100%;
  width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
  filter: brightness(0.6);
}

.image-item:hover img {
  transform: scale(1.1);
  filter: brightness(1);
}
</style>
