import { motion } from 'motion/react';
import { Phone, Shovel, ShieldAlert, Layers, ArrowRight, CheckCircle2, Droplets, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useGeo } from '../hooks/useGeo';

export default function DrainageErosionControl() {
    const { locCities } = useGeo();
    const phone = '(205) 310-0553';

    return (
        <>
            <Helmet>
                <title>Drainage & Erosion Control | Birmingham Metro & West Alabama | AlaTex</title>
                <meta name="description" content="French drains, regrading, and catch basins that protect foundations, parking areas, and landscaping from standing water in Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa & Northport, AL. Call (205) 310-0553." />
                <link rel="canonical" href="https://www.alatexirrigation.com/services/drainage-erosion-control" />
                <meta property="og:title" content="Drainage & Erosion Control | AlaTex Landscaping" />
                <meta property="og:description" content="French drains, regrading, and catch basins that protect foundations, parking areas, and landscaping from standing water." />
                <meta property="og:url" content="https://www.alatexirrigation.com/services/drainage-erosion-control" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
                        <Shovel className="w-4 h-4 text-brand-accent" /> Drainage & Erosion Control in {locCities}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark mb-8 tracking-tighter max-w-4xl">
                        Eradicate Standing Water & <br />
                        <span className="text-brand-green">Soil Erosion.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
                        French drains, regrading, and catch basins that protect foundations, parking areas, and landscaping from standing water.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/consultation" className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 w-full sm:w-max">
                            Schedule a Drainage Inspection
                        </Link>
                        <a href="tel:+12053100553" className="flex items-center justify-center gap-3 text-brand-dark font-bold text-lg bg-white py-4 px-8 rounded-full border border-gray-100 shadow-sm hover:text-brand-green transition-colors w-full sm:w-max">
                            <Phone className="w-5 h-5 text-brand-accent" /> {phone}
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Core Systems / Scope of Work */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <div className="text-brand-green font-bold tracking-widest uppercase text-sm mb-4">Core Systems</div>
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark tracking-tight">
                            Engineered Drainage Infrastructure
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Droplets,
                                title: "French Drains",
                                desc: "Sub-surface trenches wrapped in geotextile fabric and filled with clean gravel. We install perforated piping that intercepts and redirects rising groundwater safely away from building foundations."
                            },
                            {
                                icon: Shovel,
                                title: "Regrading & Swales",
                                desc: "Recontouring property slope and constructing turf-lined drainage swales. We eliminate low-point collection zones and direct sheet-flow surface runoff towards proper municipal systems or retention ponds."
                            },
                            {
                                icon: Layers,
                                title: "Catch Basins & Inlets",
                                desc: "Heavy-duty grated concrete or polymer catch basins set at finished grade. Designed to collect high volumes of runoff from paved surfaces, parking areas, and sod, piping it directly to outlets."
                            }
                        ].map((system, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-[#F9FAFB] shadow-inner rounded-2xl flex items-center justify-center mb-8">
                                    <system.icon className="w-8 h-8 text-brand-dark" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">{system.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{system.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Complete Site Protection */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Complete Asset Protection</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Standing water is more than a nuisance — it's a structural liability. Our drainage designs actively prevent water damage across the three key areas of your property:
                        </p>
                        <ul className="flex flex-col gap-6">
                            {[
                                {
                                    title: "Protect Foundations",
                                    desc: "Alleviates hydrostatic pressure against concrete basement walls, slabs, and crawl spaces, preventing shifting, cracking, and interior water intrusion."
                                },
                                {
                                    title: "Protect Parking Areas & Pavement",
                                    desc: "Eradicates standing pools of water on asphalt, concrete pads, and sidewalks. Prevents sub-base erosion, pavement cracking, and hydroplaning hazards."
                                },
                                {
                                    title: "Protect Landscaping & Turf",
                                    desc: "Keeps sod and plant beds from drowning. Prevents soil saturation that leads to turf diseases, root rot, mud zones, and slope erosion."
                                }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        <div className="bg-[#F9FAFB] p-8 rounded-3xl border border-gray-100">
                            <ShieldAlert className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Foundation Safety</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Stop structural shift and basement moisture issues before they start.</p>
                        </div>
                        <div className="bg-[#F9FAFB] p-8 rounded-3xl border border-gray-100 sm:mt-8">
                            <Landmark className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Liability Reduction</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Remove standing water pools from walkways to reduce slip-and-fall hazards.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Drainage FAQs */}
            <section className="py-20 md:py-28 bg-[#F9FAFB]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight text-center">
                        Drainage & Erosion Control FAQs
                    </h2>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                q: "How do French drains collect water?",
                                a: "A French drain utilizes a trench dug along a slope. It is lined with filter fabric, filled with gravel, and has a perforated pipe at the bottom. Water flows naturally into the gravel, enters the pipe, and flows out at a designated safe discharge point."
                            },
                            {
                                q: "What is regrading and when is it necessary?",
                                a: "Regrading involves altering the contour of the dirt. If the land slopes toward your foundation or has low bowls that collect water, we regrade the soil to establish a positive slope, forcing rainwater to flow away from buildings and pavement."
                            },
                            {
                                q: "Why are catch basins used in parking lots and low spots?",
                                a: "Catch basins act as surface drain collector hubs. Grates catch trash and leaves while the basin traps silt and debris at the bottom so it doesn't clog the underground pipes. They quickly drain high volumes of surface runoff from paved or lawn areas."
                            }
                        ].map((f, i) => (
                            <div key={i} className="border-l-4 border-brand-green pl-6 bg-white p-6 rounded-r-2xl shadow-sm">
                                <h3 className="text-xl font-bold text-brand-dark mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Engineered Drainage Solutions.</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                    Schedule a site walkthrough with our drainage specialists to design a solution that protects your property.
                </p>
                <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                    Schedule Inspection <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </>
    );
}
