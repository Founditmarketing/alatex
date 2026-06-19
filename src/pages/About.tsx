import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reveal from '../components/Reveal';
import { SITE_URL, BUSINESS_NAME, PHONE, PHONE_HREF, STATS } from '../data/seo';

const url = `${SITE_URL}/about`;
const title = 'About AlaTex Landscaping | Commercial Grounds Maintenance Across Alabama';
const description =
  'AlaTex Landscaping is a multi-crew commercial and residential landscaping company serving Greater Birmingham and West Alabama. Built from the ground up by owner-operator Bryan Moore. Fully licensed and insured.';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      url,
      name: title,
      description,
    },
    {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: SITE_URL,
      telephone: PHONE,
      founder: { '@type': 'Person', name: 'Bryan Moore' },
      description,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: url },
      ],
    },
  ],
};

const credentials = [
  'Fully licensed and insured for commercial and residential work',
  'Multi-crew operation with a dedicated fleet',
  'Trusted by national brands, including Chick-fil-A',
  'Documented, brand-standard maintenance and reporting',
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About AlaTex Landscaping" />
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
          <div className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">About AlaTex</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-dark leading-[1.05] tracking-tighter mb-8">
            Built From the Ground Up — <span className="text-brand-green">Now Built for Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl font-medium leading-relaxed">
            AlaTex Landscaping is a multi-crew commercial and residential landscaping company serving Greater Birmingham
            and West Alabama.
          </p>
        </motion.div>
      </section>

      {/* Story (commercial-forward) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            AlaTex was built from the ground up by owner-operator Bryan Moore — who brought a corporate operations and
            supply-management background to an industry that too often runs on guesswork. That operational discipline is
            the foundation of how we run every account today.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            What began with hands-on irrigation and landscape work has grown into a multi-crew operation running
            grounds-maintenance contracts, commercial irrigation, and property-management accounts across Alabama. We
            scaled from a single work truck to a full fleet — without ever losing the accountability that earned us our
            first clients.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Today, property managers and facilities directors trust AlaTex for the same reason our earliest clients did:
            we show up, we operate to a documented standard, and we treat your property like our reputation depends on
            it — because it does.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="border-l-2 border-brand-green pl-6">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.val}</div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-brand-green font-bold uppercase text-sm tracking-widest mb-6">
            <ShieldCheck className="w-5 h-5" /> Commercial Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight">
            Built to Meet Institutional Standards
          </h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="font-semibold text-brand-dark leading-snug">{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/case-studies/chick-fil-a" className="inline-flex items-center gap-2 font-bold text-sm text-brand-dark hover:text-brand-green transition-colors uppercase tracking-widest">
              See our commercial case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Let&apos;s Talk About Your Property.</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Commercial or residential, every account gets the same documented standard of care.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            to="/consultation"
            className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-3 group"
          >
            Get a Free Estimate <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href={PHONE_HREF} className="inline-flex items-center gap-3 text-white font-bold text-lg hover:text-brand-accent transition-colors">
            <Phone className="w-5 h-5 text-brand-accent" /> {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
