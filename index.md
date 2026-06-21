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
  import { ref, onMounted, onUnmounted } from 'vue'

  // Логика плавного параллакса для Солнца
  const scrollOffset = ref(0)
  const handleScroll = () => {
    scrollOffset.value = window.scrollY * 0.35
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
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
      <div class="custom-member-card">
        <img class="member-avatar" src="https://avatars.githubusercontent.com/u/169675635?v=4" alt="EHqador">
        <div class="member-name">EHqador (Он же Никитка)</div>
        <div class="member-title">Создатель этой Вики</div>
        <div class="member-links">
          <a href="https://github.com/NoMorelov3" target="_blank" rel="noopener" class="member-icon-link">
            <svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="custom-team-section">
    <h2 class="custom-section-title">Наши Саппорты</h2>
    <div class="team-centered-wrapper">
      <div class="custom-member-card">
        <img class="member-avatar" src="https://cdn.discordapp.com/avatars/814139144241807380/600dabd77248656efdbd16eb51997794.webp?size=128" alt="dark_moooon">
        <div class="member-name">dark_moooon</div>
        <div class="member-title">мой любимый</div>
        <div class="member-links">
          <a href="https://discord.gg/zybj3EAsQg" target="_blank" rel="noopener" class="member-icon-link">
            <svg class="icon-svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.873-.894a.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.075.075 0 0 1-.006.127a12.298 12.298 0 0 1-1.873.894a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.156-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.156 2.418z"/></svg>
          </a>
        </div>
      </div>
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

/* ЖИВОЕ СОЛНЦЕ ИЗНАЧАЛЬНО ПОД ЛАПКОЙ */
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

/* ЖЕСТКИЙ ПРИНУДИТЕЛЬНЫЙ GLASSMORPHISM ДЛЯ КАРТОЧЕК FEATURES */
:deep(.VPFeatures .item),
:deep(.VPFeatures .VPLink) {
  background: rgba(12, 12, 20, 0.6) !important;
  backdrop-filter: blur(18px) saturate(140%) !important; 
  -webkit-backdrop-filter: blur(18px) saturate(140%) !important;
  border: 1px solid rgba(255, 255, 255, 0.07) !important;
  border-radius: 22px !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1) !important;
}
:deep(.VPFeatures .VPLink:hover) {
  border-color: rgba(245, 158, 11, 0.35) !important;
  background: rgba(20, 20, 32, 0.75) !important;
  transform: translateY(-5px) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 15px rgba(139, 92, 246, 0.15) !important;
}

/* ЖЕЛЕЗОБЕТОННАЯ ЦЕНТРОВКА ДЛЯ КОМАНДЫ (ЧИСТЫЙ CSS) */
.main-content-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 70px;
  margin-top: 40px;
  padding-bottom: 100px;
  box-sizing: border-box;
}

.custom-team-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.custom-section-title {
  font-weight: 800;
  font-size: 1.8rem;
  color: #f1f5f9;
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
  margin-bottom: 25px;
  text-align: center;
}

.team-centered-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ИДЕАЛЬНО ПРОЗРАЧНАЯ КАРТОЧКА СТЕКЛЯННОГО СТИЛЯ */
.custom-member-card {
  background: rgba(12, 12, 20, 0.6) !important;
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  width: 280px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.custom-member-card:hover {
  border-color: rgba(245, 158, 11, 0.35);
  background: rgba(20, 20, 32, 0.75) !important;
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 15px rgba(139, 92, 246, 0.15);
}

/* Внутренности карточки */
.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
  background: rgba(255,255,255,0.05);
}

.member-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
}

.member-title {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 16px;
}

.member-links {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.member-icon-link {
  color: #94a3b8;
  transition: color 0.2s ease;
}
.member-icon-link:hover {
  color: #ffffff;
}

.icon-svg {
  width: 22px;
  height: 22px;
}

/* АНИМАЦИИ */
@keyframes starMove { from { background-position: 0 0; } to { background-position: 1000px 1000px; } }
@keyframes nebulaPulse { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.05); opacity: 1; } }
@keyframes starFlicker { 0% { opacity: 0.3; } 100% { opacity: 0.8; } }
@keyframes floatingHero { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
</style>