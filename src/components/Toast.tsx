import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#221E1A] text-[#E0AF4B] px-5 py-3.5 rounded-2xl flex items-center gap-3 text-sm font-extrabold shadow-[6px_6px_20px_rgba(0,0,0,0.3)] backdrop-blur-md border border-[#E0AF4B]/40">
      <CheckCircle2 className="w-5 h-5 text-[#E0AF4B]" />
      <span>{message}</span>
      <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg text-white/70 hover:text-white">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
