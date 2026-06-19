import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, Wrench } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  SERVICES,
  CITIES,
  SITE_URL,
  BUSINESS_NAME,
  PHONE,
  PHONE_HREF,
  CITY_LIST_TEXT,
} from '../data/seo';

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="pt-48 pb-32 px-4 text-center">
        <h1 className="text-4xl font-display font-extrabold text-brand-dark mb-6">
          Service Not Found
        </h1>
        <Link to="/" className="text-brand-green font-bold underline">
          Return Home
        </Link>
      </section>
    );
  }

  const url = `${SITE_URL}/services/${service.slug}`;
  const title = `${service.name} | ${BUSINESS_NAME} — Birmingham Metro & West Alabama`;
  const description = `${service.intro} Call ${PHONE}.`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.name,
        serviceType: service.name,
        description: service.intro,
        provider: { '@type': 'LandscapingBusiness', name: BUSINESS_NAME, telephone: PHONE, url: SITE_URL },
        areaServed: CITIES.map((c) => ({ '@type': 'City', name: `${c.name}, AL` })),
        url,
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${service.name} | ${BUSINESS_NAME}`} />
        <meta property="og:description" content={service.intro} />
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
            <Wrench className="w-4 h-4 text-brand-accent" /> {service.tagline}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-dark leading-[1.05] tracking-tighter mb-8">
            {service.name} <span className="text-brand-green">in Greater Birmingham &amp; West Alabama</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl font-medium leading-relaxed">
            {service.intro}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Link
              to="/consultation"
              className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3"
            >
              Get a Free Estimate <ArrowRight className="w-5 h-5" />
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

      {/* What's included */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark mb-12 tracking-tight">
            What&apos;s Included
          </h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {service.bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="font-semibold text-brand-dark leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service areas (internal links) */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-4 tracking-tight">
            {service.name} Across the Region
          </h2>
          <p className="text-lg text-gray-600 font-medium mb-10 max-w-2xl">
            We provide {service.name.toLowerCase()} in {CITY_LIST_TEXT}.
          </p>
          <div className="flex flex-wrap gap-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to={`/landscaping/${c.slug}-al`}
                className="bg-white px-5 py-3 rounded-full border border-gray-200 font-semibold text-brand-dark hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {service.name} in {c.name}, AL
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight">
            {service.name} FAQs
          </h2>
          <div className="flex flex-col gap-6">
            {service.faqs.map((f, i) => (
              <div key={i} className="border-l-4 border-brand-green pl-6">
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
          Ready to Start?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Schedule your free, no-pressure estimate for {service.name.toLowerCase()} today.
        </p>
        <Link
          to="/consultation"
          className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-3 group"
        >
          Get a Free Estimate{' '}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
