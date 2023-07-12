<template>
  <div class="hero">
    <div class="hero-container">
      <div class="hero-banner"></div>
      <div class="hero-profile">
        <div class="foto-profile">
          <div class="foto">
            <img src="../assets//foto-profile.jpg" alt="" />
          </div>
          <div class="follow-button">
            <a href="https://www.instagram.com/fapsss_/">Follow <i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  color: #f2edd7;
  display: flex;
  justify-content: center;
}

.hero .hero-container .hero-banner {
  height: 241px;
  width: 724px;
  background-image: url("../assets//pamungkas.png");
  background-size: cover;
  background-position: center;
}

.hero .hero-container .hero-profile {
  padding: 0 10%;
  height: 7.5vh;
}

.hero .hero-container .hero-profile .foto img {
  width: 135px;
  border-radius: 50%;
  border: 5px solid #3a3132;
  position: absolute;
  top: 235px;
}

.hero .hero-container .hero-profile .foto-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero .hero-container .hero-profile .foto-profile .follow-button {
  margin-top: 25px;
  font-size: 1.2rem;
  display: inline-block;
}

.hero .hero-container .hero-profile .foto-profile .follow-button a {
  background-color: #3f729b;
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: #f2edd7;
}

.hero .hero-container .hero-profile .foto-profile .follow-button a:hover {
  background-color: #3f729bc9;
}

.hero .hero-container .hero-profile .foto-profile .follow-button a i {
    margin-left: 10px;
}

@media (max-width: 768px) {
  .hero .hero-container .hero-banner {
    width: 100vw;
  }
  .hero .hero-container .hero-profile {
    padding: 0 5%;
  }
}

@media (max-width: 450px) {
    .hero .hero-container .hero-profile {
        padding: 0 2%;
    }

  .hero .hero-container .hero-profile .foto img {
    width: 100px;
    top: 250px;
  }

  .hero .hero-container .hero-profile .foto-profile .follow-button {
    font-size: 1rem;
  }
}
</style>
