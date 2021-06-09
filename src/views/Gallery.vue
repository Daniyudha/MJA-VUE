<template>
    <div class="gallery">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START KONTEN -->
        <section class=" sec-gallery">
            <div class="container">
                <div class="text-center mt-5 mb-5">
                    <h2 class="text-kuning font-weight-bold t-g wow fadeInDown" data-wow-delay="100ms">GALERI FOTO & VIDEO</h2>
                    <h5 class="text-abumuda t-g-d wow fadeInDown" data-wow-delay="300ms">SEGALA AKTIVITAS YANG BERHUBUNGAN DENGAN MJA</h5>
                </div>
                <div class="text-center wow fadeInLeft" data-wow-delay="500ms">
                    <router-link to="/galleryslider" class="navbar-brand">
                        <img class="mklbItem mb-4 img-fluid" :src="require ('@/assets/images/gallery/bg-video.png')" data-youtube-id="feoRIr5MNHM" />
                    </router-link>
                </div>
                <div class="row justify-content-center ml-3 mr-3">
                    <div class="col-lg-5 col-md-6 mb-4 wow fadeInLeft" data-wow-delay="700ms">
                        <router-link to="/galleryslider" class="navbar-brand">
                            <img class="mklbItem rounded-15 img-fluid" :src="require ('@/assets/images/gallery/image-event-1.png')"
                                data-src="assets/images/gallery/image-event-1.png" data-gallery="gallery1" />
                            <!-- <img class="ron" src="assets/images/galeri/image-1.png" alt=""> -->
                            <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                        </router-link>
                    </div>
                    <div class="col-lg-5 col-md-6 mb-4 wow fadeInRight" data-wow-delay="900ms">
                        <router-link to="/galleryslider" class="navbar-brand">
                            <img class="mklbItem rounded-15 img-fluid" :src="require ('@/assets/images/gallery/image-event-2.png')"
                                data-src="assets/images/gallery/image-event-2.png" data-gallery="gallery1" />
                            <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                        </router-link>
                    </div>
                <!-- </div>
                <div class="row justify-content-center ml-3 mr-3"> -->
                    <div class="col-lg-5 col-md-6 mb-4 wow fadeInLeft" data-wow-delay="1100ms">
                        <router-link to="/galleryslider" class="navbar-brand">
                            <img class="mklbItem rounded-15 img-fluid" :src="require ('@/assets/images/gallery/image-event-3.png')"
                                data-src="assets/images/gallery/image-event-3.png" data-gallery="gallery1" />
                            <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                        </router-link>
                    </div>
                    <div class="col-lg-5 col-md-6 mb-4 wow fadeInRight" data-wow-delay="1300ms">
                        <router-link to="/galleryslider" class="navbar-brand">
                            <img class="mklbItem rounded-15 img-fluid" :src="require ('@/assets/images/gallery/image-event-4.png')"
                                data-src="assets/images/gallery/image-event-4.png" data-gallery="gallery1" />
                            <h5 class="text-white des-galeri">PRODUCT NAME</h5>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!-- END KONTEN -->
    </div>
</template>