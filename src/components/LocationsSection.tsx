import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Globe, ChevronRight } from 'lucide-react';

interface LocationItem {
  id: number;
  name: string;
  isInternational: boolean;
}

const locations: LocationItem[] = [
  { id: 1, name: "Mumbai", isInternational: false },
  { id: 2, name: "Delhi", isInternational: false },
  { id: 3, name: "Ajmer", isInternational: false },
  { id: 4, name: "Pune", isInternational: false },
  { id: 5, name: "Hyderabad", isInternational: false },
  { id: 6, name: "Agra", isInternational: false },
  { id: 7, name: "Chennai", isInternational: false },
  { id: 8, name: "Kolkata", isInternational: false },
  { id: 9, name: "Indore", isInternational: false },
  { id: 10, name: "Gurugram", isInternational: false },
  { id: 11, name: "Jaipur", isInternational: false },
  { id: 12, name: "Ahmedabad", isInternational: false },
  { id: 13, name: "Africa", isInternational: true },
  { id: 14, name: "USA", isInternational: true },
  { id: 15, name: "UK", isInternational: true },
  { id: 16, name: "Australia", isInternational: true },
  { id: 17, name: "Canada", isInternational: true },
  { id: 18, name: "Singapore", isInternational: true },
  { id: 19, name: "Dubai", isInternational: true },
  { id: 20, name: "Saudi Arabia", isInternational: true },
  { id: 21, name: "New Zealand", isInternational: true },
];

const LocationsSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const indiaLocations = locations.filter(loc => !loc.isInternational);
  const internationalLocations = locations.filter(loc => loc.isInternational);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-dark-900">
      {/* Background map pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* India Locations */}
          <div>
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <MapPin className="text-primary-500 mr-3 w-6 h-6" />
              <h2 className="text-2xl font-display font-bold">JOBS IN INDIA</h2>
            </motion.div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {indiaLocations.map((location) => (
                <motion.a
                  key={location.id}
                  href="#"
                  variants={item}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="group relative flex items-center px-3 py-1.5 rounded-full glass hover:bg-primary-500/20 transition-all duration-300"
                >
                  <span className="text-light-200 group-hover:text-white transition-colors">#{location.name}</span>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ 
                      opacity: hoveredLocation === location.id ? 1 : 0,
                      x: hoveredLocation === location.id ? 0 : -5
                    }}
                    transition={{ duration: 0.2 }}
                    className="ml-1"
                  >
                    <ChevronRight className="w-3 h-3 text-primary-400" />
                  </motion.div>
                  
                  {hoveredLocation === location.id && (
                    <motion.div
                      layoutId="locationHighlight"
                      className="absolute inset-0 -z-10 rounded-full bg-primary-500/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          {/* International Locations */}
          <div>
            <motion.div 
              className="flex items-center mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Globe className="text-secondary-500 mr-3 w-6 h-6" />
              <h2 className="text-2xl font-display font-bold">INTERNATIONAL JOBS</h2>
            </motion.div>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-3"
            >
              {internationalLocations.map((location) => (
                <motion.a
                  key={location.id}
                  href="#"
                  variants={item}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="group relative flex items-center px-3 py-1.5 rounded-full glass hover:bg-secondary-500/20 transition-all duration-300"
                >
                  <span className="text-light-200 group-hover:text-white transition-colors">#{location.name}</span>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ 
                      opacity: hoveredLocation === location.id ? 1 : 0,
                      x: hoveredLocation === location.id ? 0 : -5
                    }}
                    transition={{ duration: 0.2 }}
                    className="ml-1"
                  >
                    <ChevronRight className="w-3 h-3 text-secondary-400" />
                  </motion.div>
                  
                  {hoveredLocation === location.id && (
                    <motion.div
                      layoutId="locationHighlight"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary-500/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;