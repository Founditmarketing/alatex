import React, { useState } from 'react';

// Extend window to support GTM dataLayer
declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Building2, User, ChevronRight, Check } from 'lucide-react';
import { useGeo } from '../hooks/useGeo';
import { Helmet } from 'react-helmet-async';

export default function Consultation() {
    const { locCities } = useGeo();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        propertyType: '',
        squareFootage: '',
        timeline: '',
        painPoint: '',
        name: '',
        company: '',
        phone: '',
        email: '',
        smsOptIn: false
    });

    const updateForm = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 4));

    // Form submission via Resend API
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send. Please try again.');
            }

            // Fire GTM conversion event on successful lead form submission
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ event: 'lead_form_submit' });

            setStep(5);
        } catch (err: any) {
            setSubmitError(err.message || 'Something went wrong. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <>
        <Helmet>
            <title>Free Landscaping Consultation Tuscaloosa AL | AlaTex Landscaping</title>
            <meta name="description" content="Request a free commercial or residential landscaping consultation with AlaTex Landscaping in Tuscaloosa, Alabama. Zero-disruption projects. Call (205) 310-0553." />
            <link rel="canonical" href="https://fourseasonstexas.com/consultation" />
            <meta property="og:title" content="Schedule a Consultation | AlaTex Landscaping" />
            <meta property="og:description" content="Start your landscaping project in Tuscaloosa, AL. Commercial and residential specialists. Contact AlaTex Landscaping today." />
            <meta property="og:url" content="https://fourseasonstexas.com/consultation" />
        </Helmet>
        <div className="min-h-screen bg-brand-dark text-white pt-32 pb-24 relative overflow-hidden flex flex-col justify-center">
            {/* Atmospheric Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-green/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green font-semibold text-xs uppercase tracking-widest mb-6">
                        <Building2 className="w-4 h-4" /> Project Intake Protocol
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tighter">Command Your Space.</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Absolute reliability starts with data. Provide the specifications of your property in {locCities} to initiate a project review.</p>
                </div>

                <div className="bg-[#1a2b16]/50 backdrop-blur-md border border-brand-green/20 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                    {/* Progress Bar */}
                    {step < 5 && (
                        <div className="flex gap-2 mb-12">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-brand-green' : 'bg-gray-700'}`} />
                            ))}
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col gap-6"
                            >
                                <h3 className="text-3xl font-display font-bold mb-4">What type of property are we engineering?</h3>
                                {[
                                    "Corporate Campus / Office Park",
                                    "Retail Center scope (e.g. Chick-fil-A, Strip Malls)",
                                    "Industrial / Logistics Facility",
                                    "Multi-Family Residential / HOA",
                                    "High-End Private Estate Residency"
                                ].map(type => (
                                    <button
                                        key={type}
                                        onClick={() => { updateForm('propertyType', type); nextStep(); }}
                                        className={`p-6 rounded-2xl border text-left flex justify-between items-center group transition-all duration-300 ${formData.propertyType === type ? 'border-brand-green bg-brand-green/10' : 'border-gray-700 hover:border-brand-green/50 hover:bg-white/5'}`}
                                    >
                                        <span className="text-lg font-semibold">{type}</span>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${formData.propertyType === type ? 'text-brand-green' : 'text-gray-500 group-hover:text-brand-green group-hover:translate-x-1'}`} />
                                    </button>
                                ))}
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col gap-6"
                            >
                                <h3 className="text-3xl font-display font-bold mb-4">What is the immediate operational threat?</h3>
                                {[
                                    "Severe Hydrostatic Pressure / French Drains Needed",
                                    "Massive-Scale Irrigation Installation or Repair",
                                    "Zero-Disruption Maintenance Contract Transfer",
                                    "Complete Landscape Refit & Hardscaping",
                                ].map(threat => (
                                    <button
                                        key={threat}
                                        onClick={() => { updateForm('painPoint', threat); nextStep(); }}
                                        className={`p-6 rounded-2xl border text-left flex justify-between items-center group transition-all duration-300 ${formData.painPoint === threat ? 'border-brand-green bg-brand-green/10' : 'border-gray-700 hover:border-brand-green/50 hover:bg-white/5'}`}
                                    >
                                        <span className="text-lg font-semibold">{threat}</span>
                                        <ChevronRight className={`w-5 h-5 transition-transform ${formData.painPoint === threat ? 'text-brand-green' : 'text-gray-500 group-hover:text-brand-green group-hover:translate-x-1'}`} />
                                    </button>
                                ))}
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col gap-6"
                            >
                                <h3 className="text-3xl font-display font-bold mb-4">Identify your scope & timeline.</h3>

                                <label className="text-sm font-bold tracking-widest uppercase text-gray-400">Total Irrigated/Landscaped Area (Est.)</label>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    {["Under 1 Acre", "1 - 5 Acres", "5 - 10 Acres", "10+ Acres"].map(size => (
                                        <button
                                            key={size}
                                            onClick={() => updateForm('squareFootage', size)}
                                            className={`p-4 rounded-xl border text-center font-semibold transition-all duration-300 ${formData.squareFootage === size ? 'border-brand-green bg-brand-green/10 text-brand-green' : 'border-gray-700 text-gray-300 hover:border-brand-green/50'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                <label className="text-sm font-bold tracking-widest uppercase text-gray-400">Target Implementation</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Emergency / Immediate", "Within 30 Days", "Next Quarter", "Future Planning"].map(time => (
                                        <button
                                            key={time}
                                            onClick={() => updateForm('timeline', time)}
                                            className={`p-4 rounded-xl border text-center font-semibold transition-all duration-300 ${formData.timeline === time ? 'border-brand-green bg-brand-green/10 text-brand-green' : 'border-gray-700 text-gray-300 hover:border-brand-green/50'}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    disabled={!formData.squareFootage || !formData.timeline}
                                    onClick={nextStep}
                                    className="mt-8 bg-brand-green hover:bg-white text-brand-dark disabled:opacity-50 disabled:hover:bg-brand-green w-full py-5 rounded-xl font-bold text-lg transition-colors flex justify-center items-center gap-2"
                                >
                                    Proceed to Credentials <ArrowRight className="w-5 h-5" />
                                </button>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.form
                                key="step4"
                                onSubmit={submitForm}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col gap-6"
                            >
                                <h3 className="text-3xl font-display font-bold mb-2">Finalize Protocol.</h3>
                                <p className="text-gray-400 mb-6">Our project director will review your parameters and contact you directly to schedule an on-site reconnaissance.</p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-xs font-bold tracking-widest uppercase text-brand-green mb-2 block">Full Name</label>
                                        <input required type="text" className="w-full bg-black/20 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="e.g. Bryan Moore" onChange={e => updateForm('name', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold tracking-widest uppercase text-brand-green mb-2 block">Corporate Entity / Property Name</label>
                                        <input required type="text" className="w-full bg-black/20 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="e.g. Chick-fil-A Skyland" onChange={e => updateForm('company', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold tracking-widest uppercase text-brand-green mb-2 block">Direct Phone</label>
                                        <input required type="tel" className="w-full bg-black/20 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="(555) 123-4567" onChange={e => updateForm('phone', e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold tracking-widest uppercase text-brand-green mb-2 block">Email Address</label>
                                        <input required type="email" className="w-full bg-black/20 border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="director@company.com" onChange={e => updateForm('email', e.target.value)} />
                                    </div>
                                </div>

                                {/* SMS Opt-In */}
                                <div className="flex items-start gap-4 bg-white/5 border border-gray-700 rounded-2xl p-5 mt-2">
                                    <div className="relative flex-shrink-0 mt-0.5">
                                        <input
                                            id="smsOptIn"
                                            type="checkbox"
                                            checked={formData.smsOptIn}
                                            onChange={e => setFormData(prev => ({ ...prev, smsOptIn: e.target.checked }))}
                                            className="sr-only"
                                        />
                                        <label
                                            htmlFor="smsOptIn"
                                            className={`flex items-center justify-center w-6 h-6 rounded-md border-2 cursor-pointer transition-all duration-200 ${
                                                formData.smsOptIn
                                                    ? 'bg-brand-green border-brand-green'
                                                    : 'bg-transparent border-gray-600 hover:border-brand-green'
                                            }`}
                                        >
                                            {formData.smsOptIn && (
                                                <svg className="w-3.5 h-3.5 text-brand-dark" viewBox="0 0 12 12" fill="none">
                                                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </label>
                                    </div>
                                    <label htmlFor="smsOptIn" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
                                        <span className="text-white font-semibold block mb-1">SMS Updates (Optional)</span>
                                        I consent to receive text messages from AlaTex Landscaping at the phone number provided, including project updates and appointment reminders. Message & data rates may apply. Reply{' '}
                                        <strong className="text-gray-300">STOP</strong> to opt out at any time.{' '}
                                        <a href="/privacy-policy" className="text-brand-green hover:underline" target="_blank" rel="noopener noreferrer">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-8 bg-brand-accent hover:bg-white text-brand-dark w-full py-5 rounded-xl font-bold text-xl transition-colors flex justify-center items-center gap-2"
                                >
                                    {isSubmitting ? 'Transmitting Data...' : 'Submit Project Profile'}
                                </button>
                                {submitError && (
                                    <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold text-center">
                                        {submitError}
                                    </div>
                                )}
                                <p className="text-center text-xs text-gray-500 font-medium mt-4 flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-brand-green" /> End-to-End Encrypted & Confidential
                                </p>
                            </motion.form>
                        )}

                        {step === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center text-center py-12 gap-6"
                            >
                                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/20 mb-4">
                                    <Check className="w-12 h-12 text-brand-dark" />
                                </div>
                                <h3 className="text-4xl font-display font-extrabold text-white tracking-tight">Transmission Secured.</h3>
                                <p className="text-xl text-gray-400 max-w-lg">
                                    Your property data has been logged. Our project director is reviewing your requirements and will contact you shortly to coordinate the site walkthrough.
                                </p>
                                <button onClick={() => window.location.href = '/'} className="mt-8 font-bold text-brand-green hover:text-white transition-colors">
                                    Return to HQ
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
        </>
    );
}
