<template>
    <div class="marketing">
        <!-- Background -->
        <div class="z offset-md-6 col-md-6 offset-3 col-9 -mt-n wow fadeInRight">
                <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START SLIDER -->
        <div class="container sec-leg">
            <div class="text-center">
                <h2 class="font-weight-bold l-s t-g wow fadeInDown" data-wow-delay="200ms">MARKETING PLAN</h2>
                <h3 class="text-abumuda t-g-d wow fadeInDown" data-wow-delay="400ms">PT. MAKIN JAYA AGUNG</h3>
            </div>

            <VueSlickCarousel class=""
                ref="c1"
                :asNavFor="$refs.c2"
                :focusOnSelect="true"
                :centerMode="true"
                :arrows="true"
                :navText="navSlide">
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-1.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-2.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-3.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-4.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-5.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-6.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-7.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-8.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-9.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-10.png')"/></div>
                <div class="c1"><img class="rounded-15" :src="require ('@/assets/images/marketing plan/mp-page-11.png')"/></div>
            </VueSlickCarousel>

            <VueSlickCarousel
                ref="c2"
                :asNavFor="$refs.c1"
                :slidesToShow="5.2"
                :focusOnSelect="true"
                >
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-1.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-2.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-3.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-4.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-5.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-6.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-7.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-8.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-9.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-10.png')"/></div>
                <div class="c2"><img class="rounded" :src="require ('@/assets/images/marketing plan/mp-page-11.png')"/></div>
            </VueSlickCarousel>
        </div>
        <!-- END SLIDER -->
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
    padding: 10px;
    margin-left: 0px;
}

@media (max-width:1025px) {
    .c2{
        padding: 20px;
        margin-left: 50px;
    }
}

@media (max-width:769px) {
    .c1{
        margin: 30px;
        border: 15px solid #000;
        border-radius: 15px;
        max-width: 90%;
    }
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
        margin: 9px;
        border: 8px solid #000;
        border-radius: 15px;
        max-width: 90%;
    }
    .c2{
        padding: 5px;
        margin-left: 40px;
    }
    .-mt-banner{
        margin-top: 200px;
    }
}

@media (max-width:400px) {
    .c1{
        margin: 7px;
        border: 8px solid #000;
        border-radius: 15px;
        max-width: 90%;
    }
    .c2{
        padding: 5px;
        margin-left: 40px;
    }
    .-mt-banner{
        margin-top: 200px;
    }
}

@media (max-width:330px) {
    .c1{
        margin: 5px;
        border: 8px solid #000;
        border-radius: 15px;
        max-width: 90%;
    }
    .c2{
        padding: 5px;
        margin-left: 40px;
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