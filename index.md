---
layout: home

hero:
  name: "Catcraft Wiki"
  text: "Твой проводник в мире уютного выживания"
  tagline: "Полная база знаний, гайды, кастомные плагины и уютное комьюнити. Всё, что нужно для комфортной игры, собрано в одном месте."
  image:
    src: /logo.png
    alt: Catcraft Logo
  actions:
    - theme: brand
      text: 🚀 Начать изучение
      link: /guide/getting-started
    - theme: alt
      text: 📻 Слушать Радио
      link: /guide/radio
    - theme: alt
      text: 🐙 GitHub
      link: https://github.com/Community-WikiCatcraft

features:
  - icon: "🎒"
    title: "Кастомные механики"
    details: "Изучи уникальные фичи сервера, включая VoidBag, продвинутые системы хранения и уникальные предметы, созданные специально для наших игроков."
  - icon: "📈"
    title: "Подробные гайды"
    details: "От первых шагов на спавне до тонкостей автоматизации ферм и настройки параллельных схем электропитания. Понятно даже новичку."
  - icon: "⚡"
    title: "Оптимизация и скорость"
    details: "Наша база знаний построена на VitePress — это значит моментальная загрузка страниц, удобный поиск и идеальное отображение как с ПК, так и с телефона."
  - icon: "🐱"
    title: "Лор и Сообщество"
    details: "Узнай историю сервера, познакомься с правилами комьюнити, читай про прошедшие ивенты и становись частью нашей большой кошачьей семьи."
---

<script setup>
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

<!-- СЕКЦИЯ КОМАНДЫ -->
<div class="team-section">
  
  <div class="team-block">
    <h2 class="team-heading">⚡ Разработчики</h2>
    <div class="team-grid">
      <div v-for="member in Admins" :key="member.name" class="custom-member-card">
        <div class="avatar-wrapper">
          <img :src="member.avatar" :alt="member.name" class="member-avatar" />
        </div>
        <div class="member-info">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-title">{{ member.title }}</p>
          <div class="member-links">
            <a v-for="link in member.links" :key="link.link" :href="link.link" target="_blank" class="member-link-btn" :class="link.icon">
              <span v-if="link.icon === 'github'">🐙 GitHub</span>
              <span v-else-if="link.icon === 'discord'">💬 Discord</span>
              <span v-else>🔗 Ссылка</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="team-block">
    <h2 class="team-heading">💖 Саппорты</h2>
    <div class="team-grid">
      <div v-for="member in Supports" :key="member.name" class="custom-member-card support-card">
        <div class="avatar-wrapper">
          <img :src="member.avatar" :alt="member.name" class="member-avatar" />
        </div>
        <div class="member-info">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-title">{{ member.title }}</p>
          <div class="member-links">
            <a v-for="link in member.links" :key="link.link" :href="link.link" target="_blank" class="member-link-btn" :class="link.icon">
              <span v-if="link.icon === 'github'">🐙 GitHub</span>
              <span v-else-if="link.icon === 'discord'">💬 Discord</span>
              <span v-else>🔗 Ссылка</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  --vp-c-brand-1: #8b5cf6;
  --vp-c-brand-2: #3b82f6;
  --vp-c-brand-next: #60a5fa;
}

/* ФОНОВОЕ СВЕЧЕНИЕ HERO */
.VPHero::before {
  content: ""; position: absolute; top: -10%; right: 15%; width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%); z-index: -1; filter: blur(40px);
}
.VPHero::after {
  content: ""; position: absolute; bottom: 10%; left: 10%; width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%); z-index: -1; filter: blur(40px);
}

.VPHero { padding: 80px 24px 48px !important; }
@media (min-width: 640px) { .VPHero { padding: 112px 48px 64px !important; } }
@media (min-width: 960px) { .VPHero { padding: 128px 64px 80px !important; } }

.VPHero .image-src {
  filter: drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3));
  animation: float 6s ease-in-out infinite;
}

/* FEATURES КАРТОЧКИ */
.VPFeatures .VPLink {
  background: rgba(30, 30, 34, 0.4) !important;
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05) !important; border-radius: 20px !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
}
.VPFeatures .VPLink:hover {
  border-color: rgba(139, 92, 246, 0.4) !important;
  background: rgba(139, 92, 246, 0.05) !important;
  transform: translateY(-5px); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}
.VPFeatures .icon {
  background: rgba(255, 255, 255, 0.03) !important; border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px; width: 48px; height: 48px; font-size: 24px;
  display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
}

/* СТИЛИЗАЦИЯ СЕКЦИИ КОМАНДЫ */
.team-section {
  max-width: 1152px;
  margin: 80px auto 120px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.team-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.team-heading {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--vp-c-text-1);
  position: relative;
  margin-bottom: 8px;
}

.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  width: 100%;
}

/* КАСТОМНЫЕ КАРТОЧКИ УЧАСТНИКОВ */
.custom-member-card {
  background: rgba(30, 30, 34, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

/* Мягкая подсветка карт при наведении */
.custom-member-card:hover {
  transform: translateY(-4px);
  background: rgba(139, 92, 246, 0.04);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1);
}

/* Персонализированный розовый оттенок для саппортов */
.support-card:hover {
  background: rgba(236, 72, 153, 0.04);
  border-color: rgba(236, 72, 153, 0.3);
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.1);
}

/* Аватарки */
.avatar-wrapper {
  position: relative;
  margin-bottom: 16px;
}
.member-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s;
}
.custom-member-card:hover .member-avatar {
  transform: scale(1.05);
  border-color: var(--vp-c-brand-1);
}
.support-card:hover .member-avatar {
  border-color: #ec4899;
}

/* Текст */
.member-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 4px 0;
}
.member-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0 0 16px 0;
}

/* Кнопки соцсетей */
.member-links {
  width: 100%;
  margin-top: auto;
}
.member-link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none !important;
  width: 100%;
  transition: background 0.2s, color 0.2s;
}

.member-link-btn.github {
  background: rgba(255, 255, 255, 0.06);
  color: #e4e4e7;
}
.member-link-btn.github:hover {
  background: #f4f4f5;
  color: #09090b;
}

.member-link-btn.discord {
  background: rgba(88, 101, 242, 0.15);
  color: #5865f2;
}
.member-link-btn.discord:hover {
  background: #5865f2;
  color: #ffffff;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
</style>