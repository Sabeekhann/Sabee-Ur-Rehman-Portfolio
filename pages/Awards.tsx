
import React, { useEffect } from 'react';

const Awards: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-zoom').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const awards = [
    { title: 'Manager of the Quarter', period: '2024', desc: 'Outstanding leadership and team optimization across high-stakes projects.', icon: 'military_tech' },
    { title: 'Employee of the Month', period: 'Septem Systems', desc: 'Highest client satisfaction scores in company history.', icon: 'workspace_premium' },
    { title: 'Top Performer', period: 'HexaClicks', desc: 'Highest project turnaround rate and rigorous QA metrics.', icon: 'trophy' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="reveal mb-16 text-center lg:text-left">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 uppercase">Honors & Recognition</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">A history of excellence in delivery and team management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {awards.map((award, idx) => (
          <div key={idx} className="reveal-zoom p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:border-blue-500/30 transition-all duration-500">
            <div className="size-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl">{award.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{award.title}</h3>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{award.period}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{award.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
