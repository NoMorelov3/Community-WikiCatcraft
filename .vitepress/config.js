import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  srcDir: ".",
  title: "Вики Кошкокрафта",
  description: "Данная вики была создана сообществом и не является оригинальной",
  lang: 'ru',
  publicDir: "Assets",
  base: '/Community-WikiCatcraft/', 

  head: [
    // ИСПРАВЛЕНО: Добавлен base и слэш, чтобы GitHub Pages нашел иконку во вкладке
    ['link', { rel: 'icon', href: '/icon_purple.png' }]
  ],

  themeConfig: {
    // ДОБАВЛЕНО: Логотип в левом верхнем углу сайта
    logo: '/icon_purple.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Кланы', link: '/clans/all' }
    ],

    sidebar: {
      // ИСПРАВЛЕНО: Добавлен закрывающий слэш, чтобы сайдбар активировался внутри папки clans
      '/clans/': [
        {
          text: 'Валькирия',
          items: [
            { text: 'История', link: '/clans/Valkyrie/History' },
            { text: 'Общие фото', link: '/clans/Valkyrie/Photo' }
          ]
        }
      ],
      
      // Сайдбар для главной страницы (пока пустой)
      '/': []
    },

    socialLinks: [
      // Изменено на стандартный github, так как refinedgithub может отображаться как пустой квадрат
      { icon: 'github', link: 'https://github.com/NoMorelov3/Community-WikiCatcraft' },
      { icon: 'spotify', link: 'https://open.spotify.com/playlist/05N92YWF1TCGfJMyH0gzHi?si=dfae0a5447b24a2a' }
    ]
  }
})