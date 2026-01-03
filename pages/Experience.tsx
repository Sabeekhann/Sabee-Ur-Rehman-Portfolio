
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Technical Project Manager',
      company: 'VentureDive',
      period: 'Jul 2025 – Present',
      project: 'BeyondONE (Virgin Mobile)',
      points: [
        'Leading digital transformation for Virgin Mobile across multiple international markets.',
        'Directly managing 40+ cross-functional engineers (Mobile, Backend, AI, DevOps).',
        'Driving Agile/Scrum ceremonies and multi-region release management.',
        'Overseeing complex AWS cloud scaling and API architecture.'
      ],
      tags: ['Agile', 'Telecom', 'AWS', 'Microservices'],
      icon: 'hub'
    },
    {
      role: 'Principal Technology Advisor',
      company: 'Plan Estimates',
      period: 'Jan 2022 – Present',
      project: 'Cost Estimation SaaS',
      points: [
        'Defining product roadmap and architectural vision for high-scale construction SaaS.',
        'Automating smart estimation workflows for labor and material tracking.',
        'Designing data synchronization layers for real-time calculation modules.'
      ],
      tags: ['SaaS', 'Product Strategy', 'Cloud'],
      icon: 'architecture'
    },
    {
      role: 'Technical Project Manager',
      company: 'Septem Systems',
      period: 'Jan 2024 – Jul 2025',
      points: [
        'Managed concurrent delivery of AI, ML, and IoT platforms.',
        'Improved delivery predictability by 30% through rigorous sprint refinement.',
        'Handled executive-level stakeholder communication and risk mitigation.'
      ],
      tags: ['AI', 'ML', 'IoT', 'Execution'],
      icon: 'analytics'
    },
    {
      role: 'Associate PM / Team Lead',
      company: 'HexaClicks',
      period: 'Jun 2021 – Nov 2023',
      points: [
        'Led dev teams in building multi-vendor e-commerce marketplaces.',
        'Managed third-party integrations and complex vendor SLAs.'
      ],
      tags: ['Leadership', 'SaaS', 'E-commerce'],
      icon: 'groups'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-20">
        <aside className="reveal-left opacity-0 h-fit lg:sticky lg:top-28 space-y-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Experience</h1>
            <p className="text-base text-slate-500 dark:text-slate-400">A career defined by strategic execution and high-performance engineering leadership.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-6xl">military_tech</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-6">Career Snapshot</p>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Force Managed</span>
                <span className="text-lg font-black">40+ HC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Global Regions</span>
                <span className="text-lg font-black">5+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Delivery Record</span>
                <span className="text-lg font-black">100%</span>
              </div>
            </div>
            <a href="/cv.pdf" download className="mt-10 flex w-full h-12 items-center justify-center rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-blue-700 hover:scale-105 active:scale-95">
              Executive Resume
            </a>
          </div>
        </aside>

        <main className="space-y-20">
          <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-5 pl-12 space-y-20">
            {experiences.map((exp, idx) => (
              <section key={idx} className="reveal-up opacity-0 relative group">
                <div className="absolute -left-[61px] top-0 size-12 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 shadow-md">
                  <span className="material-symbols-outlined text-2xl">{exp.icon}</span>
                </div>
                
                <div className="space-y-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">{exp.role}</h3>
                      <p className="text-base font-bold text-primary mt-2 uppercase tracking-widest">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-base text-slate-600 dark:text-slate-400 flex gap-4 items-start leading-relaxed">
                        <span className="mt-2.5 size-2 rounded-full bg-primary/30 shrink-0 group-hover:bg-primary transition-colors"></span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800 text-[10px] font-bold text-slate-500 rounded-lg border border-slate-100 dark:border-slate-800 group-hover:border-primary/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Experience;
