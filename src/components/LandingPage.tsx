import { motion } from 'motion/react';
import { ArrowRight, Droplets, Hammer, Building2, Star, CheckCircle2, MapPin, Layers, Lightbulb, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Reveal from './Reveal';
import { useGeo } from '../hooks/useGeo';
import { CITIES, REVIEWS, STATS } from '../data/seo';

const services = [
  { icon: Building2, title: 'Commercial Landscaping', desc: 'Grounds-maintenance contracts, commercial irrigation, and property-management accounts — one accountable partner.', link: '/services/commercial' },
  { icon: Hammer, title: 'Landscape Construction', desc: 'Patios, walkways, outdoor living spaces, and full landscape installation — built from the ground up.', link: '/services/landscape-construction' },
  { icon: Layers, title: 'Retaining Walls', desc: 'Engineered segmental, boulder, and structural retaining walls with built-in drainage to hold slopes and stop erosion.', link: '/services/retaining-walls' },
  { icon: Droplets, title: 'Drainage & Erosion Control', desc: 'French drains, regrading, and catch basins that protect foundations, parking areas, and landscaping from standing water.', link: '/services/drainage-erosion-control' },
  { icon: Lightbulb, title: 'Outdoor Lighting', desc: 'Low-voltage landscape and architectural lighting for beauty, safety, and security after dark.', link: '/services/outdoor-lighting' },
  { icon: Wrench, title: 'Sprinkler Repair', desc: 'Fast repair, tuning, and upgrades for irrigation systems — broken heads, leaks, valves, and controllers.', link: '/services/sprinkler-repair' },
];

export default function LandingPage() {
  const { locName } = useGeo();
  return (
    <>
      <Helmet>
        <title>Commercial Landscaping & Grounds Maintenance | Greater Birmingham & West Alabama | AlaTex</title>
        <meta name="description" content="Commercial landscaping, grounds maintenance, irrigation, drainage, retaining walls & outdoor lighting in Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa & Northport, AL. Call (205) 310-0553." />
        <link rel="canonical" href="https://www.alatexirrigation.com/" />
        <meta property="og:title" content="Commercial Landscaping & Grounds Maintenance | AlaTex Landscaping" />
        <meta property="og:description" content="Commercial grounds maintenance, irrigation, drainage, retaining walls & outdoor lighting across Greater Birmingham and West Alabama." />
        <meta property="og:url" content="https://www.alatexirrigation.com/" />
      </Helmet>

      {/* SEO: Internal navigation links */}
      <nav aria-label="Page sections" className="sr-only">
        <a href="#services">Services</a>
        <a href="#service-areas">Service Areas</a>
        <a href="#reviews">Reviews</a>
        <a href="#our-story">About</a>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[10vw] sm:text-[8vw] lg:text-[4.5vw] xl:text-[5vw] font-display font-extrabold text-brand-dark leading-[1] tracking-tighter mb-8 max-w-3xl">
            Commercial Landscaping &amp; <br />
            <span className="text-brand-green relative inline-block">
              Grounds Maintenance
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent transform origin-left"></div>
            </span> in Alabama
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl font-medium leading-relaxed">
            Contract grounds maintenance, commercial irrigation, and full property-management landscaping for businesses across Greater Birmingham &amp; West Alabama — plus premium residential work. Trusted by national brands like Chick-fil-A.
          </p>
          <p className="text-sm text-gray-400 mb-6 font-medium flex items-center gap-1">
            <span aria-hidden="true">📍</span> Serving Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa &amp; Northport, Alabama
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link to="/consultation" className="w-full sm:w-auto bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3">
              Request a Quote
            </Link>
            <Link to="/services/commercial" className="w-full sm:w-auto bg-white hover:border-brand-green text-brand-dark px-8 py-5 rounded-full font-bold text-lg border border-gray-200 shadow-sm transition-all duration-300 flex items-center justify-center gap-2">
              Commercial Services <ArrowRight className="w-5 h-5 text-brand-green" />
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold text-gray-400 mt-6">
            <CheckCircle2 className="w-5 h-5 text-brand-green" /> Fully Licensed &amp; Insured
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%] relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <img src={'/commercial_hero.webp'} alt="Commercial landscaping and grounds maintenance by AlaTex" className="w-full h-full object-cover" fetchPriority="high" width="800" height="1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
          </div>

          {/* Asymmetric Floating Benchmark */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:-left-12 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[280px]"
          >
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-brand-accent text-brand-accent" />)}
            </div>
            <p className="text-sm sm:text-base font-bold text-brand-dark leading-snug">"The absolute highest standard of landscaping in {locName}."</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Landscaping & Outdoor Services</h2>
            <p className="text-xl text-gray-500 font-medium">Commercial grounds maintenance, landscape construction, drainage, retaining walls, outdoor lighting, and sprinkler repair for commercial properties and residential estates across {locName}.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <Reveal
                key={idx}
                delay={(idx % 3) * 0.1}
                className="bg-[#F9FAFB] p-8 md:p-10 rounded-[2rem] border border-gray-100 hover:border-brand-green/30 transition-colors duration-500 group relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-green/10 transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-500 group-hover:bg-brand-dark">
                  <service.icon className="w-8 h-8 text-brand-dark group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-6">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 font-bold text-sm text-brand-dark hover:text-brand-green transition-colors uppercase tracking-widest mt-auto relative z-10">
                  View Service details <ArrowRight className="w-4 h-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas — local SEO landing links */}
      <section id="service-areas" className="py-24 md:py-32 bg-brand-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Service Areas</div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Proudly Serving {locName}</h2>
            <p className="text-xl text-gray-500 font-medium">Local crews, fast response, and the same standard of excellence in every community we serve.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                to={`/landscaping/${city.slug}-al`}
                className="group flex items-center justify-between gap-4 bg-white hover:bg-brand-dark p-7 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-brand-green shrink-0" />
                  <span className="font-bold text-lg text-brand-dark group-hover:text-white transition-colors">{city.name}, AL</span>
                </span>
                <ArrowRight className="w-5 h-5 text-brand-green shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Chick-fil-A Authority — commercial credential */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 text-center">Commercial Excellence</div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-16 text-center leading-tight tracking-tight">Meeting Corporate Standards. <br className="hidden md:block" /><span className="text-brand-green">Precision Implementation.</span></h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl border border-gray-700">
              <img src={'/commercial_services.webp'} alt="AlaTex commercial irrigation, drainage, and grounds maintenance services" className="w-full h-full object-cover" loading="lazy" width="800" height="600" />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-6 items-start">
                <CheckCircle2 className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Professional Accountability</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">We understand the demands of high-traffic commercial spaces. Our crews adhere strictly to corporate regulations and safety protocols.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <CheckCircle2 className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Zero-Disruption Operations</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">Strategically phased landscaping deployment to ensure critical business operations continue without interruption.</p>
                </div>
              </div>

              <Link to="/services/commercial" className="inline-flex items-center gap-2 font-bold text-sm text-brand-accent hover:text-white transition-colors uppercase tracking-widest">
                Explore commercial services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="reviews" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark max-w-lg tracking-tight">The Verdict on Excellence</h2>
            <Link to="/reviews" className="hidden md:flex flex-row items-center gap-2 font-bold text-brand-dark hover:text-brand-green transition-colors">
              Read All Reviews <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {REVIEWS.slice(0, 6).map((review, idx) => (
              <Reveal
                key={review.name}
                delay={(idx % 3) * 0.1}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-brand-green/5 h-full flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-gray-600 mb-8 text-lg font-medium leading-relaxed flex-1">"{review.text}"</p>
                <div>
                  <div className="font-bold text-brand-dark text-lg">{review.name}</div>
                  <div className="text-brand-green font-semibold mt-1">{review.role ? `${review.role} · ` : ''}{review.loc}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 md:hidden">
            <Link to="/reviews" className="flex items-center gap-2 font-bold text-brand-dark hover:text-brand-green transition-colors">
              Read All Reviews <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story — moved below social proof & commercial credentials, reframed for a commercial audience */}
      <section id="our-story" className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-green/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-accent/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <Reveal className="mb-16 md:mb-20">
            <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4">Our Story</div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.1] max-w-3xl">
              Built for Scale. <br /><span className="text-brand-green">Backed by Experience.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Narrative */}
            <div className="flex flex-col gap-8">
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                AlaTex was built from the ground up by owner-operator Bryan Moore, who brought a corporate operations and supply-management discipline to an industry that too often runs on guesswork.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                What started with hands-on irrigation work is now a multi-crew operation running grounds-maintenance contracts, commercial irrigation, and property-management accounts across Alabama — scaled from a single truck to a full fleet, without ever losing the accountability that earned us our first clients.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-bold text-brand-accent hover:text-white transition-colors uppercase tracking-widest text-sm">
                More about AlaTex <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats + Philosophy */}
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {STATS.map((stat, i) => (
                  <div key={i} className="border-l-2 border-brand-green pl-6">
                    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.val}</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <p className="text-brand-accent font-bold uppercase text-xs tracking-widest mb-4">How We Work</p>
                <p className="text-xl text-white font-semibold leading-snug mb-3">We show up, we operate to a documented standard, and we don't leave until the job is done.</p>
                <p className="text-gray-400 text-base leading-relaxed">Every account — from a single repair to a full commercial grounds contract — gets the same accountability. That consistency is how we've kept clients coming back for over 15 years.</p>
              </div>
            </div>

          </Reveal>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="bg-brand-dark py-24 md:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-green/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter">Command Your Space.</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">Schedule a consultation to engineer the absolute best outcome for your commercial or residential property.</p>
          <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto group w-max">
            Request a Quote <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
