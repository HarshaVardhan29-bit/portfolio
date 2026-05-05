import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-label-sm font-space-grotesk text-brand-orange tracking-widest uppercase mb-4">
              Portfolio
            </h2>
            <h3 className="text-display-lg font-space-grotesk text-white">Signal Projects</h3>
          </div>
          <button className="text-white flex items-center gap-2 font-bold hover:text-brand-orange transition-colors">
            Archives 001-015 <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Project Card 1 - SkillSwap */}
          <a
            href="https://skillswap-a3re.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 glass-card border-white/5">
              <img
                alt="SkillSwap Platform"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/skillswap.png"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-1.5 rounded-full bg-brand-orange text-black text-xs font-bold uppercase tracking-widest">
                  Full Stack MERN
                </span>
              </div>
            </div>
            <h4 className="text-headline-md font-space-grotesk text-white mb-2 group-hover:text-brand-orange transition-colors">SkillSwap</h4>
            <p className="text-brand-orange text-sm font-semibold mb-2">Peer Mentorship & Micro-Learning Platform</p>
            <p className="text-outline mb-4 text-sm">
              Full-stack MERN application connecting learners with mentors for micro-learning sessions with secure JWT authentication and skill-based discovery.
            </p>
            <ul className="text-outline text-xs mb-4 space-y-1 list-disc list-inside">
              <li>JWT & bcrypt authentication</li>
              <li>RESTful APIs with Node.js & Express</li>
              <li>MongoDB Atlas data management</li>
              <li>Responsive UI with React & Tailwind</li>
            </ul>
            <div className="flex gap-3 flex-wrap items-center">
              <span className="text-xs font-bold uppercase text-white/50">React</span>
              <span className="text-xs font-bold uppercase text-white/50">Node.js</span>
              <span className="text-xs font-bold uppercase text-white/50">MongoDB</span>
              <span className="text-xs font-bold uppercase text-white/50">Express</span>
              <span className="ml-auto text-xs text-brand-orange font-semibold flex items-center gap-1">
                Live Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
              </span>
            </div>
          </a>

          {/* Project Card 2 - MRU MentorConnect AI */}
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 glass-card border-white/5">
              <img
                alt="MRU MentorConnect AI Platform"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/mentorconnect.png"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-widest">
                  AI-Powered Platform
                </span>
              </div>
            </div>
            <h4 className="text-headline-md font-space-grotesk text-white mb-2">MRU MentorConnect AI</h4>
            <p className="text-blue-400 text-sm font-semibold mb-2">Alumni-Student Mentorship Platform</p>
            <p className="text-outline mb-4 text-sm">
              Full-stack mentorship platform with AI-based mentor matching, real-time chat, and comprehensive analytics dashboard for enhanced networking.
            </p>
            <ul className="text-outline text-xs mb-4 space-y-1 list-disc list-inside">
              <li>JWT authentication & Google login</li>
              <li>AI-based mentor matching algorithm</li>
              <li>Real-time chat functionality</li>
              <li>Admin panel with analytics dashboard</li>
            </ul>
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs font-bold uppercase text-white/50">MERN</span>
              <span className="text-xs font-bold uppercase text-white/50">AI/ML</span>
              <span className="text-xs font-bold uppercase text-white/50">Socket.io</span>
              <span className="text-xs font-bold uppercase text-white/50">OAuth</span>
            </div>
          </div>

          {/* Project Card 3 - Machine Learning */}
          <div className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 glass-card border-white/5 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              {/* ML Icon/Visual */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-5xl">analytics</span>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">R² = 0.805</div>
                  <div className="text-sm text-gray-300">Model Accuracy</div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <span className="px-4 py-1.5 rounded-full bg-purple-500 text-white text-xs font-bold uppercase tracking-widest">
                  Machine Learning
                </span>
              </div>
            </div>
            <h4 className="text-headline-md font-space-grotesk text-white mb-2">Regression Analysis</h4>
            <p className="text-purple-400 text-sm font-semibold mb-2">Predictive Modeling Project</p>
            <p className="text-outline mb-4 text-sm">
              Built and evaluated multiple regression models achieving R² score of 0.805 using Random Forest Regressor, outperforming baseline models.
            </p>
            <ul className="text-outline text-xs mb-4 space-y-1 list-disc list-inside">
              <li>Data preprocessing & feature engineering</li>
              <li>Model tuning & hyperparameter optimization</li>
              <li>Performance evaluation & comparison</li>
            </ul>
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs font-bold uppercase text-white/50">Python</span>
              <span className="text-xs font-bold uppercase text-white/50">Pandas</span>
              <span className="text-xs font-bold uppercase text-white/50">Scikit-learn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
