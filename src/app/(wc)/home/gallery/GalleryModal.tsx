'use client'
import { useEffect, useCallback, useState } from 'react'
import Image from 'next/image'

interface ImageType {
  src: string;
  alt?: string;
}

interface GalleryModalProps {
  images: ImageType[];
  onClose: () => void;
  initialIndex?: number;
}

export default function GalleryModal({ 
  images, 
  onClose,
  initialIndex = 0
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
          onClick={handlePrevious}
          className="absolute left-6 text-white text-6xl z-10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 bg-black/30"
          aria-label="Previous image"
        >
          ←
        </button>

        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt || `Gallery Image ${currentIndex + 1}`}
          className="w-[90%] h-[90%] object-contain"
          width={1920}
          height={1080}
        />

        <button
          onClick={handleNext}
          className="absolute right-6 text-white text-6xl z-10 hover:bg-white/20 p-4 rounded-full transition-all duration-200 bg-black/30"
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
        <span className="text-white text-lg font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
