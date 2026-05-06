import React from 'react';
import { Product } from '../types';
import { 
  X, 
  ShieldCheck, 
  Award, 
  ShoppingBag, 
  MessageCircle, 
  Check, 
  FileText, 
  Truck,
  RotateCcw,
  Star
} from 'lucide-react';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onWhatsAppInquiry: (product: Product) => void;
  currency: 'USD' | 'PKR';
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  onWhatsAppInquiry,
  currency
}) => {
  if (!product) return null;

  const formatPrice = (prod: Product) => {
    if (currency === 'PKR') {
      return `PKR ${prod.pricePKR.toLocaleString()}`;
    }
    return `$${prod.priceUSD}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="relative bg-[#ffffff] rounded-[24px] max-w-[860px] w-full max-h-[90vh] overflow-y-auto border border-[#e0e0e0] shadow-2xl text-[#000000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#f2f2f2] hover:bg-[#0a3922] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Product Imagery & Certifications */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative rounded-[16px] overflow-hidden bg-[#f7f8f9] h-[280px] sm:h-[340px] border border-[#e0e0e0]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#0a3922] text-[#ffffff] text-[11px] font-bold px-3 py-1 rounded-[9999px]">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Certifications Badge Pills */}
            <div className="space-y-2">
              <div className="text-[12px] font-bold text-[#7a7a7a] uppercase tracking-wider">
                Regulatory Standards:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.certifications.map((cert, i) => (
                  <span 
                    key={i} 
                    className="bg-[#d2f2e3] text-[#0a3922] text-[11px] font-bold px-2.5 py-1 rounded-[9999px] flex items-center gap-1"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#1dbf73]" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="bg-[#faf7e8] rounded-[16px] p-4 text-[13px] space-y-2 border border-[#e0e0e0]">
              <div className="flex items-center gap-2 text-[#0a3922] font-semibold">
                <Truck className="w-4 h-4 text-[#ff643b]" />
                <span>Express Metropolitan Dispatch</span>
              </div>
              <p className="text-[12px] text-[#7a7a7a]">
                Same-day dispatch for hospital requisitions received before 2:00 PM.
              </p>
              <div className="flex items-center gap-2 text-[#0a3922] font-semibold pt-1 border-t border-[#e0e0e0]">
                <RotateCcw className="w-4 h-4 text-[#1dbf73]" />
                <span>{product.warranty}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details, Specifications, & Actions */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-[#ff643b] text-[13px] font-bold mb-1">
                <Star className="w-4 h-4 fill-[#ff643b]" />
                <span>{product.rating}</span>
                <span className="text-[#7a7a7a]">({product.reviewsCount} verified clinician reviews)</span>
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-bold text-[#0a3922] leading-tight">
                {product.name}
              </h2>
              <p className="text-[14px] text-[#7a7a7a] mt-1 font-medium">
                {product.tagline}
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-[#f7f8f9] p-4 rounded-[16px] flex items-baseline justify-between border border-[#e0e0e0]">
              <div>
                <span className="text-[12px] text-[#7a7a7a] block">Clinical List Price</span>
                <span className="text-[28px] font-bold text-[#0a3922]">
                  {formatPrice(product)}
                </span>
              </div>
              <span className="bg-[#d2f2e3] text-[#0a3922] text-[12px] font-bold px-3 py-1 rounded-[9999px]">
                ✓ In Stock ({product.stockCount} Units)
              </span>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#7a7a7a]">
                Clinical Overview
              </h4>
              <p className="text-[14px] text-[#3d3d3d] leading-[1.6]">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-2">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#7a7a7a]">
                Technical Parameters
              </h4>
              <div className="border border-[#e0e0e0] rounded-[16px] overflow-hidden text-[13px]">
                {Object.entries(product.specifications).map(([key, val], idx) => (
                  <div 
                    key={key} 
                    className={`flex items-start justify-between p-2.5 ${
                      idx % 2 === 0 ? 'bg-[#faf7e8]/50' : 'bg-[#ffffff]'
                    }`}
                  >
                    <span className="font-semibold text-[#0a3922] w-1/3">{key}</span>
                    <span className="text-[#3d3d3d] w-2/3 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-1.5">
              <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#7a7a7a]">
                Standard Equipment Features
              </h4>
              <div className="grid grid-cols-1 gap-1 text-[13px] text-[#3d3d3d]">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#1dbf73] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#e0e0e0] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-[40px] bg-[#ff643b] hover:bg-[#e5522b] text-white text-[15px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Requisition Order</span>
              </button>

              <button
                onClick={() => {
                  onWhatsAppInquiry(product);
                  onClose();
                }}
                className="w-full py-3 px-4 rounded-[40px] border border-[#000000] text-[#0a3922] hover:bg-[#faf7e8] text-[15px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#1dbf73]" />
                <span>Ask Questions on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
