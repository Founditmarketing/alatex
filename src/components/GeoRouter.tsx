import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function GeoRouter({ onSelect }: { onSelect: (loc: 'TX' | 'AL') => void }) {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#0A0F08]">
      <motion.div
        className="flex-1 relative cursor-pointer group overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-[#1A2F16]/50"
        onClick={() => onSelect('TX')}
        whileHover={{ flex: 1.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Cinematic Background Layering */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
          style={{ backgroundImage: "url('/tx.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F08] via-[#0A0F08]/60 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-brand-dark mix-blend-multiply opacity-20" />

        {/* Content Mask */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center">
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <MapPin className="w-10 h-10 md:w-14 md:h-14 text-brand-accent transform group-hover:-translate-y-2 transition-transform duration-500" />
            </motion.div>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[7vw] lg:text-[6vw] font-display font-extrabold text-white leading-[0.85] tracking-tighter"
            >
              Texas
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide"
            >
              Sulphur Springs & Greenville
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full backdrop-blur-md bg-white/5 group-hover:bg-white group-hover:text-brand-dark text-white transition-all duration-500 font-bold uppercase tracking-widest text-xs md:text-sm"
          >
            Enter Region <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 relative cursor-pointer group overflow-hidden"
        onClick={() => onSelect('AL')}
        whileHover={{ flex: 1.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Cinematic Background Layering */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
          style={{ backgroundImage: "url('/al.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F08] via-[#0A0F08]/60 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-brand-dark mix-blend-multiply opacity-20" />

        {/* Content Mask */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center">
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <MapPin className="w-10 h-10 md:w-14 md:h-14 text-brand-green transform group-hover:-translate-y-2 transition-transform duration-500" />
            </motion.div>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[7vw] lg:text-[6vw] font-display font-extrabold text-white leading-[0.85] tracking-tighter"
            >
              Alabama
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide"
            >
              Tuscaloosa & Surrounding
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full backdrop-blur-md bg-white/5 group-hover:bg-white group-hover:text-brand-dark text-white transition-all duration-500 font-bold uppercase tracking-widest text-xs md:text-sm"
          >
            Enter Region <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Central Divider Node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-[#0A0F08] rounded-full flex items-center justify-center border border-white/10 shadow-2xl pointer-events-none">
        <span className="font-display font-bold text-gray-400 text-xs md:text-sm uppercase tracking-widest">Or</span>
      </div>
    </div>
  );
}
