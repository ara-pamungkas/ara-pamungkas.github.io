<template>
  <div class="gallery">
    <div class="gallery-container">
      <h1>My Gallerys</h1>

      <div class="annual-gallery">
        <h3>Best <span>in</span> 2023 🎁</h3>
        <div class="album">
          <img src="@/assets/Foto-content-2.jpg" alt="" />
        </div>
      </div>

      <hr />

      <div class="annual-gallery">
        <h3>Best <span>in</span> 2022 🎁</h3>
        <div class="album">
          <img src="@/assets/Foto-content-1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.gallery {
  padding: 20px;
}

.gallery .gallery-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.gallery .gallery-container hr {
  width: 100%;
  margin: 20px 0;
}
.gallery .gallery-container .annual-gallery h3 span {
  color: #f2cf30;
}

.gallery .gallery-container .annual-gallery .album {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.gallery .gallery-container .annual-gallery .album img {
  width: 200px;
  /* flex-grow: 1; */
}
</style>
