
import React from 'react';

const Education: React.FC = () => {
  const certifications = [
    { name: 'PMI Agile Certified Practitioner (PMI-ACP®)', issuer: 'Project Management Institute', icon: 'verified_user' },
    { name: 'Software Product Management Specialization', issuer: 'University of Alberta, Canada', icon: 'settings_suggest' },
    { name: 'Python for Data Science, AI & Development', issuer: 'IBM', icon: 'code' },
    { name: 'AWS Certified Solutions Architect – Associate (SAA-C03)', issuer: 'Udemy', icon: 'cloud_done' },
    { name: 'Google Project Management Certification', issuer: 'Google', icon: 'terminal' },
    { name: 'Agile Project Management', issuer: 'Google', icon: 'speed' },
    { name: 'Web & Mobile Testing with Selenium', issuer: 'University of Minnesota', icon: 'bug_report' },
    { name: 'Software Architecture & Modern Systems', issuer: 'Udemy', icon: 'architecture' },
    { name: 'Google Analytics Certification', issuer: 'Google', icon: 'query_stats' },
    { name: 'Project Planning: Putting It All Together', issuer: 'Google', icon: 'event_note' },
    { name: 'Project Management Skills for Leaders', issuer: 'LinkedIn Learning', icon: 'groups' },
    { name: 'Agile Foundations', issuer: 'LinkedIn Learning', icon: 'foundation' },
    { name: 'Brand Management & Business Strategy', issuer: 'UCL', icon: 'campaign' }
  ];

  const education = [
    { degree: 'Master of Business Administration (MBA)', university: 'University of Creative Arts, London', focus: 'Project Governance & Risk', icon: 'school' },
    { degree: 'Bachelor of Business Administration (BBA)', university: 'University of Hertfordshire', focus: 'Management & Operations', icon: 'history_edu' }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="reveal mb-20 space-y-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          Academic <span className="text-primary italic">Foundation</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl font-medium">
          Continuous professional development in software architecture, cloud, and agile methodologies to stay at the vanguard of technical leadership.
        </p>
      </div>

      <section className="mb-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-3xl">account_balance</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Academic Qualifications</h2>
        </div>
        
        <div className="stagger-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div key={idx} className="magnetic-card flex flex-col md:flex-row rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="w-full md:w-40 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-8">
                <span className="material-symbols-outlined text-5xl text-primary">{edu.icon}</span>
              </div>
              <div className="flex-1 p-8">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">{edu.degree}</h3>
                <p className="text-primary font-bold text-sm mb-4">{edu.university}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{edu.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-4 mb-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-3xl">workspace_premium</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Professional Certifications</h2>
        </div>

        <div className="stagger-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div key={idx} className="magnetic-card p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center gap-6">
              <div className="size-14 shrink-0 rounded-2xl bg-slate-50 dark:bg-slate-800 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">{cert.icon}</span>
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white leading-tight mb-1">{cert.name}</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Education;
