<template>
    <div class="gallery-slider">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START KONTEN -->
        <section class=" sec-kontak">
            <carousel class="stack-carousel" :responsive="{0:{items:1.3,nav:false},600:{items:2,nav:true},900:{items:4,nav:true}}" 
                :center="true" :loop="true" :dots="false" :navText="navSlide" id="legal">
                <div class="item">
                    <img class="mklbItem" :src="require ('@/assets/images/gallery/video-thumbnail-1.png')"
                        data-src="assets/images/gallery/video-thumbnail-1.png" data-gallery="gallery1" />
                </div>
                <div class="item">
                    <img class="mklbItem" :src="require ('@/assets/images/gallery/video-thumbnail-2.png')"
                        data-src="assets/images/gallery/video-thumbnail-2.png" data-gallery="gallery1" />
                </div>
                <!-- <div class="item">
                    <img class="mklbItem" :src="require ('@/assets/images/gallery/video-thumbnail-3.png')"
                        data-src="assets/images/gallery/video-thumbnail-3.png" data-gallery="gallery1" />
                </div> -->
                <div class="item">
                    <img class="mklbItem" :src="require ('@/assets/images/gallery/video-thumbnail-4.png')"
                        data-src="assets/images/gallery/video-thumbnail-4.png" data-gallery="gallery1" />
                </div>
            </carousel>
            <h6 class="text-center mt-3 wow fadeInUp">Acara MJA</h6>
        </section>
        <!-- END KONTEN -->
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: 'Gallery-slider',
    components: {
        carousel
    }
};
</script>