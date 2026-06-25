import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// On prerendered pages the per-route <title>/<meta>/<link> tags are baked into
// <head> (marked data-prerendered) for crawlers. Remove them before React
// mounts so react-helmet-async / React 19 don't render a duplicate set on top.
document.head.querySelectorAll('[data-prerendered]').forEach((el) => el.remove());

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
