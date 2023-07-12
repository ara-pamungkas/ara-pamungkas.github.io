import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faTree, faBriefcase, faCakeCandles, faCalendarDays, faGraduationCap, faThumbTack, faEarthAsia, faX } from '@fortawesome/free-solid-svg-icons'
library.add(faX,faUserSecret, faTree, faBriefcase, faCakeCandles, faCalendarDays, faGraduationCap,faThumbTack, faEarthAsia)

import 'bootstrap-icons/font/bootstrap-icons.css';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
