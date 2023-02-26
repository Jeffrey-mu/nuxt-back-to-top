import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
// Module options TypeScript inteface definition
export interface ModuleOptions {
  autoInsert: boolean;
  prefix: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-back-to-top',
    configKey: 'backToTop',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'Nuxt',
    autoInsert: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    options.autoInsert ? addPlugin(resolver.resolve('./runtime/plugin'))
      : addComponent({ name: options.prefix + 'BackToTop', 'filePath': resolver.resolve('./runtime/view/backTop.vue') })
  }
})
