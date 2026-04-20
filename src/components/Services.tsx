import React from "react";
import { motion } from "motion/react";
import accImg from "../assets/acc.jpg";
import taxImg from "../assets/tax.jpg";
import esgImg from "../assets/esg.jpg";
import suppImg from "../assets/supp.jpg";

const Services = () => {
  const services = [
    {
      title: "Financial Services",
      description: "We deliver strategic financial solutions that enable sustainable growth, optimise performance, and support informed decision-making through data-driven insights and effective capital management.",
      image: accImg
    },
    {
      title: "Tax Consulting",
      description: "We provide expert tax consulting services that ensure compliance, enhance tax efficiency, and proactively manage risk through tailored planning and advisory solutions.",
      image: taxImg
    },
    {
      title: "ESG Services",
      description: "We provide integrated Environmental, Social, and Governance (ESG) solutions that support responsible business practices, ensure regulatory alignment, and drive sustainable value creation.",
      image: esgImg
    },
    {
      title: "Supply Services",
      description: "We provide reliable and efficient supply solutions, delivering quality products and equipment tailored to operational needs, while ensuring timely procurement and cost optimisation.",
      image: suppImg
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-gebe-green uppercase tracking-widest mb-4">What We Do</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Core Services</h3>
          <p className="text-slate-600">
            We combine strong technical expertise with on-the-ground operational support to create real value across industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-[450px] rounded-[32px] overflow-hidden shadow-lg group cursor-default"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-2xl font-bold text-white mb-4 transform lg:group-hover:-translate-y-2 transition-transform duration-300">{service.title}</h4>
                <div className="h-auto lg:h-0 lg:group-hover:h-auto overflow-hidden transition-all duration-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                  <p className="text-slate-200 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="w-12 h-1 bg-gradient-to-r from-gebe-gold to-gebe-gold-light rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
