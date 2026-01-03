
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const trustedBrands = [
    { name: 'BAT', color: 'hover:text-[#004e92]' },
    { name: 'U.S. Fire Admin', color: 'hover:text-[#c1272d]' },
    { name: 'friendi', color: 'hover:text-[#ef4136]' },
    { name: 'Virgin Mobile', color: 'hover:text-[#e11b22]' },
    { name: 'ESGTree', color: 'hover:text-[#2d5a27]' },
    { name: 'Bigscoots', color: 'hover:text-[#ff6600]' },
    { name: 'PCB', color: 'hover:text-[#006a4e]' },
    { name: 'Gov of Punjab', color: 'hover:text-[#00843d]' },
    { name: 'UNODC', color: 'hover:text-[#00adef]' }
  ];

  const coreFocus = [
    { title: 'Strategic Delivery', desc: 'Orchestrating complex software lifecycles for global enterprises with precision.', icon: 'rocket_launch' },
    { title: 'Team Scaling', desc: 'Managing multi-region engineering teams of 40+ to achieve rapid growth.', icon: 'groups' },
    { title: 'Product Vision', desc: 'Bridging the gap between executive strategy and tactical engineering reality.', icon: 'architecture' }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Dynamic Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-white dark:bg-background-dark py-20">
        <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-10 left-[-5%] w-80 h-80 bg-blue-500/5 rounded-full blur-[90px] animate-blob delay-1000"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="reveal mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Senior Technical Product Manager
              </span>
            </div>
            
            <h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-10 uppercase">
              <span className="portal-reveal"><span>Architecting Global</span></span> <br/>
              <span className="text-primary italic portal-reveal"><span className="delay-100">Success at Scale</span></span>
            </h1>
            
            <p className="reveal text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium delay-300">
              Leading high-stakes engineering operations for <span className="text-slate-900 dark:text-white font-bold">Fortune 500 giants</span> across 5+ global regions. Bridging complexity with execution.
            </p>

            <div className="reveal flex flex-col sm:flex-row items-center gap-5 delay-500">
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 font-black text-sm uppercase tracking-widest transition-all hover:translate-y-[-4px] hover:shadow-2xl active:scale-95"
              >
                Project Registry
              </Link>
              <Link
                to="/experience"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-transparent px-10 font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Executive Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-16 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="reveal text-center mb-12">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Global Leadership Footprint</p>
        </div>
        <div className="marquee-container relative w-full overflow-hidden">
          <div className="flex items-center gap-16 md:gap-24 whitespace-nowrap animate-marquee w-fit py-4">
            {[...trustedBrands, ...trustedBrands].map((brand, idx) => (
              <span key={idx} className={`text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-200 dark:text-slate-800/60 transition-colors ${brand.color} cursor-default select-none`}>
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-28 bg-white dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreFocus.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-4">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase leading-none">{item.title}</h3>
                <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="stagger-container grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center group">
              <p className="text-6xl font-black text-white mb-2 group-hover:text-primary transition-colors">9+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Experience</p>
            </div>
            <div className="text-center group">
              <p className="text-6xl font-black text-white mb-2 group-hover:text-primary transition-colors">40+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">HC Managed</p>
            </div>
            <div className="text-center group">
              <p className="text-6xl font-black text-white mb-2 group-hover:text-primary transition-colors">5+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Regions</p>
            </div>
            <div className="text-center group">
              <p className="text-6xl font-black text-white mb-2 group-hover:text-primary transition-colors">100%</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
