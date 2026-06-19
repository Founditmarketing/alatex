import { motion } from 'motion/react';
import { Phone, ArrowRight, CheckCircle2, Building2, ShieldCheck, ClipboardList, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';
import { Helmet } from 'react-helmet-async';

export default function PropertyManagement() {
    const { locCities } = useGeo();
    const phone = '(205) 310-0553';

    return (
        <>
            <Helmet>
                <title>Property Management Landscaping Accounts | Greater Birmingham & West Alabama | AlaTex</title>
                <meta name="description" content="Dedicated property management landscaping accounts in Hoover, Vestavia Hills, Mountain Brook, Irondale, Tuscaloosa & Northport, AL. Multi-site portfolios, HOAs, retail parks. Call (205) 310-0553." />
                <link rel="canonical" href="https://www.alatexirrigation.com/services/property-management-accounts" />
                <meta property="og:title" content="Property Management Landscaping Accounts | AlaTex Landscaping" />
                <meta property="og:description" content="Streamlined landscaping accounts for property managers. Multi-site coordination, consolidated billing, and strict compliance." />
                <meta property="og:url" content="https://www.alatexirrigation.com/services/property-management-accounts" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm text-brand-dark font-semibold text-xs uppercase tracking-widest mb-8">
                        <Building2 className="w-4 h-4 text-brand-accent" /> Property Management in {locCities}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-extrabold text-brand-dark mb-8 tracking-tighter max-w-4xl">
                        One Accountable Partner for <br />
                        <span className="text-brand-green">Your Entire Portfolio.</span>
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                        Simplify your vendor coordination. We handle multi-site office parks, retail centers, and HOA communities with consistent pricing, dedicated reporting, and absolute accountability.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/consultation" className="bg-brand-dark hover:bg-brand-green text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 w-full sm:w-max">
                            Request Portfolio Audit
                        </Link>
                        <a href="tel:+12053100553" className="flex items-center justify-center gap-3 text-brand-dark font-bold text-lg bg-white py-4 px-8 rounded-full border border-gray-100 shadow-sm hover:text-brand-green transition-colors w-full sm:w-max">
                            <Phone className="w-5 h-5 text-brand-accent" /> {phone}
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* Core Advantages */}
            <section className="py-24 bg-[#F9FAFB]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-brand-dark mb-6 tracking-tight">Streamlined Operations</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            We understand the pressures property managers face. Our administrative and field protocols are designed to integrate seamlessly with your management software and reporting requirements.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {[
                                "Single Point of Contact for All Locations",
                                "Consolidated Invoicing Options Available",
                                "Rapid Response SLAs for Tenant Emergencies",
                                "Adherence to Strict Vendor Portals & Rules",
                                "Proactive Pre-Storm & Post-Storm Surveys",
                                "Detailed Before/After Photos for Every Service"
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
                            <Layers className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Multi-Site Capability</h4>
                            <p className="text-gray-500 text-sm">Unified standards across multiple cities and regional assets.</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 sm:mt-8">
                            <ClipboardList className="w-10 h-10 text-brand-accent mb-4" />
                            <h4 className="font-bold text-xl mb-2">Detailed Auditing</h4>
                            <p className="text-gray-500 text-sm">Regular landscape health and irrigation audits to identify hazards early.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-display font-extrabold text-brand-dark mb-12 tracking-tight text-center max-w-3xl mx-auto">
                        Rigorous Professional Standards
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Risk Mitigation", desc: "Our field technicians wear clean uniforms, safety equipment, and follow certified commercial protocols on-site." },
                            { icon: Building2, title: "Commercial-Grade Assets", desc: "We utilize industrial mowing and heavy construction equipment that get large-scale jobs done quickly and clean." },
                            { icon: ClipboardList, title: "Fast-Track Onboarding", desc: "We coordinate directly with vendor management networks (like NetVendor, Vendor Café, etc.) to get approved quickly." }
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

            {/* FAQs */}
            <section className="py-20 md:py-28 bg-[#F9FAFB]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-dark mb-10 tracking-tight text-center">
                        Property Management Landscaping FAQs
                    </h2>
                    <div className="flex flex-col gap-6">
                        {[
                            {
                                q: "How do you coordinate service across multiple properties?",
                                a: "You will be assigned a dedicated Account Manager. They serve as your single point of contact for schedule updates, quote requests, and reports, regardless of how many locations you have."
                            },
                            {
                                q: "Are you registered with vendor compliance directories?",
                                a: "Yes. We work frequently with compliance registries. We submit W-9s, certificates of insurance, and safety compliance records proactively to ensure onboarding is rapid and frictionless."
                            },
                            {
                                q: "Do you offer emergency response for storm damage or irrigation leaks?",
                                a: "Yes. All commercial accounts have access to our priority line for emergencies. We dispatch crews quickly to clear fallen limbs or shut off ruptured irrigation mains, minimizing liability and damage."
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

            {/* CTA */}
            <section className="bg-brand-dark py-24 md:py-32 text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 tracking-tighter">Simplify Your Landscaping.</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                    Contact us today to review your portfolio specs and receive a consolidated proposal.
                </p>
                <Link to="/consultation" className="bg-brand-accent hover:bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl md:text-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto w-max group">
                    Request a Proposal <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </>
    );
}
