
import React from 'react';

const Contact: React.FC = () => {
  const contacts = [
    { label: 'Direct Email', value: 'sabeekhan99@gmail.com', href: 'mailto:sabeekhan99@gmail.com', icon: 'mail', hint: 'Best for business inquiries' },
    { label: 'LinkedIn', value: 'linkedin.com/in/sabeerehman', href: 'https://linkedin.com/in/sabeerehman', icon: 'hub', hint: 'Network & Endorsements' },
    { label: 'Mobile', value: '+92 331 043 1314', href: 'tel:+923310431314', icon: 'call', hint: 'Direct conversation' }
  ];

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden bg-white dark:bg-background-dark">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[100px] animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.03] rounded-full blur-[80px] animate-blob delay-2000"></div>
      
      <div className="max-w-5xl w-full relative z-10 text-center">
        <div className="reveal-blur mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8 uppercase leading-none">Let's Connect</h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Open for executive technical leadership roles, strategic consulting, and speaking engagements across UK, Canada, and MENA regions.
          </p>
        </div>

        {/* Improved stagger grid visibility */}
        <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contacts.map((c, idx) => (
            <div key={idx} className="magnetic-card p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm group">
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <span className="material-symbols-outlined text-3xl">{c.icon}</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">{c.label}</p>
              <a href={c.href} className="text-base font-black text-slate-900 dark:text-white hover:text-primary transition-colors break-all leading-tight">
                {c.value}
              </a>
              <p className="mt-6 text-[10px] text-slate-400 italic font-medium">{c.hint}</p>
            </div>
          ))}
        </div>

        <div className="reveal-up flex flex-col items-center gap-10">
           <a 
             href="https://calendar.app.google/4dgvHWy9VyNPwcKv9" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex h-16 px-12 rounded-2xl bg-primary text-white font-bold text-base items-center gap-4 hover:scale-105 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all active:scale-95 group shadow-xl"
           >
             <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">calendar_today</span>
             Schedule a Strategic Session
           </a>
           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
             <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">United Kingdom</span>
             <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Canada</span>
             <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">MENA</span>
             <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Remote</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
