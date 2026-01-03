
import React, { useEffect } from 'react';

const About: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-white dark:bg-background-dark">
      <section className="w-full max-w-7xl px-4 md:px-10 py-20">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="reveal flex-1 space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">The Vision</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">Architecting Scalable Engineering Success</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Sabee Ur Rehman is a results-oriented leader with over 9 years of experience in technical program management. He specializes in bridging complex engineering goals with executive business strategy.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">50+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Projects Delivered</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">Global</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">5+ Regions</p>
              </div>
            </div>
          </div>
          <div className="reveal flex-1 w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 border-8 border-white dark:border-slate-900">
             <div className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLpTgvJchxZ0AZ-2V2vQXdBpaHR6MRHRmL2iInc4Diqj4Dn6-w8PEnarmosrhULSfew96NYiW9Bq7Web5LgQPorAINnalAFGlBvG3PU6PpiAlwIy4ebPfSJbM_go_yvRtlWFncJC9NedH3WrzI3zNHKQC1EF6px8yv8tDkgHzgb6xquSj_tq9nnYludT4OmBZxkRPDPyg-d_W_gBMofURO_TMsotZAwhLB0-gfrtqYWr8iVkeasAuY7xUJrV-qg6TkUdbaFvyY016B')`}}></div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 dark:bg-slate-900/10 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="reveal mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Core Philosophy</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Execution', 'Transparency', 'Risk Control', 'Stakeholder Trust'].map((p, i) => (
              <div key={i} className="reveal p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider text-xs">{p}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Consistent results through disciplined processes and radical ownership.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
