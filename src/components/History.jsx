import React from 'react';

const History = () => {
  return (
    <section id="history" className="py-40 px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-label-sm font-space-grotesk text-brand-orange tracking-widest uppercase mb-4">
            Progression
          </h2>
          <h3 className="text-display-lg font-space-grotesk text-white">System History</h3>
        </div>

        <div className="relative flex flex-col gap-12 timeline-gradient">
          {/* Timeline Item 1 - Right Side */}
          <div className="flex items-center gap-8">
            <div className="flex-1 hidden md:block"></div>
            <div className="z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center border-brand-orange/50 shrink-0">
              <div className="w-4 h-4 bg-brand-orange rounded-full"></div>
            </div>
            <div className="flex-1 glass-card p-8 rounded-3xl hover:border-brand-orange/30 transition-all duration-300 border border-white/10">
              <h4 className="text-headline-md font-space-grotesk text-white mb-2">B.Tech - Computer Science</h4>
              <p className="text-brand-orange mb-2 font-semibold">
                Manav Rachna University
              </p>
              <p className="text-outline text-sm">
                Currently in 2nd year, learning advanced programming, data structures, algorithms, and full-stack web development.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 - Left Side */}
          <div className="flex items-center gap-8">
            <div className="flex-1 glass-card p-8 rounded-3xl hover:border-blue-400/30 transition-all duration-300 border border-white/10">
              <h4 className="text-headline-md font-space-grotesk text-white mb-2">Full Stack Development</h4>
              <p className="text-outline text-sm">
                Mastered MERN stack (MongoDB, Express.js, React.js, Node.js), built multiple projects, and learned modern web development practices.
              </p>
            </div>
            <div className="z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center shrink-0">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            </div>
            <div className="flex-1 hidden md:block"></div>
          </div>

          {/* Timeline Item 3 - Right Side */}
          <div className="flex items-center gap-8">
            <div className="flex-1 hidden md:block"></div>
            <div className="z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center shrink-0">
              <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
            </div>
            <div className="flex-1 glass-card p-8 rounded-3xl hover:border-purple-400/30 transition-all duration-300 border border-white/10">
              <h4 className="text-headline-md font-space-grotesk text-white mb-2">Started Programming Journey</h4>
              <p className="text-outline text-sm">
                Began learning programming fundamentals with C, C++, Python, and web technologies (HTML, CSS, JavaScript).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
