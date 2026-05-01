import React from 'react';

const TechStack = () => {
  return (
    <section id="stack" className="py-40 px-8 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <h2 className="text-label-sm font-space-grotesk text-brand-orange tracking-widest uppercase mb-4">
              Capabilities
            </h2>
            <h3 className="text-display-lg font-space-grotesk text-white">Technical Stack</h3>
          </div>
          <p className="text-body-lg text-outline">
            A curated selection of technologies used to build next-generation software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h4 className="text-headline-md font-space-grotesk text-white">Frontend</h4>
              <span className="material-symbols-outlined text-brand-orange">devices</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 glass-card rounded-full text-xs text-white">React.js</span>
              <span className="px-3 py-1 glass-card rounded-full text-xs text-white">Next.js</span>
              <span className="px-3 py-1 glass-card rounded-full text-xs text-white">Tailwind CSS</span>
              <span className="px-3 py-1 glass-card rounded-full text-xs text-white">JavaScript</span>
            </div>
          </div>

          {/* Logic Architecture */}
          <div className="glass-card p-8 rounded-3xl flex flex-col gap-6 lg:col-span-2">
            <div className="flex justify-between items-center">
              <h4 className="text-headline-md font-space-grotesk text-white">Backend & Languages</h4>
              <span className="material-symbols-outlined text-brand-orange">settings_ethernet</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-brand-orange rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-bold">Node.js</div>
                  <div className="text-outline text-xs">Server-Side Development</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-bold">Express.js</div>
                  <div className="text-outline text-xs">RESTful APIs</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-bold">MongoDB</div>
                  <div className="text-outline text-xs">Database Management</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-red-500 rounded-full"></div>
                <div>
                  <div className="text-white text-sm font-bold">Python</div>
                  <div className="text-outline text-xs">Scripting & Automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Deployment Hub */}
          <div className="glass-card p-8 rounded-3xl flex flex-col gap-6 lg:col-span-3">
            <div className="flex justify-between items-center">
              <h4 className="text-headline-md font-space-grotesk text-white">Tools & Deployment</h4>
              <span className="material-symbols-outlined text-brand-orange">cloud_sync</span>
            </div>
            <div className="flex items-center justify-around py-4 opacity-70 grayscale hover:grayscale-0 transition-all">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">terminal</span>
                <span className="text-xs uppercase tracking-tighter">Git & GitHub</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">deployed_code</span>
                <span className="text-xs uppercase tracking-tighter">Vercel & Netlify</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-4xl">storage</span>
                <span className="text-xs uppercase tracking-tighter">Firebase & AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
