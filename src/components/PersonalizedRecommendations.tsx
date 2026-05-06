import React, { useState } from 'react';
import { CLINICAL_PERSONAS, PRODUCTS } from '../data/medicalData';
import { Product } from '../types';
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  ShoppingBag, 
  Eye, 
  MessageCircle,
  Stethoscope,
  Ambulance,
  Building2,
  Microscope,
  GraduationCap
} from 'lucide-react';

interface PersonalizedRecommendationsProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onWhatsAppInquiry: (product: Product) => void;
  currency: 'USD' | 'PKR';
}

export const PersonalizedRecommendations: React.FC<PersonalizedRecommendationsProps> = ({
  onAddToCart,
  onQuickView,
  onWhatsAppInquiry,
  currency
}) => {
  const [activePersonaId, setActivePersonaId] = useState<string>('paramedic');

  const activePersona = CLINICAL_PERSONAS.find(p => p.id === activePersonaId) || CLINICAL_PERSONAS[0];

  // Get matching products
  const recommendedProducts = PRODUCTS.filter(p => 
    activePersona.recommendedProductIds.includes(p.id)
  );

  const getPersonaIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ambulance': return <Ambulance className="w-4 h-4" />;
      case 'Stethoscope': return <Stethoscope className="w-4 h-4" />;
      case 'Building2': return <Building2 className="w-4 h-4" />;
      case 'Microscope': return <Microscope className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      default: return <Stethoscope className="w-4 h-4" />;
    }
  };

  const formatPrice = (prod: Product) => {
    if (currency === 'PKR') {
      return `PKR ${prod.pricePKR.toLocaleString()}`;
    }
    return `$${prod.priceUSD}`;
  };

  return (
    <section id="recommended" className="py-12 sm:py-16 bg-[#ffffff] border-y border-[#e0e0e0]/70">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#faf7e8] text-[#0a3922] text-[12px] font-bold px-3 py-1 rounded-[9999px] border border-[#e0e0e0]">
            <Sparkles className="w-3.5 h-3.5 text-[#ff643b]" />
            <span>Clinical Match Intelligence</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-[32px] sm:text-[42px] font-semibold text-[#0a3922] tracking-[-0.019em] leading-[1.15]">
                Tailored Equipment by Medical Role
              </h2>
              <p className="text-[16px] text-[#3d3d3d] max-w-[620px] mt-2">
                Select your practice environment to load device bundles calibrated specifically for your clinical protocol and regulatory requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Persona Selectors - 40px Pill buttons */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {CLINICAL_PERSONAS.map((persona) => {
            const isActive = persona.id === activePersonaId;
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersonaId(persona.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[40px] text-[14px] font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0a3922] text-[#ffffff] shadow-none'
                    : 'bg-[#faf7e8] hover:bg-[#d2f2e3] text-[#0a3922] border border-[#e0e0e0]'
                }`}
              >
                {getPersonaIcon(persona.icon)}
                <span>{persona.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Persona Context Card (Lilac Wash or Cream pastel background) */}
        <div className="bg-[#e4f7ee] rounded-[24px] p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="bg-[#0a3922] text-[#ffffff] text-[12px] font-bold px-3 py-1 rounded-[9999px]">
                {activePersona.badge}
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-[#0a3922]">
                Recommended Protocol Bundle for {activePersona.title}
              </h3>
            </div>
            <span className="text-[13px] font-semibold text-[#0a3922] bg-[#ffffff] px-3.5 py-1.5 rounded-[9999px] border border-[#0a3922]/10 inline-flex items-center gap-1.5 self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-[#1dbf73]" />
              Verified Clinical Fit
            </span>
          </div>

          <p className="text-[15px] text-[#3d3d3d] leading-[1.5] max-w-[840px]">
            {activePersona.clinicalContext}
          </p>

          <div className="pt-2 flex items-center gap-2 text-[13px] font-semibold text-[#0a3922]">
            <span className="w-2 h-2 rounded-full bg-[#1dbf73]"></span>
            <span>Procurement Advantage: </span>
            <span className="text-[#3d3d3d] font-normal">{activePersona.urgencyBenefit}</span>
          </div>
        </div>

        {/* Recommended Products Grid - White Cards with 16px/24px radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#ffffff] rounded-[24px] border border-[#e0e0e0] p-5 flex flex-col justify-between hover:border-[#0a3922] transition-colors relative group"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-44 rounded-[16px] overflow-hidden bg-[#f7f8f9] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 bg-[#0a3922] text-[#ffffff] text-[11px] font-bold px-2.5 py-0.5 rounded-[9999px]">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-2.5 right-2.5 bg-[#ffffff]/90 backdrop-blur-xs text-[#0a3922] text-[11px] font-bold px-2 py-0.5 rounded-md">
                    98% Match
                  </span>
                </div>

                {/* Meta details */}
                <div className="flex items-center gap-2 text-[12px] text-[#7a7a7a] mb-1.5">
                  <span>{product.certifications[0]}</span>
                  <span>•</span>
                  <span>{product.warranty}</span>
                </div>

                {/* Title */}
                <h4 className="text-[16px] font-bold text-[#0a3922] leading-snug line-clamp-2 mb-2 group-hover:text-[#003642] transition-colors">
                  {product.name}
                </h4>

                {/* Tagline / clinical benefit */}
                <p className="text-[13px] text-[#3d3d3d] line-clamp-2 mb-3">
                  {product.tagline}
                </p>
              </div>

              {/* Price & Action Row */}
              <div className="pt-4 border-t border-[#f2f2f2] space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-[20px] font-bold text-[#0a3922]">
                    {formatPrice(product)}
                  </span>
                  <span className="text-[12px] text-[#1dbf73] font-semibold">
                    ✓ In Stock ({product.stockCount})
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onQuickView(product)}
                    className="w-full py-2 px-3 rounded-[40px] border border-[#000000] text-[#0a3922] hover:bg-[#faf7e8] text-[13px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full py-2 px-3 rounded-[40px] bg-[#ff643b] hover:bg-[#e5522b] text-white text-[13px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
