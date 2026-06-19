import { motion } from 'motion/react';
import { ArrowRight, MapPin, CheckCircle2, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CITIES,
  SERVICE_NAV,
  SITE_URL,
  BUSINESS_NAME,
  PHONE,
  PHONE_HREF,
} from '../data/seo';

export default function LocationPage() {
  const { slug } = useParams();
  const city = CITIES.find((c) => `${c.slug}-al` === slug || c.slug === slug);

  if (!city) {
    return (
      <section className="pt-48 pb-32 px-4 text-center">
        <h1 className="text-4xl font-display font-extrabold text-brand-dark mb-6">
          Service Area Not Found
        </h1>
        <Link to="/" className="text-brand-green font-bold underline">
          Return Home
        </Link>
      </section>
    );
  }

  const url = `${SITE_URL}/landscaping/${city.slug}-al`;
  const title = `Landscaping in ${city.name}, AL | Construction, Drainage, Retaining Walls & Outdoor Lighting`;
  const description = `${BUSINESS_NAME} provides landscaping, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair in ${city.name}, AL. Call ${PHONE}.`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LandscapingBusiness',
        name: `${BUSINESS_NAME} — ${city.name}, AL`,
        url,
        telephone: PHONE,
        areaServed: {
          '@type': 'City',
          name: `${city.name}, Alabama`,
          geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
        },
        description,
      },
      {
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/#service-areas` },
          { '@type': 'ListItem', position: 3, name: `${city.name}, AL`, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`Landscaping in ${city.name}, AL | ${BUSINESS_NAME}`} />
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
            <MapPin className="w-4 h-4 text-brand-accent" /> Serving {city.name}, {city.county}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-dark leading-[1.05] tracking-tighter mb-8">
            Landscaping in <span className="text-brand-green">{city.name}, Alabama</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl font-medium leading-relaxed">
            {city.intro}
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

      {/* Services in this city */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark mb-4 tracking-tight">
            Our Services in {city.name}
          </h2>
          <p className="text-lg text-gray-500 font-medium mb-12 max-w-2xl">
            Full-service residential and commercial outdoor solutions, delivered locally in {city.name}.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SERVICE_NAV.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group flex items-center justify-between gap-4 bg-[#F9FAFB] hover:bg-brand-dark p-6 rounded-2xl border border-gray-100 transition-all duration-300"
              >
                <span className="font-bold text-brand-dark group-hover:text-white transition-colors">
                  {s.name} in {city.name}
                </span>
                <ArrowRight className="w-5 h-5 text-brand-green shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">
            Local Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">
            Built for {city.name} Properties
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{city.local}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight">
            {city.name} Landscaping FAQs
          </h2>
          <div className="flex flex-col gap-6">
            {city.faqs.map((f, i) => (
              <div key={i} className="border-l-4 border-brand-green pl-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{f.q}</h3>
                <p className="text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other service areas (internal links) */}
      <section className="py-16 bg-brand-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
            We Also Serve
          </h2>
          <div className="flex flex-wrap gap-3">
            {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                to={`/landscaping/${c.slug}-al`}
                className="bg-white px-5 py-3 rounded-full border border-gray-200 font-semibold text-brand-dark hover:border-brand-green hover:text-brand-green transition-colors"
              >
                Landscaping in {c.name}, AL
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">
          Serving {city.name}, AL.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Landscaping, construction, drainage, retaining walls, lighting, and sprinkler repair —
          done right, the first time.
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
