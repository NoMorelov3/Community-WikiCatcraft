<template>
  <div 
    ref="playerRef" 
    class="music-player" 
    :class="{ collapsed }"
    :style="{ top: position.top + 'px', left: position.left + 'px' }"
  >
    <audio 
      ref="audioRef" 
      preload="auto" 
      crossorigin="anonymous"
      @ended="handleTrackEnded" 
      @timeupdate="updateProgress"
    ></audio>

    <button class="toggle-btn" @click="collapsed = !collapsed" :aria-label="collapsed ? 'Открыть плеер' : 'Свернуть плеер'">
      <span class="icon">{{ isPlaying ? '📻' : '🎵' }}</span>
      <span v-if="collapsed && isPlaying" class="pulse-ring"></span>
    </button>

    <div class="player-body" v-show="!collapsed">
      <div class="player-header" @mousedown="startDrag">
        <div class="drag-handle-bar">
          <span class="live-indicator" :class="{ 'live-on': isPlaying }">🔴 LIVE</span>
          <span class="title-text">Catcraft Radio</span>
          <span>⚡</span>
        </div>
      </div>

      <div class="controls-zone">
        <div class="radio-disk" :class="{ spinning: isPlaying }">
          <div class="disk-center"></div>
        </div>

        <div class="track-info">
          <div class="track-title-container">
            <div class="track-title" :class="{ 'marquee': isLongTitle }">
              {{ isSpeakerPlaying ? '🎤 Ведущий в эфире' : currentTrackTitle }}
            </div>
          </div>
          <div class="track-author">{{ isSpeakerPlaying ? 'Голосовое уведомление' : 'Музыкальный эфир' }}</div>
        </div>

        <div class="progress-container">
          <div class="progress-bar" :style="{ width: trackProgress + '%' }"></div>
        </div>

        <div class="buttons-row">
          <button @click="prevTrack" class="ctrl-btn text-btn" title="Предыдущий трек">⏮️ Назад</button>
          <button @click="togglePlay" class="ctrl-btn play-main">
            {{ isPlaying ? '⏸️' : '▶️' }}
          </button>
          <button @click="nextTrack" class="ctrl-btn text-btn" title="Следующий трек">Вперед ⏭️</button>
        </div>
      </div>

      <div class="volume-control">
        <span class="vol-icon" @click="muteToggle" style="cursor: pointer;">
          {{ volume === 0 ? '🔇' : volume < 40 ? '🔈' : '🔊' }}
        </span>
        <div class="slider-container">
          <input type="range" min="0" max="100" v-model="volume" @input="changeVolume" title="Громкость" />
          <div class="slider-progress" :style="{ width: volume + '%' }"></div>
        </div>
        <span class="volume-num">{{ volume }}%</span>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
// Импортируем хелпер VitePress для генерации правильных путей с учетом base URL
import { withBase } from 'vitepress'

const collapsed = ref(false)
const isPlaying = ref(false)
const volume = ref(70) 
const trackProgress = ref(0)
const currentTrackTitle = ref('Подключение...')
const isSpeakerPlaying = ref(false)
const currentMusicIndex = ref(0)

const audioRef = ref(null)
let savedVolume = 70

const isLongTitle = computed(() => {
  const title = isSpeakerPlaying.value ? '🎤 Ведущий в эфире' : currentTrackTitle.value
  return title.length > 22
})

// ==========================================================
// 📋 ИМЕНА И ПУТИ ИСПРАВЛЕНЫ ПО СКРИНШОТУ (С ПРОБЕЛАМИ)
// ==========================================================
const musicTracks = [
  // ==========================================
  // 🟢 MINECRAFT - VOLUME ALPHA
  // ==========================================
  { title: 'C418 - Key (Volume Alpha)', url: '/Radio/01Key.mp3' },
  { title: 'C418 - Door (Volume Alpha)', url: '/Radio/02Door.mp3' },
  { title: 'C418 - Subwoofer Lullaby (Volume Alpha)', url: '/Radio/03 Subwoofer Lullaby.mp3' },
  { title: 'C418 - Death (Volume Alpha)', url: '/Radio/04Death.mp3' },
  { title: 'C418 - Living Mice (Volume Alpha)', url: '/Radio/05LivingMice.mp3' },
  { title: 'C418 - Moog City (Volume Alpha)', url: '/Radio/06MoogCity.mp3' },
  { title: 'C418 - Haggstrom (Volume Alpha)', url: '/Radio/07Haggstrom.mp3' },
  { title: 'C418 - Minecraft (Volume Alpha)', url: '/Radio/08Minecraft.mp3' },
  { title: 'C418 - Oxygene (Volume Alpha)', url: '/Radio/09Oxygene.mp3' },
  { title: 'C418 - Equinoxe (Volume Alpha)', url: '/Radio/10Equinoxe.mp3' },
  { title: 'C418 - Mice on Venus (Volume Alpha)', url: '/Radio/11 Mice on Venus.mp3' },
  { title: 'C418 - Dry Hands (Volume Alpha)', url: '/Radio/12DryHands.mp3' },
  { title: 'C418 - Wet Hands (Volume Alpha)', url: '/Radio/13WetHands.mp3' },
  { title: 'C418 - Clark (Volume Alpha)', url: '/Radio/14Clark.mp3' },
  { title: 'C418 - Chris (Volume Alpha)', url: '/Radio/15Chris.mp3' },
  { title: 'C418 - Thirteen (Volume Alpha)', url: '/Radio/16Thirteen.mp3' },
  { title: 'C418 - Excuse (Volume Alpha)', url: '/Radio/17Excuse.mp3' },
  { title: 'C418 - Sweden (Volume Alpha)', url: '/Radio/18Sweden.mp3' },
  { title: 'C418 - Cat (Volume Alpha)', url: '/Radio/19Cat.mp3' },
  { title: 'C418 - Dog (Volume Alpha)', url: '/Radio/20Dog.mp3' },
  { title: 'C418 - Danny (Volume Alpha)', url: '/Radio/21Danny.mp3' },
  { title: 'C418 - Beginning (Volume Alpha)', url: '/Radio/22Beginning.mp3' },
  { title: 'C418 - Droopy Likes Ricochet (Volume Alpha)', url: '/Radio/23DroopyLikesRicochet.mp3' },
  { title: 'C418 - Droopy Likes Your Face (Volume Alpha)', url: '/Radio/24DroopyLikesYourFace.mp3' },

  // ==========================================
  // 🔥 MINECRAFT - VOLUME BETA
  // ==========================================
  { title: 'C418 - Ki (Volume Beta)', url: '/Radio/01Ki.mp3' },
  { title: 'C418 - Alpha (Volume Beta)', url: '/Radio/02Alpha.mp3' },
  { title: 'C418 - Dead Voxel (Volume Beta)', url: '/Radio/03DeadVoxel.mp3' },
  { title: 'C418 - Blind Spots (Volume Beta)', url: '/Radio/04BlindSpots.mp3' },
  { title: 'C418 - Flake (Volume Beta)', url: '/Radio/05Flake.mp3' },
  { title: 'C418 - Moog City 2 (Volume Beta)', url: '/Radio/06 Moog City 2.mp3' },
  { title: 'C418 - Concrete Halls (Volume Beta)', url: '/Radio/07ConcreteHalls.mp3' },
  { title: 'C418 - Biome Fest (Volume Beta)', url: '/Radio/08BiomeFest.mp3' },
  { title: 'C418 - Mutation (Volume Beta)', url: '/Radio/09Mutation.mp3' },
  { title: 'C418 - Haunt Muskie (Volume Beta)', url: '/Radio/10HauntMuskie.mp3' },
  { title: 'C418 - Warmth (Volume Beta)', url: '/Radio/11Warmth.mp3' },
  { title: 'C418 - Floating Trees (Volume Beta)', url: '/Radio/12FloatingTrees.mp3' },
  { title: 'C418 - Aria Math (Volume Beta)', url: '/Radio/13AriaMath.mp3' },
  { title: 'C418 - Kyoto (Volume Beta)', url: '/Radio/14Kyoto.mp3' },
  { title: 'C418 - Ballad of the Cats (Volume Beta)', url: '/Radio/15BalladoftheCats.mp3' },
  { title: 'C418 - Taswell (Volume Beta)', url: '/Radio/16Taswell.mp3' },
  { title: 'C418 - Beginning 2 (Volume Beta)', url: '/Radio/17Beginning2.mp3' },
  { title: 'C418 - Dreiton (Volume Beta)', url: '/Radio/18Dreiton.mp3' },
  { title: 'C418 - The End (Volume Beta)', url: '/Radio/19TheEnd.mp3' },
  { title: 'C418 - Chirp (Volume Beta)', url: '/Radio/20Chirp.mp3' },
  { title: 'C418 - Wait (Volume Beta)', url: '/Radio/21Wait.mp3' },
  { title: 'C418 - Mellohi (Volume Beta)', url: '/Radio/22Mellohi.mp3' },
  { title: 'C418 - Stal (Volume Beta)', url: '/Radio/23Stal.mp3' },
  { title: 'C418 - Strad (Volume Beta)', url: '/Radio/24Strad.mp3' },
  { title: 'C418 - Eleven (Volume Beta)', url: '/Radio/25Eleven.mp3' },
  { title: 'C418 - Ward (Volume Beta)', url: '/Radio/26Ward.mp3' },
  { title: 'C418 - Mall (Volume Beta)', url: '/Radio/27Mall.mp3' },
  { title: 'C418 - Blocks (Volume Beta)', url: '/Radio/28Blocks.mp3' },
  { title: 'C418 - Far (Volume Beta)', url: '/Radio/29Far.mp3' },
  { title: 'C418 - Intro (Volume Beta)', url: '/Radio/30Intro.mp3' }
]

const speakerPhrases = [
  { url: '/Radio/dictor/voice1.mp3' },
  { url: '/Radio/dictor/voice2.mp3' },
  { url: '/Radio/dictor/voice3.mp3' }
]

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = volume.value / 100
  }
  currentMusicIndex.value = Math.floor(Math.random() * musicTracks.length)
  prepareAudio(true)
})

function prepareAudio(isFirstStart = false) {
  if (musicTracks.length === 0) return

  isSpeakerPlaying.value = false
  const currentTrack = musicTracks[currentMusicIndex.value]
  
  // Оборачиваем путь в withBase(), чтобы динамически подставлялся префикс репозитория на GitHub Pages
  audioRef.value.src = withBase(currentTrack.url)
  currentTrackTitle.value = currentTrack.title

  audioRef.value.oncanplaythrough = () => {
    if (isFirstStart && audioRef.value.duration) {
      const randomTime = Math.random() * (audioRef.value.duration * 0.4) + (audioRef.value.duration * 0.1)
      audioRef.value.currentTime = randomTime
    }
    audioRef.value.oncanplaythrough = null
  }

  audioRef.value.onerror = () => {
    console.error("Ошибка загрузки файла:", audioRef.value.src)
    setTimeout(() => { nextTrack() }, 300)
  }
}

function nextTrack() {
  const originallyPlaying = isPlaying.value
  const rollDice = Math.random() < 0.25

  if (rollDice && !isSpeakerPlaying.value && speakerPhrases.length > 0) {
    isSpeakerPlaying.value = true
    const randomSpeaker = speakerPhrases[Math.floor(Math.random() * speakerPhrases.length)]
    audioRef.value.src = withBase(randomSpeaker.url)
  } else {
    currentMusicIndex.value = (currentMusicIndex.value + 1) % musicTracks.length
    prepareAudio(false)
  }

  if (originallyPlaying) {
    setTimeout(() => {
      audioRef.value.play().catch(() => { isPlaying.value = false })
    }, 100)
  }
}

function prevTrack() {
  const originallyPlaying = isPlaying.value
  currentMusicIndex.value = (currentMusicIndex.value - 1 + musicTracks.length) % musicTracks.length
  prepareAudio(false)

  if (originallyPlaying) {
    setTimeout(() => {
      audioRef.value.play().catch(() => { isPlaying.value = false })
    }, 100)
  }
}

function togglePlay() {
  if (!audioRef.value) return
  if (isPlaying.value) {
    audioRef.value.pause()
  } else {
    audioRef.value.play().catch((err) => {
      console.log("Требуется клик по интерфейсу для воспроизведения аудопотока:", err)
    })
  }
  isPlaying.value = !isPlaying.value
}

function handleTrackEnded() {
  if (isSpeakerPlaying.value) {
    currentMusicIndex.value = (currentMusicIndex.value + 1) % musicTracks.length
    prepareAudio(false)
  } else {
    nextTrack()
    return
  }

  if (isPlaying.value) {
    setTimeout(() => audioRef.value.play(), 100)
  }
}

function changeVolume() {
  if (audioRef.value) audioRef.value.volume = volume.value / 100
}

function muteToggle() {
  if (volume.value > 0) { savedVolume = volume.value; volume.value = 0 } 
  else { volume.value = savedVolume }
  changeVolume()
}

function updateProgress() {
  if (!audioRef.value || !audioRef.value.duration) return
  trackProgress.value = (audioRef.value.currentTime / audioRef.value.duration) * 100
}

// Перетаскивание плеера мышкой
const playerRef = ref(null)
const isDragging = ref(false)
const position = ref({ top: 120, left: window.innerWidth - 420 })
let startX = 0, startY = 0, initialTop = 0, initialLeft = 0

function startDrag(event) {
  if (event.target.closest('button') || event.target.closest('input')) return
  isDragging.value = true
  startX = event.clientX; startY = event.clientY
  initialTop = position.value.top; initialLeft = position.value.left
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
.music-player { position: fixed; z-index: 199; display: flex; flex-direction: column; align-items: flex-end; gap: 10px; font-family: var(--vp-font-family-base); user-select: none; }
.toggle-btn { background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); color: white; border: none; border-radius: 50%; width: 48px; height: 48px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); position: relative; }

.player-body { 
  width: 340px; 
  height: 360px; 
  background: rgba(30, 30, 34, 0.85); 
  backdrop-filter: blur(16px); 
  -webkit-backdrop-filter: blur(16px); 
  border: 1px solid rgba(255, 255, 255, 0.08); 
  border-radius: 24px; 
  overflow: hidden; 
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5); 
  display: flex; 
  flex-direction: column; 
}

.player-header { background: rgba(255, 255, 255, 0.03); padding: 12px; cursor: move; border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
.drag-handle-bar { display: flex; justify-content: space-between; align-items: center; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #a1a1aa; padding: 0 6px; }
.live-indicator { color: #71717a; transition: color 0.3s; }
.live-on { color: #ef4444; animation: blink 1.5s infinite; }

.controls-zone { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; text-align: center; gap: 14px; }
.radio-disk { width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle, #27272a 30%, #09090b 70%); border: 3px solid var(--vp-c-brand-1); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4); }
.disk-center { width: 20px; height: 20px; background: #1e1e22; border-radius: 50%; }
.spinning { animation: spin 4s linear infinite; }

.track-info { width: 100%; display: flex; flex-direction: column; align-items: center; overflow: hidden; }
.track-title-container { width: 85%; overflow: hidden; position: relative; white-space: nowrap; height: 22px; }
.track-title { font-size: 14px; font-weight: 700; color: #f4f4f5; display: inline-block; width: 100%; text-align: center; }

.track-title.marquee {
  display: inline-block;
  padding-left: 100%;
  width: auto;
  animation: marquee 10s linear infinite;
  text-align: left;
}

.track-author { font-size: 11px; color: #a1a1aa; margin-top: 4px; }

.progress-container { width: 80%; height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 2px; overflow: hidden; }
.progress-bar { height: 100%; background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); width: 0%; }

.buttons-row { display: flex; align-items: center; gap: 12px; width: 90%; justify-content: center; }
.ctrl-btn { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.08); padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: bold; cursor: pointer; color: #e4e4e7; transition: all 0.2s; white-space: nowrap; }
.text-btn:hover { background: var(--vp-c-brand-dim); color: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); }
.play-main { background: var(--vp-c-brand-1); color: white; border: none; font-size: 16px; width: 44px; height: 44px; border-radius: 50%; padding: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); }
.play-main:hover { background: var(--vp-c-brand-2); transform: scale(1.05); }
.ctrl-btn:active { transform: scale(0.95); }

.volume-control { display: flex; align-items: center; gap: 10px; padding: 12px 18px; font-size: 12px; color: #a1a1aa; border-top: 1px solid rgba(255, 255, 255, 0.06); background: rgba(0, 0, 0, 0.1); }
.slider-container { flex-grow: 1; position: relative; display: flex; align-items: center; }
.slider-container input[type="range"] { width: 100%; z-index: 2; margin: 0; height: 6px; opacity: 0; cursor: pointer; }
.slider-progress { position: absolute; left: 0; height: 4px; background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); border-radius: 3px; z-index: 1; pointer-events: none; }
.slider-container::before { content: ''; position: absolute; left: 0; width: 100%; height: 4px; background: rgba(255, 255, 255, 0.1); border-radius: 3px; }
.volume-num { font-size: 11px; font-weight: bold; min-width: 32px; text-align: right; color: #e4e4e7; }

@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

@keyframes marquee {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-100%, 0, 0); }
}
</style>