import { motion } from 'motion/react';
import { Phone, ArrowRight, Droplets, Shovel, Building2, Star, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';

const services = [
  { icon: Droplets, title: 'Irrigation & Sprinklers', desc: 'Installation, repair, and maintenance of holistic irrigation systems to ensure absolute vitality.', link: '/services/commercial-irrigation' },
  { icon: Shovel, title: 'Advanced French Drains', desc: 'Zero soil erosion. No standing water. Engineered drainage solutions that guarantee a thriving, protected landscape.', link: '/services/french-drain-installation' },
  { icon: Building2, title: 'Commercial Maintenance', desc: 'From sprawling commercial properties to premium corporate facilities, ensuring a pristine and immaculate environment.', link: '/services/commercial-maintenance-tuscaloosa' },
];

export default function LandingPage() {
  const { locName, locCities } = useGeo();
  const phone = '(205) 310-0553';
  return (
    <>

      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[10vw] sm:text-[8vw] lg:text-[4.5vw] xl:text-[5vw] font-display font-extrabold text-brand-dark leading-[1] tracking-tighter mb-8 max-w-3xl">
            Alabama’s Premier Partner for  <br />
            <span className="text-brand-green relative inline-block">
              High-Stakes
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent transform origin-left"></div>
            </span> Landscaping
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl font-medium leading-relaxed">
            From local landmarks like Chick-fil-A to your private estate — built from the ground up by owner-operator Bryan Moore, with real-world expertise earned one job at a time.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link to="/consultation" className="w-full sm:w-auto bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3">
              Initiate Project
            </Link>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-400 bg-white py-3 px-5 rounded-full border border-gray-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-brand-green" /> Fully Licensed & Insured
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[45%] relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="aspect-[4/5] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <img src={'/commercial_hero.png'} alt="Premium Commercial Landscaping Strategy" className="w-full h-full object-cover" />
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
            <p className="text-sm sm:text-base font-bold text-brand-dark leading-snug">"The absolute highest standard of landscaping in {locCities}."</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Bryan Moore Origin Story */}
      <section id="our-story" className="bg-brand-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-green/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-brand-accent/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4">Our Story</div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.1] max-w-3xl">
              Built From a <br /><span className="text-brand-green">Side Hustle.</span> Proven at Scale.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >

            {/* Narrative */}
            <div className="flex flex-col gap-8">
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                Bryan Moore didn't inherit a landscape company — he built one. It started as a sprinkler repair side hustle while he was working in corporate supply management: a second job he took on to keep busy and earn extra income.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                As clients started requesting more work, Bryan leaned in. He learned as he went, evolving alongside the industry itself. For the first several years, every new job came through word-of-mouth — friends, neighbors, referrals — with no advertising budget and no playbook. Just results that spoke for themselves.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                That scrappy beginning turned into something real. Before long, Bryan was running multiple trucks, multiple crews, and projects spanning several states. In the early days he'd drive whatever work truck was available — eventually, he had a fleet.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                After a fresh start, Bryan is back to one crew and his own truck — but he's been here before and knows exactly how to scale. The foundation, the process, the reputation: all intact. AlaTex is building back.
              </p>

              {/* Chamber of Commerce callout */}
              <div className="border-l-4 border-brand-green pl-6 mt-2">
                <p className="text-brand-green font-bold uppercase text-xs tracking-widest mb-2">As Featured In</p>
                <p className="text-white font-semibold text-lg leading-snug">
                  Hopkins County Chamber of Commerce — Sulphur Springs, TX
                </p>
                <p className="text-gray-400 mt-1 text-sm">
                  Bryan's entrepreneurial journey was the subject of a three-part feature story, documenting his rise from side hustle to multi-crew operation.
                </p>
              </div>
            </div>

            {/* Stats + Philosophy */}
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { label: 'Years in the Industry', val: '15+' },
                  { label: 'Projects Completed', val: '500+' },
                  { label: 'Client Satisfaction', val: '100%' },
                  { label: 'States Served', val: '3+' }
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-brand-green pl-6">
                    <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.val}</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <p className="text-brand-accent font-bold uppercase text-xs tracking-widest mb-4">The AlaTex Standard</p>
                <p className="text-xl text-white font-semibold leading-snug mb-3">"What got us here won't get us there."</p>
                <p className="text-gray-400 text-base leading-relaxed">Same ownership. Same relentless work ethic. A new chapter of commercial-grade execution — built on everything Bryan learned the hard way.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Core Engineering Services */}
      <section id="services" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Systematic Outdoor Solutions</h2>
            <p className="text-xl text-gray-500 font-medium">Bespoke engineering for the soil and climate demands of {locName}.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#F9FAFB] p-10 md:p-12 rounded-[2rem] border border-gray-100 hover:border-brand-green/30 transition-all duration-500 group relative overflow-hidden"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Chick-fil-A Authority */}
      <section className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4 text-center">Commercial Excellence</div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-16 text-center leading-tight tracking-tight">Meeting Corporate Standards. <br className="hidden md:block" /><span className="text-brand-green">Precision Implementation.</span></h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl border border-gray-700">
              <img src={'/commercial_crew.png'} alt="AlaTex Professional Landscaping Crew" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex gap-6 items-start">
                <CheckCircle2 className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold mb-2">Professional Accountability</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">We understand the demands of high-traffic commercial spaces. Our crews adhere strictly to corporate regulations and safety protocols.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <CheckCircle2 className="w-8 h-8 text-brand-green shrink-0 mt-1" />
                <div>
                  <h4 className="text-2xl font-bold mb-2">Zero-Disruption Operations</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">Strategically phased landscaping deployment to ensure critical business operations continue without interruption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Proof */}
      <section id="reviews" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-brand-dark max-w-lg tracking-tight">The Verdict on Excellence</h2>
            <button className="hidden md:flex flex-row items-center gap-2 font-bold text-brand-dark hover:text-brand-green transition-colors">
              Read All Reviews <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 cursor-grab active:cursor-grabbing">
            {[
              { name: "Sarah Jenkins", text: "AlaTex engineered an entirely new irrigation protocol for our estate. Absolutely flawless execution." },
              { name: "Mike Roberts", text: "The scale of the hardscaping and drainage revamp we needed required absolute professionals. The AlaTex team executed with military precision." },
              { name: "David Chen", text: "We trust them with our entire commercial portfolio. Their commitment to excellence has only elevated their standard of output." },
              { name: "Emily Rostova", text: "They completely overtook our corporate park's maintenance contract. The difference in operational footprint and aesthetic quality was immediate." },
              { name: "James Harding", text: "When we developed the new shopping center in Northport, AlaTex was the only firm that could handle the scale of the French Drain systems required." },
              { name: "Robert Lewis", text: "Zero disruption to our daily operations. They handled all landscaping upgrades while our facility stayed fully operational. Complete professionals." }
            ].map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-brand-green/5"
              >
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-gray-600 mb-8 text-lg font-medium leading-relaxed">"{review.text}"</p>
                <div className="font-bold text-brand-dark text-lg">{review.name}</div>
                <div className="text-brand-green font-semibold mt-1">{locCities}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal CTA */}
      <section className="bg-brand-dark py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-green/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 tracking-tighter">Command Your Space.</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">Schedule a strategic consultation to engineer the absolute best outcome for your property.</p>
          <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto group w-max">
            Initiate Protocol <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
