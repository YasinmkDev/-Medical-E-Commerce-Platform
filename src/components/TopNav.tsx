import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  Phone, 
  ShieldCheck, 
  Heart,
  ChevronDown
} from 'lucide-react';

interface TopNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWhatsApp: () => void;
  onSearchClick: () => void;
  currency: 'USD' | 'PKR';
  onToggleCurrency: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenWhatsApp,
  onSearchClick,
  currency,
  onToggleCurrency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] border-b border-[#e0e0e0]/70 transition-all duration-200">

      {/* Main Navigation Bar */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#0a3922] flex items-center justify-center text-white font-bold shadow-sm group-hover:bg-[#003642] transition-colors">
            {/* Medical Cross Symbol in Leaf Bright */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              <div className="absolute w-5 h-1.5 bg-[#1dbf73] rounded-sm"></div>
              <div className="absolute w-1.5 h-5 bg-[#1dbf73] rounded-sm"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-tight text-[#0a3922] leading-tight">
              Global<span className="text-[#ff643b]">Paramedics</span>
            </span>
            <span className="text-[11px] font-semibold text-[#7a7a7a] tracking-wider uppercase">
              Medical Devices & EMS
            </span>
          </div>
        </a>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#0a3922]">
          <a href="#categories" className="hover:text-[#ff643b] transition-colors">Categories</a>
          <a href="#recommended" className="hover:text-[#ff643b] transition-colors flex items-center gap-1">
            Clinical Recommendations
            <span className="bg-[#d2f2e3] text-[#0a3922] text-[11px] px-2 py-0.5 rounded-full font-bold">New</span>
          </a>
          <a href="#products" className="hover:text-[#ff643b] transition-colors">Equipment Catalog</a>
          <a href="#about-us" className="hover:text-[#ff643b] transition-colors">Why Clinicians Trust Us</a>
          <a href="#procurement" className="hover:text-[#ff643b] transition-colors">Hospital Bulk Orders</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onSearchClick}
            id="nav-search-btn"
            className="p-2.5 rounded-full text-[#0a3922] hover:bg-[#eee2ff]/60 transition-colors flex items-center justify-center"
            title="Search clinical devices"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            id="nav-cart-btn"
            className="relative p-2.5 rounded-full text-[#0a3922] hover:bg-[#eee2ff]/60 transition-colors flex items-center justify-center"
            title="View requisition cart"
            aria-label="Requisition Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#ff643b] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scaleIn">
                {cartCount}
              </span>
            )}
          </button>

          {/* WhatsApp Direct Clinical Inquiry Button (Canonical Outline Nav Button from design.md) */}
          <button
            onClick={onOpenWhatsApp}
            id="nav-whatsapp-btn"
            className="hidden sm:inline-flex items-center gap-2 bg-[#ffffff] text-[#0a3922] border border-[#000000] text-[14px] font-medium py-2 px-4 rounded-[40px] hover:bg-[#0a3922] hover:text-[#ffffff] hover:border-[#0a3922] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#1dbf73]" />
            <span>WhatsApp Order</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0a3922] rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff] border-b border-[#e0e0e0] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-[15px] font-medium text-[#0a3922]">
            <a 
              href="#categories" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#eee2ff]"
            >
              Medical Device Categories
            </a>
            <a 
              href="#recommended" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#eee2ff] flex items-center justify-between"
            >
              <span>Personalized Recommendations</span>
              <span className="bg-[#d2f2e3] text-[#0a3922] text-[11px] px-2 py-0.5 rounded-full font-bold">Smart Match</span>
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#eee2ff]"
            >
              Browse Full Catalog
            </a>
            <a 
              href="#about-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#eee2ff]"
            >
              ISO & CE Certifications
            </a>
            <a 
              href="#procurement" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#eee2ff]"
            >
              Hospital Bulk Requisitions
            </a>
          </div>

          <div className="pt-3 border-t border-[#e0e0e0] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#ff643b] text-white py-2.5 px-4 rounded-[40px] text-[14px] font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Order / Consultation</span>
            </button>
            <div className="text-center text-[12px] text-[#7a7a7a] pt-1">
              Call us 24/7: <span className="font-semibold text-[#0a3922]">+92 300 8472910</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
