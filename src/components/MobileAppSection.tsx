import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/Button';
import { ArrowRight, Download, Star } from 'lucide-react';

const MobileAppSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const phoneY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  
  return (
    <motion.section 
      ref={containerRef} 
      className="py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900 -z-10"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <svg className="absolute top-0 right-0 h-full w-1/3 text-primary-500/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M100 0 L100 100 L0 100 Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
        
        <svg className="absolute bottom-0 left-0 h-full w-1/3 text-secondary-500/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0 100 L100 100 L0 0 Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            ref={ref}
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              APPLY TO JOBS <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">ON-THE-GO</span>
            </h2>
            
            <p className="text-xl text-light-300 mb-8 max-w-lg">
              Never miss an opportunity with the Jobringer Mobile App. Apply to jobs, track applications, and receive notifications all from your smartphone.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <a href="#" className="block">
                  <img 
                    src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <a href="#" className="block">
                  <img 
                    src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Download on the App Store" 
                    className="h-12"
                  />
                </a>
              </motion.div>
            </div>
            
            <div className="mt-6">
              <Button 
                variant="accent"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Download Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              
              <div className="mt-4 flex items-center space-x-1">
                <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                <Star className="w-4 h-4 fill-accent-500/50 text-accent-500/50" />
                <span className="text-light-300 ml-2 text-sm">4.8 • 10k+ Reviews</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center relative"
            style={{
              y: phoneY,
              rotate: phoneRotate
            }}
          >
            <div className="relative w-72 h-auto lg:w-80 perspective-800">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src="https://images.pexels.com/photos/6162923/pexels-photo-6162923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Jobringer Mobile App"
                className="rounded-3xl shadow-2xl relative z-10 animated-gradient-border"
              />
              
              {/* Phone reflection/glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 blur-xl -z-10 transform scale-90 translate-y-4"></div>
            </div>
            
            {/* Feature bubbles */}
            <div className="absolute -left-16 top-1/4">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="glass rounded-full p-3 shadow-neon animate-float"
              >
                <span className="text-white text-xs">Smart Alerts</span>
              </motion.div>
            </div>
            
            <div className="absolute -right-12 top-1/3">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="glass rounded-full p-3 shadow-neon-secondary animate-float"
              >
                <span className="text-white text-xs">Quick Apply</span>
              </motion.div>
            </div>
            
            <div className="absolute left-1/4 -bottom-8">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="glass rounded-full p-3 shadow-neon-accent animate-float"
              >
                <span className="text-white text-xs">Profile Builder</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MobileAppSection;