<template>
  <div class="feed">
    <div class="feed-container">
      <div class="feed-section">
        <div class="pinned">
          <i><font-awesome-icon icon="thumbtack" /></i>
          <p>Pinned Post</p>
        </div>
        <div class="feed-content">
          <div class="feed-content-component">
            <img src="@/assets/foto-profile.jpg" alt="" />
            <div class="feed-content-profile">
              <div class="feed-name">
                <h3>Pamungkas</h3>
                <span
                  ><i><font-awesome-icon icon="earth-asia" /></i> 1 Jan
                  2022</span
                >
              </div>
              <p>🌴 Merasa Bahagia</p>
            </div>
          </div>
          <div class="feed-content-post">
            <h2>Hi all 👋 from Ara</h2>
            <p>
              This is my personal site which is used as a place to post about
              what I do and share the work that I make.
            </p>
            <div class="content-image img-satu"></div>
            <div class="feed-reaction">
              <i class="bi bi-heart"></i>
              <i class="bi bi-chat-left"></i>
              <i class="bi bi-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feed-container">
      <div class="feed-section">
        <div class="feed-content">
          <div class="feed-content-component">
            <img src="@/assets/foto-profile.jpg" alt="" />
            <div class="feed-content-profile">
              <div class="feed-name">
                <h3>Pamungkas</h3>
                <span
                  ><i><font-awesome-icon icon="earth-asia" /></i> 10 Jul
                  2023</span
                >
              </div>
              <p>🏛️ Pakuwon Mall Jogja</p>
            </div>
          </div>
          <div class="feed-content-post">
            <h2>Did You Know</h2>
            <p>
              Professor Charles Xavier, known as Professor X, is the founder and leader of the X-Men. He is a mutant with extraordinary telepathic abilities.
            </p>
            <div class="content-image img-dua"></div>
            <div class="feed-reaction">
              <i class="bi bi-heart"></i>
              <i class="bi bi-chat-left"></i>
              <i class="bi bi-share"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.feed .feed-container {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.feed .feed-container:hover {
  background-color: #2d2627;
  transform: none;
}

.feed .feed-container .feed-section {
  padding: 5px;
}

.feed .feed-container .feed-section .pinned {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5%;
  margin-bottom: -25px;
}

.feed .feed-container .feed-section .feed-content .feed-content-component {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feed .feed-container .feed-section .feed-content .feed-content-component img {
  width: 60px;
  border-radius: 50%;
}

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-component
  .feed-content-profile
  .feed-name {
  display: flex;
  align-items: center;
}

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-component
  .feed-content-profile p {
    font-weight: 700;
    padding: 10px;
    border-radius: 5px 10px;
    background-color: #545B77;
  }

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-component
  .feed-content-profile
  .feed-name
  span {
  margin-left: 10px;
  font-size: 15px;
}

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-component
  .feed-content-profile
  .feed-name
  span
  i {
  margin-right: 5px;
}

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-component
  .feed-content-profile
  p {
  margin-top: -15px;
}

.feed .feed-container .feed-section .feed-content .feed-content-post {
  margin-left: 13%;
  margin-top: -20px;
}

.feed .feed-container .feed-section .feed-content .feed-content-post p {
  margin-top: -10px;
}

/* Feed Content Image */

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .content-image {
  background-size: cover;
  background-position: center;
  height: 500px;
}

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .content-image.img-satu {
    background-image: url("@/assets/Foto-content-1.jpg");
  }
.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .content-image.img-dua {
    background-image: url("@/assets/Foto-content-2.jpg");
  }

/* Feed Content Image */

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .feed-reaction {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }

.feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .feed-reaction i {
    color: #f2edd7;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    .feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .content-image {
  height: 400px;
}
  }

  @media (max-width: 450px) {
    .feed
  .feed-container
  .feed-section
  .feed-content
  .feed-content-post
  .content-image {
  height: 300px;
}
  }
</style>
