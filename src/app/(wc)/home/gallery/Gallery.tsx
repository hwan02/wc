'use client'
import { useEffect, useState } from 'react'
import GalleryModal from '@/app/(wc)/home/gallery/GalleryModal'


export default function Gallery() {
  const [images, setImages] = useState<string[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    // 1부터 시작하는 연속된 숫자의 이미지들을 배열로 생성
    const generateImagePaths = () => {
      const imageCount = 12 // 실제 이미지 개수에 맞게 조정하세요
      return Array.from({ length: imageCount }, (_, i) => `/images/gallery/${i + 1}.jpg`)
    }

    setImages(generateImagePaths())
  }, [])

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc)
    setIsModalOpen(true)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif-kr text-center mb-8">갤러리</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((imageSrc, index) => (
        <div 
          key={index}
          className="cursor-pointer"
          onClick={() => handleImageClick(imageSrc)}
        >
          <img
            src={imageSrc}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {isModalOpen && selectedImage && (
        <GalleryModal
          imageSrc={images[currentImageIndex]}
          onClose={() => setIsModalOpen(false)}
          currentIndex={currentImageIndex}
          totalImages={images.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
        </div>
      </div>
    </section>
  )
} 