<template>
    <div class="produk">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n  wow fadeInRight">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START HERO -->
        <div class="container sec-produk">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <img class="img-fluid" :src="require ('@/assets/images/produk/ilus-produk-header-remove.png')" alt="">
                </div>
                <div class="col-lg-6 col-md-6 offset-lg-1">
                    <div class="">
                        <h1 class="t-home wow fadeInRight" data-wow-delay="400ms">Produk-Produk MLM <br> Makin Jaya Agung</h1>
                        <p class="text-abumuda wow fadeInRight" data-wow-delay="600ms">"Dapatkan penghasilan impian anda yang tak terhingga dengan mempelajari
                            JURUS AJAIB
                            jaman now yang akan
                            melejitkan penghasilan anda berlipat-lipat bersama Milagros."</p>
                    </div>
                </div>
                <!-- <div class="col-md-6 mt-section d-block d-lg-none">
                    <img class="img-fluid" src="assets/images/produk/ilus-produk-header.png" alt="">
                </div> -->
            </div>
        </div>
        <!-- END HERO -->

        <!-- START PRODUK KAMI -->
        <div class="container mt-section">
            <h1 class="wow fadeInDown">PRODUK KAMI</h1>
            <hr class="garis float-left wow fadeInUp">

            <div class="row mt-section align-items-center">
                <div class="col-lg-6 offset-lg-1 col-md-6 col-12 wow fadeInLeft" data-wow-delay="200ms">
                    <img class="img-fluid" :src="require ('@/assets/images/produk/teh-gaharu.png')" alt="">
                </div>
                <div class="col-lg-4 col-md-6 col-12 mt-5 mt-md-0">
                    <div class="khasiat-card mb-4 wow fadeInRight" data-wow-delay="400ms">
                        <div class="card-body">
                            <h5 class="khasiat-card-title">Teh Hijau Gaharu</h5>
                            <ul class="text-left mt-4">
                                <li>Teh Gaharu Sebagai Anti Depres</li>
                                <li>Teh Gaharu Sebagai Anti Penuaan</li>
                                <li>Menjaga Berat Badan</li>
                                <li>Detoksifikasi Tubuh</li>
                                <li>Mengurangi Rasa Mabuk</li>
                                <li>Menambah Energi</li>
                                <li>Menenangkan Tubuh</li>
                                <li>Dibuat Menjadi Minyak</li>
                                <li>Manfaat Aromaterapi</li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center wow fadeInRight" data-wow-delay="600ms">
                        <a class="btn-bg-ijo rounded-15 py-2 px-5" href="">Order</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Background -->
        <div class="z bg-1-2 wow fadeInLeft">
            <img class="img-bg-kiri" :src="require ('@/assets/images/beranda/bg-section-2-3.png')" alt="">
        </div>

        <div class="container -mt-section">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-12 offset-lg-2 col-md-6 col-10 mt-5 d-block d-md-none mb-5 wow fadeIn">
                    <img class="img-fluid" :src="require ('@/assets/images/produk/kopi-perkasa.png')" alt="">
                </div>
                <div class="col-lg-5 col-md-6">
                    <div class="khasiat-card mb-4  wow fadeInLeft">
                        <div class="card-body">
                            <h5 class="khasiat-card-title">Kopi Gaharu Perkasa</h5>
                            <ul class="text-left mt-4">
                                <li>Membantu Memperlancar Peredaran Darah</li>
                                <li>Membantu Memperlancar Metabolisme Tubuh</li>
                                <li>Membantu Memperlancar Hubungan Suami Istri</li>
                                <li>Membantu Ketahanan Dalam Berhubungan Suami Istri</li>
                                <li>Membantu Memperkuat Daya Tahan Tubuh Dan Antioksidan</li>
                                <li>Membantu Meningkatkan Konsentrasi dan Daya Ingat</li>
                                <li>Memperbaiki Fungsi Ereksi Pada Pria</li>
                                <li>Meningkatkan Produksi Sperma, Merangsang Saraf Sensorik Pada Organ Seksual, Merangsang
                                    Sekresi Hormon Dan Meningkatkan Jumlah Dan Kepadatan Seperma</li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center wow fadeInLeft" data-wow-delay="200ms">
                        <a class="btn-bg-ijo rounded-15 py-2 px-5" href="">Order</a>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-2 col-md-6 d-none d-md-block wow fadeInRight" data-wow-delay="400ms">
                    <img class="img-fluid" :src="require ('@/assets/images/produk/kopi-perkasa.png')" alt="">
                </div>
            </div>
        </div>

        <!-- Background -->
        <div class="float-right z bg-1-2 wow fadeInRight">
            <img class="img-bg-kanan mt-5" :src="require ('@/assets/images/beranda/bg-section-3-4.svg')" alt="">
        </div>

        <div class="container">
            <div class="row mt-section align-items-center justify-content-center">
                <div class="col-lg-6 offset-lg-1 col-md-6 col-12 mb-5 wow fadeInLeft">
                    <img class="img-fluid" :src="require ('@/assets/images/produk/sabun-gaharu.png')" alt="">
                </div>
                <div class="col-lg-5 col-md-6 col-12">
                    <div class="khasiat-card mb-4 wow fadeInRight" data-wow-delay="200ms">
                        <div class="card-body">
                            <h5 class="khasiat-card-title">Sabun Gaharu</h5>
                            <ul class="text-left mt-4">
                                <li>Mencerahkan Kulit</li>
                                <li>Membersihkan Sisa-sisa Kosmetik</li>
                                <li>Dapat Meregenerasi Sel Kulit Mati</li>
                                <li>pH Normal Aman Untuk Kulit</li>
                                <li>Merontokkan Komedo</li>
                                <li>Tidak Membuat Iritasi Pada Kulit</li>
                                <li>Mengecilkan Pori-pori Kulit Sehingga Tampak Segar dan Awet Muda</li>
                                <li>Membuat Kulit Selalu Lembab, Halus Seperti Bayi</li>
                                <li>Pewangi Alami Dari Aromateraphy Minya Sereh Wangi</li>
                                <li>Dapat Menghilangkan Flek Hitam Bekas Jerawat</li>
                                <li>Membantu Memancarkan Aura Positif Pada Pemakainya</li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center wow fadeInRight" data-wow-delay="400ms">
                        <a class="btn-bg-ijo rounded-15 py-2 px-5" href="">Order</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Background -->
        <div class="z bg-2-1 wow fadeInLeft">
            <img class="img-bg-kiri mt-lg-0 mt-md-5" :src="require ('@/assets/images/beranda/bg-section-4-5.svg')" alt="">
        </div>

        <div class="container -mt-section">
            <div class="mt-lg-0 mt-md-4">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-5 offset-lg-2 col-md-6 col-10 d-md-none d-block my-madu wow fadeIn">
                        <img class="img-fluid" :src="require ('@/assets/images/produk/madu-smart.png')" alt="">
                    </div>
                    <div class="col-lg-5 col-md-6 ">
                        <div class="khasiat-card mb-4 wow fadeInLeft">
                            <div class="card-body col-12">
                                <h5 class="khasiat-card-title">Madu Star Brain</h5>
                                <ul class="text-left mt-4">
                                    <li>Memperlancar Peredaran Darah Ke Otak</li>
                                    <li>Meningkatkan Konsentrasi Dan Daya Ingat</li>
                                    <li>Meningkatkan Kekebalan Tubuh</li>
                                    <li>Menunda Kepikunan Dini</li>
                                    <li>Mengurangi Rasa Lelah, Letih dan Ngantuk</li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center wow fadeInLeft" data-wow-delay="200ms">
                            <a class="btn-bg-ijo rounded-15 py-2 px-5" href="">Order</a>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-2 col-md-6 d-none d-md-block wow fadeInRight" data-wow-delay="400ms">
                        <img class="img-fluid" :src="require ('@/assets/images/produk/madu-smart.png')" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Background -->
        <div class="float-right z bg-2-1 wow fadeInRight">
            <img class="img-bg-kanan mt-5" :src="require ('@/assets/images/beranda/bg-section-5-6.svg')" alt="">
        </div>

        <div class="container">
            <div class="row mt-section-2 align-items-center justify-content-center">
                <div class="col-lg-5 col-md-6 col-10 mb-5 wow fadeInLeft">
                    <img class="img-fluid" :src="require ('@/assets/images/produk/jelita.png')" alt="">
                </div>
                <div class="col-lg-5 offset-lg-2 col-md-6 col-12">
                    <div class="khasiat-card mb-4 wow fadeInRight" data-wow-delay="200ms">
                        <div class="card-body">
                            <h5 class="khasiat-card-title">Jelita Manjakani Collagen</h5>
                            <ul class="text-left mt-4">
                                <li>Membantu Merawat Organ Kewanitaan</li>
                                <li>Membantu Meningkatkan Gairah Seksual Wanita</li>
                                <li>Membantu Mengurangi Rasa Sakit Saat Menstruasi</li>
                                <li>Membantu Mengurangi Keputihan</li>
                                <li>Melancarkan Peredaran Darah</li>
                                <li>Membantu Meregenerasi Sel Kulit Mati</li>
                                <li>Membantu Mengurangi Kerutan</li>
                                <li>Mengandung Antioksidan Tinggi</li>
                                <li>Membantu Mencerahkan Kulit</li>
                                <li>Membantu Mecegah Penuaan Dini</li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center wow fadeInRight" data-wow-delay="400ms">
                        <a class="btn-bg-ijo rounded-15 py-2 px-5" href="">Order</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Background -->
        <div class="z bg-2-1 wow fadeInLeft">
            <img class="img-bg-kiri" :src="require ('@/assets/images/beranda/bg-section-6-7.svg')" alt="">
        </div>

        <div class="container">
            <div class="container mt-5 mt-md-0">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-5 offset-lg-1 col-md-6 col-10 d-md-none d-block mb-5 wow fadeIn">
                        <img class="img-fluid" :src="require ('@/assets/images/produk/sari-gaharu.png')" alt="">
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="khasiat-card mb-4 wow fadeInLeft">
                            <div class="card-body">
                                <h5 class="khasiat-card-title">Sari Daun Gaharu</h5>
                                <ul class="text-left mt-4">
                                    <li>Melancarkan Buang Air Besar dan Kecil</li>
                                    <li>Meningkatkan Kualitas Tidur</li>
                                    <li>Melancarkan Peredaran Darah</li>
                                    <li>Mencegah Penggumpalan Darah</li>
                                    <li>Meringankan Penyakit Asma, Migran, Reumatik, Encok dan Influenza</li>
                                    <li>Meringankan Radang Tenggorokan</li>
                                    <li>Meringankan Gejala Penyakit Lambung</li>
                                    <li>Membantu Relaksasi Tubuh dan Pikiran</li>
                                    <li>Mengurangi Rasa Mabuk</li>
                                    <li>Meningkatkan Daya Tahan Tubuh</li>
                                    <li>Mencegah Kanker, Tumor dan Asam Urat</li>
                                    <li>Mengatasi Keputihan Pada Wanita</li>
                                    <li>Menyembuhkan Ambeyen</li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center wow fadeInLeft" data-wow-delay="200ms">
                            <a class="btn-bg-ijo rounded-15 py-2 px-5" href="">Order</a>
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1 col-md-6 d-none d-md-block wow fadeInRight" data-wow-delay="400ms">
                        <img class="img-fluid" :src="require ('@/assets/images/produk/sari-gaharu.png')" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- END PRODUK KAMI -->
    </div>
</template>

<script>
export default {
    name: 'Produk'
};
</script>