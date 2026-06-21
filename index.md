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

<div class="main-content-layout">
  <div class="custom-team-section">
    <h2 class="custom-section-title">Наши разработчики</h2>
    <div class="team-centered-wrapper">
      <VPTeamMembers size="small" :members="Admins" />
    </div>
  </div>

  <div class="custom-team-section">
    <h2 class="custom-section-title">Наши Саппорты</h2>
    <div class="team-centered-wrapper">
      <VPTeamMembers size="small" :members="Supports" />
    </div>
  </div>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #f59e0b 0%, #8b5cf6 100%);
  --vp-c-brand-1: #8b5cf6;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-next: #60a5fa;
}

/* ФОНОВЫЙ КОСМОС */
.space-container {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: -2; background: #050508; overflow: hidden; pointer-events: none;
}
.space-nebula {
  position: absolute; width: 100%; height: 100%;
  background: radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 40%);
  filter: blur(60px); animation: nebulaPulse 15s ease-in-out infinite alternate;
}
.space-stars {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-repeat: repeat; will-change: background-position;
}
.layer-1 { background-image: radial-gradient(1px 1px at 25px 45px, #fff, transparent); background-size: 300px 300px; opacity: 0.3; animation: starMove 160s linear infinite; }
.layer-2 { background-image: radial-gradient(1.5px 1.5px at 70px 120px, #60a5fa, transparent); background-size: 400px 400px; opacity: 0.4; animation: starMove 100s linear infinite reverse; }
.layer-3 { background-image: radial-gradient(2px 2px at 190px 70px, #fff, transparent); background-size: 500px 500px; opacity: 0.3; animation: starMove 60s linear infinite; }

/* СОЛНЦЕ (Поднято выше, чтобы не наезжать на блоки) */
.space-sun-portal {
  position: absolute; top: 280px; left: 50%; transform: translate(-50%, -50%);
  width: 160px; height: 160px; border-radius: 50%;
  background: radial-gradient(circle, #ffffff 0%, #fcd34d 30%, #eab308 60%, transparent 100%);
  filter: blur(8px); box-shadow: 0 0 100px rgba(245, 158, 11, 0.4);
  animation: sunGlow 8s ease-in-out infinite alternate;
}

/* ГЛАВНЫЙ ГЕРОЙ (Hero) И ИКОНКА ЛАПКИ */
:deep(.VPHero) {
  margin-bottom: 60px !important; /* Увеличиваем отступ от лапки до блоков */
}
:deep(.VPHero .container) {
  padding-bottom: 40px !important;
}
:deep(.VPHero .image-src) {
  max-width: 280px !important; /* Ограничиваем размер лапки */
  filter: drop-shadow(0 0 30px rgba(245, 158, 11, 0.3));
  animation: floatingHero 6s ease-in-out infinite;
}

/* КАРТОЧКИ FEATURES */
:deep(.VPFeatures) {
  background: transparent !important;
  padding: 40px 24px !important;
}
:deep(.VPFeatures .VPLink) {
  background: rgba(10, 10, 16, 0.75) !important;
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 20px !important;
}

/* СЕКЦИЯ КОМАНДЫ (Исправление центровки и прозрачности) */
.main-content-layout {
  display: flex; flex-direction: column; align-items: center; width: 100%; gap: 80px; margin-top: 40px; padding-bottom: 100px;
}
.custom-team-section {
  width: 100%; display: flex; flex-direction: column; align-items: center;
}
.custom-section-title {
  font-weight: 800; font-size: 1.8rem; color: #f1f5f9; text-shadow: 0 2px 10px #000; margin-bottom: 30px;
}
.team-centered-wrapper {
  width: 100%; display: flex; justify-content: center;
}

/* Глубокий сброс стилей участников */
:deep(.VPTeamMembers) { background: transparent !important; }
:deep(.VPTeamMembers .container) {
  display: flex !important; justify-content: center !important; 
  flex-wrap: wrap !important; grid-template-columns: none !important; gap: 30px !important;
}
:deep(.VPTeamMembers .item) {
  background: rgba(15, 15, 25, 0.7) !important; /* ПРОЗРАЧНОСТЬ */
  backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 24px !important;
  width: 280px !important; margin: 0 !important;
}

/* Очистка фона VitePress */
:deep(.VPHome), :deep(.VPPage), :deep(.VPContent) { background: transparent !important; }

/* АНИМАЦИИ */
@keyframes starMove { from { background-position: 0 0; } to { background-position: 1000px 1000px; } }
@keyframes sunGlow { 0% { transform: translate(-50%, -50%) scale(0.98); opacity: 0.8; } 100% { transform: translate(-50%, -50%) scale(1.04); opacity: 1; } }
@keyframes nebulaPulse { 0% { opacity: 0.7; } 100% { opacity: 1; } }
@keyframes floatingHero { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
</style>