<template>
  <div class="home">
   <Navbar />
   <Hero />
   <Profile />
   <Content />
   <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Profile from '../components/Profile.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Hero,
    Profile,
    Content,
    Footer
  }
  
}
</script>
