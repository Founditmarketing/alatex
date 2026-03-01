import { useState } from 'react';
import GeoRouter from './components/GeoRouter';
import LandingPage from './components/LandingPage';

export default function App() {
  const [location, setLocation] = useState<'TX' | 'AL' | null>(null);

  return (
    <div className="w-full min-h-screen font-sans">
      {location === null ? (
        <GeoRouter onSelect={setLocation} />
      ) : (
        <LandingPage location={location} onReset={() => setLocation(null)} />
      )}
    </div>
  );
}
