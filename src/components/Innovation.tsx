import React from "react";
import { motion } from "motion/react";
import { LineChart, Activity, Shield, Cpu, Zap, TrendingUp } from "lucide-react";
import dataImg from "../assets/data.jpeg";

const Innovation = () => {
  const features = [
    { title: "Data-Driven Decision Making", desc: "Leveraging analytics and insights to guide financial, operational, and ESG strategies.", icon: LineChart },
    { title: "End-to-End Solutions", desc: "From strategy to execution, we support clients across the full value chain planning.", icon: Activity },
    { title: "Regulatory Alignment", desc: "Ensuring full alignment with local and international standards, reducing risk.", icon: Shield },
    { title: "Digital Integration", desc: "Seamless platforms connecting operations across Finance and ESG.", icon: Cpu }
  ];

  return (
    <section id="innovation" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-gebe-green uppercase tracking-widest mb-4">Technology & Innovation</h2>
            <h3 className="text-5xl font-display font-bold text-slate-900 mb-10 leading-tight">Unique Market Differentiators</h3>
            <div className="space-y-4">
              {features.map((f, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-[24px] bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group cursor-default border border-slate-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gebe-green/10 text-gebe-green flex items-center justify-center group-hover:bg-gebe-green group-hover:text-white transition-all duration-300 shadow-sm">
                    <f.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-1">{f.title}</h5>
                    <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-gebe-gold/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gebe-green/10 rounded-full blur-[100px]" />
            <div 
              className="relative bg-slate-900 rounded-[48px] p-12 shadow-3xl overflow-hidden border border-white/10"
              style={{ 
                backgroundImage: `url(${dataImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 rounded-full bg-gebe-gold/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gebe-gold" />
                  </div>
                  <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">Innovation Hub</span>
                </div>
                <p className="text-3xl text-white font-display font-medium leading-snug mb-12">
                  "We integrate advanced technologies to improve efficiency, enhance performance and optimize resources across industries."
                </p>
                <div className="flex items-center gap-6 p-6 bg-white/15 rounded-3xl border border-white/20 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-2xl bg-gebe-green flex items-center justify-center text-white shadow-lg shadow-gebe-green/20">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">Real-time Analytics</p>
                    <p className="text-slate-200">Smart ESG & Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
