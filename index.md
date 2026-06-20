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

  - title: 💸 экономика
    details: |
      Развитие экономики,
      и взаимодействие игроков.

      

---

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'

  const members = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/169675635?v=4',
      name: 'Эквадор (Он же Никитка)',
      title: 'Создатель Вики ',
      links: [
        { icon: 'github', link: 'https://github.com/NoMorelov3' },
      ]
    },
  ]
</script>

<br><br>
<br><br>
<br><br>

# <p style="text-align: center;">Наши разработчики</p>

<VPTeamMembers size="small" :members; style="text-align: center/>