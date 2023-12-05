<template>
  <footer class="footer">
    <div>
      <div class="row justify-content-start mx-lg-5">
        <div class="col-md-4 col-6">
          <div class="col-8 col-lg-7 img-logo">
            <img
              src="/images/supreme_logo_white.png"
              class="w-100"
            >
          </div>
          <div
            class="address ml-5"
            style="color: #898989;"
          >
            Veliev Group, <br>
            1585 Cliveden Ave Unit #8, <br>
            Canada
          </div>
        </div>
        <div class="col-md-4 col-6">
          <ul class="list-links mt-4">
            <li>
              <router-link
                to="/"
                class="link-item"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/who_we_are"
                class="link-item"
              >
                About us
              </router-link>
            </li>
            <li>
              <router-link
                to="/portfolio"
                class="link-item"
              >
                Solutions
              </router-link>
            </li>
            <li>
              <router-link
                to="/portfolio"
                class="link-item"
              >
                Portfolio
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="link-item"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-6 pl-5">
          <div class="company-info mt-4">
            <div class="email">
              E-mail:
            </div>
            <div class="link-item">
              veliev@gmail.com
            </div>
            <div class="email mt-4">
              Phone:
            </div>
            <div class="link-item">
              778-819-9999
            </div>
          </div>
        </div>
        <div class="bottom-footer col-12">
          <div class="line-container mt-4 mb-5 mx-lg-5">
            <div class="line" />
          </div>
          <div class="row mb-5">
            <div class="col-md-4 col-6">
              <div
                class="ml-5"
                style="color: #cecece;"
              >
                © Veliev group 2007-2023
              </div>
            </div>
            <div class="col-md-4 col-6">
              <div
                class="pl-5"
                style="color: #ffffff;"
              >
                <router-link
                  to="/privacy_policy"
                  class="bottom-part"
                >
                  Privacy Policy
                </router-link>
              </div>
            </div>
            <div class="col-md-4 col-6">
              <div class="row">
                <div
                  class="pl-5"
                  style="color: #ffffff;"
                >
                  <router-link
                    to="/conditions"
                    class="bottom-part"
                  >
                    Terms & Conditions
                  </router-link>
                  <a href="https://instagram.com/supreme_facade_inc?igshid=OGQ5ZDc2ODk2ZA=="><img
                    src="/images/instagram.png"
                    class="w-1 ml-5"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
.footer {
    background-color: #212529 !important;
    margin: 0;
    padding-top: 4%;
}

.list-links {
    font-size: 1.5rem;
    list-style: none;
}

.link-item {
    color: white !important;
}

ul.list-links li a {
    position: relative;
    color: #000;
    text-decoration: none;
    overflow: hidden;
}

ul.list-links li a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    height: 2px;
    background-color: white;
    transition: right 0.3s ease-out;
}

ul.list-links li a:hover::before {
    right: 0;
}

.email {
    color: #898989 !important;
}

.company-info {
    font-size: 1.5rem;
    color: white;
}

.line-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.line {
    height: 1px;
    background-color: #4d4d4d;
    width: 100%;
}

.bottom-part {
    text-decoration: none;
    color: #4d4d4d;
    font-size: 1rem !important;
}
</style>
