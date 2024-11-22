'use client'
import { useEffect, useCallback } from 'react'

interface GalleryModalProps {
  imageSrc: string;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryModal({ 
  imageSrc, 
  onClose, 
  currentIndex, 
  totalImages,
  onPrevious,
  onNext 
}: GalleryModalProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl z-10"
      >
        ✕
      </button>
      
      <div className="relative w-screen h-screen flex items-center justify-center">
        <button
          onClick={onPrevious}
          className="absolute left-4 text-white text-4xl z-10 hover:bg-white/10 p-2 rounded-full"
        >
          ‹
        </button>

        <img
          src={imageSrc}
          alt="Gallery Image"
          className="max-w-[95vw] max-h-[90vh] object-contain"
        />

        <button
          onClick={onNext}
          className="absolute right-4 text-white text-4xl z-10 hover:bg-white/10 p-2 rounded-full"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-4 text-white">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  )
}
