import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
    const lastUpdated = 'May 12, 2025';

    return (
        <>
        <Helmet>
            <title>Terms of Service | AlaTex Landscaping Tuscaloosa AL</title>
            <meta name="description" content="Terms of Service for AlaTex Landscaping. Professional commercial and residential landscaping in Tuscaloosa and Northport, Alabama. Licensed and insured." />
            <link rel="canonical" href="https://alatex.vercel.app/terms-of-service" />
            <meta property="og:title" content="Terms of Service | AlaTex Landscaping" />
            <meta property="og:description" content="Terms of Service for AlaTex Landscaping — professional landscaping in Tuscaloosa, Alabama." />
            <meta property="og:url" content="https://alatex.vercel.app/terms-of-service" />
        </Helmet>
        <div className="min-h-screen bg-[#F9FAFB] pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-dark transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center shadow-lg">
                            <FileText className="w-6 h-6 text-brand-green" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-display font-extrabold text-brand-dark tracking-tight">
                                Terms of Service
                            </h1>
                            <p className="text-sm text-gray-500 font-medium mt-1">Last Updated: {lastUpdated}</p>
                        </div>
                    </div>

                    <div className="h-1 w-24 bg-brand-green rounded-full mt-6" />
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
                    style={{ lineHeight: '1.8' }}
                >
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Please read these Terms of Service ("Terms") carefully before using the AlaTex Landscaping website or engaging our services. By accessing our website or submitting a service request, you agree to be bound by these Terms.
                    </p>

                    <Section title="1. Acceptance of Terms">
                        <p>
                            By accessing and using our website at <strong>alatexlandscaping.com</strong> or by engaging AlaTex Landscaping for any services, you accept and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our website or services.
                        </p>
                    </Section>

                    <Section title="2. Services Provided">
                        <p>AlaTex Landscaping offers commercial and residential landscaping services including, but not limited to:</p>
                        <ul>
                            <li>Commercial landscape maintenance</li>
                            <li>Irrigation installation and repair</li>
                            <li>French drain installation and drainage solutions</li>
                            <li>Hardscaping and landscape design</li>
                            <li>Property grounds management</li>
                        </ul>
                        <p>All services are subject to a separate written service agreement executed between AlaTex Landscaping and the client prior to commencement of work.</p>
                    </Section>

                    <Section title="3. Quotes & Estimates">
                        <p>
                            Any quotes or estimates provided via our website, phone, or email are non-binding until formalized in a written service agreement signed by both parties. Pricing may be subject to change based on site conditions, material costs, or scope adjustments discovered during an on-site assessment.
                        </p>
                    </Section>

                    <Section title="4. Payment Terms">
                        <p>Payment terms are outlined in each individual service agreement. Unless otherwise specified:</p>
                        <ul>
                            <li>A deposit may be required before work begins on large projects.</li>
                            <li>Final payment is due upon project completion or as specified in the service agreement.</li>
                            <li>Overdue invoices may be subject to a late payment fee of 1.5% per month.</li>
                            <li>AlaTex Landscaping reserves the right to suspend services on accounts with outstanding balances.</li>
                        </ul>
                    </Section>

                    <Section title="5. SMS Communications">
                        <div className="bg-brand-dark/5 border border-brand-green/30 rounded-2xl p-6 my-4">
                            <p>
                                If you opt in to SMS communications via our website forms, you agree to receive text messages from AlaTex Landscaping regarding your project, appointments, and service updates. Standard message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. See our <Link to="/privacy-policy" className="text-brand-green font-semibold hover:underline">Privacy Policy</Link> for full details on our SMS practices.
                            </p>
                        </div>
                    </Section>

                    <Section title="6. Client Responsibilities">
                        <p>As a client, you agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information when requesting services or completing our forms.</li>
                            <li>Ensure safe and reasonable access to your property for our crews during scheduled service times.</li>
                            <li>Notify AlaTex Landscaping of any underground utilities, irrigation systems, or property hazards prior to work commencement.</li>
                            <li>Obtain any necessary permits for work on your property unless otherwise agreed in writing.</li>
                        </ul>
                    </Section>

                    <Section title="7. Cancellation & Rescheduling">
                        <p>
                            We understand that schedules change. We ask for at least <strong>48 hours' notice</strong> for cancellations or rescheduling. Cancellations made with less than 48 hours' notice may forfeit any applicable deposit. Emergency weather-related cancellations will be rescheduled at the earliest available time without penalty.
                        </p>
                    </Section>

                    <Section title="8. Limitation of Liability">
                        <p>
                            To the fullest extent permitted by applicable law, AlaTex Landscaping shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our website or our services. Our total liability for any claim shall not exceed the total amount paid by you for the specific service giving rise to the claim.
                        </p>
                    </Section>

                    <Section title="9. Warranty Disclaimer">
                        <p>
                            Our website and its content are provided on an "as is" basis without warranties of any kind, either express or implied. We do not warrant that our website will be error-free, uninterrupted, or free of viruses. Any warranties related to services rendered are limited to those expressly stated in the applicable service agreement.
                        </p>
                    </Section>

                    <Section title="10. Intellectual Property">
                        <p>
                            All content on this website, including but not limited to text, images, logos, graphics, and design elements, is the exclusive property of AlaTex Landscaping and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
                        </p>
                    </Section>

                    <Section title="11. Third-Party Links">
                        <p>
                            Our website may contain links to third-party websites. These links are provided for your convenience only. AlaTex Landscaping does not control or endorse these sites and is not responsible for their content, privacy practices, or terms. You access third-party websites at your own risk.
                        </p>
                    </Section>

                    <Section title="12. Governing Law">
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of <strong>Alabama</strong>, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Tuscaloosa County, Alabama.
                        </p>
                    </Section>

                    <Section title="13. Changes to Terms">
                        <p>
                            AlaTex Landscaping reserves the right to modify these Terms at any time. Changes will be effective upon posting to our website with an updated "Last Updated" date. Your continued use of our website following any changes constitutes acceptance of the revised Terms.
                        </p>
                    </Section>

                    <Section title="14. Contact Us">
                        <p>If you have any questions about these Terms of Service, please contact us:</p>
                        <div className="bg-gray-50 rounded-2xl p-6 mt-4 not-prose">
                            <p className="font-bold text-brand-dark text-lg">AlaTex Landscaping</p>
                            <p className="text-gray-600 mt-1">Serving Tuscaloosa, AL and surrounding areas</p>
                            <a href="mailto:Bryan@alatexlandscaping.com" className="text-brand-green font-semibold block mt-2 hover:underline">
                                Bryan@alatexlandscaping.com
                            </a>
                            <a href="tel:2053100553" className="text-gray-600 font-semibold block mt-1 hover:text-brand-dark transition-colors">
                                (205) 310-0553
                            </a>
                        </div>
                    </Section>
                </motion.div>
            </div>
        </div>
        </>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-10">
            <h2 className="text-xl font-display font-bold text-brand-dark mb-4 pb-2 border-b border-gray-100">
                {title}
            </h2>
            <div className="text-gray-600 space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-brand-dark [&_a]:text-brand-green [&_a]:font-semibold">
                {children}
            </div>
        </div>
    );
}
