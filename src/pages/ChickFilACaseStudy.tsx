import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingDown, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChickFilACaseStudy() {

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    className="w-full md:w-[55%] flex flex-col items-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-brand-accent font-semibold text-xs uppercase tracking-widest mb-8">
                        <MapPin className="w-4 h-4 text-brand-accent" /> Skyland Blvd. Commercial Case Study
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-brand-dark mb-8 tracking-tighter leading-tight">
                        Zero-Disruption Maintenance for <span className="text-brand-green">High-Volume Retail.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-xl font-medium leading-relaxed">
                        When Alabama's busiest quick-service restaurants demand absolute operational reliability, they bypass the generic landscapers and mandate AlaTex.
                    </p>
                </motion.div>

                <motion.div
                    className="w-full md:w-[45%] relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        {/* Placeholder for the actual Skyland Chick-fil-A site photo */}
                        <div className="absolute inset-0 bg-brand-dark flex items-center justify-center p-8 text-center text-white/50 border-4 border-brand-green/20">
                            [Production Component: Insert High-Res Landscape Photo of Chick-fil-A Property]
                        </div>
                    </div>

                    {/* Floating Stat Card */}
                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4">
                        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
                            <TrendingDown className="w-7 h-7 text-red-500" />
                        </div>
                        <div>
                            <div className="font-display font-bold text-2xl text-brand-dark">34% Reduction</div>
                            <div className="text-sm font-semibold text-gray-400">In Monthly Water Waste</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Metrics Grid */}
            <section className="py-24 bg-[#F9FAFB] border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark tracking-tight">The "Cancellation Prevention" Protocol</h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">We don't just mow grass. We actively predict and eliminate environmental threats that cause operational downtime.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-green/20"
                        >
                            <ShieldCheck className="w-10 h-10 text-brand-accent mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Corporate Compliance</h3>
                            <p className="text-gray-500 leading-relaxed">Fully audited and insured to satisfy rigorous institutional vendor mandates, allowing franchise operators to bypass corporate red tape.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-green/20"
                        >
                            <CheckCircle2 className="w-10 h-10 text-brand-accent mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Proactive Audits</h3>
                            <p className="text-gray-500 leading-relaxed">Weekly photographic reporting and preemptive hydrostatic pressure management guarantees corporate "Brand Standard" inspections are passed perfectly.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonial & CTA */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="mb-12">
                        <div className="flex justify-center gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="text-yellow-400">★</div>)}
                        </div>
                        <blockquote className="text-2xl md:text-4xl font-display font-bold text-brand-dark leading-tight mb-8">
                            "When you run a high-volume location, you cannot have a rogue crew blocking traffic lanes or severing an irrigation line at lunch. AlaTex operates like a phantom. They are strictly business."
                        </blockquote>
                        <div className="font-semibold text-gray-500 uppercase tracking-widest text-sm">— Skyland Blvd Operator Profile</div>
                    </div>

                    <div className="bg-brand-dark p-12 md:p-16 rounded-[3rem] text-white mt-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-display font-extrabold mb-6 tracking-tight">Upgrade Your Commercial Maintenance.</h3>
                            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">Partner with AlaTex for zero-disruption commercial maintenance tailored to your high-volume property.</p>
                            <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                                Initiate Protocol <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
