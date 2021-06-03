<template>
   <div>
  <b-navbar toggleable="lg" type="dark" transparent="true">
      <div class="container">
    <b-navbar-brand>
        <router-link to="/" class="navbar-brand">
                <img :src="require('@/assets/images/beranda/logo-mja.svg')" alt="">
        </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" >
      <div class="line1 ham"></div>
      <div class="line2 ham"></div>
                <div class="line3 ham"></div>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <ul class="nav navbar-nav">
                    <li class="dropdown nav-item pl-3">
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
                    <li class="dropdown nav-item pl-3">
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
                    <li class="px-2 nav-item">
                        <router-link to="/produk" class="nav-link">Produk</router-link>
                    </li>
                    <li class="px-2 nav-item">
                        <router-link to="/kontak" class="nav-link">Kontak Kami</router-link>
                    </li>
                </ul>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto align-items-center">
        <li class="px-2 nav-item ">
                        <a class="nav-link" href="#">Masuk</a>
                    </li>
                    <li>
                    <a class="btn-bg-putih rounded py-2 px-3" href="#">Bergabung</a>
                    </li>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

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
</style>