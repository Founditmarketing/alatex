import { MapPin, ArrowRight } from 'lucide-react';

export default function GeoRouter({ onSelect }: { onSelect: (loc: 'TX' | 'AL') => void }) {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#0A0F08]">
      <div
        className="flex-1 relative cursor-pointer group overflow-hidden border-b-2 md:border-b-0 md:border-r-[1px] border-white/10 transition-all duration-700 hover:flex-[1.15]"
        onClick={() => onSelect('TX')}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
          style={{ backgroundImage: "url('/tx.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F08] via-[#0A0F08]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-brand-dark mix-blend-multiply opacity-30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center transform group-hover:-translate-y-2 transition-transform duration-[1.5s] ease-out">
          <MapPin className="w-10 h-10 md:w-12 md:h-12 text-brand-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-[12vw] md:text-[6.5vw] lg:text-[6vw] font-display font-extrabold text-white leading-[0.85] tracking-tighter mb-4">
            Texas
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide mb-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
            Sulphur Springs & Greenville
          </p>

          <div className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full backdrop-blur-md bg-white/5 group-hover:bg-white group-hover:text-brand-dark text-white transition-all duration-500 font-bold uppercase tracking-widest text-xs md:text-sm">
            Enter Region <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" />
          </div>
        </div>
      </div>

      <div
        className="flex-1 relative cursor-pointer group overflow-hidden transition-all duration-700 hover:flex-[1.15]"
        onClick={() => onSelect('AL')}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
          style={{ backgroundImage: "url('/al.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F08] via-[#0A0F08]/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-brand-dark mix-blend-multiply opacity-30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center transform group-hover:-translate-y-2 transition-transform duration-[1.5s] ease-out">
          <MapPin className="w-10 h-10 md:w-12 md:h-12 text-brand-green mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-[12vw] md:text-[6.5vw] lg:text-[6vw] font-display font-extrabold text-white leading-[0.85] tracking-tighter mb-4">
            Alabama
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide mb-10 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
            Tuscaloosa & Surrounding
          </p>

          <div className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full backdrop-blur-md bg-white/5 group-hover:bg-white group-hover:text-brand-dark text-white transition-all duration-500 font-bold uppercase tracking-widest text-xs md:text-sm">
            Enter Region <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* Central Divider Node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-[#0A0F08] rounded-full flex items-center justify-center border border-white/10 shadow-2xl pointer-events-none">
        <span className="font-display font-bold text-gray-400 text-xs md:text-sm uppercase tracking-widest">Or</span>
      </div>
    </div>
  );
}
