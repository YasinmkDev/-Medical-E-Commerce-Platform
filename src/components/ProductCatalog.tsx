import React from 'react';
import { Product } from '../types';
import { 
  ShoppingBag, 
  Eye, 
  MessageCircle, 
  Check, 
  ShieldCheck, 
  Clock, 
  Award,
  Zap,
  Star
} from 'lucide-react';

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onWhatsAppInquiry: (product: Product) => void;
  currency: 'USD' | 'PKR';
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  products,
  onAddToCart,
  onQuickView,
  onWhatsAppInquiry,
  currency,
  selectedCategory,
  onSelectCategory,
}) => {
  const categoryFilters = [
    { id: 'all', label: 'All Equipment' },
    { id: 'vein-finders', label: 'Vein Locators' },
    { id: 'patient-monitoring', label: 'Vitals & Monitors' },
    { id: 'surgical-instruments', label: 'Surgical Sets' },
    { id: 'emergency-trauma', label: 'Emergency & Resuscitation' },
    { id: 'lab-equipment', label: 'Centrifuges & Lab' },
    { id: 'paramedic-bags', label: 'Trauma Bags' },
    { id: 'consumables-ppe', label: 'Consumables & PPE' }
  ];

  const formatPrice = (prod: Product) => {
    if (currency === 'PKR') {
      return `PKR ${prod.pricePKR.toLocaleString()}`;
    }
    return `$${prod.priceUSD}`;
  };

  const formatOriginalPrice = (prod: Product) => {
    if (!prod.originalPriceUSD) return null;
    if (currency === 'PKR') {
      const origPKR = Math.round(prod.originalPriceUSD * 278);
      return `PKR ${origPKR.toLocaleString()}`;
    }
    return `$${prod.originalPriceUSD}`;
  };

  return (
    <section id="products" className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#d2f2e3] text-[#0a3922] text-[12px] font-bold px-3 py-1 rounded-[9999px]">
              <span>Paramedic & Hospital Inventory</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-semibold text-[#0a3922] tracking-[-0.019em] leading-[1.15] mt-2">
              Verified Medical Equipment Catalog
            </h2>
            <p className="text-[16px] text-[#3d3d3d] max-w-[620px] mt-1">
              Direct procurement of genuine, factory-calibrated devices. Backed by certified warranties, local replacement parts, and emergency clinical dispatch.
            </p>
          </div>
        </div>

        {/* Filter Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryFilters.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-[40px] text-[13px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0a3922] text-[#ffffff]'
                    : 'bg-[#ffffff] text-[#0a3922] border border-[#e0e0e0] hover:border-[#0a3922]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="bg-[#ffffff] rounded-[24px] p-12 text-center space-y-4 border border-[#e0e0e0]">
            <h3 className="text-[20px] font-bold text-[#0a3922]">No medical devices found</h3>
            <p className="text-[15px] text-[#7a7a7a] max-w-[420px] mx-auto">
              No matching equipment found for your selected filters. Please adjust your search query or reset filters.
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="bg-[#0a3922] text-white px-6 py-2.5 rounded-[40px] text-[14px] font-semibold"
            >
              Show All Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#ffffff] rounded-[24px] border border-[#e0e0e0] overflow-hidden flex flex-col justify-between hover:border-[#0a3922] transition-colors group"
              >
                {/* Top Half: Visual and Badges */}
                <div className="p-6">
                  {/* Image Container with Badges */}
                  <div className="relative w-full h-56 rounded-[16px] overflow-hidden bg-[#f7f8f9] mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Top Left Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#0a3922] text-[#ffffff] text-[11px] font-bold px-3 py-1 rounded-[9999px]">
                        {product.badge}
                      </span>
                    )}

                    {/* Top Right Stock Badge */}
                    <span className="absolute top-3 right-3 bg-[#ffffff]/95 backdrop-blur-xs text-[#0a3922] text-[11px] font-semibold px-2.5 py-1 rounded-[9999px] flex items-center gap-1 border border-[#e0e0e0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1dbf73]"></span>
                      {product.stockCount} In Stock
                    </span>

                    {/* Quick View Button overlay on hover */}
                    <button
                      onClick={() => onQuickView(product)}
                      className="absolute inset-x-4 bottom-3 bg-[#0a3922]/90 hover:bg-[#0a3922] text-white text-[13px] font-semibold py-2 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 backdrop-blur-xs cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Clinical Specifications</span>
                    </button>
                  </div>

                  {/* Certifications and Rating */}
                  <div className="flex items-center justify-between text-[12px] text-[#7a7a7a] mb-2">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1dbf73]" />
                      <span className="font-semibold text-[#0a3922]">{product.certifications[0]}</span>
                      <span>•</span>
                      <span>{product.warranty}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#ff643b]">
                      <Star className="w-3.5 h-3.5 fill-[#ff643b]" />
                      <span className="font-bold text-[#000000]">{product.rating}</span>
                      <span className="text-[#7a7a7a]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-[18px] sm:text-[19px] font-bold text-[#0a3922] leading-snug mb-2 group-hover:text-[#003642] transition-colors">
                    {product.name}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p className="text-[14px] text-[#3d3d3d] leading-[1.4] mb-4">
                    {product.tagline}
                  </p>

                  {/* Key Feature Highlight */}
                  <div className="bg-[#faf7e8] rounded-[12px] p-3 text-[12px] text-[#0a3922] space-y-1 border border-[#e0e0e0]/70">
                    <div className="font-semibold flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-[#ff643b]" />
                      <span>Key Clinical Advantage:</span>
                    </div>
                    <div className="text-[#3d3d3d] leading-relaxed">
                      {product.features[0]}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="pt-4 border-t border-[#f2f2f2] flex items-baseline justify-between">
                    <div>
                      <div className="text-[22px] sm:text-[24px] font-bold text-[#0a3922]">
                        {formatPrice(product)}
                      </div>
                      {product.originalPriceUSD && (
                        <div className="text-[12px] text-[#7a7a7a] line-through">
                          {formatOriginalPrice(product)}
                        </div>
                      )}
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-medium text-[#7a7a7a] block">
                        Official Local Warranty
                      </span>
                      <span className="text-[11px] font-semibold text-[#1dbf73]">
                        Free Emergency Dispatch
                      </span>
                    </div>
                  </div>

                  {/* Dual Action Buttons (Primary Coral Button paired with Ghost Outline Button) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Secondary WhatsApp Inquiry */}
                    <button
                      onClick={() => onWhatsAppInquiry(product)}
                      className="py-2.5 px-3 rounded-[40px] border border-[#000000] text-[#0a3922] hover:bg-[#faf7e8] text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      title="Direct order inquiry on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#1dbf73]" />
                      <span>WhatsApp</span>
                    </button>

                    {/* Primary Coral Add to Cart Button */}
                    <button
                      onClick={() => onAddToCart(product)}
                      className="py-2.5 px-3 rounded-[40px] bg-[#ff643b] hover:bg-[#e5522b] active:scale-[0.98] text-[#ffffff] text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-all shadow-none cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
