import React from "react";
import { motion } from "motion/react";
import { ChevronRight, UserRound } from "lucide-react";
import conveyorImg from "../assets/conveyor.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center bg-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${conveyorImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gebe-gold/20 border border-gebe-gold/30 text-gebe-gold mb-8 backdrop-blur-md">
              <UserRound className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">100% Black Women Owned</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Empowering <span className="text-gebe-green">Mining</span> & <span className="text-gebe-gold">Financial</span> Excellence
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-medium">
              Gebe Group is a multidisciplinary, black female-owned company delivering expert financial advisory and specialised mining services that drive safe, efficient operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-8 py-4 bg-gebe-green text-white rounded-xl font-bold hover:bg-gebe-green-light transition-all shadow-xl shadow-gebe-green/20 flex items-center gap-2">
                Our Services <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#about" className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold hover:bg-white/20 transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
