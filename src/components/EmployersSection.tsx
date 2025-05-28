import { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const employers = [
  { id: 1, name: "Human", logo: "https://images.pexels.com/photos/6476264/pexels-photo-6476264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2, name: "Lotus", logo: "https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, name: "Boardroom", logo: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, name: "Lifespace", logo: "https://images.pexels.com/photos/5632364/pexels-photo-5632364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 5, name: "TechFlow", logo: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 6, name: "AlphaTech", logo: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 7, name: "CreativeLabs", logo: "https://images.pexels.com/photos/5825367/pexels-photo-5825367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 8, name: "GreenTech", logo: "https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 9, name: "Ishha", logo: "https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 10, name: "Evolve", logo: "https://images.pexels.com/photos/5825347/pexels-photo-5825347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 11, name: "3Elixir", logo: "https://images.pexels.com/photos/5825574/pexels-photo-5825574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 12, name: "ProStartMe", logo: "https://images.pexels.com/photos/5825578/pexels-photo-5825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const EmployersSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };
  
  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      <motion.div style={{ y, opacity }}>
        {/* 3D decorative elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl"></div>
      </motion.div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            FEATURED <span className="text-secondary-500">EMPLOYERS</span>
          </h2>
          <p className="text-light-300 max-w-2xl mx-auto">
            Join industry leaders who trust our platform to find exceptional talent and build innovative teams.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {employers.map((employer) => (
            <motion.div 
              key={employer.id}
              variants={item}
              className="relative glass rounded-lg overflow-hidden group cursor-pointer h-32"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-dark-800/40 group-hover:bg-dark-800/20 transition-colors duration-300"></div>
              
              <div className="flex items-center justify-center h-full p-4 relative z-10">
                <img 
                  src={employer.logo} 
                  alt={employer.name} 
                  className="max-h-16 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
              
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-gradient-to-b from-dark-900/80 to-dark-900/95"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="text-white font-medium text-center">{employer.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EmployersSection;