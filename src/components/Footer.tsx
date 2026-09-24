import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  FileText, 
  Heart, 
  MessageCircle 
} from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onSelectCategory }) => {
  return (
    <footer className="bg-[#0a3922] text-[#ffffff] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Upper Row: Brand, Categories, Clinical Support, Certification */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#ffffff] flex items-center justify-center font-bold">
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute w-5 h-1.5 bg-[#0a3922] rounded-sm"></div>
                  <div className="absolute w-1.5 h-5 bg-[#0a3922] rounded-sm"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-bold tracking-tight text-white leading-tight">
                  Global<span className="text-[#ff643b]">Paramedics</span>
                </span>
                <span className="text-[11px] font-semibold text-[#d2f2e3] tracking-wider uppercase">
                  Medical Devices & Emergency Supplies
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[#d2f2e3] leading-[1.6]">
              Trusted supplier of certified infrared vein finders, emergency resuscitation bags, clinical centrifuges, and precision surgical instruments for hospitals, clinics, and EMS paramedics across Pakistan & Asia.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenWhatsApp}
                className="bg-[#1dbf73] hover:bg-[#18a864] text-[#0a3922] font-bold text-[13px] px-4 py-2 rounded-[40px] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#0a3922]" />
                <span>24/7 Clinical Hotline</span>
              </button>
            </div>
          </div>

          {/* Col 2: Equipment Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">
              Clinical Catalog
            </h4>
            <ul className="space-y-2 text-[14px] text-[#d2f2e3]">
              <li>
                <button 
                  onClick={() => onSelectCategory('vein-finders')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Infrared Vein Detectors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('patient-monitoring')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Pulse Oximeters & BP Monitors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('surgical-instruments')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Minor Surgery Instruments
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('emergency-trauma')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Silicone Resuscitation Ambu Bags
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('lab-equipment')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Clinical Benchtop Centrifuges
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory('paramedic-bags')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  EMS Trauma Backpacks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">
              Procurement
            </h4>
            <ul className="space-y-2 text-[14px] text-[#d2f2e3]">
              <li><a href="#procurement" className="hover:text-white transition-colors">Hospital Bulk Orders</a></li>
              <li><a href="#about-us" className="hover:text-white transition-colors">CE / ISO Certificates</a></li>
              <li><a href="#about-us" className="hover:text-white transition-colors">Warranty & Calibration</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Tender Invoicing</a></li>
              <li><a href="#recommended" className="hover:text-white transition-colors">Medical Student Rebate</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">
              Distribution Desk
            </h4>
            <div className="space-y-2.5 text-[13px] text-[#d2f2e3]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1dbf73] shrink-0 mt-0.5" />
                <span>+92 300 8472910 / +92 42 35912801</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#1dbf73] shrink-0 mt-0.5" />
                <span>orders@Globalparamedics.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1dbf73] shrink-0 mt-0.5" />
                <span>Central Medical Hub: Lahore & Islamabad Distribution, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#1dbf73] shrink-0 mt-0.5" />
                <span>Emergency Ambulance Dispatch: 24/7/365</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer (Mandatory for clinical ecommerce and based on Globalparamedics.com) */}
        <div className="pt-8 border-t border-white/10 text-[12px] text-[#d2f2e3]/70 space-y-2 leading-relaxed">
          <p>
            <strong className="text-white">Medical Device Notice & Regulatory Compliance:</strong> The equipment, diagnostic devices, and clinical consumables displayed on GlobalParamedics.com are designed for licensed healthcare professionals, trained paramedics, diagnostic laboratories, and health institutions. Home monitoring devices (such as pulse oximeters and digital sphygmomanometers) are intended for auxiliary wellness monitoring and do not replace formal clinical diagnosis. All electrical and optical devices are distributed in compliance with CE Mark, ISO 13485 quality standards, and DRAP regulations.
          </p>
          <p>
            GlobalParamedics provides warranty coverage, calibration sheets, and original equipment manufacturer (OEM) verification on all surgical and vascular access equipment.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[13px] text-[#d2f2e3]/80 gap-3">
          <div>
            © {new Date().getFullYear()} GlobalParamedics. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[12px]">
            <span>Cash on Delivery (COD) Available</span>
            <span>•</span>
            <span>Bank Wire & PO Accepted</span>
            <span>•</span>
            <span>Express Courier</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
