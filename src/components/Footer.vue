<template>
    <!-- START FOOTER -->
    <div class="page-footer-section bg-white mt-5 wow fadeInUp" id="contact">
        <div class="container">
            <div class="row footer-middle justify-content-center">
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 text-center text-md-left">
                    <h5>DOWNLOAD</h5>
                    <ul class="list-unstyled text-small list-foot">
                        <li><router-link to="/download">Download</router-link></li>
                        <li><a href="/test">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 text-center text-md-left">
                    <h5>GALLERY</h5>
                    <ul class="list-unstyled text-small">
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li><router-link to="/galleryslider">Acara</router-link></li>
                        <li><router-link to="/gallerydownload">Download</router-link></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 text-center text-md-left">
                    <h5>BERITA</h5>
                    <ul class="list-unstyled text-small">
                        <li><router-link to="/artikel">Artikel</router-link></li>
                        <li><router-link to="/testimonial">Testimonial</router-link></li>
                        <li><a href="#">Dolor</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6 col-12 text-center text-md-left">
                    <h5>KEAGENAN</h5>
                    <ul class="list-unstyled text-small">
                        <li><router-link to="/stokis">Stokis</router-link></li>
                        <li><router-link to="/masterstokis">Master Stokis</router-link></li>
                        <li><a href="#">Dolor</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-3 text-center">
                    <img :src="require ('@/assets/images/beranda/logo-mja.svg')" alt="">
                </div>
            </div>
        </div>
        <!-- Copyright -->
        <div class="container">
            <div class="text-center mt-3">
                <p>&copy; Esoftdream All Right Reserved</p>
            </div>
        </div>
    </div>
    <!-- END FOOTER -->
</template>

