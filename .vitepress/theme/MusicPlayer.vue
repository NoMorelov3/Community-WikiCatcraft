<template>
  <div class="music-player" :class="{ collapsed }">
    <button class="toggle" @click="collapsed = !collapsed">
      🎵
    </button>
    <div class="player-body" v-show="!collapsed">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        :src="src"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(true)

// Ссылка на ваш плейлист SoundCloud, обёрнутая в embed-формат
const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  'https://soundcloud.com/your-user/sets/your-playlist'
)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`
</script>

<style scoped>
.music-player {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.toggle {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
}

.player-body {
  width: 300px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}

@media (max-width: 768px) {
  .player-body { width: 260px; }
}
</style>