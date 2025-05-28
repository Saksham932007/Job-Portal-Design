import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, User, Menu, X } from 'lucide-react';
import { Link } from './ui/Link';
import { Button } from './ui/Button';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#" className="text-light-100 hover:text-primary-400 transition-colors">My Dashboard</Link>
            <Link href="#" className="text-light-100 hover:text-primary-400 transition-colors">Jobs</Link>
            <Link href="#" className="text-light-100 hover:text-primary-400 transition-colors">Jobseeker Services</Link>
            <Link href="#" className="text-light-100 hover:text-primary-400 transition-colors">Subscriptions</Link>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full text-light-100 hover:bg-dark-700 transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-accent-500 rounded-full"></span>
            </motion.button>
            
            <Button 
              variant="primary"
              size="md"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Get Started
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden text-light-100 p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden glass border-t border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-light-100 py-2 hover:text-primary-400 transition-colors">My Dashboard</Link>
              <Link href="#" className="text-light-100 py-2 hover:text-primary-400 transition-colors">Jobs</Link>
              <Link href="#" className="text-light-100 py-2 hover:text-primary-400 transition-colors">Jobseeker Services</Link>
              <Link href="#" className="text-light-100 py-2 hover:text-primary-400 transition-colors">Subscriptions</Link>
              
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Button 
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  <User className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;