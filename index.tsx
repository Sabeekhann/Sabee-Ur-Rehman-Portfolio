
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

      // Observe reveal elements
      document.querySelectorAll('.reveal, .reveal-zoom, .stagger-container, .portal-reveal-parent').forEach(el => observer.observe(el));
      
      // Handle staggered children explicitly for dynamic content
      document.querySelectorAll('.stagger-container').forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, i) => {
          (child as HTMLElement).style.animationDelay = `${(i + 1) * 100}ms`;
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
