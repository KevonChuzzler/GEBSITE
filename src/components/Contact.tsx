import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Contact from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@gebegroup.co.za?subject=${subject}&body=${body}`;
    
    setIsSuccess(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold text-gebe-gold uppercase tracking-widest mb-4">Contact Us</h2>
            <h3 className="text-4xl font-display font-bold mb-8">Let's Build Reliable Solutions Together</h3>
            <p className="text-slate-400 mb-12 leading-relaxed max-w-md">
              Reach out today for reliable financial and mining solutions and partnerships. Our team is ready to support your business goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gebe-gold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-lg font-medium">+27 72 102 8972</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gebe-gold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">info@gebegroup.co.za</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gebe-gold">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Address</p>
                  <p className="text-lg font-medium">25 Skalie Street, West Acres, Mpumalanga</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h4>
            {error && (
              <div className="bg-red-50 border border-red-100 p-4 rounded-xl text-red-600 text-sm mb-6">
                {error}
              </div>
            )}
            {isSuccess ? (
              <div className="bg-green-50 border border-green-100 p-6 rounded-2xl text-center">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h5 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h5>
                <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gebe-green/20 focus:border-gebe-green transition-all" 
                  />
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gebe-green/20 focus:border-gebe-green transition-all" 
                  />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gebe-green/20 focus:border-gebe-green transition-all" 
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-gebe-green/20 focus:border-gebe-green transition-all resize-none"
                ></textarea>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-gebe-green to-gebe-green-light text-white rounded-xl font-bold hover:shadow-xl hover:shadow-gebe-green/30 transition-all shadow-lg shadow-gebe-green/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
