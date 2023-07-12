<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-icons">
        <a href="">
            <i class="bi bi-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/fapsss_/">
            <i class="bi bi-instagram"></i>
        </a>
        <a href="https://github.com/ara-pamungkas">
            <i class="bi bi-github"></i>
        </a>
        <a href="https://medium.com/@arapamungkas">
            <i class="bi bi-medium"></i>
        </a>
      </div>
      <div class="footer-text">
        <p>
            Pamungkas <i class="bi bi-c-circle"></i> 2023
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.footer {
  margin-top: 50px;
  color: #f2edd7;
}
.footer .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer .footer-container .footer-icons {
    display: flex;
    gap: 15px;
}

.footer .footer-container .footer-icons a {
    text-decoration: none;
    color: #f2edd7;
}

.footer .footer-container .footer-icons a i {
    font-size: 1.2rem;
    cursor: pointer;
    padding: 8px;
    border-radius: 10px;
}

.footer .footer-container .footer-icons a i:hover {
    background-color: #FF8989;
}

.footer .footer-container .footer-text p i {
    color: #f2cf30;
}

</style>
