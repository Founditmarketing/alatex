import { motion } from 'motion/react';
import { Phone, ArrowRight, Droplets, Shovel, TreePine, Building2, Star, CheckCircle2, MapPin } from 'lucide-react';

const services = [
  { icon: Droplets, title: 'Irrigation & Sprinklers', desc: 'Smart water management systems designed for your local climate.' },
  { icon: Shovel, title: 'French Drains', desc: 'Professional drainage solutions to protect your property from water damage.' },
  { icon: TreePine, title: 'Tree Removal', desc: 'Safe, fully insured tree removal and maintenance services.' },
  { icon: Building2, title: 'Commercial Landscaping', desc: 'Reliable, large-scale property maintenance for businesses.' },
];

export default function LandingPage({ location, onReset }: { location: 'TX' | 'AL', onReset: () => void }) {
  const locName = location === 'TX' ? 'Northeast Texas' : 'West Alabama';
  const locCities = location === 'TX' ? 'Sulphur Springs & Greenville' : 'Tuscaloosa';
  const phone = location === 'TX' ? '(903) 555-0198' : '(205) 555-0123';

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onReset}>
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
              <TreePine className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-brand-dark tracking-tight">AlaTex</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Our Story</a>
            <a href="#reviews" className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors">Reviews</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-brand-dark font-semibold">
              <Phone className="w-5 h-5 text-brand-accent" />
              {phone}
            </div>
            <button className="bg-brand-green hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-brand-green/30 flex items-center gap-2">
              Book Estimate <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-green font-medium text-sm mb-6">
            <MapPin className="w-4 h-4" /> Serving {locCities}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight">
            Premium Landscaping for <span className="text-brand-green">{locName}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            From expert irrigation to complete property transformations, we deliver reliable, high-quality outdoor solutions that elevate your property's value.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto bg-brand-accent hover:bg-yellow-500 text-brand-dark px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-xl shadow-brand-accent/20 flex items-center justify-center gap-2">
              Get Your Free Estimate
            </button>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <CheckCircle2 className="w-5 h-5 text-brand-green" /> Fully Licensed & Insured
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img src={`https://picsum.photos/seed/${location === 'TX' ? 'texas' : 'alabama'}-landscaping/800/600`} alt="Landscaping work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px]">
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
            </div>
            <p className="text-sm font-medium text-gray-800">"The best landscaping crew in {locCities}."</p>
          </div>
        </motion.div>
      </section>

      {/* Brand Transition Section */}
      <section id="about" className="bg-brand-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Four Seasons is now AlaTex.</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              You've known and trusted us as Four Seasons Landscaping. As we've grown to serve both Texas and Alabama, we've unified under a new name: <strong>AlaTex Landscaping</strong>. 
              <br/><br/>
              Same local ownership. Same dedicated crews. Even better service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 mt-12">
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-2">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-brand-accent mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600">Specialized solutions tailored for the unique soil and climate of {locName}.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-green transition-colors">
                  <service.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-16 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", text: "Four Seasons (now AlaTex) completely transformed our backyard. Their irrigation system saved our lawn during the summer heat." },
              { name: "Mike Roberts", text: "I called them for a massive tree removal. The AlaTex crew was professional, safe, and left the yard spotless." },
              { name: "David Chen", text: "We've used them for our commercial property for years. The transition to AlaTex has been seamless. Highly recommend!" }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl relative"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div className="font-bold text-brand-dark">{review.name}</div>
                <div className="text-sm text-gray-500">{locCities} Resident</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-10 mix-blend-overlay object-cover" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to upgrade your outdoors?</h2>
          <p className="text-xl text-brand-light mb-10">Book your free, no-obligation estimate today and let's discuss your project.</p>
          <button className="bg-brand-accent hover:bg-yellow-500 text-brand-dark px-10 py-5 rounded-full font-bold text-xl transition-colors shadow-2xl flex items-center justify-center gap-3 mx-auto">
            <Phone className="w-6 h-6" /> Call {phone} Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <TreePine className="text-brand-green w-6 h-6" />
            <span className="font-display font-bold text-xl text-white">AlaTex Landscaping</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} AlaTex Landscaping. All rights reserved. (Formerly Four Seasons Landscaping)
          </div>
        </div>
      </footer>
    </div>
  );
}
