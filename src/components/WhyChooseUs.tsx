import React, { useState } from 'react';
import { CLIENT_TESTIMONIALS } from '../data/medicalData';
import { 
  ShieldCheck, 
  Truck, 
  Wrench, 
  FileCheck2, 
  Star, 
  MessageCircle,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

interface WhyChooseUsProps {
  onWhatsAppContact: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onWhatsAppContact }) => {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const features = [
    {
      title: 'Direct Manufacturer Verification & CE Compliance',
      description: 'Every vein locator, centrifuge, and resuscitation kit undergoes dual-stage electrical, optical, and pressure testing prior to dispatch with certified calibration documentation.',
      metric: '100% Quality Audited'
    },
    {
      title: 'Local In-Country Replacement Parts & Service Center',
      description: 'No 8-week international returns. Our certified biomedical technicians provide instant warranty servicing, replacement optical sensors, battery cells, and spare parts.',
      metric: '48-Hour Service Turnaround'
    },
    {
      title: 'Emergency 2-Hour Metropolitan Ambulance Dispatch',
      description: 'Critical patient resuscitation and hemorrhage supplies can be expedited across major regional hospital clusters via dedicated paramedic logistics couriers.',
      metric: '< 120 Min Urgent Delivery'
    },
    {
      title: 'Official GST Institutional Invoices & Tender Support',
      description: 'Full compliance with public health procurement rules, hospital purchase orders (PO), educational discounts for medical colleges, and tender submissions.',
      metric: 'Registered Tax Vendor'
    }
  ];

  return (
    <section id="about-us" className="py-16 sm:py-20 bg-[#eee2ff]/60 border-t border-[#e0e0e0]/70">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Upper Title */}
        <div className="max-w-[700px] space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#d2f2e3] text-[#0a3922] text-[12px] font-bold px-3 py-1 rounded-[9999px]">
            <span>Clinical Reliability</span>
          </div>
          <h2 className="text-[32px] sm:text-[44px] font-semibold text-[#0a3922] tracking-[-0.019em] leading-[1.15]">
            Why 10,000+ Paramedics & Clinics Rely on GlobalParamedics
          </h2>
          <p className="text-[16px] text-[#3d3d3d] leading-[1.5]">
            Medical devices shouldn't fail when a patient's life is on the line. We combine certified global hardware with rapid local clinical support.
          </p>
        </div>

        {/* Toolkit 2-Column Section (Canonical Layout from design.md) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Vertical Feature List with Active Lavender/White Block */}
          <div className="lg:col-span-7 space-y-3">
            {features.map((item, idx) => {
              const isActive = idx === activeFeatureIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFeatureIndex(idx)}
                  className={`p-5 sm:p-6 rounded-[16px] transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-[#ffffff] border border-[#460095]/20 shadow-none' 
                      : 'hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* 24px Filled #460095 Brand Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      isActive ? 'bg-[#460095] text-white' : 'bg-[#460095]/10 text-[#460095]'
                    }`}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        {/* 20px DM Sans 500 Label in #0a3922 */}
                        <h3 className="text-[18px] sm:text-[20px] font-medium text-[#0a3922] leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#d2f2e3] text-[#0a3922] shrink-0">
                          {item.metric}
                        </span>
                      </div>

                      {isActive && (
                        <p className="text-[14px] text-[#3d3d3d] leading-[1.5] pt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Full-bleed Clinician Portrait with Leaf Bright Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden border border-[#0a3922]/10 bg-[#0a3922]">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                alt="Doctor examining medical equipment"
                className="w-full h-[420px] object-cover mix-blend-luminosity opacity-85"
                referrerPolicy="no-referrer"
              />
              {/* Diagonal leaf-bright overlay at 30% */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a3922] via-[#0a3922]/40 to-[#1dbf73]/30"></div>

              {/* Floating Testimonial Over Portrait */}
              <div className="absolute inset-x-4 bottom-4 bg-[#ffffff]/95 backdrop-blur-xs p-5 rounded-[16px] border border-[#e0e0e0]">
                <div className="flex items-center gap-1 text-[#ff643b] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#ff643b]" />
                  ))}
                </div>
                <p className="text-[13px] text-[#000000] italic leading-snug mb-2">
                  "The AccuVein Pro has dropped our pediatric cannulation attempts from 3 to 1. An indispensable tool for our hospital."
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#7a7a7a]">
                  <span className="font-bold text-[#0a3922]">Dr. Tariq Mahmood, FRCS</span>
                  <span>Trauma Surgery</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Verified Clinician Reviews Grid */}
        <div className="space-y-6 pt-6 border-t border-[#e0e0e0]">
          <h3 className="text-[22px] font-bold text-[#0a3922]">
            Feedback from Certified Healthcare Practitioners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-[#ffffff] rounded-[24px] p-6 border border-[#e0e0e0] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#ff643b]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#ff643b]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#1dbf73] bg-[#d2f2e3] px-2 py-0.5 rounded-full">
                      ✓ Verified Clinician
                    </span>
                  </div>

                  <p className="text-[14px] text-[#3d3d3d] leading-[1.5]">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#f2f2f2]">
                  <div className="text-[14px] font-bold text-[#0a3922]">
                    {review.name}
                  </div>
                  <div className="text-[12px] text-[#7a7a7a]">
                    {review.role} • {review.hospital}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospital Bulk Procurement CTA Card */}
        <div id="procurement" className="bg-[#0a3922] text-white rounded-[24px] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-[#1dbf73] text-[#0a3922] text-[12px] font-bold px-3 py-1 rounded-[9999px]">
              Institutional Procurement & Tenders
            </span>
            <h3 className="text-[26px] sm:text-[32px] font-bold text-white leading-tight">
              Equipping a Hospital, Clinic, or Ambulance Fleet?
            </h3>
            <p className="text-[15px] text-[#d2f2e3] max-w-[550px]">
              Receive tiered institutional volume pricing, formal quotation sheets, and 30-day payment credit terms for registered medical centers.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onWhatsAppContact}
              className="w-full sm:w-auto bg-[#ff643b] hover:bg-[#e5522b] text-white text-[15px] font-semibold px-6 py-3 rounded-[40px] flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Request Hospital Quotation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
