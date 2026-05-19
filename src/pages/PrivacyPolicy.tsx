import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
    const lastUpdated = 'May 12, 2025';

    return (
        <>
        <Helmet>
            <title>Privacy Policy | AlaTex Landscaping Tuscaloosa AL</title>
            <meta name="description" content="Privacy Policy for AlaTex Landscaping. Learn how we protect your data. Commercial and residential landscaping in Tuscaloosa and Northport, Alabama." />
            <link rel="canonical" href="https://alatex.vercel.app/privacy-policy" />
            <meta property="og:title" content="Privacy Policy | AlaTex Landscaping" />
            <meta property="og:description" content="Privacy Policy for AlaTex Landscaping — professional landscaping in Tuscaloosa, Alabama." />
            <meta property="og:url" content="https://alatex.vercel.app/privacy-policy" />
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
                            <Shield className="w-6 h-6 text-brand-green" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-display font-extrabold text-brand-dark tracking-tight">
                                Privacy Policy
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
                    className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none"
                    style={{ lineHeight: '1.8' }}
                >
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        AlaTex Landscaping ("Company," "we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us for services.
                    </p>

                    {/* Section 1 */}
                    <Section title="1. Information We Collect">
                        <p>We may collect the following categories of personal information when you use our website or submit a contact/consultation form:</p>
                        <ul>
                            <li><strong>Contact Information:</strong> Full name, email address, phone number, and company/property name.</li>
                            <li><strong>Project Details:</strong> Property type, square footage, service timeline, and specific landscaping needs.</li>
                            <li><strong>Communication Preferences:</strong> Including your SMS opt-in/opt-out status.</li>
                            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and referring URL — collected automatically via cookies and similar technologies.</li>
                        </ul>
                    </Section>

                    {/* Section 2 */}
                    <Section title="2. How We Use Your Information">
                        <p>We use the personal information we collect to:</p>
                        <ul>
                            <li>Respond to your consultation requests and provide our landscaping services.</li>
                            <li>Send you project updates, service confirmations, and follow-up communications.</li>
                            <li>Send SMS text messages <strong>only if you have explicitly opted in</strong> to receive them.</li>
                            <li>Improve and personalize your experience on our website.</li>
                            <li>Comply with applicable legal obligations.</li>
                        </ul>
                    </Section>

                    {/* Section 3 — SMS */}
                    <Section title="3. SMS / Text Message Communications">
                        <div className="bg-brand-dark/5 border border-brand-green/30 rounded-2xl p-6 my-4">
                            <p className="font-bold text-brand-dark mb-3">SMS Consent & Opt-In</p>
                            <p>
                                By checking the SMS opt-in box on our contact or consultation form, you expressly consent to receive text messages from AlaTex Landscaping at the mobile phone number you provided. These messages may include appointment confirmations, project status updates, and promotional offers related to our landscaping services.
                            </p>
                            <p className="mt-4 font-bold text-brand-dark mb-3">Opt-Out Instructions</p>
                            <p>
                                You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to any message we send. After opting out, you will receive a single confirmation message. You may re-opt-in at any time by replying <strong>START</strong> or by re-submitting the opt-in form on our website.
                            </p>
                            <p className="mt-4">
                                <strong>Message frequency:</strong> Varies based on project activity. <strong>Message and data rates may apply.</strong> AlaTex Landscaping will never sell or share your phone number with third parties for their own marketing purposes.
                            </p>
                            <p className="mt-4 text-sm text-gray-500">
                                For help, reply <strong>HELP</strong> to any SMS message or contact us at Bryan@alatexlandscaping.com.
                            </p>
                        </div>
                    </Section>

                    {/* Section 4 */}
                    <Section title="4. Sharing Your Information">
                        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                        <ul>
                            <li><strong>Service Providers:</strong> Trusted vendors (e.g., email delivery, CRM tools) who assist us in operating our business, subject to confidentiality agreements.</li>
                            <li><strong>Legal Requirements:</strong> When required by law, regulation, or valid legal process.</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets.</li>
                        </ul>
                    </Section>

                    {/* Section 5 */}
                    <Section title="5. Cookies & Tracking Technologies">
                        <p>
                            Our website may use cookies and similar technologies to enhance functionality and analyze traffic. You can control cookie preferences through your browser settings. Disabling cookies may limit some features of our website.
                        </p>
                    </Section>

                    {/* Section 6 */}
                    <Section title="6. Data Security">
                        <p>
                            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </Section>

                    {/* Section 7 */}
                    <Section title="7. Your Rights">
                        <p>Depending on your location, you may have the right to:</p>
                        <ul>
                            <li>Access, correct, or delete the personal information we hold about you.</li>
                            <li>Withdraw your consent to data processing at any time.</li>
                            <li>Opt out of marketing communications (including SMS) at any time.</li>
                        </ul>
                        <p>To exercise any of these rights, contact us at <a href="mailto:Bryan@alatexlandscaping.com" className="text-brand-green font-semibold">Bryan@alatexlandscaping.com</a>.</p>
                    </Section>

                    {/* Section 8 */}
                    <Section title="8. Children's Privacy">
                        <p>
                            Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
                        </p>
                    </Section>

                    {/* Section 9 */}
                    <Section title="9. Changes to This Policy">
                        <p>
                            We may update this Privacy Policy periodically. We will notify you of significant changes by updating the "Last Updated" date at the top of this page. Continued use of our website following any changes constitutes your acceptance of the revised policy.
                        </p>
                    </Section>

                    {/* Section 10 */}
                    <Section title="10. Contact Us">
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
