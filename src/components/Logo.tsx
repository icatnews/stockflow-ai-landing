import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-7 h-7 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
    xl: 'w-20 h-20 rounded-3xl'
  };

  const svgSize = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div
      className={`relative bg-gradient-to-br from-[#22C55E] via-[#10B981] to-[#059669] flex items-center justify-center shadow-[3px_3px_8px_#c2bbb0,-3px_-3px_8px_#ffffff] border border-white/40 shrink-0 ${sizeClasses[size]} ${className}`}
      style={{
        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(16, 185, 129, 0.3)'
      }}
    >
      {/* Glossy Overlay */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

      {/* Upward Trend Arrow Icon matching Image 1 */}
      <svg
        className={`${svgSize[size]} text-white filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5L9 11.5L13.5 14.5L19.5 7.5" />
        <path d="M14.5 7.5H19.5V12.5" />
      </svg>
    </div>
  );
};
