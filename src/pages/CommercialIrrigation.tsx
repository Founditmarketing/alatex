import { motion } from 'motion/react';
import { Phone, Droplets, ArrowRight, CheckCircle2, Waves, Sunrise } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';

export default function CommercialIrrigation() {
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
                        <Droplets className="w-4 h-4 text-brand-accent" /> Commercial Irrigation in {locCities}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark mb-8 tracking-tighter max-w-4xl">
                        Precision Hydration for <br />
                        <span className="text-brand-green">Massive Scale.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        We engineer, install, and mandate high-capacity irrigation systems that guarantee the absolute vitality of your commercial property investments across West Alabama.
                    </p>
                    <Link to="/consultation" className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max">
                        Get an Irrigation Estimate
                    </Link>
                </motion.div>
            </section>

            <section className="py-24 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Systematic Water Management</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Proper hydration isn't just about throwing water; it's about calibrated distribution. Our commercial-grade sensors and robust zone controls ensure perfect coverage with zero water waste.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "New Installations & Zones",
                                "Commercial Property Upgrades",
                                "Smart Sensor Integration",
                                "Preventative Winterization",
                                "Leak & Pressure Repair"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-brand-dark font-semibold">
                                    <CheckCircle2 className="w-5 h-5 text-brand-green" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
                            <Waves className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Maximum Coverage</h4>
                            <p className="text-gray-500 text-sm">Engineered to reach every critical corner.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 mt-8">
                            <Sunrise className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Automated Optimization</h4>
                            <p className="text-gray-500 text-sm">Weather-responsive controllers for zero-touch operation.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Command Your Water Control.</h2>
                <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                    Initiate Protocol <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </>
    );
}
