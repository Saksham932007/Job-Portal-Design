import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SearchBar } from './ui/SearchBar';
import ParticlesBackground from './ParticlesBackground';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const counterRefs = {
    jobs: useRef<HTMLSpanElement>(null),
    filled: useRef<HTMLSpanElement>(null),
    employers: useRef<HTMLSpanElement>(null),
    users: useRef<HTMLSpanElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            gsap.to(counterRefs.jobs.current, {
              innerHTML: 40808,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 }
            });
            gsap.to(counterRefs.filled.current, {
              innerHTML: 15153,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 }
            });
            gsap.to(counterRefs.employers.current, {
              innerHTML: 25776,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 }
            });
            gsap.to(counterRefs.users.current, {
              innerHTML: 1554182,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-16 md:mt-24">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            REDEFINE YOUR CAREER JOURNEY
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-light-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Discover <span className="text-primary-500 font-semibold">11,000+</span> opportunities using our AI-powered job matching engine.
          </motion.p>
          
          <SearchBar className="w-full max-w-3xl" />
          
          <motion.div
            className="mt-8 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p className="text-light-300 mb-3">Explore opportunities</p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-6 h-6 text-accent-500" />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="stats-section mt-20 md:mt-32">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 glass rounded-xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="text-center p-4">
              <h3 className="text-accent-500 text-sm uppercase font-medium tracking-wider">Jobs Posted</h3>
              <p className="text-3xl md:text-4xl font-display font-bold mt-2 text-glow">
                <span ref={counterRefs.jobs}>0</span>
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-primary-500 text-sm uppercase font-medium tracking-wider">Jobs Filled</h3>
              <p className="text-3xl md:text-4xl font-display font-bold mt-2 text-glow">
                <span ref={counterRefs.filled}>0</span>
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-secondary-500 text-sm uppercase font-medium tracking-wider">Employers</h3>
              <p className="text-3xl md:text-4xl font-display font-bold mt-2 secondary-text-glow">
                <span ref={counterRefs.employers}>0</span>
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-accent-500 text-sm uppercase font-medium tracking-wider">Active Users</h3>
              <p className="text-3xl md:text-4xl font-display font-bold mt-2 accent-text-glow">
                <span ref={counterRefs.users}>0</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* 3D Floating elements */}
      <div className="hidden md:block absolute top-1/3 left-10 w-24 h-24 pointer-events-none">
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-r from-primary-500/30 to-primary-700/30 backdrop-blur-sm"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="hidden md:block absolute top-1/4 right-16 w-16 h-16 pointer-events-none">
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-r from-secondary-500/20 to-secondary-700/20 backdrop-blur-sm"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      <div className="hidden md:block absolute bottom-1/3 right-24 w-32 h-32 pointer-events-none">
        <motion.div 
          className="w-full h-full rounded-full bg-gradient-to-r from-accent-500/20 to-accent-700/20 backdrop-blur-sm"
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;