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
          <div class="track-title">{{ isSpeakerPlaying ? '🎤 Ведущий в эфире' : currentTrackTitle }}</div>
          <div class="track-author">{{ isSpeakerPlaying ? 'Голосовое уведомление' : 'Музыкальный эфир (FLAC)' }}</div>
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
import { ref, onMounted } from 'vue'

const collapsed = ref(false)
const isPlaying = ref(false)
const volume = ref(70) 
const trackProgress = ref(0)
const currentTrackTitle = ref('Подключение к волне...')
const isSpeakerPlaying = ref(false)
const currentMusicIndex = ref(0)

const audioRef = ref(null)
let savedVolume = 70

const musicTracks = [
  // ==========================================
  // 🟢 MINECRAFT - VOLUME ALPHA
  // ==========================================
  { title: 'C418 - Key (Volume Alpha)', url: './public/Radio/01Key.mp3' },
  { title: 'C418 - Door (Volume Alpha)', url: './public/Radio/02Door.mp3' },
  { title: 'C418 - Subwoofer Lullaby (Volume Alpha)', url: './public/Radio/03SubwooferLullaby.mp3' },
  { title: 'C418 - Death (Volume Alpha)', url: './public/Radio/04Death.mp3' },
  { title: 'C418 - Living Mice (Volume Alpha)', url: './public/Radio/05LivingMice.mp3' },
  { title: 'C418 - Moog City (Volume Alpha)', url: './public/Radio/06MoogCity.mp3' },
  { title: 'C418 - Haggstrom (Volume Alpha)', url: './public/Radio/07Haggstrom.mp3' },
  { title: 'C418 - Minecraft (Volume Alpha)', url: './public/Radio/08Minecraft.mp3' },
  { title: 'C418 - Oxygene (Volume Alpha)', url: './public/Radio/09Oxygene.mp3' },
  { title: 'C418 - Equinoxe (Volume Alpha)', url: './public/Radio/10Equinoxe.mp3' },
  { title: 'C418 - Mice on Venus (Volume Alpha)', url: './public/Radio/11MiceonVenus.mp3' },
  { title: 'C418 - Dry Hands (Volume Alpha)', url: './public/Radio/12DryHands.mp3' },
  { title: 'C418 - Wet Hands (Volume Alpha)', url: './public/Radio/13WetHands.mp3' },
  { title: 'C418 - Clark (Volume Alpha)', url: './public/Radio/14Clark.mp3' },
  { title: 'C418 - Chris (Volume Alpha)', url: './public/Radio/15Chris.mp3' },
  { title: 'C418 - Thirteen (Volume Alpha)', url: './public/Radio/16Thirteen.mp3' },
  { title: 'C418 - Excuse (Volume Alpha)', url: './public/Radio/17Excuse.mp3' },
  { title: 'C418 - Sweden (Volume Alpha)', url: './public/Radio/18Sweden.mp3' },
  { title: 'C418 - Cat (Volume Alpha)', url: './public/Radio/19Cat.mp3' },
  { title: 'C418 - Dog (Volume Alpha)', url: './public/Radio/20Dog.mp3' },
  { title: 'C418 - Danny (Volume Alpha)', url: './public/Radio/21Danny.mp3' },
  { title: 'C418 - Beginning (Volume Alpha)', url: './public/Radio/22Beginning.mp3' },
  { title: 'C418 - Droopy Likes Ricochet (Volume Alpha)', url: './public/Radio/23DroopyLikesRicochet.mp3' },
  { title: 'C418 - Droopy Likes Your Face (Volume Alpha)', url: './public/Radio/24DroopyLikesYourFace.mp3' },

  // ==========================================
  // 🔥 MINECRAFT - VOLUME BETA
  // ==========================================
  { title: 'C418 - Ki (Volume Beta)', url: './public/Radio/01Ki.mp3' },
  { title: 'C418 - Alpha (Volume Beta)', url: './public/Radio/02Alpha.mp3' },
  { title: 'C418 - Dead Voxel (Volume Beta)', url: './public/Radio/03DeadVoxel.mp3' },
  { title: 'C418 - Blind Spots (Volume Beta)', url: './public/Radio/04BlindSpots.mp3' },
  { title: 'C418 - Flake (Volume Beta)', url: './public/Radio/05Flake.mp3' },
  { title: 'C418 - Moog City 2 (Volume Beta)', url: './public/Radio/06MoogCity2.mp3' },
  { title: 'C418 - Concrete Halls (Volume Beta)', url: './public/Radio/07ConcreteHalls.mp3' },
  { title: 'C418 - Biome Fest (Volume Beta)', url: './public/Radio/08BiomeFest.mp3' },
  { title: 'C418 - Mutation (Volume Beta)', url: './public/Radio/09Mutation.mp3' },
  { title: 'C418 - Haunt Muskie (Volume Beta)', url: './public/Radio/10HauntMuskie.mp3' },
  { title: 'C418 - Warmth (Volume Beta)', url: './public/Radio/11Warmth.mp3' },
  { title: 'C418 - Floating Trees (Volume Beta)', url: './public/Radio/12FloatingTrees.mp3' },
  { title: 'C418 - Aria Math (Volume Beta)', url: './public/Radio/13AriaMath.mp3' },
  { title: 'C418 - Kyoto (Volume Beta)', url: './public/Radio/14Kyoto.mp3' },
  { title: 'C418 - Ballad of the Cats (Volume Beta)', url: './public/Radio/15BalladoftheCats.mp3' },
  { title: 'C418 - Taswell (Volume Beta)', url: './public/Radio/16Taswell.mp3' },
  { title: 'C418 - Beginning 2 (Volume Beta)', url: './public/Radio/17Beginning2.mp3' },
  { title: 'C418 - Dreiton (Volume Beta)', url: './public/Radio/18Dreiton.mp3' },
  { title: 'C418 - The End (Volume Beta)', url: './public/Radio/19TheEnd.mp3' },
  { title: 'C418 - Chirp (Volume Beta)', url: './public/Radio/20Chirp.mp3' },
  { title: 'C418 - Wait (Volume Beta)', url: './public/Radio/21Wait.mp3' },
  { title: 'C418 - Mellohi (Volume Beta)', url: './public/Radio/22Mellohi.mp3' },
  { title: 'C418 - Stal (Volume Beta)', url: './public/Radio/23Stal.mp3' },
  { title: 'C418 - Strad (Volume Beta)', url: './public/Radio/24Strad.mp3' },
  { title: 'C418 - Eleven (Volume Beta)', url: './public/Radio/25Eleven.mp3' },
  { title: 'C418 - Ward (Volume Beta)', url: './public/Radio/26Ward.mp3' },
  { title: 'C418 - Mall (Volume Beta)', url: './public/Radio/27Mall.mp3' },
  { title: 'C418 - Blocks (Volume Beta)', url: './public/Radio/28Blocks.mp3' },
  { title: 'C418 - Far (Volume Beta)', url: './public/Radio/29Far.mp3' },
  { title: 'C418 - Intro (Volume Beta)', url: './public/Radio/30Intro.mp3' }
]

const speakerPhrases = [
  { url: './public/Radio/dictor/voice1.mp3' },
  { url: './public/Radio/dictor/voice2.mp3' },
  { url: './public/Radio/dictor/voice3.mp3' }
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
  audioRef.value.src = currentTrack.url
  currentTrackTitle.value = currentTrack.title

  // ПОДСТРАХОВКА: Ждем, пока FLAC подгрузится, чтобы избежать зависания при прыжке на случайное время
  audioRef.value.oncanplaythrough = () => {
    if (isFirstStart) {
      // Прыгаем в случайное место (от 10% до 60% длины трека)
      const randomTime = Math.random() * (audioRef.value.duration * 0.5) + (audioRef.value.duration * 0.1)
      audioRef.value.currentTime = randomTime
    }
    // Очищаем событие, чтобы оно не срабатывало повторно во время проигрывания
    audioRef.value.oncanplaythrough = null
  }
}

function nextTrack() {
  const originallyPlaying = isPlaying.value
  const rollDice = Math.random() < 0.30

  if (rollDice && !isSpeakerPlaying.value && speakerPhrases.length > 0) {
    isSpeakerPlaying.value = true
    const randomSpeaker = speakerPhrases[Math.floor(Math.random() * speakerPhrases.length)]
    audioRef.value.src = randomSpeaker.url
  } else {
    currentMusicIndex.value = (currentMusicIndex.value + 1) % musicTracks.length
    prepareAudio(false)
  }

  if (originallyPlaying) {
    // Небольшая задержка, чтобы тяжелый файл успел инициализироваться в браузере
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
    audioRef.value.play().catch(() => {
      console.log("Кликните по сайту, чтобы браузер разрешил воспроизведение.")
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

// Перетаскивание (Drag & Drop)
const playerRef = ref(null)
const isDragging = ref(false)
const position = ref({ top: 90, left: window.innerWidth - 440 })
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
.toggle-btn { background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); color: white; border: none; border-radius: 50%; width: 48px; height: 48px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); position: relative; }
.player-body { width: 360px; min-width: 280px; max-width: 450px; height: 360px; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 20px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.25); display: flex; flex-direction: column; resize: both; }
:deep(.dark) .player-body { background: rgba(24, 24, 28, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); }
.player-header { background: rgba(0, 0, 0, 0.05); padding: 10px; cursor: move; border-bottom: 1px solid var(--vp-c-divider); }
:deep(.dark) .player-header { background: rgba(255, 255, 255, 0.03); }
.drag-handle-bar { display: flex; justify-content: space-between; align-items: center; font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: var(--vp-c-text-1); padding: 0 6px; }
.live-indicator { color: #888; transition: color 0.3s; }
.live-on { color: #ff3333; animation: blink 1.5s infinite; }
.controls-zone { flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 15px; text-align: center; gap: 12px; }
.radio-disk { width: 85px; height: 85px; border-radius: 50%; background: radial-gradient(circle, #333 30%, #111 70%); border: 4px solid var(--vp-c-brand-1); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
.disk-center { width: 22px; height: 22px; background: var(--vp-c-bg-soft); border-radius: 50%; }
.spinning { animation: spin 4s linear infinite; }
.track-title { font-size: 15px; font-weight: 700; color: var(--vp-c-text-1); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width: 90%; }
.track-author { font-size: 11px; color: var(--vp-c-text-2); margin-top: 2px; }
.progress-container { width: 80%; height: 4px; background: var(--vp-c-divider); border-radius: 2px; overflow: hidden; }
.progress-bar { height: 100%; background: var(--vp-c-brand-1); width: 0%; }
.buttons-row { display: flex; align-items: center; gap: 10px; width: 90%; justify-content: center; }
.ctrl-btn { background: var(--vp-c-bg-alt); border: 1px solid var(--vp-c-divider); padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: bold; cursor: pointer; color: var(--vp-c-text-1); transition: all 0.2s; white-space: nowrap; }
.text-btn:hover { background: var(--vp-c-brand-dim); color: var(--vp-c-brand-1); }
.play-main { background: var(--vp-c-brand-1); color: white; border: none; font-size: 16px; width: 45px; height: 45px; border-radius: 50%; padding: 0; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
.ctrl-btn:active { transform: scale(0.95); }
.volume-control { display: flex; align-items: center; gap: 10px; padding: 12px 16px; font-size: 12px; color: var(--vp-c-text-2); border-top: 1px solid var(--vp-c-divider); }
.slider-container { flex-grow: 1; position: relative; display: flex; align-items: center; }
.slider-container input[type="range"] { width: 100%; z-index: 2; margin: 0; height: 6px; opacity: 0; cursor: pointer; }
.slider-progress { position: absolute; left: 0; height: 5px; background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2)); border-radius: 3px; z-index: 1; pointer-events: none; }
.slider-container::before { content: ''; position: absolute; left: 0; width: 100%; height: 5px; background: var(--vp-c-divider); border-radius: 3px; }
.volume-num { font-size: 11px; font-weight: bold; min-width: 32px; text-align: right; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
</style>