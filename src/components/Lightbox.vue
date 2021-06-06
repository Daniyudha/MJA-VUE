<template>
  <div>
    <slot name="preview" :show="show">
      <!-- <a v-if="thumbnail" :href="images[0]" target="_blank" @click.prevent="show" class="lightbox__thumbnail">
        <img :src="thumbnail" :alt="alternateText">
      </a> -->

    <div class="container wow fadeIn" data-wow-delay="400ms" >
      <div class="col-md-12 col-12">
        <carousel class="legalitas-carousel" :responsive="{0:{items:1,nav:false},600:{items:2.4,nav:true},900:{items:3.7,nav:true}}" 
          :center="false" :loop="true" :dots="false" :navText="navSlide" id="legal">
            <div class="item" :href="images[0]"  @click.prevent="show">
              <img class="ron img-fluid" :src="require ('@/assets/images/about us/legalitas-1.png')"/>
            </div>
            <div class="item" :href="images[0]"  @click.prevent="show">
              <img class="ron img-fluid" :src="require ('@/assets/images/about us/legalitas-2.png')"/>
            </div>
            <div class="item" :href="images[0]"  @click.prevent="show">
              <img class="ron img-fluid" :src="require ('@/assets/images/about us/legalitas-3.png')"/>
            </div>
            <div class="item" :href="images[0]"  @click.prevent="show">
              <img class="ron img-fluid" :src="require ('@/assets/images/about us/legalitas-4.png')"/>
            </div>
        </carousel>
      </div>
    </div>

    </slot>
    <div class="lightbox" v-if="visible" @click="hide">
      <div class="lightbox__close" @click="hide">
        <slot name="icon-close">&times;</slot>
      </div>
      <div class="lightbox__element" @click.stop="">
        <div
          class="lightbox__arrow lightbox__arrow--left"
          @click.stop.prevent="previous"
          :class="{ 'lightbox__arrow--invisible': !hasPrevious }"
        >
          <slot name="icon-previous">
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
              <path d="M0-.5h24v24H0z" fill="none"/>
            </svg>
          </slot>
        </div>
        <div class="lightbox__image" @click.stop="">
          <slot name="loader"><LightboxDefaultLoader /></slot>

          <slot name="content" :url="images[index]" v-if="displayImage">
            <img :src="images[index]">
          </slot>
        </div>
        <div
          class="lightbox__arrow lightbox__arrow--right"
          @click.stop.prevent="next"
          :class="{ 'lightbox__arrow--invisible': !hasNext }"
        >
          <slot name="icon-next">
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
              <path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import LightboxDefaultLoader from './LightboxDefaultLoader.vue'
  export { LightboxDefaultLoader }
  import carousel from "vue-owl-carousel";

  export default {
    props: {
      thumbnail: {
        type: String,
        default: null,
      },
      images: {
        type: Array,
      },
      openAtIndex: {
        type: Number,
        default: 0,
      },
      alternateText: {
        type: String,
        default: '',
      },
      value: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      LightboxDefaultLoader,
      carousel
    },
    data() {
      return {
        visible: this.value,
        index: this.openAtIndex,
        displayImage: true,
        navSlide: [
          '<i class="legalitas-nav legalitas-prev fas fa-chevron-left"></i>',
          '<i class="legalitas-nav legalitas-next fas fa-chevron-right"></i>'
        ]
      }
    },
    computed: {
      hasNext() {
        return (this.index + 1 < this.images.length)
      },
      hasPrevious() {
        return (this.index - 1 >= 0)
      },
    },
    watch: {
      value(newValue) {
        this.visible = newValue
      },
      visible(newVisibility) {
        this.$emit('input', newVisibility)
      },
    },
    methods: {
      show() {
        this.visible = true
        this.index = this.openAtIndex
      },
      hide() {
        this.visible = false
        this.index = this.openAtIndex
      },
      previous() {
        if (this.hasPrevious) {
          this.index -= 1
          this.tick()
        }
      },
      next() {
        if (this.hasNext) {
          this.index += 1
          this.tick()
        }
      },
      tick() {
        if (!this.$slots.loader) {
          return
        }
        this.displayImage = false
        Vue.nextTick(() => {
          this.displayImage = true
        })
      },
      eventListener(e) {
        if (this.visible) {
          switch (e.key) {
            case 'ArrowRight':
              return this.next()
            case 'ArrowLeft':
              return this.previous()
            case 'ArrowDown':
            case 'ArrowUp':
            case ' ':
              return e.preventDefault()
            case 'Escape':
              return this.hide()
          }
        }
      },
    },
    mounted() {
      window.addEventListener('keydown', this.eventListener)
    },
    destroyed() {
      window.removeEventListener('keydown', this.eventListener)
    },
  }
</script>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .8);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 150px;
  }
  @media (max-width:1025px) {
      .lightbox{
          padding: 60px;
      }
  }
  @media (max-width:769px) {
      .lightbox{
          padding: 10px;
      }
  }
  @media (max-width:500px) {
      .lightbox{
          padding: 0px;
      }
  }
  .lightbox__thumbnail {
    width: 100%;
    height: 100%;
  }
  .lightbox__thumbnail img {
    width: 100%;
  }
  .lightbox__close {
    position: fixed;
    right: 0;
    top: 0;
    padding: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
    color: #fff;
    z-index: 10;
    /* width: 5rem;
    height: 5rem; */
  }
  .lightbox__close:hover {
    transform: scale(1.2);
  }
  .lightbox__arrow--invisible {
    visibility: hidden;
  }
  .lightbox__element {
    display: flex;
    width: 100%;
    height: fit-content;
  }
  .lightbox__arrow {
    /* padding: 0 2rem; */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lightbox__arrow svg {
    fill: #fff;
    pointer-events: none;
  }
  .lightbox__image {
    flex: 1;
  }
  .lightbox__image img {
    margin: 320px;
    /* width: 100%; */
    height: 50vw !important;
  }

  @media screen and (max-width: 1280px) {
    .lightbox__image img {
      margin: 230px;
      /* width: 100%; */
      height: 50vw !important;
    }
  }

  @media screen and (max-width: 1024px) {
    .lightbox__image img {
      margin: 250px;
      /* width: 100%; */
      height: 55vw !important;
    }
  }

  @media screen and (max-width: 769px) {
    .lightbox__image img {
      margin: 160px;
      /* width: 100%; */
      height: 70vw !important;
    }
  }

  @media screen and (max-width: 500px) {
    .lightbox__image img {
      margin: 63px;
      /* width: 100%; */
      height: 100vw !important;
    }
  }

  @media screen and (max-width: 400px) {
    .lightbox__image img {
      margin: 55px;
      /* width: 100%; */
      height: 100vw !important;
    }
  }

  @media screen and (max-width: 350px) {
    .lightbox__image img {
      margin: 46px;
      /* width: 100%; */
      height: 100vw !important;
    }
  }

  @media screen and (max-width: 720px) {
    .lightbox__arrow {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    .lightbox__element {
      position: relative;
    }
    .lightbox__arrow {
      position: absolute;
      padding: 0 2rem;
      height: 100%;
    }
    .lightbox__arrow--right {
      right: 0;
      background: linear-gradient(to right, transparent, rgba(0, 0, 0, .3));
    }
    .lightbox__arrow--left {
      left: 0;
      background: linear-gradient(to left, transparent, rgba(0, 0, 0, .3));
    }
  }
</style>