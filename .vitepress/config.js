import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  srcDir: ".",
  title: "Вики Кошкокрафта",
  description: "Данная вики была создана сообществом и не является оригинальной",
  lang: 'ru',
  publicDir: "Assets",
  base: '/Community-WikiCatcraft/', 
  logo: '/icon_purple.png',

  head: [
    ['link', { rel: 'icon', href: 'icon_purple.png' }]
  ],

  themeConfig: {

    logo: '/icon_purple.png',

    
    nav: [
      { text: 'Кланы', link: '/clans/all' },
      { text: 'Общая история', link: '/history/history'}
    ],

    sidebar: {
      
      '/clans/': [
        {
          text: 'Валькирия',
          items: [
            { text: 'История', link: '/clans/Valkyrie/History' },
            { text: 'Общие фото', link: '/clans/Valkyrie/Photo' }
          ]
        },
        {
          text: 'Обительи Деградаци',
          items: [
            { text: 'История', link: '/clans/Obiteli_Degradacii/History' },
            { text: 'Общие фото', link: '/clans/Obiteli_Degradacii/photo' }
          ]
        }
        
      ],
       '/history/': [
        {
          text: 'Администрация',
          items: [
            { text: 'История', link: '/history/admins/history'},
            { text: 'Фотографии', link: '/history/admins/photos' }
          ]
        },

      ],
      
      
      '/': []
    },

    socialLinks: [
      
      { icon: 'github', link: 'https://github.com/NoMorelov3/Community-WikiCatcraft' },
      { icon: 'spotify', link: 'https://open.spotify.com/playlist/05N92YWF1TCGfJMyH0gzHi?si=dfae0a5447b24a2a' }
    ]
  }
})