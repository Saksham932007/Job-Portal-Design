import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Clock, Building, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from './ui/Button';

// Sample job data
const jobsData = [
  {
    id: 1,
    title: "RELATIONSHIP MANAGER",
    company: "OrbiTouch-HR",
    location: "Indore | Jaipur | Lucknow | Mumbai | India",
    type: "Full Time - Permanent",
    experience: "3 - 5 Years",
    featured: true,
    badge: "In Office Job"
  },
  {
    id: 2,
    title: "Process Audit - Manager",
    company: "The Premier Consultants",
    location: "Mumbai | India",
    type: "Full Time - Permanent",
    experience: "2 - 5 Years",
    featured: true,
    badge: "In Office Job"
  },
  {
    id: 3,
    title: "Financial Analyst (Deal Underwriting)",
    company: "MResult",
    location: "Bengaluru | Bangalore | India",
    type: "Full Time - Permanent",
    experience: "2 - 4 Years",
    featured: true,
    badge: "In Office Job"
  },
  {
    id: 4,
    title: "Process Auditor – Healthcare",
    company: "Supertails",
    location: "Bengaluru | Bangalore | India",
    type: "Full Time - Permanent",
    experience: "1 - 4 Years",
    featured: true,
    badge: "In Office Job"
  },
  {
    id: 5,
    title: "Assistant Lead",
    company: "VisionSpring",
    location: "Nigeria",
    type: "Full Time - On Contract",
    experience: "3 - 5 Years",
    featured: true,
    badge: "In Office Job"
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "TechAI Systems",
    location: "Remote",
    type: "Full Time - Permanent",
    experience: "3 - 7 Years",
    featured: true,
    badge: "Remote"
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "London | UK",
    type: "Full Time - Permanent",
    experience: "2 - 5 Years",
    featured: true,
    badge: "Hybrid"
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataInsights",
    location: "Berlin | Germany",
    type: "Full Time - Permanent",
    experience: "3 - 6 Years",
    featured: true,
    badge: "In Office Job"
  }
];

const FeaturedJobs = () => {
  const [activeJobIndex, setActiveJobIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 4;
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : Math.ceil(jobsData.length / jobsPerPage) - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < Math.ceil(jobsData.length / jobsPerPage) - 1 ? prev + 1 : 0));
  };

  const currentJobs = jobsData.slice(
    currentPage * jobsPerPage,
    (currentPage + 1) * jobsPerPage
  );

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 relative" id="featured-jobs">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold text-glow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-primary-500">Jobs</span>
          </motion.h2>
          
          <div className="flex space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handlePrevPage}
              className="group"
              icon={<ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />}
            >
              <span className="sr-only">Previous</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleNextPage}
              className="group"
              icon={<ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            >
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentJobs.map((job, index) => (
            <motion.div 
              key={job.id}
              variants={item}
              className={`job-card glass p-6 rounded-xl cursor-pointer transition-all duration-500 h-full ${
                activeJobIndex === index ? 'scale-105 shadow-neon z-10' : ''
              }`}
              onMouseEnter={() => setActiveJobIndex(index)}
              onMouseLeave={() => setActiveJobIndex(null)}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {job.badge && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-500/20 text-primary-300">
                    {job.badge}
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3 text-white">{job.title}</h3>
              
              <div className="flex items-center mb-3 text-gray-400">
                <Building className="w-4 h-4 mr-2 text-secondary-500" />
                <span className="text-sm">{job.company}</span>
              </div>
              
              <div className="flex items-center mb-3 text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-secondary-500 flex-shrink-0" />
                <span className="text-sm truncate">{job.location}</span>
              </div>
              
              <div className="flex items-center mb-3 text-gray-400">
                <Briefcase className="w-4 h-4 mr-2 text-secondary-500" />
                <span className="text-sm">{job.type}</span>
              </div>
              
              <div className="flex items-center mb-5 text-gray-400">
                <Clock className="w-4 h-4 mr-2 text-secondary-500" />
                <span className="text-sm">{job.experience}</span>
              </div>
              
              <div className="mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  fullWidth 
                  className="group"
                >
                  Apply
                  <motion.span
                    initial={{ x: 0, opacity: 0.5 }}
                    animate={activeJobIndex === index ? { x: 4, opacity: 1 } : { x: 0, opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.span>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="ghost"
            size="md"
            className="border border-primary-500/30 hover:border-primary-500"
          >
            View All Jobs
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;