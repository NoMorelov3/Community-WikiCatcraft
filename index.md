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
  import { ref, onMounted, onUnmounted } from 'vue'

  // Логика плавного параллакса для Солнца (движется медленнее скролла)
  const scrollOffset = ref(0)
  const handleScroll = () => {
    scrollOffset.value = window.scrollY * 0.35 // Коэффициент скорости движения солнца
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

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
  <div class="space-sun-portal" :style="{ transform: `translate(-50%, calc(-50% - ${scrollOffset}px))` }"></div>
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

/* ГЛОБАЛЬНЫЙ КОСМИЧЕСКИЙ ХОЛСТ */
.space-container {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: -2; background: #040407; overflow: hidden; pointer-events: none;
}
.space-nebula {
  position: absolute; width: 130%; height: 130%; top: -15%; left: -15%;
  background: 
    radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 45%);
  filter: blur(50px); animation: nebulaPulse 20s ease-in-out infinite alternate;
}

/* КРУПНЫЕ И ЯРКИЕ ЗВЕЗДЫ */
.space-stars {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-repeat: repeat; will-change: background-position;
}
.layer-1 { 
  background-image: radial-gradient(2px 2px at 20px 50px, #ffffff, transparent),
                    radial-gradient(2.5px 2.5px at 150px 180px, rgba(255,255,255,0.9), transparent); 
  background-size: 250px 250px; opacity: 0.6; animation: starMove 140s linear infinite; 
}
.layer-2 { 
  background-image: radial-gradient(3px 3px at 80px 120px, #60a5fa, transparent),
                    radial-gradient(2.5px 2.5px at 290px 310px, #fcd34d, transparent); 
  background-size: 350px 350px; opacity: 0.7; animation: starMove 90s linear infinite reverse; 
}
.layer-3 { 
  background-image: radial-gradient(3.5px 3.5px at 180px 80px, #ffffff, transparent),
                    radial-gradient(4.5px 4.5px at 320px 260px, rgba(255,255,255,0.95), transparent); 
  background-size: 450px 450px; opacity: 0.65; animation: starMove 50s linear infinite, starFlicker 3s ease-in-out infinite alternate; 
}

/* ЖИВОЕ СОЛНЦЕ ИЗНАЧАЛЬНО ПОД ЛАПКОЙ (Параллакс рассчитывается скриптом сверху) */
.space-sun-portal {
  position: absolute; 
  top: 300px; 
  left: 50%; 
  width: 220px; 
  height: 220px; 
  border-radius: 50%;
  background: radial-gradient(circle, #ffffff 10%, #fcd34d 40%, #f59e0b 70%, transparent 100%);
  filter: blur(6px); 
  box-shadow: 0 0 90px rgba(245, 158, 11, 0.5), 0 0 180px rgba(139, 92, 246, 0.2);
  will-change: transform;
}

@media (max-width: 960px) {
  .space-sun-portal { top: 220px; width: 150px; height: 150px; }
}

/* ФИКСАЦИЯ И СБРОС ФОНОВ ОБОЛОЧКИ VITEPRESS */
:deep(.VPHome), :deep(.VPPage), :deep(.VPContent), :deep(.VPFeatures) { 
  background: transparent !important; 
}

/* ЛАПКА И ШАПКА HERO */
:deep(.VPHero) { margin-bottom: 40px !important; }
:deep(.VPHero .image-src) {
  max-width: 260px !important;
  filter: drop-shadow(0 0 35px rgba(245, 158, 11, 0.25));
  animation: floatingHero 6s ease-in-out infinite;
}
:deep(.VPHero .text) { text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9); }
:deep(.VPHero .tagline) { text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9); }

/* ЖЕСТКИЙ ПРИНУДИТЕЛЬНЫЙ GLASSMORPHISM ДЛЯ ВСЕХ БЛОКОВ БЕЗ ИСКЛЮЧЕНИЯ */
:deep(.VPFeatures .item),
:deep(.VPFeatures .VPLink),
:deep(.VPTeamMembers .item) {
  background: rgba(12, 12, 20, 0.6) !important; /* Настоящая глубокая прозрачность */
  backdrop-filter: blur(18px) saturate(140%) !important; 
  -webkit-backdrop-filter: blur(18px) saturate(140%) !important;
  border: 1px solid rgba(255, 255, 255, 0.07) !important;
  border-radius: 22px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
}

/* Эффекты при наведении на любые карточки */
:deep(.VPFeatures .VPLink:hover),
:deep(.VPTeamMembers .item:hover) {
  border-color: rgba(245, 158, 11, 0.35) !important;
  background: rgba(20, 20, 32, 0.75) !important;
  transform: translateY(-5px) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 15px rgba(139, 92, 246, 0.15) !important;
}

/* ВЫРАВНИВАНИЕ СЕКЦИЙ КОМАНДЫ ПО ЦЕНТРУ */
.main-content-layout {
  display: flex; flex-direction: column; align-items: center; width: 100%; gap: 70px; margin-top: 20px; padding-bottom: 100px;
}
.custom-team-section { width: 100%; display: flex; flex-direction: column; align-items: center; }
.custom-section-title {
  font-weight: 800; font-size: 1.8rem; color: #f1f5f9; text-shadow: 0 2px 10px #000; margin-bottom: 25px;
}
.team-centered-wrapper { width: 100%; display: flex; justify-content: center; }

:deep(.VPTeamMembers) { background: transparent !important; width: 100%; }
:deep(.VPTeamMembers .container) {
  display: flex !important; justify-content: center !important; 
  flex-wrap: wrap !important; grid-template-columns: none !important; gap: 30px !important;
}
:deep(.VPTeamMembers .item) { width: 280px !important; margin: 0 !important; }

/* АНИМАЦИИ */
@keyframes starMove { from { background-position: 0 0; } to { background-position: 1000px 1000px; } }
@keyframes nebulaPulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.05); opacity: 1; } }
@keyframes starFlicker { 0% { opacity: 0.3; } 100% { opacity: 0.8; } }
@keyframes floatingHero { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
</style>