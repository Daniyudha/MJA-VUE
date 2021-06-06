<template>
    <div class="marketing">
        <!-- Background -->
        <div class="z offset-6 col-6 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START PLAN -->
        <section class="legalitas">
            <div class="container sec-leg">
                <div class="text-center">
                    <h2 class="font-weight-bold l-s t-g wow fadeInDown" data-wow-delay="200ms">MARKETING PLAN</h2>
                    <h3 class="text-abumuda t-g-d wow fadeInDown" data-wow-delay="400ms">PT. MAKIN JAYA AGUNG</h3>
                </div>
            </div>
        </section>
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
    margin-bottom: 100px;
  }
</style>
