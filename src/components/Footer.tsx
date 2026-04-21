import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg shadow-black/20">
              <img src="/logo.jpg" alt="Gebe Group Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">Gebe Group</span>
          </div>
          
          <div className="text-slate-500 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Gebe Group. All rights reserved.</p>
            <p className="mt-1">
              Built by <a href="https://www.facebook.com/kevonsphotography" target="_blank" rel="noopener noreferrer" className="text-gebe-gold font-semibold hover:text-gebe-gold-light transition-colors">KS Digital Solutionz</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
