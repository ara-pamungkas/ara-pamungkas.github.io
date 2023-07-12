<template>
    <div class="project">
      <div class="project-container">
        <h1>My Projects</h1>
        <div class="project-container-content">
          <h2>Online Shop Website 🛒</h2>
          <p>
            Source code click
            <a href="https://github.com/ara-pamungkas/Website-Online-shop">here</a
            >!
          </p>
  
          <div class="video-container">
            <video controls poster="@/assets/online-shop.png">
              <source src="@/assets/online-shop.mp4" />
            </video>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <style>

  .project .project-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  .project .project-container .project-container-content {
    width: 90%;
    max-width: 600px;
    margin: 0 auto; 
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }

  .project .project-container .project-container-content p {
    font-weight: 700;
  }

  .project .project-container .project-container-content p a{
    text-decoration: none;
    color: #f2cf30;
  }
  
  .project .project-container .project-container-content video {
    max-width: 100%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    .project .project-container .project-container-content {
      max-width: 600px;
    }
  }
  @media (max-width: 450px) {
    .project .project-container .project-container-content {
     max-width: 350px;
    }
  }
  </style>
  