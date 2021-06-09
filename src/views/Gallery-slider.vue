<template>
    <div class="marketing">
        <!-- Background -->
        <div class="z offset-md-6 col-md-6 offset-3 col-9 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        
        <Lightbox
            class="lb-demo"
            :thumbnail="thumbnail"
            :images="images"
            :openAtIndex="1"
        >
            <LightboxDefaultLoader slot="loader" />
            <div slot="content" slot-scope="{ url }">
            <iframe
                v-if="url.includes('youtube') || url.includes('youtu.be')"
                :src="url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                allowfullscreen
                style="width: 100%; height: 90vh;"
                effect="fade"
            />
            <img v-else :src="url">
            </div>
            
            <section class="sec-galerislider" slot="preview" slot-scope="{ show }" @click="show">
              <carousel class="stack-carousel" :responsive="{0:{items:1.3,nav:false,dots:true},600:{items:2,nav:false},900:{items:4,nav:true}}" 
                  :center="true" :loop="true" :dots="false" :navText="navSlide" id="legal">
                  <div class="item">
                      <img class="img-fluid" :src="require ('@/assets/images/gallery/video-thumbnail-1.png')"/>
                  </div>
                  <div class="item">
                      <img class="img-fluid" :src="require ('@/assets/images/gallery/video-thumbnail-2.png')"/>
                  </div>
                  <div class="item">
                      <img class="img-fluid" :src="require ('@/assets/images/gallery/video-thumbnail-4.png')"/>
                  </div>
              </carousel>
              <h6 class="text-center mt-3 wow fadeInUp">Acara MJA</h6>
            </section>

            
        </Lightbox>

        <!-- Background -->
        <div class="z -mt-section-2 wow fadeInUp">
            <img class="img-bg-2" :src="require ('@/assets/images/beranda/bg-section-2-3.png')" alt="">
        </div>
        <Banner/>
    </div>
</template>

<script>
import Lightbox, { LightboxDefaultLoader } from '../components/Lightbox.vue'
import carousel from "vue-owl-carousel";
import Banner from '../components/Banner.vue'

  export default {
    components: {
      Lightbox,
      LightboxDefaultLoader,
      Banner,
      carousel
    },
    data() {
      return {
        thumbnail: "http://placekitten.com/g/100/100",
        images: [
            require("@/assets/images/gallery/video-thumbnail-1.png"),
            require("@/assets/images/gallery/video-thumbnail-2.png"),
            require("@/assets/images/gallery/video-thumbnail-4.png"),
            "https://youtu.be/N-WGxQQo4cA"
        ],
        navSlide: [
          '<i class="legalitas-nav legalitas-prev fas fa-chevron-left"></i>',
          '<i class="legalitas-nav legalitas-next fas fa-chevron-right"></i>'
        ]
      }
    }
  }
</script>

<style scoped>
  .lb-demo {
    /* height: 100px;
    width: 100px; */
    /* margin-top: -100px; */
    margin-bottom: 100px;
  }

  .lightbox__image img {
    margin: 0px;
    width: 100%;
    height: auto !important;
  }

 /* .-mt-section-2{
   margin-top: -180px;
 } */
</style>
