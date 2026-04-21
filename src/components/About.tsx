import React from "react";
import { motion } from "motion/react";
import { Target, Lightbulb, CheckCircle2 } from "lucide-react";
import truckImg from "../assets/mining-truck.jpg";
import heroBgImg from "../assets/hero-bg.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.img 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                src={truckImg} 
                alt="Mining Operations" 
                className="rounded-[40px] shadow-2xl mt-12 border-8 border-slate-50 w-full h-[400px] object-cover" 
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <motion.img 
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                src={heroBgImg} 
                alt="Mining Services" 
                className="rounded-[40px] shadow-2xl border-8 border-slate-50 w-full h-[400px] object-cover" 
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gebe-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold text-gebe-green uppercase tracking-widest mb-4">Who We Are</h2>
            <h3 className="text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">Vision & Mission</h3>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gebe-green/10 rounded-2xl flex items-center justify-center text-gebe-green group-hover:bg-gebe-green group-hover:text-white transition-all duration-300">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    To be a trusted leader in financial advisory and mining services, delivering integrated solutions that empower safe, efficient operations and sustainable growth across industries.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gebe-gold/10 rounded-2xl flex items-center justify-center text-gebe-gold group-hover:bg-gebe-gold group-hover:text-white transition-all duration-300">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-slate-600 text-lg">
                      <CheckCircle2 className="w-6 h-6 text-gebe-green flex-shrink-0 mt-1" />
                      <span>To deliver integrated solutions, providing accurate, timely, strategic insights that enable confident decision making and compliance.</span>
                    </li>
                    <li className="flex items-start gap-4 text-slate-600 text-lg">
                      <CheckCircle2 className="w-6 h-6 text-gebe-green flex-shrink-0 mt-1" />
                      <span>To build lasting partnerships through integrity, consistency, and commitment.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
