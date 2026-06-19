import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",
  logo: 'Assets/icon_purple.png',
  title: "Вики Кошкокрафта",
  description: "Данная вики была создана сообществом и не является оригинальной",
  lang: 'ru',
  base: '/Community-WikiCatcraft/', // НАЗВАНИЕ ВАШЕГО ПРОЕКТА
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Кланы', link: '/clans' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/clans': [
      {
        text: 'Валькирия',
        items: [
          { text: 'Создание', link: '/clans/' },
          { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/': [

      ],
      /*
      '/': [
        
      ],
      '/': [
        
      ],
      '/': [
        
      ],
      */

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
