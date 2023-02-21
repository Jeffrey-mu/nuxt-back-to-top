

<template>
  <transition name="nuxt-back-to-top-fade">
    <div
      v-show="visible"
      class="vue-nuxt-back-to-top"
      :style="`bottom:${bottom};right:${right};`"
      @click="backToTop"
    >
      <slot>
        <span>
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m147.812174 564.98087a17.586087 17.586087 0 0 1-25.266087 0.890434l-1.558261-1.558261-114.977391-115.533913v277.259131a17.808696 17.808696 0 0 1-18.921739 16.361739 17.252174 17.252174 0 0 1-18.365218-16.361739 12.02087 12.02087 0 0 1 0-2.003478V448.77913L365.412174 564.313043l-1.446957 1.558261a17.586087 17.586087 0 0 1-25.266087-0.890434 18.253913 18.253913 0 0 1-1.113043-25.711305l145.363478-146.810435a18.365217 18.365217 0 0 1 9.238261-7.234782 17.92 17.92 0 0 1 6.455652-1.113044h1.001739a16.918261 16.918261 0 0 1 6.678261 1.113044 18.142609 18.142609 0 0 1 9.015652 7.123478l145.586087 146.921739a18.365217 18.365217 0 0 1-1.113043 25.711305z m65.446956-206.58087H273.252174c-9.572174 0-17.252174-11.130435-17.252174-25.6s7.68-25.6 17.252174-25.6h452.006956c9.46087 0 17.14087 11.130435 17.14087 25.6s-7.68 25.6-17.14087 25.6z"
            fill="#257EDF"
          /></svg>
        </span>
      </slot>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'BackToTop',
  props: {
    text: {
      type: String,
      default: 'Voltar ao topo',
    },
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    right: {
      type: String,
      default: '30px',
    },
    bottom: {
      type: String,
      default: '40px',
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) { },
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    window.smoothscroll = () => {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event
     * @return {void}
     */
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop() {
      window.smoothscroll()
      this.$emit('scrolled')
    }
  },
}
</script>

<style>
#nuxt-devtools-container {
  position: fixed;
  right: 40px;
  bottom: 40px;
}
.nuxt-back-to-top-fade-enter-active,
.nuxt-back-to-top-fade-leave-active {
  transition: opacity .7s;
}
.nuxt-back-to-top-fade-enter,
.nuxt-back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-nuxt-back-to-top {
  cursor:pointer;
  position: fixed;
  z-index: 1000;
}

.vue-nuxt-back-to-top .default {
  background-color: #f5c85c;
  border-radius: 3px;
  color: #ffffff;
  height: 30px;
  line-height: 30px;
  text-align: center;
  width: 160px;
}

.vue-nuxt-back-to-top .default span{
  color:#ffffff;
}

.vue-nuxt-back-to-top--is-footer {
  bottom: 50% !important;
  position: absolute;
  transform: translateY(50%);
}
</style>
