
import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Optimize images with Intersection Observer
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    // Cleanup
    return () => {
      lazyImages.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);

  useEffect(() => {
    // Optimize third-party scripts
    const optimizeThirdParty = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach((script) => {
        setTimeout(() => {
          const newScript = document.createElement('script');
          newScript.src = script.getAttribute('data-defer') || '';
          newScript.async = true;
          document.head.appendChild(newScript);
        }, 3000);
      });
    };

    // Run after page load
    if (document.readyState === 'complete') {
      optimizeThirdParty();
    } else {
      window.addEventListener('load', optimizeThirdParty);
    }

    return () => window.removeEventListener('load', optimizeThirdParty);
  }, []);
};
