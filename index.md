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

<div class="space-container">
  <div class="space-nebula"></div>
  <div class="space-stars layer-1"></div>
  <div class="space-stars layer-2"></div>
  <div class="space-stars layer-3"></div>
  <div class="space-sun-portal"></div>
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
/* Кастомная палитра */
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%);
  --vp-c-brand-1: #8b5cf6;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-next: #60a5fa;
}

/* ГЛОБАЛЬНЫЙ КОСМИЧЕСКИЙ ХОЛСТ */
.space-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background: #050508;
  overflow: hidden;
  pointer-events: none;
}

/* Глубокие газовые туманности */
.space-nebula {
  position: absolute;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 50% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
    radial-gradient(circle at 20% 60%, rgba(139, 92, 246, 0.06) 0%, transparent 40%),
    radial-gradient(circle at 80% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
  filter: blur(60px);
  transform: scale(1.1);
  animation: nebulaPulse 20s ease-in-out infinite alternate;
}

/* ЖЕСТКАЯ ПРИВЯЗКА ЗВЕЗДНЫХ СЛОЕВ (Цикличное смещение по background-size во избежание швов) */
.space-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  will-change: background-position;
}

.layer-1 {
  background-image: radial-gradient(1px 1px at 25px 45px, #fff, transparent),
                    radial-gradient(1px 1px at 145px 185px, rgba(255,255,255,0.6), transparent),
                    radial-gradient(1.5px 1.5px at 280px 90px, #fff, transparent);
  background-size: 300px 300px;
  opacity: 0.35;
  animation: starMoveContinuous 160s linear infinite;
}

.layer-2 {
  background-image: radial-gradient(1.5px 1.5px at 70px 120px, #60a5fa, transparent),
                    radial-gradient(2px 2px at 250px 310px, #fcd34d, transparent);
  background-size: 400px 400px;
  opacity: 0.5;
  animation: starMoveContinuous 100s linear infinite reverse;
}

.layer-3 {
  background-image: radial-gradient(2px 2px at 190px 70px, #fff, transparent),
                    radial-gradient(2.5px 2.5px at 340px 280px, rgba(255,255,255,0.8), transparent);
  background-size: 500px 500px;
  opacity: 0.4;
  animation: starMoveContinuous 60s linear infinite, starFlicker 4s ease-in-out infinite alternate;
}

/* СОЛНЦЕ: Абсолютная фиксация в верхней трети экрана без смещения контентом */
.space-sun-portal {
  position: absolute;
  top: 320px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #ffffff 0%, #fcd34d 30%, #eab308 60%, transparent 100%);
  border-radius: 50%;
  filter: blur(8px);
  box-shadow: 
    0 0 60px rgba(234, 179, 8, 0.5),
    0 0 120px rgba(245, 158, 11, 0.3),
    0 0 250px rgba(139, 92, 246, 0.15);
  animation: sunGlow 8s ease-in-out infinite alternate;
}

@media (max-width: 960px) {
  .space-sun-portal {
    top: 240px;
    width: 140px;
    height: 140px;
  }
}

/* ИНТЕГРАЦИЯ С ИНТЕРФЕЙСОМ VITEPRESS */
:deep(.VPHome), :deep(.VPPage), :deep(.VPContent) {
  background: transparent !important;
}

.VPHero {
  position: relative;
  z-index: 1;
}

/* Контраст для главного текста */
:deep(.VPHero .name) {
  text-shadow: 0 0 30px rgba(245, 158, 11, 0.2);
}
:deep(.VPHero .text) {
  color: #f8fafc !important;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
}
:deep(.VPHero .tagline) {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
}

.VPHero .image-src {
  filter: drop-shadow(0 0 35px rgba(245, 158, 11, 0.3));
  animation: floatingHero 6s ease-in-out infinite;
}

/* Стилизация Glassmorphic карточек Features */
.VPFeatures .VPLink {
  background: rgba(10, 10, 16, 0.7) !important;
  backdrop-filter: blur(14px) saturate(120%);
  -webkit-backdrop-filter: blur(14px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 20px !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.VPFeatures .VPLink:hover {
  border-color: rgba(245, 158, 11, 0.35) !important;
  background: rgba(16, 16, 28, 0.85) !important;
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(139, 92, 246, 0.1);
}

/* Команда и Саппорты */
.custom-section-title {
  font-weight: 800;
  color: #f1f5f9;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
}

.team-wrapper :deep(.VPTeamMembers) {
  background: rgba(10, 10, 16, 0.6) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 22px;
  padding: 16px;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5);
  transition: border-color 0.3s;
}

.team-wrapper:hover :deep(.VPTeamMembers) {
  border-color: rgba(139, 92, 246, 0.25);
}

/* ОПТИМИЗИРОВАННЫЕ АНИМАЦИИ БЕЗ ШВОВ И СТЫКОВ */
@keyframes starMoveContinuous {
  from { background-position: 0 0; }
  to { background-position: 2000px 1000px; }
}

@keyframes nebulaPulse {
  0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  100% { transform: scale(1.06) rotate(1deg); opacity: 1; }
}

@keyframes sunGlow {
  0% { transform: translate(-50%, -50%) scale(0.97); filter: blur(7px); opacity: 0.9; }
  100% { transform: translate(-50%, -50%) scale(1.03); filter: blur(9px); opacity: 1; }
}

@keyframes starFlicker {
  0% { opacity: 0.2; }
  100% { opacity: 0.65; }
}

@keyframes floatingHero {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>