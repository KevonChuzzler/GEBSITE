import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Innovation", href: "#innovation" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${scrolled ? "top-4" : "top-0"}`}>
      <div className={`transition-all duration-500 ease-in-out bg-gradient-to-r from-gebe-green to-gebe-green-light ${scrolled ? "w-[95%] max-w-7xl rounded-full shadow-2xl shadow-gebe-green/20 px-8 py-3" : "w-full rounded-none px-4 sm:px-6 lg:px-8 py-6 shadow-lg shadow-slate-900/10"}`}>
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className={`transition-all duration-500 rounded-xl overflow-hidden shadow-lg ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}>
              <img src="/logo.jpg" alt="Gebe Group Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-white hidden sm:block">GEBE GROUP</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-semibold text-white/90 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-500 shadow-lg ${scrolled ? "bg-white text-gebe-green hover:bg-slate-100 shadow-black/10" : "bg-white/10 text-white border border-white/20 hover:bg-white/20"}`}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-white/80 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 md:hidden overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-b from-gebe-green to-gebe-green-light border border-white/10"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-display font-bold text-white hover:text-gebe-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 bg-white text-gebe-green text-center rounded-2xl font-bold shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
