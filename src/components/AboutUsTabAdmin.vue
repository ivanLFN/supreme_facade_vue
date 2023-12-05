<template>
  <div class="about-us-admin">
    <div>
      <h3>{{ fbDoc_our_story }}</h3>
      <div class="row d-flex mt-5">
        <div class="col-6">
          <img
            class="container-fluid"
            :src="imageTeamUrl"
            alt="team image"
          >
        </div>
        <div class="col-6">
          <textarea
            v-model="textFirstStory"
            class="text-area w-100"
          />
          <div class="line-container mb-4">
            <div class="line" />
          </div>
          <textarea
            v-model="textSecondStory"
            class="text-area down w-100"
          />
          <textarea
            v-model="textThirdStory"
            class="text-area down w-100"
          />
        </div>
      </div>
      <div
        v-if="loadingOurStory"
        class="d-flex align-items-center mt-4"
      >
        <strong style="font-size: 1.4rem;">Loading...</strong>
        <div
          class="spinner-border ms-auto"
          role="status"
          aria-hidden="true"
        />
      </div>
      <div
        class="row d-flex mt-3"
        v-if="! loadingOurStory"
      >
        <div class="col-6 justify-content-end text-end">
          <div>
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
        </div>
        <div class="col-6 justify-content-end text-end">
          <div>
            <div class="change-img-link mt-5 text-right">
              <a
                href="#"
                class="link submit mr-2"
                @click="updateText"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-5">{{ fbDoc_our_team }}</h3>
      <div class="mt-5">
        <textarea
          v-model="textTeam"
          class="text-area down w-100"
        />
      </div>
      <div class="row d-flex text-center justify-content-center mt-5">
        <div class="col-4">
          <img
            class="container-fluid"
            :src="imageFirstWorker"
            alt="worker image"
          >
          <textarea
            v-model="nameFirstWorker"
            class="text-area-small w-100"
          />
          <textarea
            v-model="positionFirstWorker"
            class="text-area-small down w-100"
          />
        </div>
        <div class="col-4">
          <img
            class="container-fluid"
            :src="imageSecondWorker"
            alt="worker image"
          >
          <textarea
            v-model="nameSecondWorker"
            class="text-area-small w-100"
          />
          <textarea
            v-model="positionSecondWorker"
            class="text-area-small down w-100"
          />
        </div>
        <div class="col-4">
          <img
            class="container-fluid"
            :src="imageThirdWorker"
            alt="worker image"
          >
          <textarea
            v-model="nameThirdWorker"
            class="text-area-small w-100"
          />
          <textarea
            v-model="positionThirdWorker"
            class="text-area-small down w-100"
          />
        </div>
      </div>
    </div>
  </div>
  <input
    ref="fileInput"
    type="file"
    style="display: none"
    @change="handleFileChange"
  >
</template>

<script>
import { getData, updateData, uploadImage } from '@/firebase'
export default {
  name: 'AboutUsTabAdmin',
  props: {
    fbCollection: {
      type: String,
      default: 'AboutUs'
    },
    // eslint-disable-next-line
    fbDoc_our_story: {
      type: String,
      default: 'Our story'
    },
    // eslint-disable-next-line
    fbDoc_our_team: {
      type: String,
      default: 'Our team'
    }
  },
  data () {
    return {
      imageTeamUrl: '',
      textFirstStory: '',
      textSecondStory: '',
      textThirdStory: '',

      textTeam: '',
      imageFirstWorker: '',
      imageSecondWorker: '',
      imageThirdWorker: '',
      nameFirstWorker: '',
      nameSecondWorker: '',
      nameThirdWorker: '',
      positionFirstWorker: '',
      positionSecondWorker: '',
      positionThirdWorker: '',

      loadingOurStory: false
    }
  },
  async mounted () {
    const docDataStory = await getData(this.fbCollection, this.fbDoc_our_story)
    const docDataTeam = await getData(this.fbCollection, this.fbDoc_our_team)
    if (docDataStory) {
      // eslint-disable-next-line
      this.imageTeamUrl = docDataStory['team_image_url']
      // eslint-disable-next-line
      this.textFirstStory = docDataStory['first_text']
      // eslint-disable-next-line
      this.textSecondStory = docDataStory['second_text']
      // eslint-disable-next-line
      this.textThirdStory = docDataStory['third_text']
    }
    if (docDataTeam) {
      // eslint-disable-next-line
      this.textTeam = docDataTeam['text']
      // eslint-disable-next-line
      this.imageFirstWorker = docDataTeam['image_first_worker']
      // eslint-disable-next-line
      this.imageSecondWorker = docDataTeam['image_second_worker']
      // eslint-disable-next-line
      this.imageThirdWorker = docDataTeam['image_third_worker']
      // eslint-disable-next-line
      this.nameFirstWorker = docDataTeam['name_first_worker']
      // eslint-disable-next-line
      this.nameSecondWorker = docDataTeam['name_second_worker']
      // eslint-disable-next-line
      this.nameThirdWorker = docDataTeam['name_third_worker']
      // eslint-disable-next-line
      this.positionFirstWorker = docDataTeam['position_first_worker']
      // eslint-disable-next-line
      this.positionSecondWorker = docDataTeam['position_second_worker']
      // eslint-disable-next-line
      this.positionThirdWorker = docDataTeam['position_third_worker']
    }
  },
  methods: {
    async updateText () {
      this.loadingOurStory = true
      const data = {
        // eslint-disable-next-line
        'first_text': this.textFirstStory,
        // eslint-disable-next-line
        'second_text': this.textSecondStory,
        // eslint-disable-next-line
        'third_text': this.textThirdStory
      }
      // eslint-disable-next-line
      await updateData (this.fbCollection, this.fbDoc_our_story, data)
      this.loadingOurStory = false
    },
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    async handleFileChange (event) {
      const file = event.target.files[0]
      this.loadingOurStory = true
      if (file) {
        const imageUrl = await uploadImage('about_us/', file)
        const imageData = {
          // eslint-disable-next-line
          'team_image_url': imageUrl
        }
        await updateData(this.fbCollection, this.fbDoc_our_story, imageData)
        this.imageTeamUrl = imageUrl
      }
      this.loadingOurStory = false
    }
  }
}
</script>

<style>

.about-us-admin {
  width: 75vw;
  margin-bottom: 5vw;
  margin-left: 45px;
}

.text-area-small {
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 10px;
  height: 5vh;
}

</style>
