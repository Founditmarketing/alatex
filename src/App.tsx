import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import CommercialMaintenance from './pages/CommercialMaintenance';
import CommercialIrrigation from './pages/CommercialIrrigation';
import FrenchDrains from './pages/FrenchDrains';

import Consultation from './pages/Consultation';

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
        </Route>
      </Routes>
    </Router>
  );
}
