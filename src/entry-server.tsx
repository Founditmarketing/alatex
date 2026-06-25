import { renderToString } from 'react-dom/server';
// In react-router v7 StaticRouter is exported from the package root
// (there is no `react-router-dom/server` subpath as there was in v6).
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './AppRoutes';

/**
 * Server entry used by build-time prerendering (see scripts/prerender.ts).
 * Renders a single route to an HTML string.
 *
 * react-helmet-async@3 emits plain <title>/<meta>/<link> tags that React 19
 * hoists to <head> in the browser. Because we render a head-less fragment here,
 * renderToString leaves them at the top of the output instead — prerender.ts
 * relocates them into <head>.
 *
 * This is intentionally NOT a hydration entry: the client (src/main.tsx) still
 * mounts with createRoot and re-renders, so the prerendered HTML exists purely
 * for crawlers and first paint. That avoids any hydration mismatch from the
 * ?city=/?region= geo-targeting, motion animations, or IntersectionObserver.
 */
export function render(url: string): { html: string } {
  const html = renderToString(
    <HelmetProvider>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
  return { html };
}
