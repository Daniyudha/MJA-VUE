import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company-profile.vue')
  },
  {
    path: '/produk',
    name: 'Produk',
    component: () => import('../views/Produk.vue')
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('../views/Kontak-kami.vue')
  },
  {
    path: '/legalitas',
    name: 'Legalitas',
    component: () => import('../views/Legalitas.vue')
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: () => import('../views/Marketing-plan.vue')
  },
  {
    path: '/kodeetik',
    name: 'Kodeetik',
    component: () => import('../views/Kode-etik.vue')
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component: () => import('../views/Artikel.vue')
  },
  {
    path: '/single',
    name: 'Single',
    component: () => import('../views/Single-artikel.vue')
  },
  {
    path: '/stokis',
    name: 'Stokis',
    component: () => import('../views/Stokis.vue')
  },
  {
    path: '/masterstokis',
    name: 'Masterstokis',
    component: () => import('../views/Master-stokis.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/galleryslider',
    name: 'Galleryslider',
    component: () => import('../views/Gallery-slider.vue')
  },
  {
    path: '/gallerydownload',
    name: 'Gallerydownload',
    component: () => import('../views/Gallery-download.vue')
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: () => import('../views/Testimonial.vue')
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('../views/Download.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
