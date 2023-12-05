<template>
  <MainHeader
    ref="mainHeader"
    :link-border-color="'#4d4d4d'"
    :image-src="'/images/supreme_logo.png'"
  />
  <div class="title-screen ml-lg-5 pl-lg-5">
    <div class="align-items-center d-flex">
      <div class="col-lg-11">
        <div class="title-first">
          Terms <span style="color: #c52729;">&</span> Conditions
        </div>
      </div>
    </div>
  </div>
  <SectionLine />
  <div class="privacy-policy ml-lg-5 pl-lg-5">
    <div class="align-items-center d-flex">
      <div class="col-lg-11">
        <div class="row">
          <div class="name-part-policy col-lg-4">
            Introduction
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="text-intro mt-3">
              Welcome to Supreme Facade (the "Website"). These Terms and Conditions govern your use of the Website and your relationship with us. By accessing or using the Website, you agree to comply with these Terms and Conditions.
            </div>
            <div class="text-intro mt-5">
              If you do not agree with any part of these Terms and Conditions, you must not use the Website.
            </div>
          </div>
        </div>
        <div class="row condition-item">
          <div class="name-part-policy col-lg-4">
            Ownership and
            Intellectual Property
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="num">
              2.1
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              All content, including but not limited to photos and text, available on the Website is owned or licensed by Supreme Facade. This content is protected by copyright laws and other intellectual property rights.
            </div>
            <div class="num mt-5">
              2.2
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              You may not reproduce, modify, distribute, or otherwise use any content from the Website without obtaining prior written permission from Supreme Facade.
            </div>
          </div>
        </div>
        <div class="row condition-item">
          <div class="name-part-policy col-lg-4">
            Use of the Website
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="num">
              3.1
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              By accessing or using the Website, you agree to use it only for lawful purposes and in compliance with these Terms and Conditions.
            </div>
            <div class="num mt-5">
              3.2
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              You must not use the Website in any way that could damage, disable, overburden, or impair the Website or interfere with any other party's use and enjoyment of the Website.
            </div>
          </div>
        </div>
        <div class="row condition-item">
          <div class="name-part-policy col-lg-4">
            Links to Third-Party
            Websites
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="num">
              4.1
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              The Website may contain links to third-party websites. These links are provided for your convenience and do not signify endorsement or approval of the content on those websites.
            </div>
            <div class="num mt-5">
              4.2
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              Supreme Facade is not responsible for the content, privacy policies, or practices of any third-party websites. You access and use such websites at your own risk.
            </div>
          </div>
        </div>
        <div class="row condition-item">
          <div class="name-part-policy col-lg-4">
            Limitation of Liability
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="num">
              5.1
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              Supreme Facade strives to provide accurate and up-to-date information on the Website. However, we do not warrant the accuracy, completeness, or reliability of any content on the Website.
            </div>
            <div class="num mt-5">
              5.2
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              To the fullest extent permitted by law, Supreme Facade disclaims any liability for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of the Website.
            </div>
          </div>
        </div>
        <div class="row condition-item">
          <div class="name-part-policy col-lg-4">
            Governing Law
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="num">
              6.1
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Canada. Any disputes arising from or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in Canada.
            </div>
          </div>
        </div>
        <div class="row condition-item">
          <div class="name-part-policy col-lg-4">
            Contact Us
          </div>
          <div class="text-part-policy col-lg-8 col-12">
            <div class="num">
              7.1
            </div>
            <div class="line mt-2" />
            <div class="text mt-3">
              If you have any questions or concerns about these Terms and Conditions or the use of the Website, please contact us at: <span style="color: #212529;">info@supreme.ca</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter class="main-footer" />
</template>

<script>
import SectionLine from '@/components/SectionLine.vue'
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'

export default {
  components: {
    MainFooter,
    SectionLine,
    MainHeader
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const mainHeader = this.$refs.mainHeader
      if (mainHeader) {
        if (window.scrollY > 0) {
          mainHeader.$el.classList.add('fixed-header')
        } else {
          mainHeader.$el.classList.remove('fixed-header')
        }
      }
    }
  }
}
</script>

<style scoped>

.condition-item {
  margin-top: 8rem !important;
}

@media (max-width: 768px) {
  .condition-item {
    margin-top: 3rem;
  }
}

.num {
  color: #c52729;
}

.text-title {
  color: #212529;
  font-weight: 550;
  margin-top: 1.8rem !important;
}

.text {
  font-size: 1.9rem;
  color: #707070;
  line-height: 1.2;
}

.text-header {
  font-weight: 500;
  margin-top: 6rem !important;
}

.text-intro {
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .text-intro {
    font-size: 1.5rem;
  }
  .text-header {
    font-size: 2rem;
  }

  .text {
    font-size: 1.5rem;
  }
}

.line {
  width: 100%;
  border-top: 1px solid #e2e2e2;
}

.privacy-policy {
  margin-top: 5vh;
}

.name-part-policy {
  font-size: 2.8rem;
  line-height: 1.2;
}

.text-part-policy {
  font-size: 2.2rem;
}

@media (max-width: 768px) {
  .name-part-policy {
    font-size: 2rem;
  }

  .text-part-policy {
    margin-top: 3vh;
  }
}

.main-footer {
  margin-top: 30vh;
}

.title-screen {
  font-size: 5rem;
  align-items: center;
  margin-top: 10vh;
}

@media (max-width: 768px) {
  .title-screen {
    font-size: 2.5rem !important;
    margin-top: 5vh;
  }
}</style>
