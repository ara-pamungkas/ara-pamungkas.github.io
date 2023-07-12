<template>
  <div class="content">
    <div class="content-container">
      <div class="content-router">
        <div class="content-navigation">
          <router-link class="link" to="/"> Feed </router-link>
          <router-link class="link" to="/about">
            About
          </router-link>
          <router-link class="link" to="/project">
            Project
          </router-link>
          <router-link class="link" to="/galery">
            Galery
          </router-link>
        </div>
        <div class="router">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFeedSection: true,
      isAboutSection: false,
      isProjectSection: false,
      isGalerySection: false
    };
  },
  methods: {
    clickFeedSection() {
      this.isFeedSection = true
      this.isAboutSection = false,
      this.isProjectSection = false,
      this.isGalerySection = false
    },
    clickAboutSection() {
      this.isAboutSection = true
      this.isFeedSection = false,
      this.isProjectSection = false,
      this.isGalerySection = false
    },
    clickProjectSection() {
      this.isProjectSection = true
      this.isAboutSection = false,
      this.isFeedSection = false,
      this.isGalerySection = false
    },
    clickGalerySection() {
      this.isGalerySection = true
      this.isAboutSection = false,
      this.isProjectSection = false,
      this.isFeedSection = false
    }
  },
};
</script>

<style>
.content {
  color: #f2edd7;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.content .content-container {
  width: 724px;
}

.content .content-container .content-router {
  padding: 0 10%;
}

.content .content-container .content-router .content-navigation {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.content .content-container .content-router .content-navigation .link {
  text-decoration: none;
  color: #f2edd7;
  font-weight: 700;
  font-size: 1.2rem;
  flex-grow: 1;
  text-align: center;
  padding: 10px;
}

.content
  .content-container
  .content-router
  .content-navigation
  .link.underline-feed {
  border-bottom: 2px solid yellow;
}
.content
  .content-container
  .content-router
  .content-navigation
  .link.underline-about {
  border-bottom: 2px solid yellow;
}
.content
  .content-container
  .content-router
  .content-navigation
  .link.underline-project {
  border-bottom: 2px solid yellow;
}
.content
  .content-container
  .content-router
  .content-navigation
  .link.underline-galery {
  border-bottom: 2px solid yellow;
}

.content .content-container .content-router .content-navigation .link:hover {
  background-color: #2d2627;
}

@media (max-width: 768px) {
  .content .content-container .content-router {
    padding: 0 5%;
  }
}

@media (max-width: 450px) {
  .content .content-container .content-router {
    padding: 0 2%;
  }
}
</style>
