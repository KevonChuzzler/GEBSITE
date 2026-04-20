import React from "react";
import { motion } from "motion/react";
import { Award, Shield, BarChart3, Users, CheckCircle2 } from "lucide-react";
import founderImg from "../assets/founder.jpg";

const Founder = () => {
  const expertise = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Financials & Sustainability",
      desc: "Specialist in integrating financial performance with sustainable business practices."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk & Governance",
      desc: "Expert in navigating complex regulatory environments and implementing robust governance."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Data-Driven Decisions",
      desc: "Utilizing advanced analytics to drive strategic business outcomes and efficiency."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strategic Leadership",
      desc: "10+ years leading cross-functional teams in high-stakes mining and financial projects."
    }
  ];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Portrait Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={founderImg} 
                  alt="Yatisha Thulari - Founder of GEBE Group" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -right-6 top-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gebe-gold rounded-xl flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Qualified</p>
                  <p className="font-display font-bold text-slate-900">CA (SA)</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-6 bottom-12 bg-gebe-green p-4 rounded-2xl shadow-xl flex items-center gap-3 text-white"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Ownership</p>
                  <p className="font-display font-bold">Black Female Owned</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gebe-green/5 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gebe-gold/5 rounded-full blur-3xl -z-0" />
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-gebe-green uppercase tracking-widest mb-4">Leadership Excellence</h2>
              <h3 className="text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Meet Our Founder & Specialist
              </h3>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                With a decade of experience in cross-functional projects, Yatisha leads GEBE Group with a vision for sustainable mining and financial excellence. Her data-driven approach ensures precision in every partnership.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-slate-200/50 rounded-lg flex items-center justify-center text-gebe-green group-hover:bg-gebe-green group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h4 className="font-display font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
