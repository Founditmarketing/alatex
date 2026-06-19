import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Trees, CalendarRange, ShieldCheck, FileCheck2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';
import { Helmet } from 'react-helmet-async';

export default function GroundsMaintenance() {
    const { locCities } = useGeo();
    const phone = '(205) 310-0553';

    return (
        <>
            <Helmet>
                <title>Commercial Grounds Maintenance Contracts | Greater Birmingham & West Alabama | AlaTex</title>
                <meta name="description" content="Year-round commercial grounds maintenance contracts in Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa & Northport, AL. Mowing, pruning, color rotation, and proactive cleanup. Call (205) 310-0553." />
                <link rel="canonical" href="https://www.alatexirrigation.com/services/grounds-maintenance-contracts" />
                <meta property="og:title" content="Commercial Grounds Maintenance Contracts | AlaTex Landscaping" />
                <meta property="og:description" content="Consistent, corporate-grade grounds maintenance contracts across Greater Birmingham and West Alabama. One accountable partner." />
                <meta property="og:url" content="https://www.alatexirrigation.com/services/grounds-maintenance-contracts" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
                        <Trees className="w-4 h-4 text-brand-accent" /> Grounds Maintenance in {locCities}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark mb-8 tracking-tighter max-w-4xl">
                        Flawless Aesthetics. <br />
                        <span className="text-brand-green">Guaranteed Year-Round.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Never worry about how your commercial property looks. We offer documented, corporate-grade grounds maintenance contracts engineered to protect your curb appeal and brand value.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/consultation" className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 w-full sm:w-max">
                            Request a Contract Proposal
                        </Link>
                        <a href="tel:+12053100553" className="flex items-center justify-center gap-3 text-brand-dark font-bold text-lg bg-white py-4 px-8 rounded-full border border-gray-100 shadow-sm hover:text-brand-green transition-colors w-full sm:w-max">
                            <Phone className="w-5 h-5 text-brand-accent" /> {phone}
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Scope of Service Section */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Complete Contract Scope</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Our year-round commercial maintenance agreements are fully customizable to meet the specific requirements of office parks, retail strip malls, industrial complexes, and HOAs.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Weekly/Bi-weekly Precision Mowing & Edging",
                                "Seasonal Color Installation & Rotation",
                                "Shrub, Hedge & Small Tree Pruning",
                                "Pre-emergent & Post-emergent Weed Control",
                                "Spring & Fall Property Leaf Cleanup",
                                "Regular Irrigation System Audits & Oversight"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-brand-dark font-semibold">
                                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-1" /> {item}
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
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
                            <CalendarRange className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Year-Round Coverage</h4>
                            <p className="text-gray-500 text-sm">Consistent scheduling in spring, summer, fall, and winter.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 sm:mt-8">
                            <FileCheck2 className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Detailed Reporting</h4>
                            <p className="text-gray-500 text-sm">Every visit is documented with status reports sent directly to you.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Corporate Contracts Matter */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark mb-12 tracking-tight text-center max-w-3xl mx-auto">
                        Engineered for Long-Term Value
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Risk Management", desc: "We carry comprehensive commercial liability and worker's compensation insurance to protect your property and interests." },
                            { icon: FileCheck2, title: "Fixed Monthly Billing", desc: "No surprises. Our contract plans spread the costs evenly across 12 months, allowing for easy, predictable budgeting." },
                            { icon: Trees, title: "Horticultural Expertise", desc: "All pruning, fertilization, and color choices are driven by experienced landscape coordinators who understand local Alabama turf and plant health." }
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

            {/* FAQ section */}
            <section className="py-20 md:py-28 bg-[#F9FAFB]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight text-center">
                        Grounds Maintenance FAQs
                    </h2>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                q: "How are your grounds maintenance contracts structured?",
                                a: "Our contracts are typically 12-month commercial agreements. We define a precise scope of work (e.g., visits per year, tasks per visit) and split the total cost into equal monthly payments for predictable budgeting."
                            },
                            {
                                q: "What happens during the winter months?",
                                a: "During the winter, our crew switches focus to leaf removal, heavy pruning, winter weed treatments, structural bed cleanup, and planning/prepping for the spring season to ensure your grounds stay neat year-round."
                            },
                            {
                                q: "Can we bundle commercial irrigation or landscape upgrades into our contract?",
                                a: "Absolutely. We can integrate seasonal color rotations, routine irrigation maintenance (like startup and winterization), and even small-scale turf upgrades directly into your monthly contract."
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
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Secure Your Property's Value.</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                    Let's walk your property and draft a custom maintenance scope that fits your operations and budget.
                </p>
                <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                    Request a Custom Proposal <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </>
    );
}
