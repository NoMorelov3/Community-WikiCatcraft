import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  srcDir: ".",
  title: "Вики Кошкокрафта",
  description: "Данная вики была создана сообществом и не является оригинальной",
  lang: 'ru',
  publicDir: "Assets",
  base: '/Community-WikiCatcraft/', // НАЗВАНИЕ ВАШЕГО ПРОЕКТА

  head: [
    // Правильный путь к логотипу вкладки (фавиконке) для вашего репозитория:
    ['link', { rel: 'icon', href: 'icon_purple.png' }]
  ],

  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Кланы', link: '/clans/all' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/clans': [
      {
        text: 'Валькирия',
        items: [
          { text: 'История', link: '/clans/Valkyrie/History' },
          { text: 'Общии фото', link: '/clans/Valkyrie/Photo' },
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
      { icon: 'refinedgithub', link: 'https://github.com/NoMorelov3/Community-WikiCatcraft' },
      { icon: 'spotify', link: 'https://open.spotify.com/playlist/05N92YWF1TCGfJMyH0gzHi?si=dfae0a5447b24a2a'}
    ]
  }
})
