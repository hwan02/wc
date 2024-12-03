import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById('hero-image');
      if (!gallerySection) {
        setIsVisible(true);
        return;
      }

      const galleryRect = gallerySection.getBoundingClientRect();
      setIsVisible(galleryRect.bottom <= 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 체크
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        w-full sticky top-0 left-0 right-0 z-[9999]
        transition-opacity duration-300
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <nav 
        className={`
          w-full h-16 bg-white/70 backdrop-blur-sm
          flex items-center justify-between px-4
          shadow-md
        `}
      >
        <button className="p-2">
          <RxHamburgerMenu size={24} />
        </button>
        
        <div className="flex items-center gap-2 text-xl font-semibold">
          승환 <FaHeart className="text-red-500" /> 예나
        </div>
        
        <div className="w-10" />
      </nav>
    </header>
  );
}
