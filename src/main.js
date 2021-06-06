import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import VueCarousel from 'vue-carousel';
import VueLazyLoad from 'vue-lazyload'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// global registration in the entry file, e.g. main.js
import VueEasyLightbox from 'vue-easy-lightbox'

// Method 1. via Vue.use
Vue.use(VueEasyLightbox)

// Method 2. Register via Vue.component
Vue.component(VueEasyLightbox.name, VueEasyLightbox)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueLazyLoad)

Vue.use(VueCarousel);

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

