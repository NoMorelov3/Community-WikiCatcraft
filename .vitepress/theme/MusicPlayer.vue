<template>
  <div class="music-player" :class="{ collapsed }">
    <button class="toggle" @click="collapsed = !collapsed" :aria-label="collapsed ? 'Открыть плеер' : 'Свернуть плеер'">
      🎵
    </button>

    <div class="player-body" v-show="!collapsed">
      <!-- Список плейлистов -->
      <div class="playlist-picker">
        <button
          v-for="(pl, i) in playlists"
          :key="i"
          class="playlist-item"
          :class="{ active: i === activeIndex }"
          @click="activeIndex = i"
          :title="pl.title"
        >
          <img :src="pl.cover" :alt="pl.title" />
          <span class="label">{{ pl.title }}</span>
        </button>
      </div>

      <!-- Embed активного плейлиста -->
      <div class="embed-wrap">
        <iframe
          v-if="active.type === 'soundcloud'"
          :key="'sc-' + activeIndex"
          width="100%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="soundcloudSrc(active.url)"
        ></iframe>

        <iframe
          v-else-if="active.type === 'spotify'"
          :key="'sp-' + activeIndex"
          style="border-radius:12px"
          width="100%"
          height="152"
          frameborder="0"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          :src="`https://open.spotify.com/embed/playlist/${active.id}`"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const collapsed = ref(true)
const activeIndex = ref(0)

// === Настройте свои плейлисты здесь ===
const playlists = [
  {
    title: 'Lo-Fi Chill',
    type: 'spotify',
    url: '1K29UebM8pL9nLN14jsJ4R?si=151b2f25602a4278',
    cover: '/music-covers/lofi.svg'
  },
  {
    title: 'This vibe...',
    type: 'spotify',
    id: '37i9dQZF1DWWQRwui0ExPn?si=69eff6d9447a443e',
    cover: '/music-covers/phpmyadmin.svg'
  },
  {
    title: 'Макс Корж',
    type: 'soundcloud',
    url: 'https://soundcloud.com/user-128114526/sets/gdpjunle78ra',
    cover: '/music-covers/contentful.svg'
  }
]

const active = computed(() => playlists[activeIndex.value])

function soundcloudSrc(url) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`
}
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
  flex-shrink: 0;
}

.player-body {
  width: 300px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
}

.playlist-picker {
  display: flex;
  gap: 6px;
  padding: 8px;
  overflow-x: auto;
}

.playlist-item {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 56px;
  background: none;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 2px;
  cursor: pointer;
  opacity: 0.6;
  transition: all .15s ease;
}

.playlist-item:hover {
  opacity: 0.9;
}

.playlist-item.active {
  opacity: 1;
  border-color: var(--vp-c-brand-1);
}

.playlist-item img {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
}

.playlist-item .label {
  font-size: 10px;
  text-align: center;
  line-height: 1.2;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 56px;
}

.embed-wrap {
  border-top: 1px solid var(--vp-c-divider);
}

@media (max-width: 768px) {
  .player-body { width: 260px; }
}
</style>