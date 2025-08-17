import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import logoFinal from '@/assets/logoFinal.png';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Set initial state
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Test if scroll events are working at all
    const testScroll = () => {
      console.log('Testing scroll detection...');
      handleScroll();
    };

    // Multiple approaches to catch scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also try with throttling
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Call once to set initial state
    testScroll();
    
    // Test scroll detection every 2 seconds
    const interval = setInterval(testScroll, 2000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', throttledScroll);
      clearInterval(interval);
    };
  }, []);



  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 w-full border-b z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white shadow-xl border-gray-300 backdrop-blur-md" 
          : "bg-transparent border-transparent"
      )}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50,
        backgroundColor: isScrolled ? 'hsl(29, 83.10%, 88.40%)' : 'rgb(250, 250, 250)'
      }}
    > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              <img src={logoFinal} alt="Logo" className={cn("w-8 h-8 object-contain", isScrolled ? "w-6 h-6" : "w-8 h-8")} />
              <span className="whitespace-nowrap">ISRI Shuangdi </span>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className={`${isDesktop ? 'flex' : 'hidden'} items-center space-x-4`}>
            <nav className="flex space-x-2">
              {/* Home */}
              <Link
                to="/"
                className="navbar-btn px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.home')}
              </Link>

              {/* About */}
              <Link
                to="/about"
                className="navbar-btn px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.about')}
              </Link>

              {/* Products */}
              <Link
                to="/products"
                className="navbar-btn px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.products')}
              </Link>

              {/* News */}
              <Link
                to="/news"
                className="navbar-btn px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.news')}
              </Link>

              {/* Solutions */}
              <Link
                to="/solutions"
                className="navbar-btn px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.solutions')}
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className="navbar-btn px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.contact')}
              </Link>
            </nav>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger button and language switcher */}
          <div className={`${!isDesktop ? 'flex' : 'hidden'} items-center space-x-2`}>
            <LanguageSwitcher />
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`${!isDesktop ? 'block' : 'hidden'} bg-white border-t`}
          >
            <div className="w-full">
              <div className="flex flex-col space-y-1 p-4">
                <Link
                  to="/"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-menu-link block w-full px-3 py-2 text-base font-medium rounded-md transition-colors"
                >
                  {t('navbar.home')}
                </Link>

                <Link
                  to="/about"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-menu-link block w-full px-3 py-2 text-base font-medium rounded-md transition-colors"
                >
                  {t('navbar.about')}
                </Link>

                <Link
                  to="/products"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-menu-link block w-full px-3 py-2 text-base font-medium rounded-md transition-colors"
                >
                  {t('navbar.products')}
                </Link>

                <Link
                  to="/news"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-menu-link block w-full px-3 py-2 text-base font-medium rounded-md transition-colors"
                >
                  {t('navbar.news')}
                </Link>

                <Link
                  to="/solutions"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-menu-link block w-full px-3 py-2 text-base font-medium rounded-md transition-colors"
                >
                  {t('navbar.solutions')}
                </Link>

                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-menu-link block w-full px-3 py-2 text-base font-medium rounded-md transition-colors"
                >
                  {t('navbar.contact')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
