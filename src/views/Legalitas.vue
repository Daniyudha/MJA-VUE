<template>
    <div class="legalitas">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START LEGALITAS -->
        <section class="legalitas">
            <div class="container sec-leg">
                <h1 class="l-t wow fadeInLeft">Legalitas</h1>
                <hr class="garis float-left wow fadeInUp">

                <div id="carrousel">
                    <div class="container wow fadeIn" data-wow-delay="400ms">
                        <div class="col-md-12 col-12">
                            <carousel class="legalitas-carousel" :responsive="{0:{items:1,nav:false},600:{items:2.4,nav:true},900:{items:3.7,nav:true}}" 
                            :center="false" :loop="true" :dots="false" :navText="navSlide" id="legal">
                                <div class="item">
                                    <img class="mklbItem ron" :src="require ('@/assets/images/about us/legalitas-1.png')"
                                        data-src="assets/images/about us/legalitas-1.png" data-gallery="gallery1" />
                                </div>
                                <div class="item">
                                    <img class="mklbItem ron" :src="require ('@/assets/images/about us/legalitas-2.png')"
                                        data-src="assets/images/about us/legalitas-2.png" data-gallery="gallery1" />
                                </div>
                                <div class="item">
                                    <img class="mklbItem ron" :src="require ('@/assets/images/about us/legalitas-3.png')"
                                        data-src="assets/images/about us/legalitas-3.png" data-gallery="gallery1" />
                                </div>
                                <div class="item">
                                    <img class="mklbItem ron" :src="require ('@/assets/images/about us/legalitas-4.png')"
                                        data-src="assets/images/about us/legalitas-4.png" data-gallery="gallery1" />
                                </div>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END LEGALITAS -->
        
        <Banner/>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Banner from '../components/Banner.vue'

export default {
    components: {
        carousel,
        Banner
    },
    data() {
      return {
        navSlide: [
          '<i class="legalitas-nav legalitas-prev fas fa-chevron-left"></i>',
          '<i class="legalitas-nav legalitas-next fas fa-chevron-right"></i>'
        ]
      }
    },
}
</script>

<style>
    .-mt-banner{
        margin-top: 100px;
    }
</style>