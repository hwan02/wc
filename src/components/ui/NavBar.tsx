import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.getElementById('hero-image');
      if (!heroImage) return;

      const heroRect = heroImage.getBoundingClientRect();
      setIsVisible(heroRect.top < -heroRect.height);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 
        h-16 bg-white/80 backdrop-blur-sm z-40 
        flex items-center justify-between px-4
        transition-all duration-500 ease-in-out
        ${isVisible 
          ? 'translate-y-0 opacity-100 shadow-md' 
          : '-translate-y-full opacity-0'
        }
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
  );
}
