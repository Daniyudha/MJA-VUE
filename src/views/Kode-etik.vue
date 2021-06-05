<template>
    <div class="kodeetik">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START KODE ETIK -->
        <div class="container sec-leg">
            <div class="text-center">
                    <h2 class="font-weight-bold l-s wow fadeInDown" data-wow-delay="200ms">KODE ETIK</h2>
                    <h3 class="text-abumuda wow fadeInDown" data-wow-delay="400ms">PT. MAKIN JAYA AGUNG</h3>
            </div>

            <VueSlickCarousel class=""
                ref="c1"
                :asNavFor="$refs.c2"
                :focusOnSelect="true"
                :centerMode="true"
                :arrows="true"
                :navText="navSlide">
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-1.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-2.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-3.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-4.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-5.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-6.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-7.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-8.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-9.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-10.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-11.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-12.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-13.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-14.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-15.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-16.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-17.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-18.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-19.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-20.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-21.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-22.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-23.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-24.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-25.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-26.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-27.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-28.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-29.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-30.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-31.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-32.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-33.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-34.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-35.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-36.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-37.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-38.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-39.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-40.png')"/></div>
            </VueSlickCarousel>

            <VueSlickCarousel
                ref="c2"
                :asNavFor="$refs.c1"
                :slidesToShow="5"
                :focusOnSelect="true"
                >
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-1.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-2.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-3.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-4.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-5.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-6.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-7.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-8.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-9.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-10.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-11.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-12.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-13.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-14.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-15.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-16.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-17.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-18.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-19.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-20.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-21.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-22.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-23.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-24.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-25.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-26.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-27.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-28.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-29.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-30.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-31.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-32.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-33.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-34.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-35.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-36.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-37.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-38.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-39.png')"/></div>
                <div class="c2"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/ke-page-40.png')"/></div>
            </VueSlickCarousel>
        </div>
        <!-- END KODE ETIK -->

        <!-- Background -->
        <div class="z -mt-section wow fadeInUp">
            <img class="img-bg-2 d-md-block d-none" :src="require ('@/assets/images/beranda/bg-section-2-3.png')" alt="">
        </div>

        <Banner/>
    </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Banner from '../components/Banner.vue'
 
  export default {
    name: 'MyComponent',
    components: { 
        VueSlickCarousel,
        Banner 
        },
    data() {
      return {
        settings: {
            "centerMode": true,
            "centerPadding": "40px",
            "focusOnSelect": true,
            "infinite": true,
            "slidesToShow": 1,
            "speed": 500,
        },
        navSlide: [
          '<i class="legalitas-nav legalitas-prev fas fa-chevron-left"></i>',
          '<i class="legalitas-nav legalitas-next fas fa-chevron-right"></i>'
        ]
      }
    },
  }
</script> 

<style>
.nav-menu{
    position: relative;
    margin-top: 0px;
}
/* .-mt-n{
    margin-top: -84px;
} */
.pad{
    padding: 50px;
}
.c1{
    margin: 70px;
    border: 20px solid #000;
    border-radius: 15px;
    max-width: 85%;
}

.c2{
    padding: 30px;
    margin-left: 40px;
}

@media (max-width:1025px) {
    .c2{
        padding: 20px;
        margin-left: 50px;
    }
}

@media (max-width:769px) {
    .c2{
        padding: 10px;
        margin-left: 50px;
    }
    .-mt-section{
        margin-top: -150px;
    }
}

@media (max-width:500px) {
    .c1{
        margin: 18px;
        border: 10px solid #000;
        border-radius: 15px;
        max-width: 90%;
    }
    .c2{
        padding: 5px;
        margin-left: 60px;
    }
    .-mt-banner{
        margin-top: 200px;
    }
}

.slick-prev {
    left: -60px;
}

@media (max-width:1025px) {
    .slick-prev{
        left: 0px;
    }
    .slick-next{
        right: 30px;
    }
}
</style>