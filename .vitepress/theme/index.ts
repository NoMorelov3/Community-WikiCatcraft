// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MusicPlayer from './MusicPlayer.vue'


import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(MusicPlayer)
    })
    
    
  },
  
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  
} satisfies Theme

  

export interface Footer {
  // Сообщение, отображаемое прямо перед копирайтом.
  message?: string

  // Уведомление об авторских правах.
  copyright?: string
}