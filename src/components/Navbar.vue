<template>
    <div class="navbar">
        <!-- START NAVBAR -->
        <nav class="navbar navbar-default navbar-expand-lg nav-menu navbar-light wow fadeInDown">
            <div class="container">
            <router-link to="/" class="navbar-brand">
                <img :src="require('@/assets/images/beranda/logo-mja.svg')" alt="">
            </router-link>
            <button class="navbar-toggler nav-button" type="button" data-toggle="collapse" data-target="#myNavbar">
                <div class="line1 ham"></div>
                <div class="line2 ham"></div>
                <div class="line3 ham"></div>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="myNavbar">
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
                
                <ul class="navbar-nav ml-auto mr-3 align-items-center">
                    <li class="px-2 nav-item">
                        <a class="nav-link" href="#">Masuk</a>
                    </li>
                    <li>
                    <a class="btn-bg-putih rounded py-2 px-3" href="#">Bergabung</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        <!-- END NAVBAR -->
    </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>