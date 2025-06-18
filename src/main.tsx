
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove loading state and enable transitions after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.documentElement.classList.add('loaded');
  }, 100);
});

createRoot(document.getElementById("root")!).render(<App />);
