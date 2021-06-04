<template>
    <div class="kontak">
        
        <!-- Background -->
        <div class="z offset-lg-6 col-lg-6 offset-md-4 col-md-8 -mt-n wow fadeInLeft">
            <img class="mt-bg" :src="require ('@/assets/images/beranda/bg-section-1.png')" alt="">
        </div>

        <!-- START KONTAK KAMI -->
        <div class="container sec-kontak">
            <div class="row">
                <div class="col-lg-5">
                    <h5 class="l-s font-weight-bold wow slideInLeft">KONTAK KAMI</h5>
                    <h4 class="text-ijo wow fadeInLeft" data-wow-delay="400ms">TETAP BERHUBUNGAN DENGAN KAMI</h4>
                    <p class="wow fadeInLeft" data-wow-delay="500ms">Jl Kebun Karet No.35A, Kel. Loktabat Utara, Kec. Banjar Baru Utara, Kota Banjar Baru-Kalimantan
                        Selatan
                    </p>
                    <div class="mt-3">
                        <p class="fab fa-whatsapp icon-color ml-2 align-items-center wow fadeInLeft"
                            data-wow-delay="600ms"><b class="ml-3 text-dark font-weight-normal"> Admin Bonus <b>
                                    0511-4784864 </b></b></p> <br>
                        <p class="fab fa-whatsapp icon-color ml-2 align-items-center wow fadeInLeft"
                            data-wow-delay="800ms"><b class="ml-3 text-dark font-weight-normal">Admin Konsultasi <b>
                                    0821 5549 5119 </b></b>
                        </p> <br>
                        <p class="fab fa-whatsapp icon-color ml-2 align-items-center wow fadeInLeft"
                            data-wow-delay="1000ms"><b class="ml-3 text-dark font-weight-normal">Admin Edit Profile <b> 0813
                                    5549 5119 </b></b></p>
                        <br>
                        <p class="fas fa-globe icon-color ml-2 mt-4 align-items-center wow fadeInLeft"
                            data-wow-delay="1200ms"><b class="ml-3 text-dark font-weight-normal">www.makinjayaagung.biz</b>
                        </p> <br>
                        <p class="fas fa-envelope icon-color ml-2 align-items-center wow fadeInLeft"
                            data-wow-delay="1400ms"><b
                                class="ml-3 text-dark font-weight-normal">makinjayaagung17@gmail.com</b></p>
                    </div>
                </div>
                <div class="col-lg-7 mt-lg-0 mt-5">
                    <form method="post" data-form-title="CONTACT US">
                        <input type="hidden" data-form-email="true">
                        <div class="row wow fadeInDown" data-wow-delay="1400ms">
                            <div class="form-group col-6">
                                <input type="text" class="form-control" name="name" required="" placeholder="Nama Depan"
                                    data-form-field="Name">
                            </div>
                            <div class="form-group col-6">
                                <input type="email" class="form-control" name="email" required=""
                                    placeholder="Nama Belakang" data-form-field="Email">
                            </div>
                        </div>
                        <div class="form-group wow fadeInDown" data-wow-delay="1400ms">
                            <input type="tel" class="form-control" name="phone" placeholder="Alamat Email"
                                data-form-field="Email">
                        </div>
                        <div class="form-group wow fadeInDown" data-wow-delay="1400ms">
                            <textarea class="form-control" name="message" placeholder="Pesan" rows="7"
                                data-form-field="message"></textarea>
                        </div>
                        <div class="wow fadeInRight" data-wow-delay="1700ms">
                            <button type="submit" class=" btn-bg-ijo rounded px-3 py-2 mt-2 float-right">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END KONTAK KAMI -->

        <div class="wow fadeInUp">
            <iframe class="maps-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6185296110903!2d114.80441651475806!3d-3.4425981974942776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de683d654065d71%3A0x2705e9950cd67dd7!2sJl.%20Kebun%20Karet%20No.35%2C%20Guntung%20Payung%2C%20Kec.%20Landasan%20Ulin%2C%20Kota%20Banjar%20Baru%2C%20Kalimantan%20Selatan%2070721!5e0!3m2!1sen!2sid!4v1620273748494!5m2!1sen!2sid"
                width="500" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Kontak'
};
</script>