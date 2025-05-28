import { useState, useRef, FC, ChangeEvent, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Search, Briefcase, MapPin, X, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface SearchBarProps {
  className?: string;
  onSearch?: (query: string, location: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ className = '', onSearch }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const queryInputRef = useRef<HTMLInputElement>(null);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleClearQuery = () => {
    setQuery('');
    queryInputRef.current?.focus();
  };

  const handleClearLocation = () => {
    setLocation('');
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query, location);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`relative ${className}`}
    >
      <div 
        className={`flex flex-col md:flex-row items-stretch md:items-center p-2 rounded-xl glass transition-all duration-300 ${
          isFocused ? 'shadow-neon' : 'shadow-glass'
        }`}
      >
        <div className="relative flex items-center flex-grow px-3 py-2 md:py-0">
          <Briefcase className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
          <input
            ref={queryInputRef}
            type="text"
            placeholder="Search jobs, skills, companies..."
            value={query}
            onChange={handleQueryChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
            className="w-full bg-transparent text-light-100 placeholder-gray-500 outline-none"
          />
          {query && (
            <button 
              onClick={handleClearQuery}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        <div className="h-px w-full md:w-px md:h-8 bg-white/20 my-2 md:my-0 md:mx-2"></div>
        
        <div className="relative flex items-center px-3 py-2 md:py-0">
          <MapPin className="w-5 h-5 text-secondary-500 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyPress={handleKeyPress}
            className="w-full bg-transparent text-light-100 placeholder-gray-500 outline-none"
          />
          {location && (
            <button 
              onClick={handleClearLocation}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        <Button 
          variant="primary"
          size="md"
          className="mt-2 md:mt-0 md:ml-2 py-3 md:py-2 md:px-6"
          onClick={handleSearch}
          icon={<Search className="w-5 h-5" />}
        >
          <span className="hidden md:inline">Search</span>
          <span className="inline md:hidden">Find Jobs</span>
        </Button>
      </div>
      
      {/* Quick filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        {['Remote', 'Full-time', 'Tech', 'Finance', 'Marketing'].map((filter) => (
          <motion.button
            key={filter}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-3 py-1 text-sm glass rounded-full flex items-center hover:bg-primary-500/20 transition-colors group"
          >
            <span>{filter}</span>
            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};