import { useState, useEffect } from 'react';
import { Leaf, Phone, ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useGeo } from '../hooks/useGeo';

export default function Layout() {
    const { locName, locCities } = useGeo();
    const phone = '(205) 310-0553';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll to top or to hash on route change
    useEffect(() => {
        if (location.hash) {
            // Small timeout ensures the element is rendered if navigating from another page
            setTimeout(() => {
                const element = document.getElementById(location.hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location.pathname, location.hash]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#F9FAFB] text-[#111827] overflow-x-hidden font-sans flex flex-col">
            {/* Premium Nuclear Navigation */}
            <nav className={`fixed top-0 w-full z-[100000] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-dark rounded-xl flex items-center justify-center group-hover:bg-brand-green transition-colors duration-500 shadow-lg">
                            <Leaf className="text-white w-6 h-6" />
                        </div>
                        <span className="font-display font-bold text-2xl md:text-3xl text-brand-dark tracking-tight">AlaTex</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-10">
                        {['Services', 'Our Story', 'Reviews'].map((item) => (
                            <Link key={item} to={`/#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-gray-500 hover:text-brand-dark transition-colors">
                                {item}
                            </Link>
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
                                <Link to="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                                <Link to="/#our-story" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                                <Link to="/#reviews" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
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

            <main className="flex-1">
                <Outlet />
            </main>

            {/* Heavy Footer */}
            <footer className="bg-[#0f1a0c] text-gray-500 py-16 border-t border-brand-green/20 mt-auto">
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
                            <Link to="/#services" className="hover:text-brand-green transition-colors">Services</Link>
                            <Link to="/#our-story" className="hover:text-brand-green transition-colors">Our Story</Link>
                            <Link to="/#reviews" className="hover:text-brand-green transition-colors">Reviews</Link>
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
