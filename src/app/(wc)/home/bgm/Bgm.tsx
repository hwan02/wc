'use client'

import { useEffect, useRef, useState } from 'react'

export default function BGMPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4">
      <audio ref={audioRef} src="/path-to-your-bgm.mp3" loop />
      <button
        onClick={togglePlay}
        className="bg-white rounded-full p-2 shadow-lg"
      >
        {isPlaying ? '음악 끄기' : '음악 켜기'}
      </button>
    </div>
  )
}