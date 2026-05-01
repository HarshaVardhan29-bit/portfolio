import React from 'react';

const Philosophy = () => {
  return (
    <section className="py-40 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-label-sm font-space-grotesk text-brand-orange tracking-widest uppercase mb-4">
            Philosophy
          </h2>
          <h3 className="text-display-lg font-space-grotesk text-white">
            The Architectural Core
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl group hover:border-brand-orange/50 transition-colors">
            <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-brand-orange text-3xl">code</span>
            </div>
            <h4 className="text-headline-md font-space-grotesk text-white mb-4">Full Stack Development</h4>
            <p className="text-outline">
              Building end-to-end web applications with modern frameworks, from responsive frontends to robust backend APIs.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl group hover:border-blue-400/50 transition-colors">
            <div className="w-14 h-14 bg-blue-400/10 rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-blue-400 text-3xl">school</span>
            </div>
            <h4 className="text-headline-md font-space-grotesk text-white mb-4">Continuous Learning</h4>
            <p className="text-outline">
              Always exploring new technologies and best practices to stay current with the rapidly evolving web development landscape.
            </p>
          </div>

          <div className="glass-card p-10 rounded-3xl group hover:border-purple-400/50 transition-colors">
            <div className="w-14 h-14 bg-purple-400/10 rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-purple-400 text-3xl">lightbulb</span>
            </div>
            <h4 className="text-headline-md font-space-grotesk text-white mb-4">Problem Solving</h4>
            <p className="text-outline">
              Tackling complex challenges with creative solutions, focusing on clean code and optimal user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
