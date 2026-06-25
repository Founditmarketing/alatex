/**
 * Build-time static prerendering.
 *
 * Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
 * For every route it renders the React app to an HTML string and writes a real
 * static file (dist/<route>/index.html) with that route's own
 * <title>/description/canonical/OG/JSON-LD injected into <head>.
 *
 * Why: the site is a client-rendered SPA, so without this every URL ships the
 * same empty shell + homepage <title>. Search engines (and especially AI
 * crawlers like GPTBot/ClaudeBot/PerplexityBot, which don't run JS) would see
 * no per-page content. Prerendering gives every city/service page real,
 * crawlable HTML — the point of the local-SEO/GEO build.
 *
 * The client still mounts with createRoot and re-renders, so this is purely a
 * crawler/first-paint optimization with no hydration coupling.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// Built by `vite build --ssr src/entry-server.tsx --outDir dist-server` in the
// build pipeline; it does not exist until then, hence the ts-ignore.
// @ts-ignore
import { render } from '../dist-server/entry-server.js';
import { CITIES, SERVICES } from '../src/data/seo';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.join(distDir, 'index.html');

// Explicit static routes — mirror the non-dynamic <Route>s in src/AppRoutes.tsx.
const STATIC_ROUTES = [
  '/',
  '/services/commercial',
  '/services/grounds-maintenance-contracts',
  '/services/property-management-accounts',
  '/services/zero-disruption-maintenance',
  '/services/commercial-irrigation',
  '/services/drainage-erosion-control',
  '/consultation',
  '/about',
  '/reviews',
  '/case-studies/chick-fil-a',
  '/privacy-policy',
  '/terms-of-service',
];

// Dynamic routes, derived from the single source of truth in src/data/seo.ts so
// they can never drift from the pages the app actually renders.
const SERVICE_ROUTES = SERVICES.map((s) => `/services/${s.slug}`);
const LOCATION_ROUTES = CITIES.map((c) => `/landscaping/${c.slug}-al`);

const routes = [...new Set([...STATIC_ROUTES, ...SERVICE_ROUTES, ...LOCATION_ROUTES])];

// Strip the head tags that every page also sets via react-helmet-async, so the
// injected per-page tags don't duplicate the homepage defaults baked into
// index.html. og:image / og:site_name / twitter:* are intentionally kept as
// global fallbacks (no page overrides them).
function stripConflictingHead(html: string): string {
  return html
    .replace(/[ \t]*<title>[\s\S]*?<\/title>\r?\n?/i, '')
    .replace(/[ \t]*<meta\s+property="og:(?:title|description|url|type)"[^>]*>\r?\n?/gi, '')
    .replace(/[ \t]*<meta\s+name="description"[^>]*>\r?\n?/gi, '');
}

// react-helmet-async@3 renders <title>/<meta>/<link> as native tags that React
// 19 hoists to <head> in the browser. In the head-less SSR fragment they land
// at the top of the body instead, so we pull every such tag out of the rendered
// markup and move it into <head>. The app body never renders these elements
// except through <Helmet>, so extracting all of them is safe. JSON-LD
// (<script type="application/ld+json">) is intentionally left in the body — it
// is valid structured data anywhere in the document.
function extractHead(html: string): { head: string; body: string } {
  const tags: string[] = [];
  const collect = (m: string) => {
    // Mark the relocated tags so the client (src/main.tsx) can remove them
    // before React mounts — otherwise React 19's own metadata renders a
    // duplicate set on top of these static ones in JS-rendering crawlers.
    tags.push(m.replace(/^<(title|meta|link)\b/i, '<$1 data-prerendered=""'));
    return '';
  };
  const body = html
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, collect)
    .replace(/<meta\b[^>]*?>/gi, collect)
    .replace(/<link\b[^>]*?>/gi, collect);
  return { head: tags.join('\n    '), body };
}

const template = fs.readFileSync(templatePath, 'utf-8');

// Guard: prerender reads dist/index.html as the shell template AND writes the
// home route back to it. Running prerender again without a fresh `vite build`
// would feed an already-prerendered file back in as the template and corrupt
// every page. Detect the rendered Layout root and bail with a clear message.
if (template.includes('<div id="root"><div class="min-h-screen')) {
  console.error('\n✗ dist/index.html is already prerendered — its shell was consumed.');
  console.error('  Run `npm run build` (which rebuilds the clean shell first), not `prerender` alone.\n');
  process.exit(1);
}

let ok = 0;
const failures: string[] = [];

for (const route of routes) {
  try {
    const { html } = render(route);
    const { head: headTags, body } = extractHead(html);

    let page = stripConflictingHead(template);
    // Inject per-route head tags right before </head> (use a function replacer
    // so any '$' in the tag content can't be mis-read as a replacement pattern).
    page = page.replace('</head>', () => `    ${headTags}\n  </head>`);
    // Replace the empty #root shell with the rendered markup.
    page = page.replace(
      /(<div id="root">)[\s\S]*?(<\/div>)/,
      (_m, open: string, close: string) => `${open}${body}${close}`,
    );

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page, 'utf-8');
    ok++;
    console.log(`  ✓ ${route}  →  ${path.relative(distDir, outPath)}`);
  } catch (err) {
    failures.push(route);
    console.error(`  ✗ ${route}  —  ${(err as Error).message}`);
  }
}

console.log(`\nPrerendered ${ok}/${routes.length} routes.`);
if (failures.length) {
  console.error(`Failed routes: ${failures.join(', ')}`);
  process.exit(1);
}
