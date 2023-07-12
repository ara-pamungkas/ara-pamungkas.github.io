<template>
  <div class="navbar">
    <p>
        Pamungkas.<span>me</span>
    </p>
</div>
</template>

<style>
.navbar {
    height: 7vh;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    color: #f2edd7;
    display: flex;
    align-items: center;
    padding: 0 10%;
    z-index: 9999;
}

.navbar p{
    font-weight: 700;
    font-size: 2rem;
}

.navbar p span {
    color: #f2cf30;
}

@media (max-width: 768px) {
    .navbar {
        padding: 0 5%;
    }
    .navbar p {
        font-size: 1.5rem;
    } 
}

@media (max-width: 450px){
    .navbar p {
        font-size: 1.2rem;
    }
}
</style>