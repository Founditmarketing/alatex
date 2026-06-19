import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import CommercialMaintenance from './pages/CommercialMaintenance';
import CommercialIrrigation from './pages/CommercialIrrigation';
import DrainageErosionControl from './pages/DrainageErosionControl';
import Consultation from './pages/Consultation';
import ChickFilACaseStudy from './pages/ChickFilACaseStudy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import LocationPage from './pages/LocationPage';
import ServicePage from './pages/ServicePage';
import CommercialServices from './pages/CommercialServices';
import About from './pages/About';
import Reviews from './pages/Reviews';
import GroundsMaintenance from './pages/GroundsMaintenance';
import PropertyManagement from './pages/PropertyManagement';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="services/commercial" element={<CommercialServices />} />
          <Route path="services/grounds-maintenance-contracts" element={<GroundsMaintenance />} />
          <Route path="services/property-management-accounts" element={<PropertyManagement />} />
          <Route path="services/zero-disruption-maintenance" element={<CommercialMaintenance />} />
          <Route path="services/commercial-irrigation" element={<CommercialIrrigation />} />
          <Route path="services/drainage-erosion-control" element={<DrainageErosionControl />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="landscaping/:slug" element={<LocationPage />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="case-studies/chick-fil-a" element={<ChickFilACaseStudy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
        </Route>
      </Routes>
    </Router>
  );
}
