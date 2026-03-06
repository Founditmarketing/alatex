import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowRight, Droplets, Shovel, Leaf, Building2, Star, CheckCircle2, MapPin, Menu, X, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  { icon: Droplets, title: 'Irrigation & Sprinklers', desc: 'Installation, repair, and maintenance of holistic irrigation systems to ensure absolute vitality.' },
  { icon: Shovel, title: 'Advanced French Drains', desc: 'Zero soil erosion. No standing water. Engineered drainage solutions that guarantee a thriving, protected landscape.' },
  { icon: Building2, title: 'Commercial Maintenance', desc: 'From sprawling commercial properties to premium corporate facilities, ensuring a pristine and immaculate environment.' },
];

export default function LandingPage() {
  const locName = 'West Alabama';
  const locCities = 'Tuscaloosa & Northport';
  const phone = '(205) 310-0553';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] overflow-x-hidden font-sans">
      {/* Premium Nuclear Navigation */}
      <nav className={`fixed top-0 w-full z-[100000] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-dark rounded-xl flex items-center justify-center group-hover:bg-brand-green transition-colors duration-500 shadow-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl md:text-3xl text-brand-dark tracking-tight">AlaTex</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Our Story', 'Reviews'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-gray-500 hover:text-brand-dark transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-brand-dark font-display font-semibold">
              <Phone className="w-5 h-5 text-brand-accent" />
              {phone}
            </div>
            <button className="bg-brand-dark hover:bg-brand-green text-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-xl shadow-brand-dark/20 flex items-center gap-2 group">
              Schedule a Commercial Site Walkthrough <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <button className="md:hidden text-brand-dark p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200000] bg-white pt-24 px-6 pb-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-12">
                <span className="font-display font-bold text-3xl text-brand-dark tracking-tight">AlaTex</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                  <X className="w-6 h-6 text-brand-dark" />
                </button>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-display font-semibold text-brand-dark">
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                <a href="#our-story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
                <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
              <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center justify-center gap-2 bg-brand-light text-brand-dark py-4 rounded-2xl font-bold">
                <Phone className="w-5 h-5" /> Call {phone}
              </a>
              <button className="bg-brand-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                Schedule Walkthrough <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
            <MapPin className="w-4 h-4 text-brand-accent" /> Operating in {locCities}
          </div>
          <h1 className="text-[10vw] sm:text-[8vw] lg:text-[4.5vw] xl:text-[5vw] font-display font-extrabold text-brand-dark leading-[1] tracking-tighter mb-8 max-w-3xl">
            Alabama’s Premier Partner for  <br />
            <span className="text-brand-green relative inline-block">
              High-Stakes
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-brand-accent transform origin-left"></div>
            </span> Landscaping
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl font-medium leading-relaxed">
            From local landmarks like Chick-fil-A to your private estate, we deliver 3rd-generation expertise with commercial-grade precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3">
              Initiate Project
            </button>
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

      {/* Brand Continuity Banner */}
      <section id="our-story" className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-green/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="text-brand-accent font-bold tracking-widest uppercase text-sm mb-4">The AlaTex Philosophy</div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-[1.1]">"What got us here, <br /><span className="text-brand-green">won't get us there."</span></h2>
              <p className="text-xl text-gray-300 leading-relaxed font-medium mb-8">
                As our footprint expands, we realize our firm needs to reflect the scale and precision of our most demanding commercial clients. AlaTex is evolving to meet the institutional standards of {locName}.
              </p>
              <p className="text-lg text-gray-400">Same ownership. Same elite crews. A new era of commercial-grade execution.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {[
                { label: 'Years Experience', val: '15+' },
                { label: 'Projects Completed', val: '500+' },
                { label: 'Client Satisfaction', val: '100%' },
                { label: 'Emergency Support', val: '24/7' }
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-brand-green pl-6">
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.val}</div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
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
                <p className="text-gray-500 text-lg leading-relaxed">{service.desc}</p>
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
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 cursor-grab active:cursor-grabbing">
            {[
              { name: "Sarah Jenkins", text: "AlaTex engineered an entirely new irrigation protocol for our estate. Absolutely flawless execution." },
              { name: "Mike Roberts", text: "The scale of the hardscaping and drainage revamp we needed required absolute professionals. The AlaTex team executed with military precision." },
              { name: "David Chen", text: "We trust them with our entire commercial portfolio. Their commitment to excellence has only elevated their standard of output." }
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
          <button className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto group">
            <Phone className="w-6 h-6 md:w-8 md:h-8" /> Call {phone} Now
          </button>
        </div>
      </section>

      {/* Heavy Footer */}
      <footer className="bg-[#0f1a0c] text-gray-500 py-16 border-t border-brand-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="text-brand-green w-8 h-8" />
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">AlaTex</span>
            </div>
            <p className="font-medium max-w-sm mb-4">
              The premier resource for absolute landscaping excellence across {locName} and beyond.
            </p>
            <p className="text-xs text-gray-600 font-medium">Our Roots: Founded in Texas, our 3rd-generation expertise now proudly serves the Alabama commercial landscape.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Navigation</h4>
            <div className="flex flex-col gap-4 font-semibold">
              <a href="#services" className="hover:text-brand-green transition-colors">Services</a>
              <a href="#our-story" className="hover:text-brand-green transition-colors">Our Story</a>
              <a href="#reviews" className="hover:text-brand-green transition-colors">Reviews</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact</h4>
            <div className="flex flex-col gap-4 font-semibold text-gray-400">
              <span className="text-brand-accent font-bold text-lg">{phone}</span>
              <a href="mailto:Bryan@alatexlandscaping.com" className="hover:text-white transition-colors">Bryan@alatexlandscaping.com</a>
              <span>Serving {locCities}</span>
              <span className="flex items-center gap-2 mt-2 text-sm"><CheckCircle2 className="w-4 h-4 text-brand-green" /> Fully Licensed & Insured</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-semibold">
          <div>&copy; {new Date().getFullYear()} AlaTex Landscaping. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
