import Image from 'next/image';
import data from '@/data.json';

const Gallery = () => {
  const { images } = data.gallery;

  return (
    <div className="py-12 space-y-6">
      <h2 className="text-2xl font-serif text-center text-rose-800">Our Moments</h2>
      <div className="grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative aspect-square group overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={image.url}
              alt={image.description || '웨딩 사진'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery; 