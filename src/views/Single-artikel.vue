<template>
    <div class="single">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START KONTEN -->
        <div class="sec-company">
            <div class="container">
                <h5 class="mt-5 wow fadeInLeft">FINANCE > ENERGI</h5>
                <h1 class="mt-3 t-home wow fadeInDown" data-wow-delay="200ms">Penyebab Kebakaran Kilang Balongan Masih Misteri, Apakah Disengaja?</h1>
                <div class="row mt-5 wow fadeInUp" data-wow-delay="400ms">
                    <div class="col-9 col-md-9 col-10">
                        <p class="text-muted">SENIN, 5 APRIL 2021 10:20 WIB</p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-10">
                        <a href="#" class="sosmed"><span class="fab fa-facebook-square mx-2"></span></a>
                        <a href="#" class="sosmed"><span class="fab fa-twitter mx-2"></span></a>
                        <a href="#" class="sosmed"><span class="fab fa-whatsapp mx-2"></span></a>
                        <a href="#" class="sosmed"><span class="fa fa-link mx-2"></span></a>
                    </div>
                </div>
                <div>
                    <img class="mb-3 img-fluid wow fadeInLeft" data-wow-delay="600ms" :src="require ('@/assets/images/artikel/penyebab-kebakaran-kilang-big.png')" alt="" width="1100px">
                    <p class="text-justify">Jakarta - Muncul spekulasi bahwa kebakaran tangki di Kilang Balongan, Indramayu, Jawa Barat
                        disengaja.
                        Ada ulah mafia migas yang ikut campur kata Pengamat Ekonomi Energi Universitas Gadjah Mada Fahmy
                        Radhi.
                    </p>
                    <p class="text-justify">"Sebagai kilang modern, Balongan mestinya punya pengamanan berlapis dalam menghadapi kebakaran,
                        termasuk
                        disebabkan petir. Bahkan, indikator sistem pengamanan tersebut adalah zero accidents," kata dia
                        melalui
                        pesan singkat kepada detikcom, kemarin Minggu (4/4/2021).</p>
                    <p class="text-justify">Kebakaran kilang tersebut, menurutnya semakin memperbesar indikasi adanya pihak yang tidak ingin
                        Indonesia memiliki kilang minyak.</p>
                    <p class="text-justify">"Sebelumnya, rencana pengembangan Kilang Cilacap, Bontang dan Tuban juga belum dapat direalisasikan.
                        Dengan terbakarnya kilang Balongan, impor BBM semakin membesar, yang menguntungkan bagi mafia migas
                        berburu rente pada impor BBM," sebutnya.</p>
                    <p class="text-justify">Pertamina, menurutnya harus melakukan investigasi secara transparan. Itu wajib dilakukan untuk
                        memastikan
                        kebakaran di Kilang Balongan murni kecelakaan, bukan ada unsur kesengajaan yang dilakukan mafia
                        migas.
                    </p>
                    <p class="text-justify">"Momentum yang tepat bagi Ahok, yang mendapat penugasan dari Jokowi memberantas mafia migas, untuk
                        membuktikan bahwa kebakaran tersebut bukan ulah mafia migas," tambahnya.</p>
                    <p class="text-justify">Dihubungi terpisah, Direktur Eksekutif Energy Watch Mamit Setiawan tak bisa menduga-duga apakah
                        kebocoran
                        tangki disengaja atau tidak.</p>
                    <p class="text-justify">"Terkait dengan disengaja atau tidak mungkin saya tidak bisa menyatakan itu ya, mungkin nanti pihak
                        penyidik yang menyampaikan. Tetapi buat saya, berdasarkan informasi yang beredar kan sudah ada
                        pengaduan
                        dari masyarakat sebelumnya terkait dengan adanya bau kalau tidak salah, ada bau menyengat beberapa
                        jam
                        sebelum kejadian," terangnya.</p>
                    <p class="text-justify">Menurutnya, hal yang dia jelaskan di atas sudah menjadi indikasi bahwa ada yang salah di Kilang
                        Balongan,
                        entah apakah sistem keamanan di Pertamina tidak berjalan, dia mengatakan itu harus dicari tahu lebih
                        dalam. Sebab, begitu ada kebocoran atau pengaduan sudah selayaknya Pertamina langsung segera
                        bertindak.
                    </p>
                    <p class="text-justify">"Tinggal kita lihat hasil penyidikan dari kepolisian terus juga para pihak berwajib yang lain, dari
                        Kementerian ESDM untuk menyelidiki lebih lanjut terkait dengan hal ini," tambah Mamit.</p>
                </div>
            </div>
        </div>
        <!-- END KONTEN -->

        <!-- START ARTIKEL TERKAIT -->
        <div class="container">
            <h3 class="font-weight-bold wow fadeInDown">ARTIKEL HARI INI</h3>

            <carousel class="single-carousel" :responsive="{0:{items:1,nav:false,autoplay:true,autoplayTimeout:3000},600:{items:2,nav:true},900:{items:3,nav:true}}" 
                            :center="false" :loop="true" :dots="false"  :navText="navSlide" id="legal">

                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/kemnaker-dorong-calon-pekerja.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Kemnaker dorong Calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021</h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
                                            Kartu Prakerja 2021.
                                            Selain itu Kemenker memberikan berbagai jenis seminar untuk pemegang Kartu
                                            Prakerja 2021.</p>
                                    </a>
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


                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/akhirnya-facebook-bersedia.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Akhirnya Facebook Bersedia membayar berita di Australia
                                        </h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
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

                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/tangapi-akselerasi-perubahan.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Tanggapi Akselerasi Perubahan dengan Perubahan SDM</h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
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

                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5" :src="require ('@/assets/images/artikel/kondisi-makin-parah.png')"
                                    alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Kondisi makin parah di Myanmar saat Pabrik-pabrik China
                                            dijarah</h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
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

                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5"
                                    :src="require ('@/assets/images/artikel/sudah-tahu-syarat-dapat-blt.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Sudah tahu syarat dapat BLT UMKM 2021? cek di sini</h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
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

                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5" :src="require ('@/assets/images/artikel/pantang-menyerah.png')"
                                    alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Pantang Menyerah, Mantan Karyawan toko Sepatu Sukses
                                            jadi
                                            Bos Sepatu</h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
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

                <div class="item">
                    <div class="card-artikel-out">
                        <div class="card-body">
                            <div class="img-container">
                                <img class="rounded-15 img-fluid mb-5" :src="require ('@/assets/images/artikel/waket-mpr.png')" alt="">
                                <div class="img-caption bottom-top mt-2">
                                    <a href="">
                                        <h3 class="font-weight-bold">Waket MPR sebut ada 1.768 Hoax soal COVID-19 di 2.264
                                            akun
                                            Medsos</h3>
                                        <p class="text-abumuda d-none d-md-block">Jakarta - Kemenker dorong calon Pekerja Migran dapat kuota
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
            </carousel>
        </div>
        <!-- END ARTIKEL TERKAIT -->
    </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: 'Single',
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

