import React, { useState, useMemo } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { SearchBar } from './components/SearchBar';
import { CategoryGrid } from './components/CategoryGrid';
import { PersonalizedRecommendations } from './components/PersonalizedRecommendations';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickView } from './components/ProductQuickView';
import { WhatsAppChatModal } from './components/WhatsAppChatModal';
import { StickyBottomNotification } from './components/StickyBottomNotification';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/medicalData';
import { CartItem, FilterState, Product } from './types';
import { CheckCircle2, FileText, Printer, X, Download, Code2, Copy, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { SectionManagerModal, SECTIONS } from './components/SectionManagerModal';

export default function App() {
  // Cart State
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Pre-populate with Flagship AccuVein Pro for immediate delightful preview
      quantity: 1,
      purchaseType: 'individual'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Currency State (default USD with PKR togglable)
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');

  // Modals
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsAppInquiryProduct, setWhatsAppInquiryProduct] = useState<Product | null>(null);
  const [showProformaModal, setShowProformaModal] = useState(false);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenSection = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setShowSectionModal(true);
  };

  // Filter State
  const [filter, setFilter] = useState<FilterState>({
    searchQuery: '',
    selectedCategory: 'all',
    inStockOnly: false,
    certifiedOnly: false,
    sortBy: 'recommended'
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, purchaseType: 'individual' }];
    });
    showToast(`Added ${product.name} to Requisition Cart`);
  };

  const handleUpdateQuantity = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleWhatsAppInquiry = (product: Product) => {
    setWhatsAppInquiryProduct(product);
    setIsWhatsAppModalOpen(true);
  };

  const handleWhatsAppOrder = (items: CartItem[], orderNotes: string, isHospitalPO: boolean) => {
    setIsCartOpen(false);
    
    // Construct rich clinical order breakdown
    const itemsSummary = items
      .map((i, idx) => `${idx + 1}. ${i.product.name} (Qty: ${i.quantity}) - ${currency === 'PKR' ? 'PKR ' + (i.product.pricePKR * i.quantity).toLocaleString() : '$' + (i.product.priceUSD * i.quantity)}`)
      .join('\n');
    
    const subtotal = items.reduce(
      (sum, i) => sum + (currency === 'PKR' ? i.product.pricePKR * i.quantity : i.product.priceUSD * i.quantity),
      0
    );

    const fullMessage = `*New Clinical Requisition - AsianParamedics*\n${isHospitalPO ? '*(Hospital Purchase Order)*\n' : ''}\n*Items:*\n${itemsSummary}\n\n*Estimated Total:* ${currency === 'PKR' ? 'PKR ' + subtotal.toLocaleString() : '$' + subtotal.toLocaleString()}\n${orderNotes ? `\n*Ward Notes:* ${orderNotes}\n` : ''}\nPlease confirm delivery timeline and provide official GST invoice.`;

    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/923008472910?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleFilterUpdate = (updates: Partial<FilterState>) => {
    setFilter(prev => ({ ...prev, ...updates }));
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (filter.selectedCategory !== 'all' && product.category !== filter.selectedCategory) {
        return false;
      }

      // In stock filter
      if (filter.inStockOnly && product.stockStatus !== 'in-stock') {
        return false;
      }

      // Certified filter
      if (filter.certifiedOnly && !product.certifications.some(c => c.includes('CE') || c.includes('ISO'))) {
        return false;
      }

      // Search Query filter
      if (filter.searchQuery.trim()) {
        const query = filter.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesTagline = product.tagline.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesApp = product.clinicalApplication.toLowerCase().includes(query);
        const matchesFeatures = product.features.some(f => f.toLowerCase().includes(query));
        const matchesCerts = product.certifications.some(c => c.toLowerCase().includes(query));
        const matchesCategory = product.category.toLowerCase().includes(query);

        if (!matchesName && !matchesTagline && !matchesDesc && !matchesApp && !matchesFeatures && !matchesCerts && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filter.sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (filter.sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (filter.sortBy === 'rating') return b.rating - a.rating;
      // Default: recommended / featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filter]);

  const scrollToSearch = () => {
    const el = document.getElementById('search-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#eee2ff] text-[#000000] font-sans antialiased flex flex-col selection:bg-[#ff643b] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#0a3922] text-white text-[14px] font-semibold py-3 px-5 rounded-[40px] shadow-xl flex items-center gap-2 border border-white/20 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#1dbf73]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <TopNav
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsApp={() => {
          setWhatsAppInquiryProduct(null);
          setIsWhatsAppModalOpen(true);
        }}
        onSearchClick={scrollToSearch}
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => prev === 'USD' ? 'PKR' : 'USD')}
        onExportHTML={() => setShowSectionModal(true)}
      />

      {/* Modular Sections Quick Bar (hero.html, secondsection.html, shop.html, etc.) */}
      <div className="bg-[#0b151e] border-b border-[#d4af37]/30 text-white px-4 py-2.5 shadow-md">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[12px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping"></span>
            <span className="font-bold text-[#d4af37] uppercase tracking-wider text-[11px] font-mono">
              Elementor Section Exporter:
            </span>
            <span className="text-gray-300 hidden md:inline">
              Exact site sections extracted into standalone HTML files
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {SECTIONS.slice(0, 6).map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleOpenSection(sec.id)}
                className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#d4af37]/30 hover:text-white text-gray-200 border border-white/10 font-mono text-[11px] transition-colors cursor-pointer flex items-center gap-1"
                title={`View and copy ${sec.filename}`}
              >
                <span>{sec.filename}</span>
              </button>
            ))}

            <button
              onClick={() => setShowSectionModal(true)}
              className="px-3 py-1 rounded-full bg-[#d4af37] text-[#0b151e] font-bold text-[11px] hover:bg-[#c49f27] transition-all cursor-pointer shadow-xs flex items-center gap-1"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>All 9 Sections</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Full-Bleed Dark Hero Section */}
        <HeroSection
          onExploreClick={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onWhatsAppClick={() => {
            setWhatsAppInquiryProduct(null);
            setIsWhatsAppModalOpen(true);
          }}
          onSelectProduct={(productId) => {
            const prod = PRODUCTS.find(p => p.id === productId);
            if (prod) setQuickViewProduct(prod);
          }}
        />

        {/* Regulatory Trust & Metrics Bar */}
        <TrustStrip />

        {/* Search & Category Grid Container */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <SearchBar
            filter={filter}
            onFilterChange={handleFilterUpdate}
            totalResults={filteredProducts.length}
          />
        </div>

        {/* Medical Categories (Pastel Card Grid) */}
        <CategoryGrid
          selectedCategory={filter.selectedCategory}
          onSelectCategory={(catId) => {
            handleFilterUpdate({ selectedCategory: catId });
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Personalized Product Recommendations by Specialty / Clinical Role */}
        <PersonalizedRecommendations
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onWhatsAppInquiry={handleWhatsAppInquiry}
          currency={currency}
        />

        {/* Medical Equipment Catalog */}
        <ProductCatalog
          products={filteredProducts}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onWhatsAppInquiry={handleWhatsAppInquiry}
          currency={currency}
          selectedCategory={filter.selectedCategory}
          onSelectCategory={(catId) => handleFilterUpdate({ selectedCategory: catId })}
        />

        {/* Lavender Toolkit Section: Why Clinicians Choose AsianParamedics */}
        <WhyChooseUs
          onWhatsAppContact={() => {
            setWhatsAppInquiryProduct(null);
            setIsWhatsAppModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsApp={() => {
          setWhatsAppInquiryProduct(null);
          setIsWhatsAppModalOpen(true);
        }}
        onSelectCategory={(catId) => {
          handleFilterUpdate({ selectedCategory: catId });
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Requisition Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
        onCheckoutSuccess={() => {
          setIsCartOpen(false);
          setShowProformaModal(true);
        }}
        onWhatsAppOrder={handleWhatsAppOrder}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onWhatsAppInquiry={handleWhatsAppInquiry}
        currency={currency}
      />

      {/* WhatsApp Ordering & Consultation Modal */}
      <WhatsAppChatModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => {
          setIsWhatsAppModalOpen(false);
          setWhatsAppInquiryProduct(null);
        }}
        initialProduct={whatsAppInquiryProduct}
      />

      {/* Sticky Bottom Notification Card (Canonical Turn.io style from design.md) */}
      <StickyBottomNotification
        onAction={() => {
          handleFilterUpdate({ selectedCategory: 'vein-finders' });
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          showToast('15% Rebate Code CLINICAL15 applied to your requisition');
        }}
      />

      {/* Proforma Invoice / Order Preview Modal */}
      {showProformaModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-[24px] max-w-[640px] w-full p-6 sm:p-8 space-y-6 border border-[#e0e0e0] shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#e0e0e0] pb-4">
              <div>
                <span className="text-[12px] font-bold text-[#1dbf73] bg-[#d2f2e3] px-2.5 py-0.5 rounded-full">
                  Official Proforma Quote Generated
                </span>
                <h3 className="text-[22px] font-bold text-[#0a3922] mt-1">
                  AsianParamedics Requisition #AP-{Math.floor(100000 + Math.random() * 900000)}
                </h3>
                <span className="text-[12px] text-[#7a7a7a]">
                  Date: {new Date().toLocaleDateString()} • Valid for 30 Days
                </span>
              </div>
              <button
                onClick={() => setShowProformaModal(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-[#7a7a7a]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-[13px]">
              <div className="bg-[#faf7e8] p-4 rounded-[16px] border border-[#e0e0e0] space-y-1.5">
                <div className="font-bold text-[#0a3922]">Procurement Summary:</div>
                {cart.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-[#3d3d3d]">
                    <span>{item.quantity}x {item.product.name}</span>
                    <span className="font-semibold text-[#0a3922]">
                      {currency === 'PKR' 
                        ? `PKR ${(item.product.pricePKR * item.quantity).toLocaleString()}` 
                        : `$${item.product.priceUSD * item.quantity}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-[12px] text-[#7a7a7a] space-y-1">
                <p>• Invoicing compliant with DRAP medical device schedule & GST regulations.</p>
                <p>• Includes 2-year calibration warranty and express temperature-monitored courier dispatch.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2.5 rounded-[40px] border border-[#000000] text-[#0a3922] text-[13px] font-semibold flex items-center gap-1.5 hover:bg-[#faf7e8]"
              >
                <Printer className="w-4 h-4" />
                <span>Print Quotation</span>
              </button>
              <button
                onClick={() => {
                  setShowProformaModal(false);
                  handleClearCart();
                  showToast('Requisition logged. Our hospital desk will contact you.');
                }}
                className="px-6 py-2.5 rounded-[40px] bg-[#ff643b] hover:bg-[#e5522b] text-white text-[13px] font-semibold"
              >
                Confirm & Dispatch Requisition
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modular Sections Modal (hero.html, secondsection.html, shop.html, etc.) */}
      <SectionManagerModal
        isOpen={showSectionModal}
        onClose={() => setShowSectionModal(false)}
        defaultSectionId={selectedSectionId}
      />
    </div>
  );
}
