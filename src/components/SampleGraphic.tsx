import React, { useState, useEffect } from 'react';

interface SampleGraphicProps {
  sampleId: string;
  imageUrl?: string;
  className?: string;
}

const FALLBACK_URLS: Record<string, string> = {
  'sample-lightbulb': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  'sample-books-laptop': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  'sample-courier': 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
  'sample-ai-robot': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  'sample-green-energy': 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  'sample-business-meeting': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  'sample-gourmet-coffee': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
  'sample-fitness-smartwatch': 'https://images.unsplash.com/photo-1510519138161-584400c490a6?auto=format&fit=crop&w=800&q=80',
  'sample-3d-finance-dashboard': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
  'sample-minimal-interior': 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
};

export const SampleGraphic: React.FC<SampleGraphicProps> = ({ sampleId, imageUrl, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  // Reset error state when imageUrl or sampleId changes
  useEffect(() => {
    setHasError(false);
  }, [imageUrl, sampleId]);

  const fallbackUrl = FALLBACK_URLS[sampleId] || FALLBACK_URLS['sample-courier'];
  const displayUrl = hasError || !imageUrl ? fallbackUrl : imageUrl;

  return (
    <div className={`relative w-full h-full bg-[#1A1815] overflow-hidden flex items-center justify-center ${className}`}>
      <img
        src={displayUrl}
        alt="Sample reference"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#E0AF4B] text-[10px] font-mono font-bold border border-amber-500/40 tracking-wider">
        REFERENCE IMAGE
      </div>
    </div>
  );
};
