<template>
  <div class="home">
    <!-- Background -->
    <div class="container-fluid z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
        <img class="mt-bg" :src="require('@/assets/images/beranda/bg-section-1.png')"
        alt="" />
    </div>

    <!-- START HERO -->
    <div class="container sec-home">
        <div class="row align-items-center mt-lg-5 mt-0">
            <div class="col-lg-5 col-md-5 mt-lg-5 mt-des d-md-block d-none wow fadeInLeft" data-wow-delay="200ms" >
                <h1 class="t-home">
                Peluang Bisnis <br/> Makin Jaya Agung
                </h1>
                <p class="text-abumuda">
                    "Dapatkan penghasilan impian anda yang tak terhingga dengan
                    mempelajari JURUS AJAIB jaman now yang akan melejitkan penghasilan
                    anda berlipat-lipat bersama Milagros."
                </p>
                <div class="mt-4 wow fadeInLeft" data-wow-delay="300ms">
                    <a class="btn-bg-ijo rounded-15 py-2 px-4" href="">Join Now</a>
                </div>
            </div>
            <div class="col-lg-7 col-md-7 offset-lg- offset-md-0">
                <div class="mt-lg-0 mt-des wow fadeInRight" data-wow-delay="900ms">
                    <img class="img-fluid" :src="require('@/assets/images/beranda/image-header.png')" alt="" />
                </div>
            </div>
        </div>
        <div class="d-md-none d-block wow fadeInLeft" data-wow-delay="400ms">
            <h1>
            Peluang Bisnis <br /> Makin Jaya Agung
            </h1>
            <p class="text-abumuda">
            "Dapatkan penghasilan impian anda yang tak terhingga dengan
            mempelajari JURUS AJAIB jaman now yang akan melejitkan penghasilan
            anda berlipat-lipat bersama Milagros."
            </p>
            <div class="mt-4 text-lg-left">
            <a class="btn-bg-ijo rounded-15 py-2 px-4" href="">Join Now</a>
            </div>
        </div>
    </div>
    <!-- END HERO -->

    <!-- START PT MAKIN JAYA -->
    <div class="container">
      <div class="text-center mt-section">
          <h1 class="wow fadeInDown">PT MAKIN JAYA AGUNG</h1>
          <p class="text-abumuda wow fadeInDown" data-wow-delay="200ms">
          Bergerak dalam bidang perdagangan Makanan, Minuman, Supplement
          Kesehatan dan Kecantikan. Produk yang diperdagangkan memiliki ciri
          khas, yaitu produk berbahan dasar daun gaharu.
          </p>
      </div>
      <div class="row mt-5 justify-content-center d-md-flex d-none">
          <div class="mb-4 col-lg-4 col-md-4">
            <div class="card-pt wow fadeInLeft" data-wow-delay="500ms">
              <div class="card-body">
                  <div class="text-center">
                      <img :src="require ('@/assets/images/beranda/sejak-tahun-2013.png')" alt="" />
                      <p class="card-title">Sejak Tahun 2013</p>
                      <p class="card-text text-abumuda">
                      Dipimpin oleh Bapak Muhammad Makinudin, S.E. yang bergerak di
                      bidang pembibitan pohon gaharu dan program kavling kebun
                      gaharu.
                      </p>
                  </div>
              </div>
          </div>
        </div>
        <div class="mb-4 col-lg-4 col-md-4">
          <div class="card-pt wow fadeInUp" data-wow-delay="800ms">
              <div class="card-body">
                  <div class="text-center">
                      <img :src="require ('@/assets/images/beranda/perkebunan-sendiri.png')" alt="" />
                      <p class="card-title">Perkebunan Sendiri</p>
                      <p class="card-text text-abumuda">
                      Melakukan panen daun gaharu secara bertahap dari pohon gaharu
                      yang sudah ditanam oleh perusahaan, saat ini perusahaan juga
                      sudah mulai melakukan kegiatan produksi dari hasil panen daun
                      gaharu.
                      </p>
                    </div>
              </div>
          </div>
        </div>
        <div class="mb-4 col-lg-4 col-md-4">
            <div class="card-pt wow fadeInRight" data-wow-delay="1100ms">
                <div class="card-body">
                    <div class="text-center">
                        <img :src="require ('@/assets/images/beranda/konsep-marketing.png')" alt="" />
                        <p class="card-title">Konsep Marketing</p>
                        <p class="card-text text-abumuda">
                        Bisnis ini akan menjadi bisnis yang besar, jangka panjang dan
                        mampu menghantarkan mitra usahanya menuju kesejahteraan hidup
                        serta mencapai serta mencapai puncak kesuksesan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

        <!-- <style>
          .owl-carousel .owl-item img {
            display: inline;
            width: auto;
          }
        </style> -->
        <!-- Responsive -->
        <div class="d-lg-none d-md-none d-block mt-5">
          <carousel class="card-carousel" :responsive="{0:{items:1,nav:false}}" 
            :center="true" :loop="true" :dots="true" :navText="navSlide">
              <div class="item">
                  <div class="mb-4">
                      <div class="card-pt">
                          <div class="card-body">
                            <div class="text-center">
                                <div class="">
                                <img
                                    :src="require ('@/assets/images/beranda/sejak-tahun-2013.png')"
                                    alt=""
                                />
                                </div>
                                <p class="card-title">Sejak Tahun 2013</p>
                                <p class="card-text text-abumuda">
                                Dipimpin oleh Bapak Muhammad Makinudin, S.E. yang bergerak
                                di bidang pembibitan pohon gaharu dan program kavling
                                kebun gaharu.
                                </p>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="mb-4 col-lg-4 col-md-4">
                      <div class="card-pt">
                          <div class="card-body">
                              <div class="text-center">
                                  <img
                                  :src="require ('@/assets/images/beranda/perkebunan-sendiri.png')"
                                  alt=""
                                  />
                                  <p class="card-title">Perkebunan Sendiri</p>
                                  <p class="card-text text-abumuda">
                                  Melakukan panen daun gaharu secara bertahap dari pohon
                                  gaharu yang sudah ditanam oleh perusahaan, saat ini
                                  perusahaan juga sudah mulai melakukan kegiatan produksi
                                  dari hasil panen daun gaharu.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="mb-4 col-lg-4 col-md-4">
                  <div class="card-pt">
                      <div class="card-body">
                        <div class="text-center">
                            <img
                            :src="require ('@/assets/images/beranda/konsep-marketing.png')"
                            alt=""
                            />
                            <p class="card-title">Konsep Marketing</p>
                            <p class="card-text text-abumuda">
                            Bisnis ini akan menjadi bisnis yang besar, jangka panjang
                            dan mampu menghantarkan mitra usahanya menuju
                            kesejahteraan hidup serta mencapai serta mencapai puncak
                            kesuksesan.
                            </p>
                        </div>
                      </div>
                  </div>
                  </div>
              </div>
          </carousel>
        </div>
      <!-- end responsive -->
    </div>
    <hr class="hr-testi d-lg-none d-md-none d-block mb-5" />
    <!-- END PT MAKIN JAYA -->

    <!-- Background -->
  <div class="z bg-1-2 wow fadeInLeft" data-wow-delay="1300ms">
    <img class="img-bg-kiri" :src="require ('@/assets/images/beranda/bg-section-2-3.png')" alt="">
  </div>

  <!-- START PRODUK MJA -->
  <div class="container mt-5 mt-md-0">
    <div class="row">
      <div class="col-lg-6 col-md-12 col-12">
        <div class="-mt-section">
          <h1 class="wow fadeInLeft">PRODUK MJA</h1>
          <p class="text-abumuda wow fadeInLeft" data-wow-delay="300ms">PT. MAKIN JAYA AGUNG menyediakan produk Makanan dan Minuman Suplemen Kesehatan
            Herbal
            berbahan dasar Extrak Daun Gaharu dengan kualitas terbaik dan menggunakan bahan-bahan berkualitas yang
            tentu
            telah melalui proses quality control yang baik.</p>
        </div>
        <a href="" class="list">
          <div class="row ml-1 mt-4 mt-md-5 list-produk align-items-center wow fadeInUp" data-wow-delay="500ms">
            <img :src="require ('@/assets/images/beranda/dau-gaharu.png')" alt="">
            <p class="my-md-3 my-0 list-d">Daun Gaharu Sebagai Anti Depres</p>
          </div>
        </a>
        <a href="" class="list">
          <div class="row ml-1 mt-3 list-produk align-items-center wow fadeInUp" data-wow-delay="700ms">
            <img :src="require ('@/assets/images/beranda/teh-daun-gaharu.png')" alt="">
            <p class="my-md-3 my-0 list-d">Daun Gaharu Sebagai Anti Penuaan</p>
          </div>
        </a>
        <a href="" class="list">
          <div class="row ml-1 mt-3 list-produk align-items-center wow fadeInUp" data-wow-delay="900ms">
            <img :src="require ('@/assets/images/beranda/menjaga-berat-badan.png')" alt="">
            <p class="my-md-3 my-0 list-d">Menjaga Berat Badan</p>
          </div>
        </a>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="text-center mt-lg-0 mt-4">
          <img class="img-fluid wow fadeInRight" data-wow-delay="1200ms" :src="require ('@/assets/images/beranda/teh-gaharu.png')" alt="">
          <h5 class="font-weight-bold mt-2 wow fadeInUp" data-wow-delay="1400ms">Teh Hijau Gaharu</h5>
          <p class="text-abumuda wow fadeInUp" data-wow-delay="1600ms">Terbuat dari Pucuk Daun Gaharu pilihan jenis Aquilaria Mallacensis diproses secara
            higenis dan dijaga kemurniaannya.</p>
        </div>
      </div>
    </div>
    <div class="row mt-5 align-items-center text-center">
      <div class="mb-5 col-lg-2 col-md-4 col-6 wow zoomIn" data-wow-delay="1800ms">
        <router-link to="/produk">
          <img class="pro img-opacity img-fluid" :src="require ('@/assets/images/produk/teh-gaharu.png')" alt="">
        </router-link>
      </div>
      <div class="mb-5 col-lg-2 col-md-4 col-6 wow zoomIn" data-wow-delay="2000ms">
        <router-link to="/produk">
          <img class="pro img-opacity img-fluid" :src="require ('@/assets/images/produk/sabun-gaharu.png')" alt="">
        </router-link>
      </div>
      <div class="mb-5 col-lg-2 col-md-4 col-6 wow zoomIn" data-wow-delay="2200ms">
        <router-link to="/produk">
          <img class="pro img-opacity img-fluid" :src="require ('@/assets/images/produk/sari-gaharu.png')" alt="">
        </router-link>
      </div>
      <div class="mb-5 col-lg-2 col-md-4 col-6 wow zoomIn" data-wow-delay="2400ms">
        <router-link to="/produk">
          <img class="pro img-opacity img-fluid" :src="require ('@/assets/images/produk/kopi-perkasa.png')" alt="">
        </router-link>
      </div>
      <div class="mb-5 col-lg-2 col-md-4 col-6 wow zoomIn" data-wow-delay="2600ms">
        <router-link to="/produk">
        <img class="pro img-opacity img-fluid" :src="require ('@/assets/images/produk/madu-smart.png')" alt="">
        </router-link>
      </div>
      <div class="mb-5 col-lg-2 col-md-4 col-6 wow zoomIn" data-wow-delay="2800ms">
        <router-link to="/produk">
        <img class="pro img-opacity img-fluid" :src="require ('@/assets/images/produk/jelita.png')" alt="">
        </router-link>
      </div>
    </div>
  </div>
  <!-- END PRODUK MJA -->

  <!-- Backgroung 3-4 -->
  <div class="float-right z bg-1-2 mt wow fadeInRight" data-wow-delay="3000ms">
    <img class="img-bg-kanan" :src="require ('@/assets/images/beranda/bg-section-3-4 1.png')" alt="">
  </div>

  <!-- START TESTIMONI -->
  <div class="container mt-section-2">
    <div class="text-center mb-4">
        <h1>Testimoni</h1>
    </div>
    <carousel class="testi-home-carousel" :responsive="{0:{items:1,nav:false},600:{items:1,nav:true},900:{items:1,nav:true}}" 
        :center="true" :loop="true" :dots="true" :navText="navSlide" id="legal">

      <div class="item">
        <img :src="require ('@/assets/images/beranda/testimoni-icon.svg')" alt="">
          <p class="text-abumuda mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitordapibus dictum.
            Fusce faucibus ligula scelerisque, eleifend turpis in</p>
          <img :src="require ('@/assets/images/testimoni/4.png')" alt="" class="center-block team">
      </div>

      <div class="item">
        <img :src="require ('@/assets/images/beranda/testimoni-icon.svg')" alt="">
          <p class="text-abumuda mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in</p>
          <img :src="require ('@/assets/images/testimoni/4.png')" alt="" class="center-block team">
      </div>

      <div class="item">
        <img :src="require ('@/assets/images/beranda/testimoni-icon.svg')" alt="">
          <p class="text-abumuda mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in</p>
          <img :src="require ('@/assets/images/testimoni/4.png')" alt="" class="center-block team">
      </div>
    </carousel>
  </div>
  <hr class="hr-testi">
  <div class="mt-5 text-center wow fadeInLeft" data-wow-delay="300ms">
    <a class="btn-bg-ijo rounded-15 py-2 px-4" href="/testimonial">Testimoni Lainnya</a>
  </div>
  <!-- END TESTIMONI -->

  <!-- Backgroung 4-5 -->
  <div class="z bg-1-2 mt">
    <img class="img-bg-kiri mb-5 mb-md-0" :src="require ('@/assets/images/beranda/bg-section-4-5.png')" alt="">
  </div>

  <!-- START BERITA & ARTIKEL -->
  <div class="container -mt-section">
    <h1 class="text-abu wow fadeInLeft">Berita & Artikel</h1>
    <p class="text-abumuda wow fadeInLeft" data-wow-delay="200ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      porttitordapibus dictum.</p>
    <div class="row justify-content-center d-md-flex d-none">
      <div class="mb-4 col-lg-4 col-md-4">
        <div class="card-berita wow fadeInLeft" data-wow-delay="400ms">
          <img class="img-fluid rounded-15" :src="require ('@/assets/images/beranda/artikel-1.png')" alt="">
          <div class="card-body">
            <div class="text-center">
              <h5 class="font-weight-bold">Goals</h5>
              <h5 class="font-weight-bold d-lg-none d-md-block d-none">Kami</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitordapibus dictum.</p>
              <a href="" class="btn">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 col-lg-4 col-md-4">
        <div class="card-berita wow fadeInUp" data-wow-delay="600ms">
          <img class="img-fluid rounded-15" :src="require ('@/assets/images/beranda/artikel-2.png')" alt="">
          <div class="card-body">
            <div class="text-center">
              <h5 class="font-weight-bold">Keuntungan Menarik</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitordapibus dictum.</p>
              <a href="" class="btn">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 col-lg-4 col-md-4">
        <div class="card-berita wow fadeInRight" data-wow-delay="800ms">
          <img class="img-fluid rounded-15" :src="require ('@/assets/images/beranda/artikel-3.png')" alt="">
          <div class="card-body">
            <div class="text-center">
              <h5 class="font-weight-bold">Kesuksesan Bersama</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitordapibus dictum.</p>
              <a href="" class="btn">Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Responsive -->
    <div class="d-lg-none d-md-none d-block mt-5">
        <carousel class="testi-home-carousel" :responsive="{0:{items:1,nav:false}}" 
          :center="false" :loop="true" :dots="true" :navText="navSlide" id="legal">
          <div class="item">
            <div class="mb-4">
              <div class="card-berita">
                <img class="img-fluid rounded-15" :src="require ('@/assets/images/beranda/artikel-1.png')" alt="">
                <div class="card-body">
                  <div class="text-center">
                    <h5 class="font-weight-bold">Goals</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      porttitordapibus dictum.</p>
                    <a href="" class="btn">Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="mb-4 col-lg-4 col-md-4">
              <div class="card-berita">
                <img class="img-fluid rounded-15" :src="require ('@/assets/images/beranda/artikel-2.png')" alt="">
                <div class="card-body">
                  <div class="text-center">
                    <h5 class="font-weight-bold">Keuntungan Menarik</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      porttitordapibus dictum.</p>
                    <a href="" class="btn">Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="mb-4 col-lg-4 col-md-4">
              <div class="card-berita">
                <img class="img-fluid rounded-15" :src="require ('@/assets/images/beranda/artikel-3.png')" alt="">
                <div class="card-body">
                  <div class="text-center">
                    <h5 class="font-weight-bold">Kesuksesan Bersama</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      porttitordapibus dictum.</p>
                    <a href="" class="btn">Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </carousel>
    </div>
    <!-- end responsive -->
  </div>
  <hr class="hr-testi d-lg-none d-md-none d-block mb-5" />
  <!-- END BERITA & ARTIKEL -->

  <!-- Backgroung 5-6 -->
  <div class="float-right z bg-1-2 d-md-inline d-none wow fadeInUp">
    <img class="img-bg-kanan -mt-section" :src="require ('@/assets/images/beranda/bg-section-5-6.svg')" alt="">
  </div>

  <!-- START CUSTOMER SERVICE -->
  <section class="mt-section-2 position-relative">
    <div class="container d-md-block d-none">
      <h1 class="text-center wow fadeInDown">Customer Service Support</h1>
      <div class="row mt-5 justify-content-center">
        <div class="mb-4 col-lg-3 col-md-4">
          <div class="card-support wow fadeInLeft" data-wow-delay="200ms">
            <div class="card-body">
              <div class="text-center">
                <h5 class="title-support">ADMIN BONUS</h5>
                <ul class="text-left mt-5">
                  <li>24/7</li>
                  <li class="not">Telepon</li>
                  <li class="not">SMS</li>
                  <li>Whatsapp</li>
                </ul>
                <a href="" class="btn mt-4"><i class="fab fa-whatsapp mr-2"></i>Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 col-lg-3 col-md-4">
          <div class="card-support wow fadeInUp" data-wow-delay="400ms">
            <div class="card-body">
              <div class="text-center">
                <h5 class="title-support">ADMIN KONSULTASI PRODUK</h5>
                <ul class="text-left mt-5">
                  <li>24/7</li>
                  <li>Telepon</li>
                  <li class="not">SMS</li>
                  <li>Whatsapp</li>
                </ul>
                <a href="" class="btn mt-4"><i class="fab fa-whatsapp mr-2"></i>Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4 col-lg-3 col-md-4">
          <div class="card-support wow fadeInRight" data-wow-delay="600ms">
            <div class="card-body">
              <div class="text-center">
                <h5 class="title-support">ADMIN EDIT PROFIL</h5>
                <ul class="text-left mt-5">
                  <li>24/7</li>
                  <li>Telepon</li>
                  <li class="not">SMS</li>
                  <li>Whatsapp</li>
                </ul>
                <a href="" class="btn mt-4"><i class="fab fa-whatsapp mr-2"></i>Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Responsive -->
    <!-- <div class="container"> -->
    <div class="container d-lg-none d-md-none d-block mb-5">
      <h3 class="text-center">Customer Service Support</h3>
      <carousel class="card-carousel mt-5" :responsive="{0:{items:1,nav:false}}" 
        :center="true" :loop="true" :dots="true" :navText="navSlide" :nav="true">
        <div class="item">
          <div class="mb-4">
            <div class="card-support">
              <div class="card-body">
                <div class="text-center">
                  <h5 class="title-support">ADMIN BONUS</h5>
                  <ul class="text-left mt-5">
                    <li>24/7</li>
                    <li class="not">Telepon</li>
                    <li class="not">SMS</li>
                    <li>Whatsapp</li>
                  </ul>
                  <a href="" class="btn mt-4"><i class="fab fa-whatsapp mr-2"></i>Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="mb-4 col-lg-4 col-md-4">
            <div class="card-support">
              <div class="card-body">
                <div class="text-center">
                  <h5 class="title-support">ADMIN KONSULTASI PRODUK</h5>
                  <ul class="text-left mt-5">
                    <li>24/7</li>
                    <li>Telepon</li>
                    <li class="not">SMS</li>
                    <li>Whatsapp</li>
                  </ul>
                  <a href="" class="btn mt-4"><i class="fab fa-whatsapp mr-2"></i>Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="mb-4 col-lg-4 col-md-4">
            <div class="card-support">
              <div class="card-body">
                <div class="text-center">
                  <h5 class="title-support">ADMIN EDIT PROFIL</h5>
                  <ul class="text-left mt-5">
                    <li>24/7</li>
                    <li>Telepon</li>
                    <li class="not">SMS</li>
                    <li>Whatsapp</li>
                  </ul>
                  <a href="" class="btn mt-4"><i class="fab fa-whatsapp mr-2"></i>Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </carousel>
    </div>
    <!-- end responsive -->
    <hr class="-hr d-lg-none d-md-none d-block mb-5" />
  </section>
  <!-- END CUSTOMER SERVICE -->

  <!-- Backgroung 6-7 -->
  <div class="z bg-1-2 wow fadeInUp" data-wow-delay="800ms">
    <img class="img-bg-2" :src="require ('@/assets/images/beranda/bg-section-6-7.png')" alt="">
  </div>

  <Banner/>

  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Banner from "../components/Banner.vue";

export default {
  name: "Home",
  components: {
    carousel,
    Banner
  },
  data() {
      return {
        navSlide: [
          '<i class="legalitas-nav legalitas-prev fas fa-chevron-left"></i>',
          '<i class="legalitas-nav legalitas-next fas fa-chevron-right"></i>'
        ]
      }
    },
};
</script>

<style scoped>
  .owl-carousel .owl-item img {
    display: initial;
    width: auto;
  }
  .owl-theme .owl-dots .owl-dot span {
    width: 90px;
    height: 2px;
    margin: 5px 0px;
    background: #D6D6D6;
    display: block;
    /* -webkit-backface-visibility: visible; */
    transition: opacity 200ms ease;
    border-radius: 0px;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    background: #29BB89;
}
</style>