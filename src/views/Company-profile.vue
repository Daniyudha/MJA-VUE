<template>
    <div class="company">
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInRight">
            <img class="mt-bg" :src="require('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START HERO -->
        <div class="container sec-company">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6 ">
                    <h5 class="t-com wow fadeInLeft" data-wow-delay="200ms">CEO PT. MAJU JAYA AGUNG</h5>
                    <h1 class="t-home wow fadeInLeft" data-wow-delay="400ms">Peluang Bisnis <br> Makin Jaya Agung</h1>
                    <p class="text-abumuda wow fadeInLeft" data-wow-delay="600ms">Mauris convallis varius turpis, in vestibulum urna finibus sit amet. Vivamus
                        ante nisl, condimentum nec rhoncus scelerisque, dictum at turpis. Cras a ante eget diam consectetur
                        elementum. Suspendisse mattis, turpis id tincidunt euismod, est mi rutrum nisl, vitae placerat nibh
                        leo sed mi.</p>
                </div>
                <div class="col-lg-6 col-md-5 offset-1 mb-5 mt-lg-0 mt-md-5">
                    <div class="wow fadeInRight" data-wow-delay="800ms">
                        <img class="img-fluid" :src="require('@/assets/images/about us/about-us-header.png')" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- END HERO -->

        <!-- START PROFIL PERUSAHAAN -->
        <div class="container -mt-section">
            <h1 class="wow fadeInDown">PROFIL PERUSAHAAN</h1>
            <hr class="garis float-left wow fadeInUp">
            <div class="row mt-5">
                <div class="col-lg-4 col-md-5 wow fadeInLeft" data-wow-delay="300ms">
                    <img class="img-fluid" :src="require('@/assets/images/about us/image-section-2.png')" alt="">
                </div>
                <div class="col-lg-8 col-md-7 text-abumuda">
                    <p class="wow fadeInUp" data-wow-delay="500ms">Mauris convallis varius turpis, in vestibulum urna finibus sit amet. Vivamus ante nisl, condimentum
                        nec rhoncus scelerisque, dictum at turpis. Cras a ante eget diam consectetur elementum. Suspendisse
                        mattis, turpis id tincidunt euismod, est mi rutrum nisl, vitae placerat nibh leo sed mi.</p>
                    <p class="wow fadeInUp" data-wow-delay="700ms">Cras purus arcu, consequat vel ex sit amet, faucibus placerat tortor. Nunc iaculis volutpat nulla et
                        mattis. Donec bibendum condimentum egestas. Cras dignissim metus vitae tellus venenatis, eget
                        tincidunt purus ultricies. Cras lobortis aliquam felis, at porttitor enim. Nulla in cursus mauris,
                        sed tristique nisi. Sed ante urna, consequat cursus aliquam dapibus, porta vulputate lacus.
                        Suspendisse potenti. Ut auctor pulvinar dictum. Quisque eget tincidunt nisl. Phasellus at bibendum
                        justo. Donec dictum ex eget tellus faucibus scelerisque.</p>
                    <p class="wow fadeInUp" data-wow-delay="900ms">Morbi tristique sem et elementum egestas. Nulla ac lacus vel odio maximus gravida at a elit. Nulla
                        lacinia metus eu lectus placerat facilisis. Proin mattis, elit nec pulvinar ornare, sapien nibh
                        tincidunt dui, ac mattis risus ex vel lacus. Donec viverra dignissim erat, eget cursus sapien congue
                        eget. In eu eleifend lacus, in semper nulla. Aliquam eu urna semper urna iaculis maximus a sed
                        justo. Phasellus sed justo finibus, pellentesque mauris a, accumsan lacus. Integer consequat augue
                        massa, non luctus dolor feugiat ut. Maecenas consectetur nulla quis erat tincidunt consequat.</p>
                </div>
            </div>
        </div>
        <!-- END PROFIL PERUSAHAAN -->

        <!-- Background -->
        <div class="z bg-1-2 wow fadeInLeft">
            <img class="img-bg-kiri" :src="require('@/assets/images/beranda/bg-section-2-3.png')" alt="">
        </div>

        <!-- START VISI MISI -->
        <div class="container -mt-section">
            <h1 class="wow fadeInDown">VISI & MISI</h1>
            <hr class="garis float-left wow fadeInUp">
            <div class="row mt-5 align-items-center">
                <div class="col-lg-8 col-md-6">
                    <h3 class="wow fadeInLeft" data-wow-delay="200ms">VISI MJA :</h3>
                    <p class="text-abumuda wow fadeInUp" data-wow-delay="500ms">Menjadi Network Marketing Mandiri, Kuat dan Profesional</p>

                    <h3 class="mt-4 wow fadeInLeft" data-wow-delay="800ms">MISI MJA :</h3>
                    <ol class="text-abumuda wow fadeInUp" data-wow-delay="1100ms">
                        <li>Meningkatkan Penghasilan Para Mitra MJA</li>
                        <li>Meningkatkan Penghasilan Para Mitra MJA</li>
                        <li>Menciptakan Lapangan Pekerjaan Bagi Masyarakat Indonesia</li>
                        <li>Memberikan Pelatihan-pelatihan Bisnis Bagi Mitra MJA</li>
                    </ol>

                    <h3 class="wow fadeInLeft" data-wow-delay="1400ms">MOTTO MJA :</h3>
                    <p class="text-abu font-weight-bold wow fadeInUp" data-wow-delay="1700ms">"Menuju Puncak Kejayaan"</p>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="1000ms">
                    <img class="img-fluid" :src="require('@/assets/images/about us/image-section-3.png')" alt="">
                </div>
            </div>

        </div>
        <!-- END VISI MISI -->
        <Banner/>
    </div>

</template>

<script>
import Banner from '../components/Banner.vue'

export default {
  name: "Company",
  components: {
    Banner
  }
};
</script>

<style>
.-mt-banner{
    margin-top: 100px;
}
</style>