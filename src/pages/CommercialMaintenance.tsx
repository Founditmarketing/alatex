import { motion } from 'motion/react';
import { Phone, ArrowRight, Building2, CheckCircle2, Factory, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';

export default function CommercialMaintenance() {
    const { locCities } = useGeo();
    const phone = '(205) 310-0553';

    return (
        <>
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
                        <Building2 className="w-4 h-4 text-brand-accent" /> Commercial Landscaping Maintenance in {locCities}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark mb-8 tracking-tighter max-w-4xl">
                        Absolute Reliability for <br />
                        <span className="text-brand-green">Commercial Properties.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Corporate standards demand specialized operational procedures. We deliver zero-disruption landscape maintenance engineered specifically for high-traffic facilities in West Alabama.
                    </p>
                    <Link to="/consultation" className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max">
                        Schedule a Commercial Site Walkthrough
                    </Link>
                </motion.div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Corporate Accountability", desc: "Rigorous adherence to compliance, insurance, and safety regulations required by institutional clients." },
                            { icon: Factory, title: "Zero-Disruption Scheduling", desc: "We operate on your timeline. Maintenance is performed with minimal footprint to your daily business operations." },
                            { icon: MapPin, title: `Local to ${locCities}`, desc: "Rapid response times and a dedicated local fleet ensure your property is always represented perfectly." }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-[#F9FAFB] p-10 rounded-[2rem] border border-gray-100 hover:border-brand-green/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center mb-8">
                                    <feature.icon className="w-8 h-8 text-brand-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Secure Your Property's Value.</h2>
                <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                    Initiate Protocol <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </>
    );
}
