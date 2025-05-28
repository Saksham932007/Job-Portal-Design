import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { Link } from './ui/Link';

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { id: 2, icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { id: 3, icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { id: 4, icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { id: 5, icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { id: 6, icon: <MessageCircle className="w-5 h-5" />, href: "#", label: "Telegram" }
  ];
  
  const footerLinks = [
    { id: 1, text: "Terms and conditions", href: "#" },
    { id: 2, text: "Privacy Policy", href: "#" },
    { id: 3, text: "Refund / Cancellation Policy", href: "#" },
    { id: 4, text: "About Us", href: "#" },
    { id: 5, text: "Contact Us", href: "#" },
    { id: 6, text: "FAQ", href: "#" },
    { id: 7, text: "Blogs", href: "#" },
  ];

  const stats = [
    { id: 1, label: "Jobs Posted", value: "40808" },
    { id: 2, label: "Jobs Filled", value: "15153" },
    { id: 3, label: "Employers", value: "25776" },
    { id: 4, label: "Active Users", value: "1554182" }
  ];

  return (
    <footer className="bg-dark-800 relative overflow-hidden">
      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-display font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-light-300 mb-6 max-w-md">
              Recognized by #StartupIndia, Jobringer.com is dedicated to connecting job seekers with their dream careers and helping employers find exceptional talent.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full glass text-light-100 hover:text-primary-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Disclaimer</h3>
              <p className="text-light-300 text-sm">
                All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. 
                Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. This website is strictly designed & meant only for job 
                search assistance & career coaching. Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. 
                We do not guarantee any job to any jobseeker.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0 flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm text-light-300 hover:text-primary-400"
              >
                {link.text}
              </Link>
            ))}
          </div>
          
          <div className="text-sm text-light-400">
            © All Rights Reserved @ 2025 Jobtech Ventures Private Limited.
          </div>
        </div>
      </div>
      
      {/* Chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.5
        }}
        whileHover={{ scale: 1.1 }}
      >
        <button className="w-14 h-14 rounded-full bg-accent-500 text-dark-900 flex items-center justify-center shadow-neon-accent">
          <MessageCircle className="w-6 h-6" />
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;