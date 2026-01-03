
import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    'All', 
    'Enterprise & Gov', 
    'AI & SaaS', 
    'Marketplace & Mobile', 
    'Fintech & Music'
  ];

  const projects = [
    // Enterprise & Gov
    { title: 'BeyondONE (Virgin Mobile)', category: 'Enterprise & Gov', desc: 'Leading digital transformation for Virgin Mobile across LATAM, EU, UAE, and KSA.', icon: 'cell_tower', tags: ['Telecom', 'Agile', 'Scale'] },
    { title: 'UNODC Platform', category: 'Enterprise & Gov', desc: 'MLA / Extradition Management System for the United Nations Office on Drugs and Crime.', icon: 'public', tags: ['Next.js', 'MongoDB', 'AWS'] },
    { title: 'PIFRA Analytics', category: 'Enterprise & Gov', desc: 'Advanced financial and agricultural analytics platform for the Finance Department of Punjab.', icon: 'monitoring', tags: ['Python', 'PostgreSQL', 'Tableau'] },
    { title: 'US NFIRS', category: 'Enterprise & Gov', desc: 'National Fire Incident Reporting System for fire incident tracking across the US.', icon: 'fire_truck', tags: ['Next.js', 'Material UI', 'MongoDB'] },
    { title: 'Meymaar', category: 'Enterprise & Gov', desc: 'Pak Army Civil Department Management System for infrastructure and resource tracking.', icon: 'account_balance', tags: ['React', 'Node.js', 'MariaDB'] },
    { title: 'CAMS', category: 'Enterprise & Gov', desc: 'High Court Copy Management System digitizing legal document requests and delivery.', icon: 'gavel', tags: ['Node.js', 'MariaDB', 'LegalTech'] },
    { title: 'Deliverybasics', category: 'Enterprise & Gov', desc: 'Enterprise logistics platform for high-volume pickup and delivery management.', icon: 'local_shipping', tags: ['NestJS', 'Angular', 'PostgreSQL'] },
    
    // AI & SaaS
    { title: 'ESGTree', category: 'AI & SaaS', desc: 'Enterprise ESG compliance and reporting platform for global sustainability tracking.', icon: 'eco', tags: ['Vue.js', 'Node.js', 'MySQL'] },
    { title: 'Smart Interview Coach', category: 'AI & SaaS', desc: 'AI-powered coaching platform using machine learning to analyze interview performance.', icon: 'psychology', tags: ['AI', 'ML', 'OpenResty'] },
    { title: 'READY3', category: 'AI & SaaS', desc: 'Robust project management SaaS platform for professional team collaboration.', icon: 'task_alt', tags: ['Next.js', 'Node.js', 'AWS'] },
    { title: 'Bigscoots', category: 'AI & SaaS', desc: 'Optimization and management of enterprise-grade web hosting infrastructure.', icon: 'dns', tags: ['Infrastructure', 'Cloud'] },
    { title: 'Ulta Host', category: 'AI & SaaS', desc: 'Business-centric hosting platform for growing startups and cloud-native apps.', icon: 'storage', tags: ['Hosting', 'Cloud'] },
    
    // Marketplace & Mobile
    { title: 'Yahuda', category: 'Marketplace & Mobile', desc: 'Real estate marketplace for property discovery and secure transactions.', icon: 'home_work', tags: ['Next.js', 'Kotlin', 'Swift'] },
    { title: 'Ticket Lake', category: 'Marketplace & Mobile', desc: 'Global event management and booking platform for high-volume ticket sales.', icon: 'confirmation_number', tags: ['Next.js', 'Kotlin', 'Swift'] },
    { title: 'Febys', category: 'Marketplace & Mobile', desc: 'Multi-vendor e-commerce marketplace platform with global logistics integration.', icon: 'shopping_bag', tags: ['Next.js', 'Node.js', 'AWS'] },
    { title: 'MLS Mobile App', category: 'Marketplace & Mobile', desc: 'Online food shop mobile application with real-time GPS delivery tracking.', icon: 'restaurant', tags: ['React Native', 'Node.js', 'MySQL'] },
    { title: 'Bebambi', category: 'Marketplace & Mobile', desc: 'Premium baby care platform with personalized community resources and retail.', icon: 'child_care', tags: ['E-commerce', 'Mobile'] },
    { title: 'BUZZSHOW', category: 'Marketplace & Mobile', desc: 'Social networking application focusing on high-engagement video content.', icon: 'forum', tags: ['Native PHP', 'Social'] },
    
    // Fintech & Music
    { title: 'Bling Rock', category: 'Fintech & Music', desc: 'Music earnings and royalties tracker with global payment API integration.', icon: 'payments', tags: ['Vue 2', 'Stripe API', 'Kubernetes'] },
    { title: 'Royalty Radar', category: 'Fintech & Music', desc: 'Music analytics platform providing insights into streaming demographics and metrics.', icon: 'analytics', tags: ['Next.js', 'Firebase', 'ApexCharts'] },
    { title: 'Munshi', category: 'Fintech & Music', desc: 'Intuitive cash management and ERP system for business liquidity tracking.', icon: 'account_balance_wallet', tags: ['Fintech', 'ERP', 'SaaS'] },
    { title: 'The Playground', category: 'Fintech & Music', desc: 'Social music sharing platform for independent artists and collaborators.', icon: 'music_note', tags: ['Music', 'Social', 'Next.js'] }
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="reveal mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          <span className="portal-reveal"><span>Project</span></span> <span className="text-primary italic portal-reveal"><span>Registry</span></span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
          The full directory of high-impact technical initiatives delivered across Government, Telecom, and Fintech sectors.
        </p>
      </div>

      <div className="reveal flex flex-wrap gap-2 mb-16 delay-200">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              filter === cat 
              ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
              : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div key={filter} className="stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => (
          <div key={`${p.title}-${idx}`} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:shadow-2xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
            <div className="flex items-center justify-between mb-8">
              <div className="size-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-2xl">{p.icon}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.category}</span>
            </div>
            
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight uppercase tracking-tight group-hover:text-primary transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              {p.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-slate-800">
              {p.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 text-[9px] font-bold text-slate-400 rounded-md uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
