import { motion } from 'motion/react';
import { Phone, Shovel, ShieldAlert, Zap, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';

export default function FrenchDrains() {
    const { locCities } = useGeo();
    const phone = '(205) 310-0553';

    return (
        <>
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                    className="w-full lg:w-[60%] flex flex-col items-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
                        <Shovel className="w-4 h-4 text-brand-accent" /> French Drain Installation in {locCities}
                    </div>
                    <h1 className="text-[10vw] sm:text-[8vw] lg:text-[4.5vw] font-display font-extrabold text-brand-dark leading-[1] tracking-tighter mb-8 max-w-3xl">
                        Eradicate Standing Water & <br />
                        <span className="text-brand-green">Soil Erosion.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl font-medium leading-relaxed">
                        Protect your commercial property foundation and landscape investment with heavy-duty, professionally engineered French drain systems built for the severe Alabama climate.
                    </p>
                    <Link to="/consultation" className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 w-max">
                        Schedule a Drainage Inspection
                    </Link>
                </motion.div>

                <motion.div
                    className="w-full lg:w-[40%] grid gap-6"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="bg-brand-dark text-white p-8 rounded-3xl shadow-xl border border-gray-700">
                        <ShieldAlert className="w-10 h-10 text-brand-accent mb-4" />
                        <h4 className="font-bold text-xl mb-2">Foundation Protection</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Divert destructive hydrostatic pressure away from your commercial concrete slabs and retaining walls.</p>
                    </div>
                    <div className="bg-white text-brand-dark p-8 rounded-3xl shadow-sm border border-brand-green/20">
                        <Layers className="w-10 h-10 text-brand-green mb-4" />
                        <h4 className="font-bold text-xl mb-2">Erosion Control</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">Stop topsoil runoff and preserve the integrity of your costly turf and plant installations.</p>
                    </div>
                </motion.div>
            </section>

            <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Engineered Drainage Solutions.</h2>
                <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                    Initiate Protocol <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </>
    );
}
