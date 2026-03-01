import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function GeoRouter({ onSelect }: { onSelect: (loc: 'TX' | 'AL') => void }) {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-brand-dark">
      <motion.div 
        className="flex-1 relative cursor-pointer group overflow-hidden"
        onClick={() => onSelect('TX')}
        whileHover={{ flex: 1.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texas-lawn/1920/1080')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
          <MapPin className="w-12 h-12 mb-4 text-brand-accent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-center tracking-tight">Texas</h2>
          <p className="text-xl md:text-2xl text-center text-gray-300 font-light">Sulphur Springs & Greenville</p>
          <div className="mt-8 px-8 py-3 border-2 border-white/30 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-brand-dark transition-colors duration-300 font-semibold uppercase tracking-widest text-sm">
            Select Region
          </div>
        </div>
      </motion.div>

      <div className="w-1 md:w-2 h-full bg-brand-accent z-20" />

      <motion.div 
        className="flex-1 relative cursor-pointer group overflow-hidden"
        onClick={() => onSelect('AL')}
        whileHover={{ flex: 1.2 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/alabama-lawn/1920/1080')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white z-10">
          <MapPin className="w-12 h-12 mb-4 text-brand-accent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-4 text-center tracking-tight">Alabama</h2>
          <p className="text-xl md:text-2xl text-center text-gray-300 font-light">Tuscaloosa & Surrounding</p>
          <div className="mt-8 px-8 py-3 border-2 border-white/30 rounded-full backdrop-blur-sm group-hover:bg-white group-hover:text-brand-dark transition-colors duration-300 font-semibold uppercase tracking-widest text-sm">
            Select Region
          </div>
        </div>
      </motion.div>
    </div>
  );
}
