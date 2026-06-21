<template>
  <div 
    ref="playerRef" 
    class="music-player" 
    :class="{ collapsed }"
    :style="{ top: position.top + 'px', left: position.left + 'px' }"
  >
    <!-- Улучшенная кнопка открытия/закрытия с анимацией -->
    <button class="toggle-btn" @click="collapsed = !collapsed" :aria-label="collapsed ? 'Открыть плеер' : 'Свернуть плеер'">
      <span class="icon">🎵</span>
      <span v-if="collapsed" class="pulse-ring"></span>
    </button>

    <div class="player-body" v-show="!collapsed">
      <!-- Премиальный Drag-Handle -->
      <div class="player-header" @mousedown="startDrag">
        <div class="drag-handle-bar">
          <span>⚡</span>
          <span class="title-text">Catcraft Media</span>
          <span>⚡</span>
        </div>
      </div>

      <!-- Горизонтальный плейлист с красивым скроллом -->
      <div class="playlist-picker">
        <button
          v-for="(pl, i) in playlists"
          :key="i"
          class="playlist-item"
          :class="{ active: i === activeIndex }"
          @click="activeIndex = i"
          :title="pl.title"
        >
          <div class="img-wrapper">
            <img :src="pl.cover" :alt="pl.title" />
          </div>
          <span class="label">{{ pl.title }}</span>
        </button>
      </div>

      <!-- Визуальный регулятор громкости -->
      <div class="volume-control">
        <span class="vol-icon">🔉</span>
        <div class="slider-container">
          <input type="range" min="0" max="100" v-model="volume" />
          <div class="slider-progress" :style="{ width: volume + '%' }"></div>
        </div>
        <span class="vol-icon">🔊</span>
        <span class="volume-num">{{ volume }}%</span>
      </div>

      <!-- Контейнер для плеера -->
      <div class="embed-wrap">
        <div v-if="isDragging" class="iframe-overlay"></div>

        <iframe
          v-if="active.type === 'soundcloud'"
          :key="'sc-' + activeIndex"
          width="100%"
          height="100%"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          :src="soundcloudSrc(active.url)"
        ></iframe>

        <iframe
          v-else-if="active.type === 'spotify'"
          :key="'sp-' + activeIndex"
          width="100%"
          height="100%"
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
import { ref, computed, onMounted } from 'vue'

const collapsed = ref(true)
const activeIndex = ref(0)
const volume = ref(80)

// === ТВОИ ПЛЕЙЛИСТЫ ВЕРНУЛИСЬ ДОМОЙ ===
const playlists = [
  {
    title: 'Lo-Fi Chill',
    type: 'soundcloud',
    url: 'https://soundcloud.com/hugo-pecheur-744280348/sets/lo-fi-hip-hop-chillhop?si=44676c3ba51440009fa040ad3b717caf&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    cover: '../music-covers/lofi.png' 
  },
  {
    title: 'DarkPrince',
    type: 'soundcloud',
    id: 'https://soundcloud.com/no_morelov3/sets/temnyj-princz', 
    cover: '../music-covers/primevue.png'
  },
  {
    title: 'Макс Корж',
    type: 'soundcloud',
    url: 'https://soundcloud.com/user-128114526/sets/gdpjunle78ra',
    cover: '../music-covers/contentful.png'
  }
]

// 🔀 Полный рандом при каждой загрузке страницы
onMounted(() => {
  activeIndex.value = Math.floor(Math.random() * playlists.length)
})

const active = computed(() => playlists[activeIndex.value])

function soundcloudSrc(url) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&visual=false`
}

// 📍 Перетаскивание (Drag & Drop)
const playerRef = ref(null)
const isDragging = ref(false)
const position = ref({ top: 90, left: window.innerWidth - 340 })

let startX = 0, startY = 0, initialTop = 0, initialLeft = 0

function startDrag(event) {
  isDragging.value = true
  startX = event.clientX
  startY = event.clientY
  initialTop = position.value.top
  initialLeft = position.value.left

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}

function onDrag(event) {
  if (!isDragging.value) return
  position.value.top = initialTop + (event.clientY - startY)
  position.value.left = initialLeft + (event.clientX - startX)
}

function stopDrag() {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}
</script>

<style scoped>
.music-player {
  position: fixed;
  z-index: 199;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  font-family: var(--vp-font-family-base);
}

/* Крутая кнопка с пульсацией */
.toggle-btn {
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: transform 0.2s ease;
}
.toggle-btn:hover {
  transform: scale(1.08);
}
.toggle-btn .icon {
  font-size: 20px;
  z-index: 2;
}
.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  animation: pulse 2s infinite;
  z-index: 1;
}

/* Эффект матового стекла (Glassmorphism) */
.player-body {
  width: 310px;
  min-width: 260px;
  max-width: 450px;
  height: 350px;
  min-height: 300px;
  max-height: 550px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  resize: both;
}

/* Темная тема VitePress автоматически подкрасит плеер */
:deep(.dark) .player-body {
  background: rgba(30, 30, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* Шапка */
.player-header {
  background: rgba(0, 0, 0, 0.05);
  padding: 8px;
  cursor: move;
  border-bottom: 1px solid var(--vp-c-divider);
}
:deep(.dark) .player-header { background: rgba(255, 255, 255, 0.03); }

.drag-handle-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--vp-c-text-1);
}

/* Карусель плейлистов */
.playlist-picker {
  display: flex;
  gap: 8px;
  padding: 10px;
  overflow-x: auto;
  flex-shrink: 0;
}
.playlist-picker::-webkit-scrollbar { height: 4px; }
.playlist-picker::-webkit-scrollbar-thumb { background: var(--vp-c-divider); border-radius: 4px; }

.playlist-item {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 58px;
  opacity: 0.5;
  transition: all 0.2s ease;
}
.playlist-item:hover { opacity: 0.8; }
.playlist-item.active { opacity: 1; }

.img-wrapper {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  padding: 2px;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;
}
.playlist-item.active .img-wrapper {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 8px var(--vp-c-brand-3);
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 7px;
  object-fit: cover;
}

.playlist-item .label {
  font-size: 9px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
}

/* Слайдер громкости */
.volume-control {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 14px 10px 14px;
  font-size: 11px;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}
.slider-container {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
}
.slider-container input[type="range"] {
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 0;
  height: 6px;
  opacity: 0;
  cursor: pointer;
}
.slider-progress {
  position: absolute;
  left: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 3px;
  z-index: 1;
  pointer-events: none;
}
.slider-container::before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--vp-c-divider);
  border-radius: 3px;
}
.volume-num {
  font-size: 10px;
  font-weight: bold;
  min-width: 30px;
  text-align: right;
}

/* Нижняя часть (фрейм) */
.embed-wrap {
  border-top: 1px solid var(--vp-c-divider);
  flex-grow: 1;
  position: relative;
  background: #00000008;
}

.iframe-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 10;
  background: transparent;
}

/* Анимация пульса */
@keyframes pulse {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.5); opacity: 0; }
}
</style>