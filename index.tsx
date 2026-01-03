
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Root = () => {
  useEffect(() => {
    const handleReveals = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.reveal, .reveal-zoom, .stagger-trigger').forEach(el => observer.observe(el));
      
      // Inject stagger indices
      document.querySelectorAll('.stagger-container').forEach(container => {
        Array.from(container.children).forEach((child, i) => {
          (child as HTMLElement).style.setProperty('--stagger-index', i.toString());
          child.classList.add('reveal');
          observer.observe(child);
        });
      });

      return observer;
    };

    let observer = handleReveals();

    const mutationObserver = new MutationObserver(() => {
      observer.disconnect();
      observer = handleReveals();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element missing");
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);
