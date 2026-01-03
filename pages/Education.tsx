
import React from 'react';

const Education: React.FC = () => {
  const certifications = [
    {
      name: 'PMI Agile Certified Practitioner (PMI-ACP®)',
      issuer: 'Project Management Institute',
      icon: 'verified_user',
    },
    {
      name: 'Software Product Management Specialization',
      issuer: 'University of Alberta, Canada',
      icon: 'settings_suggest',
    },
    {
      name: 'Python for Data Science, AI & Development',
      issuer: 'IBM',
      icon: 'code',
    },
    {
      name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
      issuer: 'Udemy',
      icon: 'cloud_done',
    },
    {
      name: 'Google Project Management Certification',
      issuer: 'Google',
      icon: 'terminal',
    },
    {
      name: 'Agile Project Management',
      issuer: 'Google',
      icon: 'speed',
    },
    {
      name: 'Web & Mobile Testing with Selenium',
      issuer: 'University of Minnesota',
      icon: 'bug_report',
    },
    {
      name: 'Software Architecture & Design of Modern Large-Scale Systems',
      issuer: 'Udemy',
      icon: 'architecture',
    },
    {
      name: 'Google Analytics Certification',
      issuer: 'Google',
      icon: 'query_stats',
    },
    {
      name: 'Project Planning: Putting It All Together',
      issuer: 'Google',
      icon: 'event_note',
    },
    {
      name: 'Project Management Skills for Leaders',
      issuer: 'LinkedIn Learning',
      icon: 'groups',
    },
    {
      name: 'Agile Foundations',
      issuer: 'LinkedIn Learning',
      icon: 'foundation',
    },
    {
      name: 'Brand Management: Aligning Business, Brand & Behaviour',
      issuer: 'University College London (UCL)',
      icon: 'campaign',
    }
  ];

  const education = [
    {
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Project Management',
      university: 'University of Creative Arts, London',
      focus: 'Project Governance, Risk Management, Strategic Planning, Agile Delivery',
      icon: 'school'
    },
    {
      degree: 'Bachelor of Business Administration (BBA)',
      university: 'University of Hertfordshire',
      focus: 'Business Administration, Management & Operations',
      icon: 'history_edu'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-left">
      {/* Header */}
      <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
          Education & Certifications
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          Academic foundation in business strategy and project governance, augmented by continuous professional development in software architecture, cloud, and agile methodologies.
        </p>
      </div>

      {/* Education Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Academic Qualifications</h2>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="group relative flex flex-col md:flex-row rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-primary/50 transition-all shadow-sm">
              <div className="w-full md:w-48 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
                <div className="h-16 w-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{edu.icon}</span>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                {edu.specialization && (
                  <p className="text-primary font-semibold mt-1 text-sm md:text-base">{edu.specialization}</p>
                )}
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-1">{edu.university}</p>
                <div className="mt-4 flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-slate-400 mt-0.5">center_focus_strong</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                    Focus: {edu.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-3 mb-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">workspace_premium</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Certifications & Training</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col p-5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[22px]">{cert.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 truncate">
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex justify-end">
                <div className="h-1 w-12 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-primary transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          *Digital badges and official transcripts available upon request.
        </p>
      </div>
    </div>
  );
};

export default Education;
