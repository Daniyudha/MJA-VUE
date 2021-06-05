<template>
    <div class="download">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START DOWNLOAD -->
        <div class="container sec-kontak">
            <h3 class="l-s mb-4 wow fadeInDown" data-wow-delay="200ms">DOWNLOAD</h3>
            <div class="row justify-content-center wow fadeIn" data-wow-delay="500ms">
                <div class="col-lg-3 col-md-5 col-9 mb-4">
                    <div class="card-download">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" :src="require ('@/assets/images/download/form-image 1.png')" alt="">
                                <h6 class="font-weight-bold mt-2">Formulir Pendaftaran</h6>
                                <button type="submit" class="btn btn-bg-ijo rounded px-3 py-2 mt-2"><i class="fas fa-download mr-2"></i> DOWNLOAD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-9 mb-4">
                    <div class="card-download">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" :src="require ('@/assets/images/download/form-image 1.png')" alt="">
                                <h6 class="font-weight-bold mt-2">Brosur Sistem MJA</h6>
                                <button type="submit" class="btn btn-bg-ijo rounded px-3 py-2 mt-2"><i class="fas fa-download mr-2"></i>DOWNLOAD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-9 mb-4">
                    <div class="card-download">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" :src="require ('@/assets/images/download/marketing-plan 1.png')" alt="">
                                <h6 class="font-weight-bold mt-2">Marketing Plan MJA</h6>
                                <button type="submit" class="btn btn-bg-ijo rounded px-3 py-2 mt-2"><i class="fas fa-download mr-2"></i>DOWNLOAD</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 col-9 mb-4">
                    <div class="card-download">
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid" :src="require ('@/assets/images/download/form-image 1.png')" alt="">
                                <h6 class="font-weight-bold mt-2">Brosur Produk MJA</h6>
                                <button type="submit" class="btn btn-bg-ijo rounded px-3 py-2 mt-2"><i class="fas fa-download mr-2"></i>DOWNLOAD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END DOWNLOAD -->

        <Banner/>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
    name: 'Download',
    components: {
        Banner
    }
}
</script>

<style>
.-mt-banner{
    margin-top: 100px;
}
</style>