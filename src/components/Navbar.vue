<template>
  <header id="app">
    <b-navbar toggleable="lg" type="dark" transparent="true" >
        <div class="container">
      <b-navbar-brand>
          <router-link to="/" class="navbar-brand">
            <img :src="require('@/assets/images/beranda/logo-mja.svg')" alt="">
          </router-link>
      </b-navbar-brand>

      <!-- <b-navbar-toggle target="nav-collapse" >
        <div class="line1 ham"></div>
        <div class="line2 ham"></div>
        <div class="line3 ham"></div>
      </b-navbar-toggle> -->

      <div v-b-toggle.sidebar-right class="mx-3 d-lg-none d-block">
            <div class="side1 ham-side"></div>
            <div class="side2 ham-side"></div>
            <div class="side3 ham-side"></div>
      </div>

      <b-collapse id="nav-collapse" is-nav class="py-2">
        <b-navbar-nav>
          <ul class="nav navbar-nav">
                      <li class="dropdown nav-item pl-3 d-lg-block d-none">
                          <a class="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tentang
                          Kami</a>
                          <ul class="dropdown">
                          <li>
                              <router-link to="/company" class="nav-link"><i class="fas fa-building mx-2"></i>Profil Perusahaan</router-link>
                          </li>
                          <li>
                              <router-link to="/legalitas" class="nav-link"><i class="fas fa-book mx-2"></i>Legalitas</router-link>
                          </li>
                          </ul>
                      </li>
                      <li class="dropdown nav-item pl-3 d-lg-block d-none">
                          <a class="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Business
                          Plan</a>
                          <ul class="dropdown">
                          <li>
                              <router-link to="/marketing" class="nav-link"><i class="fas fa-chart-bar mx-2"></i>Marketing Plan</router-link>
                          </li>
                          <li>
                              <router-link to="/kodeetik" class="nav-link"><i class="fas fa-sticky-note mx-2"></i>Kode Etik</router-link>
                          </li>
                          </ul>
                      </li>

                      <li class="px-2 nav-item d-lg-none d-block">
                          <router-link to="/company" class="nav-link">Profil Perusahaan</router-link>
                      </li>
                      <li class="px-2 nav-item d-lg-none d-block">
                          <router-link to="/legalitas" class="nav-link">Legalitas</router-link>
                      </li><li class="px-2 nav-item d-lg-none d-block">
                          <router-link to="/marketing" class="nav-link">Marketing Plan</router-link>
                      </li><li class="px-2 nav-item d-lg-none d-block">
                          <router-link to="/kodeetik" class="nav-link">Kode Etik</router-link>
                      </li>

                      <li class="px-2 nav-item">
                          <router-link to="/produk" class="nav-link">Produk</router-link>
                      </li>
                      <li class="px-2 nav-item">
                          <router-link to="/kontak" class="nav-link">Kontak Kami</router-link>
                      </li>
                      <li class="nav-item d-lg-none mt-3 row px-4">
                        <a class="btn-bg-ijo rounded py-2 px-4 mr-3" href="#">Masuk</a>
                        <a class="btn-bg-putih rounded py-2 px-3" href="#">Bergabung</a>
                      </li>
                      <!-- <li class="nav-item  d-lg-none py-2">
                        <a class="btn-bg-putih rounded py-2 px-3" href="#">Bergabung</a>
                      </li> -->
                  </ul>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto align-items-center">
          <li class="nav-item d-lg-block d-none">
            <a class="nav-link" href="#">Masuk</a>
          </li>
          <li class="d-lg-block d-none">
            <a class="btn-bg-putih rounded py-2 px-3" href="#">Bergabung</a>
          </li>
          <div v-b-toggle.sidebar-right class="mx-3 d-lg-block d-none">
            <div class="side1 ham-side"></div>
            <div class="side2 ham-side"></div>
            <div class="side3 ham-side"></div>
          </div>
        </b-navbar-nav>
      </b-collapse>
      </div>
    </b-navbar>

     <b-sidebar id="sidebar-right" width="100%" bg-variant="info" shadow>
            <div class="sidebar-inner">
              <div class="row justify-content-center">
                <div class="col-md-4 col-6">
                  <router-link to="/company" class="nav-sidebar">Tentang Kami</router-link>
                  <router-link to="/kodeetik" class="nav-sidebar">Kode Etik</router-link>
                  <router-link to="/marketing" class="nav-sidebar">Marketing Plan</router-link>
                  <router-link to="/produk" class="nav-sidebar">Produk</router-link>
                  <router-link to="/kontak" class="nav-sidebar">Kontak Kami</router-link>
                  <router-link to="/artikel" class="nav-sidebar">Artikel</router-link>
                </div>
                <div class="col-md-4 col-6">
                  <router-link to="/gallery" class="nav-sidebar">Galeri</router-link>
                  <router-link to="/stokis" class="nav-sidebar">Stokis</router-link>
                  <router-link to="/masterstokis" class="nav-sidebar">Master Stokis</router-link>
                  <router-link to="/testimonial" class="nav-sidebar">Testimoni</router-link>
                  <router-link to="/login" class="nav-sidebar">Login Member</router-link>
                  <router-link to="/download" class="nav-sidebar">Download</router-link>
                </div>
                <div class="col-md-4 col-11 mt-5 mt-md-0">
                  <router-link to="/" class="navbar-brand">
                    <img :src="require('@/assets/images/beranda/logo-mja.svg')" alt="">
                  </router-link>
                  <h4 class="text-white font-weight-bold mt-3">KALIMANTAN SELATAN</h4>
                  <p class="text-white mt-3">Jl Kebun Karet No.35A, Kel. Loktabat Utara, Kec. Banjar Baru Utara, 
                    Kota Banjar Baru-Kalimantan Selatan</p>
                  <p class="text-white mt-3">0511-4784864</p>
                  <p class="text-white mt-3">0821 5549 5119</p>
                </div>
              </div>
            </div>
          </b-sidebar>

  </header>
</template>

<script type="text/javascript">
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
</script>

<style>
  .navbar-dark .navbar-nav .nav-link{
    color:#000 !important;
    font-weight: 400;
  }
  .navbar-dark .navbar-nav .nav-link:hover{
    color:#29BB89 !important;
  }
  .navbar-toggler{
    background-color: #29BB89 !important;
  }
  .navbar-brand{
    padding-top: 0 !important;
  }
  .sidebar-inner{
    padding: 100px 100px;
    align-items: center;
  }
  .nav-sidebar {
    display: block;
    padding: 1rem 1rem;
    color: #fff;
    font-size: 24px;
  }

  .nav-sidebar:hover,
  .nav-link:focus {
    color: #000;
    text-decoration: none;
  }

  .nav-sidebar.disabled {
    color: #000000;
    pointer-events: none;
    cursor: default;
  }
  .close.text-dark{
    color: #FFFFFF !important;
    opacity: 1;
  }
  .close.text-dark:hover{
    color: #FFFFFF !important;
    opacity: 1;
    transform: scale(1.2);
  }
  .close.text-dark svg{
    width: 50px;
    height: 50px;
  }
  .b-sidebar.bg-info{
    background-color: #29BB89 !important;
    opacity: 0.95;
  }
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;
    padding: 15px ;
    z-index: 9;
  }
  @media (max-width: 500px) {
    header{
      padding: 10px 0;
    }
  }

  header.sticky{
    padding: 0px;
    background: rgb(238, 238, 238) !important;
    box-shadow: 0 -5px 10px 0 rgb(116, 116, 116);
  }
  
  @media (max-width: 800px) {
    header{
      background: transparent;
    }
    .sidebar-inner{
      padding: 120px 50px;
      align-items: center;
    }
  }
  @media (max-width: 500px) {
    .sidebar-inner{
      padding: 70px 40px;
      align-items: center;
    }
    .nav-sidebar {
      display: block;
      padding: 1rem 1rem;
      color: #fff;
      font-size: 18px !important;
    }
  }
  @media (max-width: 400px) {
    .sidebar-inner{
      padding: 60px 15px;
      align-items: center;
    }
  }
  @media (max-width: 340px) {
    .sidebar-inner{
      padding: 60px 0px;
      align-items: center;
    }
    .nav-sidebar {
      display: block;
      padding: 1rem 1rem;
      color: #fff;
      font-size: 16px !important;
    }
  }
</style>