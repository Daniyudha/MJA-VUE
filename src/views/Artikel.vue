<template>
    <div class="artikel">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START HERO -->
        <div class="sec-kontak">
            <div class="container">
                <div class="text-center">
                    <form class="form-search wow fadeInDown" data-wow-delay="200ms" method="get" action="#">
                        <div class="d-flex justify-content-center">
                            <input type="search" name="search" placeholder="Cari Artikel">
                            <button type="submit" class="rounded"><span class="fa fa-search"></span></button>
                        </div>
                    </form>
                    <div class="row justify-content-center mt-3 wow fadeInUp" data-wow-delay="400ms">
                        <div class="col-lg-2 col-md-2 col-5">
                            <p>#Politik</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-5">
                            <p>#Bisnis</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-5">
                            <p>#Lifestyle</p>
                        </div>
                        <div class="col-lg-2 col-md-2 col-5">
                            <p>#Ekonomi</p>
                        </div>
                    </div>
                </div>

                <div id="carrousel">
                    <div class="col-md-12">
                        <carousel class="artikel-carousel" :responsive="{0:{items:1,nav:false},600:{items:1,nav:true},900:{items:1,nav:true}}" 
                            :center="false" :loop="true" :dots="false" :navText="navSlide" id="legal">

                            <div class="item">
                                <div class="card-artikel">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <img class="img-fluid" :src="require ('@/assets/images/artikel/analisis-ahli.png')" alt="">
                                            </div>
                                            <div class="col-md-6 mt-md-0 mt-3">
                                                <h5 class="font-weight-bold">Analisis Ahli soal isu Presiden 3 Periode dan
                                                    Orang-orang Dekat Jokowi</h5>
                                                <p class="text-abumuda text-justify mt-3 max-title">Jakarta - Kantor Staff
                                                    Presiden curiga
                                                    ada pihak yang akan menjerumuskan Presiden Joko Widodo ( Jokowi )
                                                    melalui isu Jabatan Presiden 3 Periode. Pengamat politik Univesitas
                                                    Al-Azhar...</p>
                                                <div class="row align-items-center">
                                                    <div class="col-10">
                                                        <div class="row align-items-center">
                                                            <div class="ml-3">
                                                                <img class="img-fluid"
                                                                    :src="require ('@/assets/images/artikel/rudi-khoirudin.png')" alt="">
                                                            </div>
                                                            <div class="ml-2">
                                                                <p class="text-ijo my-1">Rudi Khoirudin</p>
                                                                <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-2">
                                                        <router-link class="link" to="/artikel"><i class="fas fa-external-link-alt"></i></router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-artikel">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <img class="img-fluid" :src="require ('@/assets/images/artikel/analisis-ahli.png')" alt="">
                                            </div>
                                            <div class="col-md-6 mt-md-0 mt-3">
                                                <h5 class="font-weight-bold">Analisis Ahli soal isu Presiden 3 Periode dan
                                                    Orang-orang Dekat Jokowi</h5>
                                                <p class="text-abumuda text-justify mt-3 max-title">Jakarta - Kantor Staff
                                                    Presiden curiga
                                                    ada pihak yang akan menjerumuskan Presiden Joko Widodo ( Jokowi )
                                                    melalui isu Jabatan Presiden 3 Periode. Pengamat politik Univesitas
                                                    Al-Azhar...</p>
                                                <div class="row align-items-center">
                                                    <div class="col-10">
                                                        <div class="row align-items-center">
                                                            <div class="ml-3">
                                                                <img class="img-fluid"
                                                                    :src="require ('@/assets/images/artikel/rudi-khoirudin.png')" alt="">
                                                            </div>
                                                            <div class="ml-2">
                                                                <p class="text-ijo my-1">Rudi Khoirudin</p>
                                                                <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-2">
                                                        <a href="" class="link">
                                                            <i class="fas fa-external-link-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="card-artikel">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-md-6">
                                                <img class="img-fluid" :src="require ('@/assets/images/artikel/analisis-ahli.png')" alt="">
                                            </div>
                                            <div class="col-md-6 mt-md-0 mt-3">
                                                <h5 class="font-weight-bold">Analisis Ahli soal isu Presiden 3 Periode dan
                                                    Orang-orang Dekat Jokowi</h5>
                                                <p class="text-abumuda text-justify mt-3 max-title">Jakarta - Kantor Staff
                                                    Presiden curiga
                                                    ada pihak yang akan menjerumuskan Presiden Joko Widodo ( Jokowi )
                                                    melalui isu Jabatan Presiden 3 Periode. Pengamat politik Univesitas
                                                    Al-Azhar...</p>
                                                <div class="row align-items-center">
                                                    <div class="col-10">
                                                        <div class="row align-items-center">
                                                            <div class="ml-3">
                                                                <img class="img-fluid"
                                                                    :src="require ('@/assets/images/artikel/rudi-khoirudin.png')" alt="">
                                                            </div>
                                                            <div class="ml-2">
                                                                <p class="text-ijo my-1">Rudi Khoirudin</p>
                                                                <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-2">
                                                        <a href="" class="link">
                                                            <i class="fas fa-external-link-alt"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </carousel>
                    </div>
                </div>
            </div>
        </div>
        <!-- END HERO -->

        <!-- START ARTIKEL HARI INI -->
        <div class="container">
            <h3 class="font-weight-bold mb-4 wow fadeInUp">ARTIKEL HARI INI</h3>

            <div class="row justify-content-center wow fadeIn" data-wow-delay="500ms">

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/kemnaker-dorong-calon-pekerja.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <router-link to="/single">
                                        <h3 class="font-weight-bold">Kemnaker dorong Calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </router-link>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/rudi-khoirudin.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Rudi Khoirudin</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/akhirnya-facebook-bersedia.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Akhirnya Facebook Bersedia membayar berita di Australia</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/bbc-indonesia.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">BBC Indonesia</p>
                                        <p class="text-abumuda my-1">Senin, 29 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/tangapi-akselerasi-perubahan.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Tanggapi Akselerasi Perubahan dengan Perubahan SDM</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/bambang-soesatya.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Bambang Soesatya</p>
                                        <p class="text-abumuda my-1">Jumat, 17 Apr 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/kondisi-makin-parah.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Kondisi makin parah di Myanmar saat Pabrik-pabrik China dijarah</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/tim-makinjayaagung.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Tim Makin Jaya Agung</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/sudah-tahu-syarat-dapat-blt.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Sudah tahu syarat dapat BLT UMKM 2021? cek di sini</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/tim-makinjayaagung.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Tim Makin Jaya Agung</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/pantang-menyerah.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Pantang Menyerah, Mantan Karyawan toko Sepatu Sukses jadi Bos Sepatu</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/abu-ubaidillah.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Abu Ubaidillah</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/waket-mpr.png')" alt="">
                                <!-- <h6 class="font-weight-bold mt-3">Kemnaker dorong Calon Pekerja Migran dapat kuota Kartu Prakerja 2021</h6> -->
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Waket MPR sebut ada 1.768 Hoax soal COVID-19 di 2.264 akun Medsos</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/jihaan-khoirunnisaa.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Jihan Khoirunissa</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/batu-bara-dihapus.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Abu Batu Bara dihapus dari daftar limbah B3, PKB:Ancam Hidup Manusia</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/rahel-narda-chaterine.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Rahel Narda Chaterine</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-10">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/rumah-mewah-dijakarta.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Rumah Mewah di Jakarta Diskon hingga Rp 227 juta & bebas BPHTB!</h3>
                                        <p class="text-abumuda">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="row align-items-center mt-3">
                                <div class="row align-items-center">
                                    <div class="ml-4">
                                        <img class="img-fluid" :src="require ('@/assets/images/artikel/advetorial.png')" alt="">
                                    </div>
                                    <div class="ml-2">
                                        <p class="text-ijo my-1">Advetorial</p>
                                        <p class="text-abumuda my-1">Rabu, 17 Mar 2021 04.30 WIB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- END ARTIKEL HARI INI -->

        <div class="container">
            <div class="text-center wow fadeInUp">
                <ul class="pg">
                    <li>
                        <a href="">1</a>
                    </li>
                    <li>
                        <a href="">2</a>
                    </li>
                    <li>
                        <a href="">3</a>
                    </li>
                    <li>
                        <a href="">...</a>
                    </li>
                    <li>
                        <a href="">10</a>
                    </li>
                    <li>
                        <a href=""><i class="fas fa-chevron-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: 'Artikel',
    components: {
        carousel
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