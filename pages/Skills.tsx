
import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: 'Strategy & Leadership',
      icon: 'psychology',
      skills: ['Agile Transformation', 'Executive Stakeholder Mgmt', 'Resource Forecasting', 'Risk Mitigation'],
      accent: 'bg-blue-500/10'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: 'cloud',
      skills: ['AWS Architecture', 'Microservices', 'Kubernetes', 'CI/CD Pipelines', 'IoT Hubs'],
      accent: 'bg-indigo-500/10'
    },
    {
      title: 'Product Delivery',
      icon: 'rocket_launch',
      skills: ['SDLC Mastery', 'Sprint Planning', 'UAT Management', 'ROI Analysis'],
      accent: 'bg-cyan-500/10'
    },
    {
      title: 'Data & Intelligence',
      icon: 'database',
      skills: ['Big Data Architecture', 'AI/ML Ops', 'SQL/NoSQL', 'Financial Analytics'],
      accent: 'bg-blue-600/10'
    }
  ];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col gap-20">
        <div className="reveal-up opacity-0 flex flex-col gap-6 max-w-4xl">
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-primary">Core Arsenal</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
            Technical <br/>Dominance
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium max-w-3xl">
            A diverse toolkit built across a decade of engineering leadership and complex problem solving.
          </p>
        </div>

        <div className="stagger-parent grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx} 
              className="magnetic-card flex flex-col gap-10 rounded-[3rem] glass p-12 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <div className="flex items-center gap-6">
                <div className={`size-16 rounded-2xl ${group.accent} flex items-center justify-center text-primary shadow-inner`}>
                  <span className="material-symbols-outlined text-4xl">{group.icon}</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">{group.title}</h2>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {group.skills.map(skill => (
                  <span key={skill} className="px-6 py-2.5 bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-[11px] font-bold uppercase tracking-widest rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
