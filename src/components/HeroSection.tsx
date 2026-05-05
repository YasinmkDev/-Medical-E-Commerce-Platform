import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Send,
  Truck,
  FileText
} from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onWhatsAppClick: () => void;
  onSelectProduct: (productId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onWhatsAppClick,
  onSelectProduct
}) => {
  const [activeMessageTab, setActiveMessageTab] = useState<'vein' | 'icu' | 'quote'>('vein');

  const chatContent = {
    vein: {
      user: "Assalam o Alaikum, do you have the AccuVein Pro Portable Vein Finder in stock for our pediatric clinic?",
      reply: "Wa Alaikum Assalam! Yes, Dr. Tariq. We have 18 units in central stock with CE 0123 & 2-year warranty. Can dispatch to your clinic within 2 hours!",
      badge: "In Stock & Calibrated"
    },
    icu: {
      user: "Need urgent quotation for 5x Silicone Resuscitator Bags & 20x Nitrile Examination Glove cases.",
      reply: "Requisition received! Official GST hospital invoice prepared at wholesale tier. Free express temperature-controlled shipping applied.",
      badge: "Hospital Bulk Discount Active"
    },
    quote: {
      user: "Can we get an official ISO 13485 verification sheet for the CentriSpin 4000 centrifuge?",
      reply: "Certainly! Sending the batch calibration certificate and CE conformity file right now.",
      badge: "Regulatory Verified"
    }
  };

  return (
    <section className="relative bg-[#0a3922] text-[#ffffff] pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Subtle organic background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#1dbf73]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#460095]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Pill Tag Chip */}
            <div className="inline-flex items-center gap-2 bg-[#d2f2e3] text-[#0a3922] text-[13px] font-semibold px-3.5 py-1.5 rounded-[9999px]">
              <span className="w-2 h-2 rounded-full bg-[#1dbf73]"></span>
              <span>Pakistan & Asia's Dedicated Emergency Medical Hardware</span>
            </div>

            {/* Main Display Headline (DM Sans display size 69-80px with tight tracking) */}
            <h1 className="text-[44px] sm:text-[64px] lg:text-[76px] font-semibold text-[#ffffff] leading-[1.05] tracking-[-0.028em]">
              Turn Clinical Challenges into <span className="text-[#1dbf73]">Instant Care</span>.
            </h1>

            {/* Body Text (DM Sans 18px in #d2f2e3 Mint Wash) */}
            <p className="text-[17px] sm:text-[19px] text-[#d2f2e3] font-normal leading-[1.45] max-w-[540px]">
              Equipping emergency paramedics, hospitals, and outpatient clinics with certified vein locators, resuscitation gear, and surgical instruments. Verified CE & ISO standards with immediate dispatch.
            </p>

            {/* Action Buttons: Coral Filled Button + Ghost Outline Button */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              {/* Primary CTA - Coral Pulse */}
              <button
                onClick={onExploreClick}
                id="hero-explore-btn"
                className="bg-[#ff643b] text-[#ffffff] text-[16px] font-semibold px-6 py-3.5 rounded-[40px] hover:bg-[#e5522b] active:scale-[0.98] transition-all duration-150 inline-flex items-center gap-2.5 shadow-none cursor-pointer"
              >
                <span>Browse Medical Equipment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Ghost Outline Button */}
              <button
                onClick={onWhatsAppClick}
                id="hero-whatsapp-ghost-btn"
                className="bg-transparent text-[#ffffff] border border-[#ffffff] text-[16px] font-medium px-6 py-3.5 rounded-[40px] hover:bg-[#ffffff]/10 active:scale-[0.98] transition-all duration-150 inline-flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#1dbf73]" />
                <span>Quick WhatsApp Order</span>
              </button>
            </div>

            {/* Trust bullet features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15 text-[13px] sm:text-[14px] text-[#d2f2e3]/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1dbf73] shrink-0" />
                <span>100% Genuine Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#1dbf73] shrink-0" />
                <span>2-Hour Metro Dispatch</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <FileText className="w-4 h-4 text-[#1dbf73] shrink-0" />
                <span>Hospital Invoices & GST</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic WhatsApp Phone Mockup overlapping Clinical Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Background clinician visual accent */}
            <div className="absolute -right-4 -bottom-6 w-[300px] sm:w-[360px] h-[400px] sm:h-[460px] rounded-[24px] overflow-hidden opacity-40 lg:opacity-75 pointer-events-none hidden sm:block border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1594824813576-92d6e38f9064?auto=format&fit=crop&w=700&q=80" 
                alt="Healthcare Professional with medical device"
                className="w-full h-full object-cover grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0a3922]/50 mix-blend-multiply"></div>
            </div>

            {/* Realistic WhatsApp Phone Mockup (Mandated Component from design.md) */}
            <div className="relative z-20 w-full max-w-[340px] sm:max-w-[360px] bg-[#ffffff] rounded-[24px] overflow-hidden border-[6px] border-[#3d3d3d] text-[#000000] shadow-none">
              
              {/* WhatsApp Status-bar Header (#0a3922) */}
              <div className="bg-[#0a3922] text-[#ffffff] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1dbf73]/20 flex items-center justify-center font-bold text-[#1dbf73] text-[13px] border border-[#1dbf73]/40">
                    AP
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold leading-tight text-white flex items-center gap-1.5">
                      AsianParamedics
                      <span className="w-2 h-2 rounded-full bg-[#1dbf73]"></span>
                    </div>
                    <div className="text-[11px] text-[#d2f2e3] font-normal">
                      Clinical Response Desk • Online
                    </div>
                  </div>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-[#d2f2e3]">
                  24/7 Verified
                </span>
              </div>

              {/* Scenario Switcher Tabs */}
              <div className="bg-[#faf7e8] border-b border-[#e0e0e0] px-3 py-1.5 flex items-center justify-between text-[11px] font-medium text-[#0a3922]">
                <span className="text-[#7a7a7a]">Live Demo:</span>
                <div className="flex gap-1">
                  <button 
                    onClick={() => setActiveMessageTab('vein')}
                    className={`px-2 py-0.5 rounded-full transition-colors ${activeMessageTab === 'vein' ? 'bg-[#0a3922] text-white font-semibold' : 'hover:bg-black/5'}`}
                  >
                    Vein Finder
                  </button>
                  <button 
                    onClick={() => setActiveMessageTab('icu')}
                    className={`px-2 py-0.5 rounded-full transition-colors ${activeMessageTab === 'icu' ? 'bg-[#0a3922] text-white font-semibold' : 'hover:bg-black/5'}`}
                  >
                    ICU Supplies
                  </button>
                  <button 
                    onClick={() => setActiveMessageTab('quote')}
                    className={`px-2 py-0.5 rounded-full transition-colors ${activeMessageTab === 'quote' ? 'bg-[#0a3922] text-white font-semibold' : 'hover:bg-black/5'}`}
                  >
                    Certificates
                  </button>
                </div>
              </div>

              {/* WhatsApp Chat Area (white background with incoming & outgoing bubbles) */}
              <div className="p-3.5 space-y-3 bg-[#f7f8f9] min-h-[260px] text-[13px]">
                
                {/* Timestamp pill */}
                <div className="text-center">
                  <span className="bg-[#e0e0e0]/70 text-[#7a7a7a] text-[10px] font-medium px-2 py-0.5 rounded-[9999px]">
                    Today 10:42 AM
                  </span>
                </div>

                {/* Outgoing Message (Customer) - Mint WhatsApp canonical #dcf8c6 */}
                <div className="flex flex-col items-end">
                  <div className="bg-[#dcf8c6] text-[#000000] p-3 rounded-[16px] rounded-tr-none max-w-[85%] border border-[#1dbf73]/20 text-[13px] leading-[1.35]">
                    {chatContent[activeMessageTab].user}
                    <div className="text-[10px] text-[#7a7a7a] text-right mt-1">10:43 AM ✓✓</div>
                  </div>
                </div>

                {/* Incoming Message (AsianParamedics Clinician Desk) - White with 1px #e0e0e0 border */}
                <div className="flex flex-col items-start">
                  <div className="bg-[#ffffff] text-[#000000] p-3 rounded-[16px] rounded-tl-none max-w-[90%] border border-[#e0e0e0] text-[13px] leading-[1.35]">
                    <div className="text-[11px] font-bold text-[#1dbf73] mb-1">
                      AsianParamedics Response Desk
                    </div>
                    {chatContent[activeMessageTab].reply}
                    <div className="mt-2 pt-2 border-t border-[#f2f2f2] flex items-center justify-between text-[11px]">
                      <span className="bg-[#d2f2e3] text-[#0a3922] px-2 py-0.5 rounded-full font-semibold text-[10px]">
                        {chatContent[activeMessageTab].badge}
                      </span>
                      <span className="text-[10px] text-[#7a7a7a]">10:44 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action within Phone Mockup */}
              <div className="p-2.5 bg-[#ffffff] border-t border-[#e0e0e0] flex items-center gap-2">
                <button
                  onClick={onWhatsAppClick}
                  className="w-full bg-[#1dbf73] hover:bg-[#18a864] text-white text-[12px] font-semibold py-2 px-3 rounded-[40px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Consultation Now</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
