import React from 'react';
import './OrbitAnimation.css';

const HeroWithOrbit = () => {
  return (
    <section className="relative pt-40 pb-32 px-8 overflow-hidden min-h-screen">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <div className="flex flex-col items-start gap-6 z-10">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-green-400 uppercase">Open to Opportunities</span>
          </div>

          <div>
            <p className="text-xl text-brand-orange font-space-grotesk mb-3 tracking-wide animate-fade-in">
              Hey, I am <span className="font-bold text-2xl"></span>
            </p>
            <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight mb-2 animate-slide-up">
              Harsha Vardhan
            </h1>
            <h1 className="font-space-grotesk text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-yellow-500 leading-tight animate-slide-up-delay">
              Pushadapu
            </h1>
          </div>

          <p className="text-body-lg font-inter text-gray-300 max-w-lg leading-relaxed">
            Building modern web applications with cutting-edge technologies. Passionate about creating seamless user experiences and scalable backend solutions.
          </p>

          <div className="flex gap-4 pt-6">
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-10 py-4 bg-gradient-to-r from-brand-orange to-orange-600 text-black font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-xl">download</span>
            </button>
            <a 
              href="mailto:harshanaidupushadapu@gmail.com"
              className="px-6 py-4 glass-card text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/20"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>

          {/* Testimonial Card */}
          <div className="glass-card p-8 rounded-3xl mt-8 max-w-md border border-white/10 hover:border-brand-orange/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-orange/10">
            <div className="text-5xl text-brand-orange mb-4 font-serif">"</div>
            <p className="text-base text-gray-200 mb-6 leading-relaxed italic">
              Exceptional developer with great attention to detail. Delivered our project ahead of schedule with outstanding quality.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <p className="text-white font-bold text-base">Client Testimonial</p>
                <p className="text-gray-400 text-sm">Project Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Orbiting Skills Animation */}
        <div className="relative flex items-center justify-center h-[600px]">
          {/* Center Text - Full Stack Developer */}
          <div className="absolute z-20 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-brand-orange/30 via-purple-600/30 to-blue-600/30 backdrop-blur-2xl border-2 border-white/20 flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 via-transparent to-purple-500/20 animate-spin-slow"></div>
              
              {/* Inner glow circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-orange/10 to-purple-500/10 blur-xl"></div>
              
              <div className="text-center px-8 relative z-10">
                <h2 className="font-space-grotesk text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-200 to-brand-orange leading-tight tracking-tight">
                  Full Stack
                </h2>
                <h2 className="font-space-grotesk text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-orange via-orange-300 to-yellow-400 leading-tight tracking-tight mt-1">
                  Developer
                </h2>
                <div className="mt-3 flex justify-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbit Rings */}
          <div className="orbit-ring orbit-ring-1">
            <div className="orbit-path"></div>
          </div>
          <div className="orbit-ring orbit-ring-2">
            <div className="orbit-path"></div>
          </div>

          {/* Orbiting Icons - Inner Orbit */}
          <div className="orbit-container orbit-1">
            <div className="orbit-icon" style={{'--delay': '0s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #e34c26 0%, #f06529 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-3s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #264de4 0%, #2965f1 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-6s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #f0db4f 0%, #f7df1e 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-9s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #61dafb 0%, #00d8ff 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Orbiting Icons - Outer Orbit */}
          <div className="orbit-container orbit-2">
            <div className="orbit-icon" style={{'--delay': '0s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #68a063 0%, #8cc84b 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-4s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #4db33d 0%, #47a248 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-8s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-12s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #303030 0%, #000000 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-12 h-12 brightness-0 invert" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-16s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-12 h-12" />
              </div>
            </div>
            <div className="orbit-icon" style={{'--delay': '-20s'}}>
              <div className="skill-icon" style={{background: 'linear-gradient(135deg, #f34f29 0%, #e44c30 100%)'}}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithOrbit;
