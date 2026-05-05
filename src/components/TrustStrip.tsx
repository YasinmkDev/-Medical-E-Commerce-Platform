import React from 'react';
import { TRUST_STATS } from '../data/medicalData';
import { ShieldCheck, Award, Zap, Truck, CheckCircle } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const certifications = [
    { name: 'CE Mark 0123', label: 'European Medical Device Conformity' },
    { name: 'ISO 13485:2016', label: 'Medical Devices Quality Management' },
    { name: 'WHO-GMP Compliant', label: 'Good Manufacturing Practice Standard' },
    { name: 'DRAP Registered', label: 'Drug & Medical Device Authority Regulated' },
    { name: 'CoTCCC Benchmark', label: 'Tactical Emergency & Hemorrhage Standards' }
  ];

  return (
    <section className="bg-[#ffffff] border-b border-[#e0e0e0]/70 py-8 sm:py-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Metric Statistics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#e0e0e0]">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="pt-3 md:pt-0 px-2 flex flex-col items-center justify-center">
              <span className="text-[26px] sm:text-[32px] font-bold text-[#0a3922] leading-tight tracking-[-0.019em]">
                {stat.value}
              </span>
              <span className="text-[13px] text-[#7a7a7a] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Regulatory & Institutional Accreditation Strip */}
        <div className="pt-6 border-t border-[#e0e0e0] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#7a7a7a]">
            <ShieldCheck className="w-4 h-4 text-[#0a3922]" />
            <span>Official Clinical Accreditations & Standards:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-[#f2f2f2] hover:bg-[#d2f2e3] text-[#3d3d3d] hover:text-[#0a3922] text-[12px] font-semibold px-3 py-1 rounded-[9999px] transition-colors border border-[#e0e0e0] flex items-center gap-1.5"
                title={cert.label}
              >
                <Award className="w-3.5 h-3.5 text-[#0a3922]" />
                <span>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
