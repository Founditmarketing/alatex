import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reveal from '../components/Reveal';
import { SITE_URL, REVIEWS } from '../data/seo';

const url = `${SITE_URL}/reviews`;
const title = 'Client Reviews & Testimonials | AlaTex Landscaping';
const description =
  'Read what commercial property managers, facilities directors, and homeowners across Greater Birmingham and West Alabama say about AlaTex Landscaping.';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      url,
      name: title,
      description,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Reviews', item: url },
      ],
    },
  ],
};

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Client Reviews & Testimonials | AlaTex Landscaping" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-48 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-brand-dark leading-[1.05] tracking-tighter mb-6">
            What Our Clients Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-7 h-7 fill-brand-accent text-brand-accent" />
              ))}
            </div>
          </div>
          <p className="text-lg text-gray-500 font-medium">
            Trusted by commercial and residential clients across Greater Birmingham &amp; West Alabama.
          </p>
        </motion.div>
      </section>

      {/* Reviews grid */}
      <section className="py-12 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review, idx) => (
            <Reveal
              key={review.name}
              delay={(idx % 3) * 0.1}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-brand-green/5 h-full flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 text-lg font-medium leading-relaxed flex-1">"{review.text}"</p>
              <div>
                <div className="font-bold text-brand-dark text-lg">{review.name}</div>
                <div className="text-brand-green font-semibold mt-1">
                  {review.role ? `${review.role} · ` : ''}
                  {review.loc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Join Our Satisfied Clients.</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          See why property managers and homeowners across Alabama choose AlaTex.
        </p>
        <Link
          to="/consultation"
          className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl inline-flex items-center justify-center gap-3 group"
        >
          Get a Free Estimate <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  );
}
