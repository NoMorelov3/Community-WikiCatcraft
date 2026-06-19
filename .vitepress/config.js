import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: ".",
  title: "Вики Кошкокрафта",
  description: "Данная вики была создана сообществом и не является оригинальной",
  lang: 'ru',
  base: '/Community-WikiCatcraft/', // НАЗВАНИЕ ВАШЕГО ПРОЕКТА

  head: [
    // Правильный путь к логотипу вкладки (фавиконке) для вашего репозитория:
    ['link', { rel: 'icon', href: '/Community-WikiCatcraft/Assets/icon_purple.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Кланы', link: '/clans/all.md' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/clans': [
      {
        text: 'Валькирия',
        items: [
          { text: 'История', link: '/clans/Valkyrie/History.md' },
          { text: 'Общии фото', link: '/clans/Valkyrie/Photo.md' },
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
