"use client"
import { useEffect, useRef, useState } from 'react'
import { IconPlayerPlay, IconPlayerPause, IconPlayerSkipBack, IconPlayerSkipForward, IconVolume, IconVolumeOff } from '@tabler/icons-react'

interface AudioPlayerProps {
  src?: string
  title?: string
}

const formatTime = (secs: number) => {
  if (!Number.isFinite(secs)) return '00:00'
  const m = Math.floor(secs / 60)
  const s = Math.floor(secs % 60)
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

export default function AudioPlayer({ src, title = 'Meeting Audio' }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.9)

  // Attach media listeners once per source change
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => setCurrentTime(audio.currentTime || 0)
    const onLoaded = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    const onEnded = () => setIsPlaying(false)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('ended', onEnded)
    }
  }, [src])

  // Keep volume updates independent of listener lifecycle
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    // Pause when src changes
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }, [src])

  // Clamp current time if duration updates smaller than value
  useEffect(() => {
    if (!Number.isFinite(duration)) return
    if (currentTime > duration) setCurrentTime(duration || 0)
  }, [duration])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || !src) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }
  }

  const seekBy = (delta: number) => {
    const audio = audioRef.current
    if (!audio || !Number.isFinite(duration)) return
    const next = Math.min(Math.max((audio.currentTime || 0) + delta, 0), duration || 0)
    audio.currentTime = next
    setCurrentTime(next)
  }

  const onScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio || !Number.isFinite(duration)) return
    const value = Number(e.target.value)
    audio.currentTime = value
    setCurrentTime(value)
  }

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-[min(900px,95vw)]">
      <div className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur shadow-xl">
        <div className="px-4 py-3 flex items-center gap-4">
          <button aria-label="back 10s" onClick={() => seekBy(-10)} className="p-2 rounded hover:bg-gray-100 disabled:opacity-40" disabled={!src || !duration}>
            <IconPlayerSkipBack size={18} />
          </button>
          <button aria-label={isPlaying ? 'pause' : 'play'} onClick={togglePlay} className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40" disabled={!src}>
            {isPlaying ? <IconPlayerPause size={18} /> : <IconPlayerPlay size={18} />}
          </button>
          <button aria-label="forward 10s" onClick={() => seekBy(10)} className="p-2 rounded hover:bg-gray-100 disabled:opacity-40" disabled={!src || !duration}>
            <IconPlayerSkipForward size={18} />
          </button>

          <div className="flex-1 flex items-center gap-3">
            <div className="min-w-0 w-full">
              <input
                type="range"
                min={0}
                step={0.1}
                max={duration || 0}
                value={Number.isFinite(currentTime) ? Math.min(currentTime, duration || 0) : 0}
                onChange={onScrub}
                className="w-full accent-blue-600 disabled:opacity-50"
                disabled={!src || !duration}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span className="truncate max-w-[60%] text-center mx-auto">{src ? title : 'No audio available'}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-36">
            {volume === 0 ? (
              <IconVolumeOff size={16} className="text-gray-600" />
            ) : (
              <IconVolume size={16} className="text-gray-600" />
            )}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => {
                const v = Number(e.target.value)
                const clamped = Math.min(Math.max(v, 0), 1)
                setVolume(clamped)
                if (audioRef.current) audioRef.current.volume = clamped
              }}
              className="w-full accent-blue-600"
            />
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  )
}


