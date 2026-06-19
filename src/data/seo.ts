// Central SEO / GEO data: one source of truth for the business NAP, the cities
// we serve, and the services we offer. Pages, schema, and internal links all
// read from here so geographic + service signals stay consistent for Google
// and AI search engines.

export const SITE_URL = 'https://www.alatexirrigation.com';
export const BUSINESS_NAME = 'AlaTex Landscaping';
export const PHONE = '(205) 310-0553';
export const PHONE_HREF = 'tel:+12053100553';
export const EMAIL = 'Bryan@alatexlandscaping.com';

export interface ServiceArea {
  slug: string; // URL: /landscaping/{slug}-al
  name: string;
  county: string;
  lat: number;
  lng: number;
  intro: string;
  local: string;
  faqs: { q: string; a: string }[];
}

// All cities are treated as equal-priority primary markets.
export const CITIES: ServiceArea[] = [
  {
    slug: 'hoover',
    name: 'Hoover',
    county: 'Jefferson & Shelby County',
    lat: 33.4054,
    lng: -86.8114,
    intro:
      "From Riverchase to Ross Bridge and The Preserve, Hoover homeowners and property managers trust AlaTex for full-service landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair. As Alabama's largest suburb, Hoover's mix of established neighborhoods and new construction demands crews who can handle everything from a single sprinkler-zone repair to a complete outdoor-living build.",
    local:
      "Hoover's red clay soil holds water and shifts with the seasons, which is exactly why proper grading, French drains, and engineered retaining walls matter here. We design drainage and hardscape systems built for Hoover's terrain, then light and irrigate them so they look their best year-round.",
    faqs: [
      {
        q: 'Do you install retaining walls in Hoover, AL?',
        a: 'Yes. We design and build engineered segmental, boulder, and poured retaining walls throughout Hoover, sized and drained for the local red-clay soil and sloped lots.',
      },
      {
        q: 'Can you repair my sprinkler system in Hoover?',
        a: 'Absolutely. AlaTex diagnoses and repairs sprinkler and irrigation systems across Hoover, AL — broken heads, leaks, valve and controller issues, coverage problems, and full system tune-ups.',
      },
    ],
  },
  {
    slug: 'vestavia-hills',
    name: 'Vestavia Hills',
    county: 'Jefferson & Shelby County',
    lat: 33.4488,
    lng: -86.7877,
    intro:
      "AlaTex provides Vestavia Hills with complete landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair. From Liberty Park to Cahaba Heights, we help the City of Vestavia Hills keep its signature wooded, hillside properties beautiful and functional.",
    local:
      "Vestavia's steep, wooded lots are prone to runoff and erosion. Our engineered retaining walls and drainage systems hold slopes in place, while low-voltage outdoor lighting makes hillside landscapes safe and striking after dark.",
    faqs: [
      {
        q: 'Do you handle drainage and erosion control in Vestavia Hills?',
        a: "Yes. Vestavia's hilly terrain makes drainage critical. We install French drains, surface drains, and graded swales, plus retaining walls with built-in drainage to stop erosion on sloped Vestavia Hills properties.",
      },
      {
        q: 'Can you install landscape lighting in Vestavia Hills?',
        a: 'We design and install low-voltage landscape and architectural lighting throughout Vestavia Hills — path lighting, uplighting for trees and facades, and smart, timer-controlled systems.',
      },
    ],
  },
  {
    slug: 'mountain-brook',
    name: 'Mountain Brook',
    county: 'Jefferson County',
    lat: 33.5007,
    lng: -86.7522,
    intro:
      "Mountain Brook's estates demand a higher standard. AlaTex delivers premium landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair across Crestline, English Village, Mountain Brook Village, and beyond.",
    local:
      'In Mountain Brook, mature tree canopies, established gardens, and architectural homes require a careful, detail-obsessed approach. We protect existing landscapes while building hardscapes, lighting, and irrigation that match the caliber of the property.',
    faqs: [
      {
        q: 'Do you do high-end landscape construction in Mountain Brook?',
        a: 'Yes. We build patios, walkways, outdoor living spaces, seating walls, and full landscape installations for Mountain Brook estates, working carefully around mature trees and established gardens.',
      },
      {
        q: 'Can you maintain and repair an existing irrigation system in Mountain Brook?',
        a: 'We repair, upgrade, and fine-tune irrigation and sprinkler systems throughout Mountain Brook, AL — from a single broken head to a full smart-controller retrofit.',
      },
    ],
  },
  {
    slug: 'irondale',
    name: 'Irondale',
    county: 'Jefferson County',
    lat: 33.5379,
    lng: -86.7058,
    intro:
      "AlaTex serves Irondale with complete landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair — for homes, HOAs, and commercial properties throughout the Whistle Stop city.",
    local:
      "Irondale's growing residential and commercial corridors need durable, low-maintenance landscapes. We build drainage and retaining systems that stand up to Alabama storms and keep properties looking sharp through every season.",
    faqs: [
      {
        q: 'Do you serve commercial properties in Irondale?',
        a: 'Yes. AlaTex handles both residential and commercial landscaping in Irondale, AL — including landscape construction, drainage, retaining walls, outdoor lighting, irrigation, and sprinkler repair for HOAs and businesses.',
      },
      {
        q: 'Can you fix drainage problems in my Irondale yard?',
        a: 'We diagnose and solve standing water, runoff, and erosion in Irondale with French drains, regrading, catch basins, and drainage-integrated retaining walls.',
      },
    ],
  },
  {
    slug: 'tuscaloosa',
    name: 'Tuscaloosa',
    county: 'Tuscaloosa County',
    lat: 33.2098,
    lng: -87.5692,
    intro:
      'AlaTex provides Tuscaloosa with full-service landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair for residential estates and commercial properties across West Alabama.',
    local:
      'From historic neighborhoods to new commercial developments, Tuscaloosa properties rely on AlaTex for drainage that handles heavy West Alabama rainfall and landscapes engineered to last.',
    faqs: [
      {
        q: 'What landscaping services do you offer in Tuscaloosa?',
        a: 'In Tuscaloosa, AL we provide landscaping, landscape construction, drainage and French drains, retaining walls, outdoor lighting, irrigation, and sprinkler repair for both residential and commercial properties.',
      },
      {
        q: 'Do you install French drains in Tuscaloosa?',
        a: 'Yes. We engineer French drain and surface drainage systems built for heavy West Alabama rainfall to protect Tuscaloosa foundations, hardscapes, and landscapes from water damage.',
      },
    ],
  },
  {
    slug: 'northport',
    name: 'Northport',
    county: 'Tuscaloosa County',
    lat: 33.229,
    lng: -87.5772,
    intro:
      'AlaTex provides Northport with landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair for residential and commercial properties across the river.',
    local:
      "Northport's mix of riverside lots and growing subdivisions calls for smart drainage and resilient hardscaping. We design and build outdoor spaces that handle the water and look great doing it.",
    faqs: [
      {
        q: 'Do you build retaining walls and hardscapes in Northport?',
        a: 'Yes. We design and build retaining walls, patios, walkways, and outdoor living spaces throughout Northport, AL, all engineered for the local soil and drainage conditions.',
      },
      {
        q: 'Can you repair sprinklers in Northport?',
        a: 'AlaTex repairs and tunes irrigation and sprinkler systems across Northport, AL — broken heads, leaks, valves, controllers, and seasonal tune-ups.',
      },
    ],
  },
];

export interface Service {
  slug: string; // URL: /services/{slug}
  name: string;
  short: string; // for cards / nav
  tagline: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
}

// New, dedicated pages for the services the client wants to rank for that
// previously had no coverage.
export const SERVICES: Service[] = [
  {
    slug: 'landscape-construction',
    name: 'Landscape Construction',
    short: 'Hardscapes, patios & full landscape installation.',
    tagline: 'Hardscapes, outdoor living & full landscape installation',
    intro:
      'From patios and walkways to complete outdoor living spaces, AlaTex designs and builds landscape construction projects that transform properties across Greater Birmingham and West Alabama.',
    bullets: [
      'Patios, walkways & paver hardscapes',
      'Outdoor living spaces, fire features & seating walls',
      'Planting design & full landscape installation',
      'Grading, soil preparation & sod installation',
      'Site work and builds for residential & commercial properties',
    ],
    faqs: [
      {
        q: 'What does landscape construction include?',
        a: 'Landscape construction covers the built elements of your yard — patios, walkways, retaining walls, outdoor living areas, grading, drainage, and full planting installation. AlaTex designs and builds all of it as one coordinated project.',
      },
      {
        q: 'Do you do both residential and commercial landscape construction?',
        a: 'Yes. We build for private estates, HOAs, and commercial properties throughout Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa, and Northport.',
      },
    ],
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    short: 'Engineered walls that hold slopes & stop erosion.',
    tagline: 'Engineered walls that hold slopes & stop erosion',
    intro:
      'AlaTex designs and builds engineered retaining walls that control erosion, create usable yard space, and protect foundations across Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa, and Northport.',
    bullets: [
      'Segmental block & natural boulder retaining walls',
      'Poured-in-place & reinforced structural walls',
      'Built-in drainage to relieve hydrostatic pressure',
      'Terracing & seating walls for outdoor living',
      'Repair of failing, bulging, or leaning walls',
    ],
    faqs: [
      {
        q: 'Do retaining walls need drainage?',
        a: 'Yes — drainage is what keeps a retaining wall standing. Every AlaTex wall is built with gravel backfill and drainage so water pressure cannot push it out of place. This is especially important in the Birmingham metro and West Alabama clay soils.',
      },
      {
        q: 'Can you repair an existing retaining wall?',
        a: 'We assess and repair leaning, cracked, or failing retaining walls, and rebuild them with proper drainage and reinforcement when needed.',
      },
    ],
  },
  {
    slug: 'outdoor-lighting',
    name: 'Outdoor Lighting',
    short: 'Low-voltage landscape & architectural lighting.',
    tagline: 'Low-voltage landscape & architectural lighting',
    intro:
      'Professional outdoor lighting from AlaTex adds beauty, safety, and security — illuminating landscapes, hardscapes, and architecture across the Birmingham metro and West Alabama.',
    bullets: [
      'Landscape & garden lighting design',
      'Path, step & safety lighting',
      'Architectural uplighting for trees and facades',
      'Smart, app-controlled & timer-based systems',
      'Energy-efficient LED installation & repair',
    ],
    faqs: [
      {
        q: 'Is landscape lighting worth it?',
        a: 'Outdoor lighting extends how long you can enjoy your yard, improves safety on steps and walkways, deters intruders, and dramatically increases curb appeal and property value.',
      },
      {
        q: 'Do you repair existing landscape lighting?',
        a: 'Yes. We troubleshoot and repair existing low-voltage lighting systems — transformers, wiring, fixtures, and controllers — and upgrade them to energy-efficient LED.',
      },
    ],
  },
  {
    slug: 'sprinkler-repair',
    name: 'Sprinkler Repair',
    short: 'Fast irrigation & sprinkler system repair.',
    tagline: 'Fast irrigation & sprinkler system repair',
    intro:
      "Sprinkler not working right? AlaTex repairs, tunes, and upgrades irrigation systems throughout Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa, and Northport — the service that started it all for owner Bryan Moore.",
    bullets: [
      'Broken & misaligned sprinkler head replacement',
      'Leak detection & valve repair',
      'Controller & smart-timer programming',
      'Zone troubleshooting & coverage correction',
      'Backflow testing, winterization & seasonal tune-ups',
    ],
    faqs: [
      {
        q: 'How fast can you repair my sprinkler system?',
        a: 'Most sprinkler repairs — broken heads, leaks, valve and controller issues — are handled quickly. Call (205) 310-0553 and we will get your system back up and running across the Birmingham metro and West Alabama.',
      },
      {
        q: 'Do you service all sprinkler brands?',
        a: 'Yes. We repair and program all major irrigation brands and controllers, and can upgrade older systems with smart, weather-responsive controls.',
      },
    ],
  },
];

// Combined service list used for the homepage grid, footer, and nav — includes
// the existing pages so every service the client named is one click away.
export const SERVICE_NAV: { name: string; href: string }[] = [
  { name: 'Commercial Landscaping', href: '/services/commercial' },
  { name: 'Landscape Construction', href: '/services/landscape-construction' },
  { name: 'Retaining Walls', href: '/services/retaining-walls' },
  { name: 'Drainage & French Drains', href: '/services/french-drain-installation' },
  { name: 'Outdoor Lighting', href: '/services/outdoor-lighting' },
  { name: 'Sprinkler Repair', href: '/services/sprinkler-repair' },
  { name: 'Irrigation Systems', href: '/services/commercial-irrigation' },
  { name: 'Commercial Maintenance', href: '/services/commercial-maintenance-tuscaloosa' },
];

export const CITY_NAMES = CITIES.map((c) => c.name);
// e.g. "Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa, and Northport"
export const CITY_LIST_TEXT =
  CITY_NAMES.slice(0, -1).join(', ') + ', and ' + CITY_NAMES[CITY_NAMES.length - 1];

// Client reviews — shared between the homepage teaser and the /reviews page so
// they never drift apart. The homepage shows the first 6; /reviews shows all.
export interface Review {
  name: string;
  loc: string;
  role?: string;
  text: string;
}

export const REVIEWS: Review[] = [
  { name: 'David Chen', loc: 'Vestavia Hills, AL', role: 'Property Manager', text: 'We trust them with our entire commercial portfolio. Their commitment to excellence has only elevated their standard of output.' },
  { name: 'Emily Rostova', loc: 'Irondale, AL', role: 'Facilities Director', text: "They completely overtook our corporate park's maintenance contract. The difference in operational footprint and aesthetic quality was immediate." },
  { name: 'Marcus Bell', loc: 'Birmingham, AL', role: 'Retail Operations', text: 'Their crews work around our business hours, document everything, and never leave a job half-finished. Exactly what a commercial account needs.' },
  { name: 'Karen Whitfield', loc: 'Hoover, AL', role: 'HOA Board President', text: "AlaTex took over our community's grounds maintenance contract and the consistency has been night and day. Reliable, professional, and easy to reach." },
  { name: 'Robert Lewis', loc: 'Tuscaloosa, AL', text: 'Zero disruption to our daily operations. They handled all landscaping upgrades while our facility stayed fully operational. Complete professionals.' },
  { name: 'James Harding', loc: 'Northport, AL', text: 'When we developed the new shopping center, AlaTex was the only firm that could handle the scale of the French drain systems required.' },
  { name: 'Sarah Jenkins', loc: 'Mountain Brook, AL', text: 'AlaTex engineered an entirely new irrigation protocol for our estate. Absolutely flawless execution.' },
  { name: 'Mike Roberts', loc: 'Hoover, AL', text: 'The retaining wall and drainage revamp we needed required absolute professionals. The AlaTex team executed with military precision.' },
];

export const AGGREGATE_RATING = { value: '5', count: '47' };

// Company stats used on the homepage Our Story section and the /about page.
export const STATS: { label: string; val: string }[] = [
  { label: 'Years in the Industry', val: '15+' },
  { label: 'Projects Completed', val: '500+' },
  { label: 'Five-Star Reviews', val: '47' },
  { label: 'Client Satisfaction', val: '100%' },
];
