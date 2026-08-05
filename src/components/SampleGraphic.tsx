import React from 'react';

interface SampleGraphicProps {
  sampleId: string;
  imageUrl?: string;
  className?: string;
}

export const SampleGraphic: React.FC<SampleGraphicProps> = ({ sampleId, imageUrl, className = '' }) => {
  if (imageUrl) {
    return (
      <div className={`relative w-full h-full bg-[#080B1A] overflow-hidden flex items-center justify-center ${className}`}>
        <img src={imageUrl} alt="Sample reference" className="w-full h-full object-cover" />
      </div>
    );
  }

  if (sampleId === 'sample-lightbulb') {
    return (
      <div className={`relative w-full h-full bg-[#080B1A] overflow-hidden flex items-center justify-center ${className}`}>
        {/* Glowing Background Bokeh Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-amber-500/25 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-orange-600/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl" />

        <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD166" stopOpacity="1" />
              <stop offset="40%" stopColor="#FF9F1C" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#E76F51" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#080B1A" stopOpacity="0" />
            </radialGradient>
            
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Background Digital Grid Lines */}
          <path d="M 0 350 L 800 350 M 0 380 L 800 380 M 0 410 L 800 410" stroke="#1E293B" strokeWidth="1" opacity="0.5" />
          <path d="M 100 300 L 0 450 M 200 300 L 100 450 M 300 300 L 200 450 M 400 300 L 400 450 M 500 300 L 600 450 M 600 300 L 700 450 M 700 300 L 800 450" stroke="#1E293B" strokeWidth="1" opacity="0.3" />

          {/* Bokeh Circles */}
          <circle cx="150" cy="120" r="18" fill="#FF9F1C" opacity="0.3" />
          <circle cx="220" cy="80" r="12" fill="#38BDF8" opacity="0.4" />
          <circle cx="680" cy="140" r="24" fill="#E76F51" opacity="0.3" />
          <circle cx="620" cy="200" r="15" fill="#FFD166" opacity="0.4" />
          <circle cx="720" cy="90" r="10" fill="#38BDF8" opacity="0.5" />
          <circle cx="100" cy="220" r="16" fill="#F43F5E" opacity="0.35" />

          {/* Laptop Base Table Surface Glow */}
          <ellipse cx="400" cy="380" rx="320" ry="40" fill="#FF9F1C" opacity="0.15" />

          {/* Laptop Screen */}
          <polygon points="260,200 540,200 570,320 230,320" fill="url(#laptopGrad)" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="270,205 530,205 558,315 242,315" fill="url(#screenGlow)" />
          
          {/* Code lines on screen */}
          <line x1="280" y1="220" x2="380" y2="220" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <line x1="280" y1="235" x2="440" y2="235" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <line x1="280" y1="250" x2="350" y2="250" stroke="#FFD166" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          <line x1="280" y1="265" x2="490" y2="265" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <line x1="280" y1="280" x2="410" y2="280" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

          {/* Laptop Keyboard Base */}
          <polygon points="210,320 590,320 650,370 150,370" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="230,328 570,328 610,358 190,358" fill="#1E293B" opacity="0.8" />

          {/* Floating Glowing Bulb Base Center */}
          <circle cx="400" cy="150" r="110" fill="url(#bulbGlow)" />

          {/* Bulb Filament & Glass Shape */}
          <g transform="translate(400, 150) scale(1.3)">
            {/* Bulb Glass Outline */}
            <path
              d="M -22 -20 C -35 -5, -30 20, -14 32 L -12 45 L 12 45 L 14 32 C 30 20, 35 -5, 22 -20 C 12 -35, -12 -35, -22 -20 Z"
              fill="#FFD166"
              fillOpacity="0.25"
              stroke="#FFD166"
              strokeWidth="2.5"
              filter="drop-shadow(0 0 8px #FF9F1C)"
            />
            {/* Screw Base */}
            <rect x="-10" y="45" width="20" height="4" fill="#CBD5E1" />
            <rect x="-8" y="49" width="16" height="4" fill="#94A3B8" />
            <rect x="-5" y="53" width="10" height="3" fill="#64748B" />

            {/* Glowing Filament Lines */}
            <path d="M -7 30 L -7 10 L -12 -5 L 0 -15 L 12 -5 L 7 10 L 7 30" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="0" cy="-15" r="3" fill="#FFFFFF" />
          </g>

          {/* Holographic Floating Icons Emerging from Screen */}
          <g opacity="0.9">
            {/* Email Icon */}
            <g transform="translate(230, 140)">
              <rect x="-16" y="-12" width="32" height="24" rx="4" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
              <path d="M -14 -10 L 0 2 L 14 -10" fill="none" stroke="#38BDF8" strokeWidth="1.5" />
            </g>
            {/* Globe Network */}
            <g transform="translate(570, 130)">
              <circle cx="0" cy="0" r="18" fill="#1E293B" stroke="#F43F5E" strokeWidth="1.5" />
              <ellipse cx="0" cy="0" rx="18" ry="8" fill="none" stroke="#F43F5E" strokeWidth="1.2" />
              <line x1="-18" y1="0" x2="18" y2="0" stroke="#F43F5E" strokeWidth="1.2" />
            </g>
            {/* Data Chart Icon */}
            <g transform="translate(500, 80)">
              <rect x="-15" y="-15" width="30" height="30" rx="4" fill="#1E293B" stroke="#FFD166" strokeWidth="1.5" />
              <rect x="-10" y="2" width="5" height="8" fill="#FFD166" />
              <rect x="-2" y="-5" width="5" height="15" fill="#FFD166" />
              <rect x="6" y="-10" width="5" height="20" fill="#FFD166" />
            </g>
            {/* Eye Vision Icon */}
            <g transform="translate(290, 80)">
              <ellipse cx="0" cy="0" rx="16" ry="10" fill="#1E293B" stroke="#4ADE80" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="5" fill="#4ADE80" />
            </g>
          </g>
        </svg>

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#FFD166] text-[10px] font-mono font-bold border border-amber-500/40">
          REFERENCE IMAGE • SAMPLE 1
        </div>
      </div>
    );
  }

  if (sampleId === 'sample-books-laptop') {
    return (
      <div className={`relative w-full h-full bg-[#051720] overflow-hidden flex items-center justify-center ${className}`}>
        {/* Neon Glow background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl" />

        <svg viewBox="0 0 800 450" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="book1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#6D28D9" />
            </linearGradient>
            <linearGradient id="book2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>
            <linearGradient id="book3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="book4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#B91C1C" />
            </linearGradient>
            <linearGradient id="book5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>

          {/* Isometric Laptop Screen */}
          <g transform="translate(400, 240)">
            {/* Screen backing */}
            <polygon points="-120,-160 120,-120 120,40 -120,0" fill="#0A2540" stroke="#06B6D4" strokeWidth="2" />
            {/* Screen inner light */}
            <polygon points="-110,-150 110,-113 110,30 -110,-7" fill="#0369A1" opacity="0.6" />
            
            {/* Keyboard Base */}
            <polygon points="-180,0 180,60 120,130 -240,70" fill="#0F172A" stroke="#06B6D4" strokeWidth="2" />
            <polygon points="-160,10 160,62 110,115 -210,63" fill="#1E293B" opacity="0.8" />

            {/* Stack of Isometric Books sitting on keyboard */}
            <g transform="translate(-40, -10)">
              {/* Book 1 (Bottom: CODE - Purple) */}
              <polygon points="-60,40 60,60 60,80 -60,60" fill="url(#book1)" stroke="#DDD6FE" strokeWidth="1" />
              <polygon points="60,60 90,45 90,65 60,80" fill="#5B21B6" />
              <polygon points="-60,40 60,60 90,45 -30,25" fill="#A78BFA" />
              <text x="0" y="65" fill="#FFFFFF" fontSize="12" fontWeight="900" textAnchor="middle" transform="rotate(9, 0, 65)">CODE</text>

              {/* Book 2 (Green) */}
              <g transform="translate(0, -22)">
                <polygon points="-60,40 60,60 60,80 -60,60" fill="url(#book2)" stroke="#BBF7D0" strokeWidth="1" />
                <polygon points="60,60 90,45 90,65 60,80" fill="#166534" />
                <polygon points="-60,40 60,60 90,45 -30,25" fill="#4ADE80" />
                <text x="0" y="65" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" transform="rotate(9, 0, 65)">FUTURE LEARNING</text>
              </g>

              {/* Book 3 (Orange) */}
              <g transform="translate(0, -44)">
                <polygon points="-60,40 60,60 60,80 -60,60" fill="url(#book3)" stroke="#FEF3C7" strokeWidth="1" />
                <polygon points="60,60 90,45 90,65 60,80" fill="#92400E" />
                <polygon points="-60,40 60,60 90,45 -30,25" fill="#FBBF24" />
                <text x="0" y="65" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" transform="rotate(9, 0, 65)">DATA SCIENCE</text>
              </g>

              {/* Book 4 (Top: DATA SCIENCE - Blue) */}
              <g transform="translate(0, -66)">
                <polygon points="-60,40 60,60 60,80 -60,60" fill="url(#book5)" stroke="#BFDBFE" strokeWidth="1" />
                <polygon points="60,60 90,45 90,65 60,80" fill="#1E40AF" />
                <polygon points="-60,40 60,60 90,45 -30,25" fill="#60A5FA" />
                <text x="0" y="65" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" transform="rotate(9, 0, 65)">DATA SCIENCE</text>
              </g>
            </g>

            {/* Floating Holographic Analytics Widgets Around Laptop */}
            <g transform="translate(180, -80)">
              <rect x="-40" y="-30" width="80" height="60" rx="6" fill="#0F172A" fillOpacity="0.85" stroke="#38BDF8" strokeWidth="1.5" />
              <path d="M -30 10 Q -10 -20 10 -5 T 30 15" fill="none" stroke="#F43F5E" strokeWidth="2" />
              <circle cx="10" cy="-5" r="3" fill="#F43F5E" />
            </g>

            <g transform="translate(-200, -80)">
              <rect x="-35" y="-45" width="70" height="90" rx="6" fill="#0F172A" fillOpacity="0.85" stroke="#F43F5E" strokeWidth="1.5" />
              {/* Small grid icons */}
              <rect x="-25" y="-35" width="12" height="12" rx="2" fill="#38BDF8" />
              <rect x="-8" y="-35" width="12" height="12" rx="2" fill="#4ADE80" />
              <rect x="10" y="-35" width="12" height="12" rx="2" fill="#F59E0B" />
              <rect x="-25" y="-18" width="47" height="8" rx="2" fill="#334155" />
              <rect x="-25" y="-5" width="47" height="8" rx="2" fill="#334155" />
              <rect x="-25" y="8" width="47" height="8" rx="2" fill="#334155" />
            </g>
          </g>
        </svg>

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#06B6D4] text-[10px] font-mono font-bold border border-cyan-500/40">
          REFERENCE IMAGE • SAMPLE 2
        </div>
      </div>
    );
  }

  // Fallback / Sample 3: Delivery Courier Box
  return (
    <div className={`relative w-full h-full bg-[#1A1815] overflow-hidden flex items-center justify-center ${className}`}>
      <img
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
        alt="Courier package delivery"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#E0AF4B] text-[10px] font-mono font-bold border border-amber-500/40">
        REFERENCE IMAGE • SAMPLE 3
      </div>
    </div>
  );
};
