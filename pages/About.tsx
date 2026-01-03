
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white dark:bg-background-dark">
      <section className="w-full max-w-7xl px-4 md:px-10 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="reveal flex-1 space-y-8">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">The Visionary</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase">
              Architecting <br/>Scalable Engineering
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              Sabee Ur Rehman is a results-oriented leader with over 9 years of experience in technical program management. He specializes in bridging complex engineering goals with executive business strategy.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <p className="text-3xl font-black text-primary">50+</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">Projects Delivered</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <p className="text-3xl font-black text-primary">Global</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">5+ Regions</p>
              </div>
            </div>
          </div>
          <div className="reveal-zoom flex-1 w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border-[12px] border-white dark:border-slate-900">
             <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLpTgvJchxZ0AZ-2V2vQXdBpaHR6MRHRmL2iInc4Diqj4Dn6-w8PEnarmosrhULSfew96NYiW9Bq7Web5LgQPorAINnalAFGlBvG3PU6PpiAlwIy4ebPfSJbM_go_yvRtlWFncJC9NedH3WrzI3zNHKQC1EF6px8yv8tDkgHzgb6xquSj_tq9nnYludT4OmBZxkRPDPyg-d_W_gBMofURO_TMsotZAwhLB0-gfrtqYWr8iVkeasAuY7xUJrV-qg6TkUdbaFvyY016B')`}}></div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 dark:bg-slate-900/10 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="reveal mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Core Philosophy</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Execution', icon: 'bolt' },
              { title: 'Transparency', icon: 'visibility' },
              { title: 'Risk Control', icon: 'security' },
              { title: 'Trust', icon: 'handshake' }
            ].map((p, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm magnetic-card">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">{p.icon}</span>
                <h3 className="font-black text-slate-900 dark:text-white mb-3 uppercase tracking-wider text-sm">{p.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Consistent results through disciplined processes and radical ownership.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
