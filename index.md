---
layout: home

hero:
  name: "Catcraft Wiki"
  text: "Твой проводник в мире уютного выживания"
  tagline: "Полная база знаний, гайды, кастомные плагины и уютное комьюнити. Всё, что нужно для комфортной игры, собрано в одном месте."
  image:
    src: /icon_yellow.png
    alt: Catcraft Logo

features:
  - icon: "🎮"
    title: "Истории"
    details: "Изучи уникальные фичи сервера, включая VoidBag, продвинутые системы хранения и уникальные предметы, созданные специально для наших игроков."
  - icon: "📈"
    title: "Гайды"
    details: "От первых шагов на спавне до тонкостей автоматизации ферм и настройки параллельных схем электропитания. Понятно даже новичку."
  - icon: "🐱"
    title: "Ваши котики"
    details: "Наша база знаний построена на VitePress — это значит моментальная загрузка страниц, удобный поиск и идеальное отображение как с ПК, так и с телефона."
  - icon: "💸"
    title: "Экономика"
    details: "Узнай историю сервера, познакомься с правилами комьюнити, читай про прошедшие ивенты и становись частью нашей большой кошачьей семьи."
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

<!-- Космический анимированный фон -->
<div class="space-background">
  <div class="stars-layer-1"></div>
  <div class="stars-layer-2"></div>
  <div class="space-sun"></div>
</div>

<br><br>
<br><br>
<br><br>

<h2 style="text-align: center;" class="custom-section-title">Наши разработчики</h2>

<div style="display: flex; justify-content: center;" class="team-wrapper">
  <VPTeamMembers size="small" :members="Admins" />
</div>

<br>

<h2 style="text-align: center;" class="custom-section-title">Наши Саппорты</h2>

<div style="display: flex; justify-content: center;" class="team-wrapper">
  <VPTeamMembers size="small" :members="Supports" />
</div>

<style>
/* Космические глобальные переменные */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
  --vp-c-brand-1: #8b5cf6;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-next: #60a5fa;
}

/* КОСМИЧЕСКИЙ ЗАДНИЙ ФОН */
.space-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background: #0b0b14;
  overflow: hidden;
  pointer-events: none;
}

/* Огромное пульсирующее солнце / космическая звезда */
.space-sun {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #fcd34d 0%, #f59e0b 30%, #d97706 60%, transparent 100%);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.35;
  animation: sunPulse 8s ease-in-out infinite alternate;
  z-index: -1;
}

/* Звездный слой 1 (Мелкие частые звезды) */
.stars-layer-1 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 15vw 10vh #fff, 35vw 45vh rgba(255,255,255,0.7), 75vw 20vh #fff, 85vw 75vh rgba(255,255,255,0.8), 50vw 80vh #fff, 90vw 40vh #fff, 10vw 85vh rgba(255,255,255,0.6), 60vw 55vh #fff;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  animation: starsTwinkle 4s ease-in-out infinite alternate;
}

/* Звездный слой 2 (Более редкие и крупные синеватые звезды) */
.stars-layer-2 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 25vw 30vh #60a5fa, 65vw 65vh rgba(147,197,253,0.9), 80vw 85vh #93c5fd, 40vw 15vh rgba(255,255,255,0.5), 15vw 60vh #60a5fa, 95vw 15vh #fff;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  animation: starsTwinkle 6s ease-in-out infinite alternate-reverse;
}

/* ОЧИСТКА СТАНДАРТНОГО ФОНА VITEPRESS НА ГЛАВНОЙ */
:deep(.VPHome), :deep(.VPPage) {
  background: transparent !important;
}

/* СТИЛИЗАЦИЯ HERO И КАРТОЧЕК ДЛЯ ЛУЧШЕЙ ЧИТАЕМОСТИ В КОСМОСЕ */
.VPHero {
  position: relative;
  z-index: 1;
  padding: 80px 24px 48px !important;
}

.VPHero .image-src {
  filter: drop-shadow(0 0 40px rgba(245, 158, 11, 0.25)); /* Подсветка логотипа от солнца */
  animation: float 6s ease-in-out infinite;
}

/* Glassmorphism карточки Features */
.VPFeatures .VPLink {
  background: rgba(15, 15, 25, 0.6) !important;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 20px !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.VPFeatures .VPLink:hover {
  border-color: rgba(139, 92, 246, 0.4) !important;
  background: rgba(139, 92, 246, 0.08) !important;
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

/* Переделка дефолтных блоков участников VPTeamMembers */
.custom-section-title {
  font-weight: 800;
  letter-spacing: -0.5px;
  color: #f4f4f5;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}

.team-wrapper :deep(.VPTeamMembers) {
  background: rgba(15, 15, 25, 0.5) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: border-color 0.3s;
}

.team-wrapper:hover :deep(.VPTeamMembers) {
  border-color: rgba(139, 92, 246, 0.3);
}

/* АНИМАЦИИ */
@keyframes sunPulse {
  0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.3; filter: blur(20px); }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.45; filter: blur(30px); box-shadow: 0 0 80px rgba(245, 158, 11, 0.2); }
}

@keyframes starsTwinkle {
  0% { opacity: 0.3; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1.02); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}
</style>