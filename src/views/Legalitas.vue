<template>
    <div class="marketing">
        <!-- Background -->
        <div class="z offset-md-6 col-md-6 offset-3 col-9 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START PLAN -->
        
            <div class="container sec-leg">
                <div class="text-left">
                  <h1 class="l-t wow fadeInLeft">Legalitas</h1>
                  <hr class="garis wow fadeInUp">
                </div>
            </div>
        <!-- END PLAN -->

        
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
// import carousel from "vue-owl-carousel";
import Banner from '../components/Banner.vue'

  export default {
    components: {
      Lightbox,
      LightboxDefaultLoader,
      Banner,
    //   carousel
    },
    data() {
      return {
        thumbnail: "http://placekitten.com/g/100/100",
        images: [
            require("@/assets/images/about us/legalitas-1.png"),
            require("@/assets/images/about us/legalitas-2.png"),
            require("@/assets/images/about us/legalitas-3.png"),
            require("@/assets/images/about us/legalitas-4.png"),
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
    margin-bottom: 0px;
  }
</style>
