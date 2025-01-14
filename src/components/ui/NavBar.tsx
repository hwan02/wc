import { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroImage = document.getElementById('hero-image');
      const gallerySection = document.getElementById('gallery-section');
      const targetElement = heroImage || gallerySection;

      if (!targetElement) {
        setIsVisible(true);
        return;
      }

      const rect = targetElement.getBoundingClientRect();
      const isFullyScrolledPast = rect.bottom <= 0;
      setIsVisible(isFullyScrolledPast);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'account', label: 'Account' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'guestbook', label: 'Guestbook' },
    { id: 'guide', label: 'Guide' },
    { id: 'invitation', label: 'Invitation' },
    { id: 'location', label: 'Location' },
    { id: 'share', label: 'Share' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      {/* NavBar */}
      {isVisible && (
        <header className={`
          sticky top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
          }
        `}>
          <nav className="w-full mx-auto h-16 bg-white/70 backdrop-blur-sm flex items-center justify-between px-4 shadow-md">
            <button 
              className="p-2"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu size={24} />
            </button>
            
            <div className="flex items-center gap-2 text-xl font-semibold">
              승환 <FaHeart className="text-red-500" /> 예나
            </div>
            
            <div className="w-10" />
          </nav>
        </header>
      )}

      {/* Full Screen Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col" style={{ top: 0, height: '100vh', overflow: 'hidden' }}>
          {/* Modal Header */}
          <div className="w-4/5 mx-auto h-16 flex items-center justify-between px-4 shadow-sm bg-white">
            <button 
              className="p-2"
              onClick={toggleMenu}
            >
              <RxCross1 size={24} />
            </button>
            
            <div className="flex items-center gap-2 text-xl font-semibold">
              승환 <FaHeart className="text-red-500" /> 예나
            </div>
            
            <div className="w-10" />
          </div>

          {/* Modal Content */}
          <div className="w-4/5 mx-auto flex-1 flex flex-col justify-center items-center" style={{ overflow: 'hidden' }}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-3xl py-4 px-8 hover:text-gray-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
