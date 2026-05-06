import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import { Product } from '../types';

interface WhatsAppChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export const WhatsAppChatModal: React.FC<WhatsAppChatModalProps> = ({
  isOpen,
  onClose,
  initialProduct
}) => {
  const [inquiryType, setInquiryType] = useState<string>(
    initialProduct ? `Inquiry for ${initialProduct.name}` : 'General Equipment Requisition'
  );
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState('Doctor / Clinical In-charge');
  const [hospitalName, setHospitalName] = useState('');
  const [customMessage, setCustomMessage] = useState(
    initialProduct 
      ? `Hello Asian Paramedics, I am interested in procuring the ${initialProduct.name} (Code: ${initialProduct.id}). Please share immediate availability, official quotation, and delivery lead time.` 
      : 'Hello Asian Paramedics team, I would like to request an official catalog & institutional quote for our medical facility.'
  );
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const quickTemplates = [
    'Vein Finder Clinical Demo',
    'Hospital Bulk Quotation',
    'Ambulance Resuscitation Kit',
    'Pathology Centrifuge Calibration'
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);

    // Format WhatsApp Web URL
    const fullText = `*Clinical Requisition - Asian Paramedics*\n\n*Name:* ${userName || 'Medical Inquirer'}\n*Role:* ${userRole}\n*Facility:* ${hospitalName || 'Clinic/Hospital'}\n*Topic:* ${inquiryType}\n\n*Message:*\n${customMessage}`;
    const encoded = encodeURIComponent(fullText);
    const whatsappUrl = `https://wa.me/923008472910?text=${encoded}`;

    // Open WhatsApp in new tab safely
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="relative bg-[#ffffff] rounded-[24px] max-w-[560px] w-full overflow-hidden border border-[#e0e0e0] shadow-2xl text-[#000000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Canopy Green #0a3922 */}
        <div className="bg-[#0a3922] text-[#ffffff] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1dbf73]/20 flex items-center justify-center text-[#1dbf73] border border-[#1dbf73]/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[17px] font-bold leading-tight">
                  AsianParamedics Clinical Desk
                </h3>
                <span className="w-2 h-2 rounded-full bg-[#1dbf73] animate-pulse"></span>
              </div>
              <span className="text-[12px] text-[#d2f2e3] font-normal">
                Direct WhatsApp Hotline • Typically replies in &lt; 5 mins
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSent ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#d2f2e3] text-[#0a3922] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#1dbf73]" />
            </div>
            <h4 className="text-[20px] font-bold text-[#0a3922]">
              Transmitting to WhatsApp...
            </h4>
            <p className="text-[14px] text-[#3d3d3d] max-w-[380px] mx-auto leading-relaxed">
              Your inquiry has been compiled into an official clinical format and transferred to the Asian Paramedics WhatsApp hotline (+92 300 8472910).
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSent(false);
                  onClose();
                }}
                className="bg-[#0a3922] text-white px-6 py-2.5 rounded-[40px] text-[14px] font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSend} className="p-6 space-y-4 text-[13px]">
            {/* Quick Templates */}
            <div className="space-y-1.5">
              <label className="font-semibold text-[#7a7a7a] block text-[12px] uppercase tracking-wider">
                Quick Requisition Focus:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {quickTemplates.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => {
                      setInquiryType(t);
                      setCustomMessage(`Hello Asian Paramedics, please provide pricing, stock availability, and official technical brochure for ${t}.`);
                    }}
                    className={`px-3 py-1 rounded-[9999px] text-[12px] font-medium transition-colors ${
                      inquiryType === t 
                        ? 'bg-[#0a3922] text-white' 
                        : 'bg-[#faf7e8] hover:bg-[#d2f2e3] text-[#0a3922] border border-[#e0e0e0]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-medium text-[#0a3922] block">Your Name / Title:</label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g., Dr. Farhan Ali"
                  className="w-full px-3 py-2 bg-[#f7f8f9] rounded-lg border border-[#e0e0e0] focus:outline-none focus:border-[#0a3922]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-medium text-[#0a3922] block">Hospital / Institution:</label>
                <input
                  type="text"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  placeholder="e.g., Civil Hospital Trauma Bay"
                  className="w-full px-3 py-2 bg-[#f7f8f9] rounded-lg border border-[#e0e0e0] focus:outline-none focus:border-[#0a3922]"
                />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1">
              <label className="font-medium text-[#0a3922] block">
                Equipment Details / Clinical Query:
              </label>
              <textarea
                required
                rows={4}
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full p-3 bg-[#f7f8f9] rounded-lg border border-[#e0e0e0] focus:outline-none focus:border-[#0a3922] text-[13px] leading-relaxed"
              />
            </div>

            {/* Guarantees */}
            <div className="bg-[#e4f7ee] p-3 rounded-[12px] flex items-center gap-2 text-[12px] text-[#0a3922]">
              <ShieldCheck className="w-4 h-4 text-[#1dbf73] shrink-0" />
              <span>Official replies include DRAP certification files and hospital proforma invoices.</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-[#7a7a7a] hover:text-[#000000] text-[14px] font-medium"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-[#1dbf73] hover:bg-[#18a864] text-white px-6 py-2.5 rounded-[40px] text-[14px] font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Launch WhatsApp Chat</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
