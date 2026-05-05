import React, { useState, useEffect } from 'react';
import { X, Sparkles, Clock } from 'lucide-react';

interface StickyBottomNotificationProps {
  onAction: () => void;
}

export const StickyBottomNotification: React.FC<StickyBottomNotificationProps> = ({ onAction }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 8,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Clinical Procurement Subsidy Banner"
      className="fixed bottom-4 right-4 z-40 max-w-[440px] w-[calc(100%-32px)] sm:w-auto bg-[#0a3922] text-white p-4 sm:p-5 rounded-[16px] border border-white/15 shadow-2xl animate-slideUp"
    >
      {/* Top row with Title & Close button */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="text-[15px] sm:text-[16px] font-semibold text-white leading-tight flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#1dbf73]" />
            <span>Clinical Equipment Subsidy</span>
          </div>
          <div className="text-[13px] text-[#d2f2e3] font-normal mt-0.5">
            Quarterly Institutional 15% Rebate on Vein Finders & Kits
          </div>
        </div>

        {/* Close Button at #a6a6a6 */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#a6a6a6] hover:text-white p-1 -mr-1 -mt-1 rounded-full transition-colors cursor-pointer"
          aria-label="Dismiss subsidy notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Countdown and Action Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Inline Countdown blocks */}
        <div className="flex items-center gap-1.5 font-mono">
          <div className="h-8 px-2 rounded bg-black/30 flex items-center justify-center text-[12px] font-bold text-[#faf7e8] border border-white/10">
            {timeLeft.days}d
          </div>
          <span className="text-white/40">:</span>
          <div className="h-8 px-2 rounded bg-black/30 flex items-center justify-center text-[12px] font-bold text-[#faf7e8] border border-white/10">
            {String(timeLeft.hours).padStart(2, '0')}h
          </div>
          <span className="text-white/40">:</span>
          <div className="h-8 px-2 rounded bg-black/30 flex items-center justify-center text-[12px] font-bold text-[#faf7e8] border border-white/10">
            {String(timeLeft.minutes).padStart(2, '0')}m
          </div>
          <span className="text-white/40">:</span>
          <div className="h-8 px-2 rounded bg-black/30 flex items-center justify-center text-[12px] font-bold text-[#1dbf73] border border-white/10">
            {String(timeLeft.seconds).padStart(2, '0')}s
          </div>
        </div>

        {/* Filled Mini-button in Cream #faf7e8 with 14px #0a3922 text */}
        <button
          onClick={onAction}
          className="bg-[#faf7e8] hover:bg-[#d2f2e3] text-[#0a3922] text-[13px] font-bold py-2 px-4 rounded-[40px] transition-colors cursor-pointer"
        >
          Claim 15% Rebate
        </button>
      </div>
    </aside>
  );
};
