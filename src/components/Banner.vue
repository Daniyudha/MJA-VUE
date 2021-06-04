<template>
    <!-- START BANNER -->
  <div class="container-fluid bg-green -mt-banner position-relative">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-7 col-md-10 col-sm-8 col-10">
          <h1 class="text-white t-ban wow fadeInDown">BELUM MENJADI MEMBER KAMI?</h1>
          <p class="text-white wow fadeInDown">AYO BERGABUNG BERSAMA KELUARGA BESAR MILAGROS</p>
        </div>
        <div class="col-lg-3 col-md-5 col-sm-8 col-10">
          <a href="">
            <div class="chat py-2 px-4 text-center rounded wow fadeInRight">
              <h5 class="text-ijo mt-2">CHAT WHATSAPP<i class="ml-2"><img :src="require ('@/assets/images/beranda/whatsapp.svg')"
                    alt=""></i></h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- END BANNER -->
</template>

<script>
export default {
    name: 'Banner'
};
</script>