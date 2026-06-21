---
layout: home

hero:
  name: "FanCC"
  text: "Найди новые знания!"
  tagline: "Сделано сообществом с любовью <3"
  image:
    src: /icon_yellow.png
    alt: Catcraft Logo

features:
  - icon: "🎮"
    title: "Истории"
    details: "Истории которых нету на оригинальном вики."
  - icon: "📈"
    title: "Гайды"
    details: " Подробные инструкции для новичков, объяснение игровых систем, советы и полезные маршруты развития."
  - icon: "🐱"
    title: "Ваши котики"
    details: "Скриншоты котиков от игроков Кошкокрафта."
  - icon: "💸"
    title: "Экономика"
    details: "Развитие экономики, и взаимодействие игроков."
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

<!-- Полностью обновленный живой космос -->
<div class="space-background">
  <div class="space-nebula"></div>
  <div class="stars-parallax layer-distant"></div>
  <div class="stars-parallax layer-mid"></div>
  <div class="stars-parallax layer-close"></div>
  <div class="sun-system">
    <div class="sun-corona"></div>
    <div class="space-sun"></div>
  </div>
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

/* ОБНОВЛЕННЫЙ АНИМАЦИОННЫЙ БЭКГРАУНД */
.space-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background: #06060b;
  overflow: hidden;
  pointer-events: none;
}

/* Космическая туманность на фоне для придания глубины цвета */
.space-nebula {
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.06) 0%, transparent 60%);
  filter: blur(40px);
  animation: nebulaDrift 30s ease-in-out infinite alternate;
}

/* СИСТЕМА СОЛНЦА С УЛУЧШЕННОЙ КОРОНОЙ */
.sun-system {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.space-sun {
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, #fffdf0 0%, #fcd34d 25%, #f59e0b 55%, #b45309 100%);
  border-radius: 50%;
  filter: blur(2px);
  box-shadow: 
    0 0 40px #f59e0b,
    0 0 80px rgba(245, 158, 11, 0.6),
    0 0 140px rgba(217, 119, 6, 0.3);
  animation: sunInternalPulse 6s ease-in-out infinite alternate;
}

/* Внешняя световая корона солнца */
.sun-corona {
  position: absolute;
  top: -40px;
  left: -40px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(252, 211, 77, 0.25) 0%, rgba(245, 158, 11, 0.08) 50%, transparent 100%);
  border-radius: 50%;
  filter: blur(15px);
  animation: coronaRotate 20s linear infinite;
}

/* ТРЁХСЛОЙНЫЙ ПАРАЛЛАКС ЗВЁЗД (Движение по диагонали без швов) */
.stars-parallax {
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 0;
  background-repeat: repeat;
}

/* Дальний слой — микро-звезды */
.layer-distant {
  background-image: radial-gradient(1px 1px at 20px 30px, #fff, transparent),
                    radial-gradient(1.5px 1.5px at 150px 50px, rgba(255,255,255,0.8), transparent),
                    radial-gradient(1px 1px at 80px 240px, #fff, transparent);
  background-size: 300px 300px;
  opacity: 0.4;
  animation: parallaxScroll 90s linear infinite;
}

/* Средний слой — цветные тёплые звёзды */
.layer-mid {
  background-image: radial-gradient(2px 2px at 40px 180px, #fcd34d, transparent),
                    radial-gradient(2px 2px at 220px 90px, #60a5fa, transparent),
                    radial-gradient(1.5px 1.5px at 120px 310px, #f472b6, transparent);
  background-size: 400px 400px;
  opacity: 0.6;
  animation: parallaxScroll 60s linear infinite;
}

/* Ближний слой — мерцающие крупные фокусы */
.layer-close {
  background-image: radial-gradient(2.5px 2.5px at 100px 60px, #fff, transparent),
                    radial-gradient(3px 3px at 280px 270px, rgba(255,255,255,0.9), transparent);
  background-size: 500px 500px;
  opacity: 0.5;
  animation: parallaxScroll 35s linear infinite, starsFlicker 3s ease-in-out infinite alternate;
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
  filter: drop-shadow(0 0 40px rgba(245, 158, 11, 0.25));
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

/* ТЕХНИЧЕСКИЕ АНИМАЦИИ ДЛЯ НОВОГО ФОНА */
@keyframes parallaxScroll {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, -50%, 0); }
}

@keyframes nebulaDrift {
  0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  100% { transform: scale(1.1) rotate(4deg); opacity: 1; }
}

@keyframes sunInternalPulse {
  0% { transform: scale(0.97); filter: blur(2px) brightness(0.95); }
  100% { transform: scale(1.03); filter: blur(3px) brightness(1.05); }
}

@keyframes coronaRotate {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.05); }
  100% { transform: rotate(360deg) scale(1); }
}

@keyframes starsFlicker {
  0% { opacity: 0.2; }
  100% { opacity: 0.7; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}
</style>