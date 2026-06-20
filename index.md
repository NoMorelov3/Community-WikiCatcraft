---
layout: home

hero:
  name: "FanCC"
  text: "Найди новые знания!"
  tagline: "Сделано сообществом с любовью <3"
  image:
    src: /icon_yellow.png
    alt: Логотип Кошкокрафта


features:

  - title: 🎮 Истории
    details: |
      Истории которых нету на оригинальном вики.

  - title: 📚 Гайды
    details: |
      Подробные инструкции для новичков,
      объяснение игровых систем,
      советы и полезные маршруты развития.

  - title: 🐱 Ваши котики
    details: |
      Скриншоты котиков от игроков Кошкокрафта.

  - title: 💸 Экономика
    details: |
      Развитие экономики,
      и взаимодействие игроков.

      

---

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'

  const Admins = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/169675635?v=4',
      name: 'EHqador (Он же Никитка)',
      title: 'Создатель этой Вики',
      links: [
        { icon: 'github', link: 'https://github.com/NoMorelov3' },
      ]
    },
  ]
  const Supports = [
    {
      avatar: 'https://cdn.discordapp.com/avatars/814139144241807380/600dabd77248656efdbd16eb51997794.webp?size=128',
      name: 'dark_moooon',
      title: 'мой любимый',
      links: [
        { icon: 'discord', link: 'https://discord.gg/zybj3EAsQg' },
      ]
    },
  ]
</script>

<br><br>
<br><br>
<br><br>

<p style="text-align: center;"><h1>Наши разработчики</h1></p>
<VPTeamMembers size="small" :members="Admins" />
<br></br>
# <p style="text-align: center;"><h1>Наши Саппорты</h1></p>
<VPTeamMembers size="small" :members="Supports" />
