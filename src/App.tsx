import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import CommercialMaintenance from './pages/CommercialMaintenance';
import CommercialIrrigation from './pages/CommercialIrrigation';
import FrenchDrains from './pages/FrenchDrains';
import Consultation from './pages/Consultation';
import ChickFilACaseStudy from './pages/ChickFilACaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="services/commercial-maintenance-tuscaloosa" element={<CommercialMaintenance />} />
          <Route path="services/commercial-irrigation" element={<CommercialIrrigation />} />
          <Route path="services/french-drain-installation" element={<FrenchDrains />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="case-studies/chick-fil-a" element={<ChickFilACaseStudy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
      <Analytics />
    </Router>
  );
}
