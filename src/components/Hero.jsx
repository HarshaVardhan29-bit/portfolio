import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 px-8 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-green-400 uppercase">Open to Opportunities</span>
          </div>

          <h1 className="font-space-grotesk text-display-xl text-gradient-silver leading-tight">
            Harsha Vardhan Pushadapu
          </h1>

          <p className="text-display-lg font-space-grotesk text-white/80 leading-tight -mt-4">
            Full Stack Developer & <span className="text-brand-orange">Student</span>
          </p>

          <p className="text-body-lg font-inter text-outline max-w-lg">
            Building modern web applications with cutting-edge technologies. Passionate about creating seamless user experiences and scalable backend solutions.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-4 bg-brand-orange text-black font-bold rounded-xl hover:scale-105 transition-transform glow-orange">
              View Projects
            </button>
            <button className="px-8 py-4 glass-card text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
              Download Resume
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-brand-orange/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <img
            alt="3D Developer Avatar"
            className="relative z-10 w-full h-auto drop-shadow-2xl"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhH28zyEjiWZKN0vc51i4AFvA9eMGaqAziLVlaHRVFtRhyUO1aly8e8CS-kPM5rfcm2nty6zwiFAIiXEqP5MbATQhQU4vOirQQPRW_T_doI7snjhN4f--dsLJunX9xnOSfmB07dVVfui-TBgpLV7b3VXNEXDRokUkYDGpJQ9NjClpy5bugFYKouzfutsMytkPri37-14UlH7FPR3GRDDExb__dK7x_xKLYjowZxoyH8LgbuJCWD4vCyO87MyC0pMTtZ5Gw0bZ1wtPs"
          />
          {/* Floating Tech Icons */}
          <div className="absolute -top-10 -left-10 glass-card p-4 rounded-2xl animate-bounce">
            <span className="material-symbols-outlined text-brand-orange text-4xl">terminal</span>
          </div>
          <div className="absolute top-1/2 -right-10 glass-card p-4 rounded-2xl delay-75 animate-bounce">
            <span className="material-symbols-outlined text-blue-400 text-4xl">security</span>
          </div>
          <div className="absolute -bottom-10 left-1/4 glass-card p-4 rounded-2xl delay-150 animate-bounce">
            <span className="material-symbols-outlined text-yellow-400 text-4xl">layers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
