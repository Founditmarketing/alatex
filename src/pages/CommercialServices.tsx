import { motion } from 'motion/react';
import { ArrowRight, Phone, Building2, CheckCircle2, ClipboardCheck, CalendarClock, ShieldCheck, Droplets, Trees, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reveal from '../components/Reveal';
import { SITE_URL, BUSINESS_NAME, PHONE, PHONE_HREF, CITY_LIST_TEXT } from '../data/seo';

const url = `${SITE_URL}/services/commercial`;
const title = 'Commercial Landscaping & Grounds Maintenance | Birmingham Metro & West Alabama | AlaTex';
const description =
  'AlaTex provides commercial landscaping and grounds maintenance for property managers and facilities directors across Greater Birmingham and West Alabama — maintenance contracts, commercial irrigation, and property-management accounts. Call (205) 310-0553.';

const scope = [
  { icon: Trees, title: 'Grounds Maintenance Contracts', desc: 'Scheduled mowing, edging, pruning, mulch, and seasonal color on a documented, year-round contract — your property always represented perfectly.', link: '/services/grounds-maintenance-contracts' },
  { icon: Droplets, title: 'Commercial Irrigation', desc: 'Design, installation, repair, and smart-controller management of large-scale irrigation systems that cut water waste.', link: '/services/commercial-irrigation' },
  { icon: Building2, title: 'Property Management Accounts', desc: 'A single accountable vendor for multi-site portfolios, office parks, retail centers, and HOA communities.', link: '/services/property-management-accounts' },
  { icon: Hammer, title: 'Landscape Construction & Hardscapes', desc: 'Hardscapes, retaining walls, and full landscape installation that elevate the curb appeal of commercial properties.', link: '/services/landscape-construction' },
  { icon: Droplets, title: 'Drainage & Erosion Control', desc: 'French drains, regrading, and catch basins that protect foundations, parking areas, and landscaping from standing water.', link: '/services/drainage-erosion-control' },
  { icon: ClipboardCheck, title: 'Zero-Disruption Maintenance', desc: 'Crews that work around your business hours and brand standards, with proactive reporting on every visit.', link: '/services/zero-disruption-maintenance' },
];

const why = [
  { icon: ShieldCheck, title: 'Corporate Accountability', desc: 'Fully licensed and insured, with rigorous adherence to compliance, safety, and brand-standard requirements.' },
  { icon: CalendarClock, title: 'Zero-Disruption Scheduling', desc: 'We operate on your timeline, with minimal footprint to daily operations and customer traffic.' },
  { icon: ClipboardCheck, title: 'Proactive Reporting', desc: 'Documented visits and preemptive audits so issues are caught before they become problems — or complaints.' },
];

const faqs = [
  { q: 'Do you offer year-round commercial maintenance contracts?', a: 'Yes. Most commercial clients are on a scheduled, year-round grounds maintenance contract covering mowing, pruning, seasonal color, irrigation oversight, and reporting — a single accountable vendor for the whole property.' },
  { q: 'What types of commercial properties do you service?', a: 'Office parks, corporate campuses, retail centers, quick-service restaurants, industrial and logistics facilities, multi-family communities, and HOAs across Greater Birmingham and West Alabama.' },
  { q: 'Can you work around our business hours?', a: 'Absolutely. Our zero-disruption scheduling means crews work around your operating hours and customer traffic so your business never stops.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Landscaping & Grounds Maintenance',
      serviceType: 'Commercial Landscaping',
      description,
      provider: { '@type': 'LandscapingBusiness', name: BUSINESS_NAME, telephone: PHONE, url: SITE_URL },
      areaServed: ['Hoover, AL', 'Vestavia Hills, AL', 'Mountain Brook, AL', 'Irondale, AL', 'Tuscaloosa, AL', 'Northport, AL'],
      url,
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Commercial Landscaping', item: url },
      ],
    },
  ],
};

export default function CommercialServices() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Commercial Landscaping & Grounds Maintenance | AlaTex" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
            <Building2 className="w-4 h-4 text-brand-accent" /> For Property Managers &amp; Facilities Directors
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-dark leading-[1.05] tracking-tighter mb-8">
            Commercial Landscaping &amp; <span className="text-brand-green">Grounds Maintenance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl font-medium leading-relaxed">
            One accountable partner for your entire property. AlaTex delivers contract grounds maintenance, commercial
            irrigation, and full property-management landscaping across Greater Birmingham and West Alabama — built to
            the compliance, scheduling, and brand standards institutional clients demand.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Link
              to="/consultation"
              className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
            >
              Request a Commercial Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-3 text-brand-dark font-bold text-lg bg-white py-4 px-6 rounded-full border border-gray-100 shadow-sm hover:text-brand-green transition-colors"
            >
              <Phone className="w-5 h-5 text-brand-accent" /> {PHONE}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Scope of commercial work */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Scope of Work</div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark tracking-tight">
              Everything Your Commercial Property Needs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {scope.map((s, idx) => (
              <Reveal
                key={s.title}
                delay={idx * 0.08}
                className="bg-[#F9FAFB] p-8 rounded-[2rem] border border-gray-100 hover:border-brand-green/30 transition-colors duration-500 h-full"
              >
                <div className="w-14 h-14 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-brand-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                {s.link && (
                  <Link to={s.link} className="inline-flex items-center gap-2 font-bold text-sm text-brand-dark hover:text-brand-green transition-colors uppercase tracking-widest">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why property managers choose AlaTex */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark mb-12 md:mb-16 tracking-tight max-w-3xl">
            Why Property Managers Choose AlaTex
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {why.map((w, idx) => (
              <Reveal key={w.title} delay={idx * 0.08} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mb-6">
                  <w.icon className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{w.title}</h3>
                <p className="text-gray-500 leading-relaxed">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chick-fil-A proof band */}
      <section className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-green/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4">Proven on High-Volume Sites</div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 tracking-tight leading-tight">
            Trusted by national brands like <span className="text-brand-green">Chick-fil-A.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We maintain high-traffic commercial properties without disrupting operations — passing corporate brand-standard
            inspections and cutting water waste by 34% on a flagship quick-service location.
          </p>
          <Link to="/case-studies/chick-fil-a" className="inline-flex items-center gap-2 font-bold text-brand-accent hover:text-white transition-colors uppercase tracking-widest">
            Read the case study <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Service area + FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            AlaTex provides commercial landscaping and grounds maintenance in {CITY_LIST_TEXT}, plus the greater
            Birmingham metro and West Alabama.
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight">
            Commercial Landscaping FAQs
          </h2>
          <div className="flex flex-col gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-l-4 border-brand-green pl-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">
          Put One Team in Charge of Your Grounds.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Get a commercial maintenance proposal tailored to your property and schedule.
        </p>
        <Link
          to="/consultation"
          className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-3 group"
        >
          Request a Commercial Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
