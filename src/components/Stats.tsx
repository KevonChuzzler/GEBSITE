import React from "react";
import { motion } from "motion/react";
import { UserRound, Users2, Gem, History } from "lucide-react";

const Stats = () => {
  const stats = [
    { label: "Black Women Owned", value: "100%", icon: UserRound },
    { label: "Youth Owned", value: "100%", icon: Users2 },
    { label: "Market Value", value: "Premium", icon: Gem },
    { label: "Experience", value: "10+ Years", icon: History },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gebe-green to-gebe-green-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-gebe-gold to-gebe-gold-light rounded-full blur-3xl -mr-32 -mb-32" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-gebe-gold mb-6 backdrop-blur-sm border border-white/10">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-4xl font-display font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-gebe-green-light font-bold uppercase tracking-wider brightness-125">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
