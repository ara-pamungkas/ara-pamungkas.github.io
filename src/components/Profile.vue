<template>
  <div class="profile">
    <div class="profile-container">
      <div class="profile-content">
        <h1>Ara Pamungkas 🦕</h1>
        <div class="profile-description">
          <p>Programming has become a hobby <font-awesome-icon icon="tree" /></p>
          <p>
            Website Developer, Diligent, Humorous, Industrious and
            Conscientious.
          </p>
        </div>
        <div class="profile-icons">
            <div class="icons">
                <i><font-awesome-icon icon="briefcase" /></i>
                <p>Available</p>
            </div>
            <div class="icons">
                <i><font-awesome-icon icon="cake-candles" /></i>
                <p>Dec 2000</p>
            </div>
            <div class="icons">
                <i><font-awesome-icon icon="calendar-days" /></i>
                <p>Joined Jan 2022</p>
            </div>
            <div class="icons">
                <i><font-awesome-icon icon="graduation-cap" /></i>
                <p>SMAS Santo Benediktus</p>
            </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <img src="../assets//success.png" /> -->
</template>

<style>
.profile {
  color: #f2edd7;
  display: flex;
  justify-content: center;
}

.profile .profile-container {
    width: 724px;
}

.profile .profile-container .profile-content {
  padding: 0 10%;
  margin-top: 1px;
}

.profile .profile-container .profile-content h1 {
    margin-bottom: -5px;
}

.profile .profile-container .profile-content .profile-description p:first-child {
    margin-bottom: -5px;
}

.profile .profile-container .profile-content .profile-icons {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.profile .profile-container .profile-content .profile-icons .icons {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-right: 20px;
    margin-top: -10px;
}

@media (max-width: 768px) {
    .profile .profile-container .profile-content {
        margin-top: 10px;
    } 

    .profile .profile-container .profile-content h1 {
        font-size: 1.7rem;
    }

    .profile .profile-container .profile-content .profile-description p {
        font-size: 1rem;
    }
}


@media (max-width: 768px) {
    .profile .profile-container .profile-content {
        padding: 0 5%;
    } 
}

@media (max-width: 450px){
    .profile .profile-container .profile-content {
        padding: 0 2%;
        margin-top: -20px;
    }
}

</style>
