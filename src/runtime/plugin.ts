import { defineNuxtPlugin } from '#app'
import { createApp } from 'vue'
import backTop from './view/backTop.vue'
export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp)
  // TODO: Stackblitz support?
  if (typeof document === 'undefined' || typeof window === 'undefined')
    return
  const holder = document.createElement('div')
  holder.id = 'nuxt-devtools-container'
  holder.setAttribute('data-v-inspector-ignore', 'true')
  document.body.appendChild(holder)

  const app = createApp(backTop)
  app.mount(holder)
})
