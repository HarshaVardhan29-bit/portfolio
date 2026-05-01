import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="connect" className="py-40 px-8 relative">
      <div className="max-w-4xl mx-auto glass-card rounded-[48px] p-12 md:p-24 border-brand-orange/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[100px] -z-10"></div>

        <div className="text-center mb-16">
          <h3 className="text-display-lg font-space-grotesk text-white mb-6">Let's Connect</h3>
          <p className="text-outline">
            Open to internships, freelance projects, and collaboration opportunities. Let's build something amazing together!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Your Name
              </label>
              <input
                className="bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-white placeholder:text-white/20 outline-none"
                placeholder="Your full name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Your Email
              </label>
              <input
                className="bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-white placeholder:text-white/20 outline-none"
                placeholder="email@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Your Message
            </label>
            <textarea
              className="bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-white placeholder:text-white/20 outline-none resize-none"
              placeholder="Tell me about your project or opportunity..."
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            className="w-full py-5 bg-brand-orange text-black font-bold text-lg rounded-2xl hover:scale-[1.02] active:scale-95 transition-all glow-orange"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
