import { CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2"
    >
      <motion.div
        initial={{ rotate: -30, scale: 0.8 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="text-primary-500"
      >
        <CircuitBoard className="w-8 h-8" />
      </motion.div>
      <div className="flex items-baseline">
        <h1 className="text-xl font-display font-bold text-white">
          <span className="text-primary-500">job</span>
          <span className="text-accent-500">ringer</span>
        </h1>
        <motion.span 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xs ml-1 text-secondary-500 font-medium"
        >
          &gt;&gt;
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;