
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Root = () => {
  useEffect(() => {
    // Robust animation handler
    const initAnimations = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { 
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: '0px 0px -20px 0px' 
      });

      // Targets: anything that starts with "reveal" or has "stagger-container"
      const targets = document.querySelectorAll('[class*="reveal"], .stagger-container, .portal-reveal-parent');
      targets.forEach(el => observer.observe(el));
      
      // Explicitly handle stagger delays
      document.querySelectorAll('.stagger-container').forEach(container => {
        Array.from(container.children).forEach((child, i) => {
          (child as HTMLElement).style.animationDelay = `${(i + 1) * 100}ms`;
        });
      });

      return observer;
    };

    let observer = initAnimations();

    // Re-bind when DOM changes (navigation/filtering)
    const mutationObserver = new MutationObserver(() => {
      observer.disconnect();
      observer = initAnimations();
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
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Root />);
} else {
  console.error("Critical: Root element not found in DOM");
}
