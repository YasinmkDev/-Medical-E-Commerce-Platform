import React, { useState } from 'react';
import { CartItem } from '../types';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  FileText,
  Building,
  Check
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  currency: 'USD' | 'PKR';
  onCheckoutSuccess: () => void;
  onWhatsAppOrder: (items: CartItem[], orderNotes: string, isHospitalPO: boolean) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency,
  onCheckoutSuccess,
  onWhatsAppOrder
}) => {
  const [isHospitalPO, setIsHospitalPO] = useState(false);
  const [hospitalPONumber, setHospitalPONumber] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [expressCourier, setExpressCourier] = useState(true);

  if (!isOpen) return null;

  const subtotalUSD = items.reduce((sum, item) => sum + (item.product.priceUSD * item.quantity), 0);
  const subtotalPKR = items.reduce((sum, item) => sum + (item.product.pricePKR * item.quantity), 0);

  const expressShippingUSD = expressCourier ? 15 : 0;
  const expressShippingPKR = expressCourier ? 4200 : 0;

  const totalUSD = subtotalUSD + expressShippingUSD;
  const totalPKR = subtotalPKR + expressShippingPKR;

  const formatPrice = (usd: number, pkr: number) => {
    if (currency === 'PKR') {
      return `PKR ${pkr.toLocaleString()}`;
    }
    return `$${usd.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div 
        className="w-full max-w-[480px] bg-[#ffffff] h-full shadow-2xl flex flex-col justify-between text-[#000000] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#e0e0e0] flex items-center justify-between bg-[#f7f8f9]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0a3922] text-white flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-[#0a3922]">
                Equipment Requisition Cart
              </h2>
              <span className="text-[12px] text-[#7a7a7a]">
                {items.length} {items.length === 1 ? 'device' : 'devices'} selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ffffff] border border-[#e0e0e0] hover:bg-[#0a3922] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#faf7e8] flex items-center justify-center mx-auto text-[#0a3922]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0a3922]">Your Requisition is Empty</h3>
              <p className="text-[14px] text-[#7a7a7a] max-w-[280px] mx-auto">
                Select clinical diagnostic devices, surgical instruments, or resuscitation equipment from our catalog.
              </p>
              <button
                onClick={onClose}
                className="bg-[#0a3922] text-white px-6 py-2.5 rounded-[40px] text-[14px] font-semibold hover:bg-[#003642] transition-colors"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Order Mode Toggle: Clinic vs Hospital PO */}
              <div className="bg-[#faf7e8] p-3 rounded-[16px] border border-[#e0e0e0] flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-2 font-semibold text-[#0a3922]">
                  <Building className="w-4 h-4 text-[#ff643b]" />
                  <span>Hospital Institutional PO?</span>
                </div>
                <button
                  onClick={() => setIsHospitalPO(!isHospitalPO)}
                  className={`px-3 py-1 rounded-[40px] text-[12px] font-bold transition-colors ${
                    isHospitalPO ? 'bg-[#0a3922] text-white' : 'bg-white border border-[#e0e0e0] text-[#0a3922]'
                  }`}
                >
                  {isHospitalPO ? '✓ Institutional Mode' : 'Standard Order'}
                </button>
              </div>

              {isHospitalPO && (
                <div className="bg-[#ffffff] p-3 rounded-[16px] border border-[#0a3922]/30 space-y-2 text-[12px]">
                  <label className="font-semibold text-[#0a3922] block">
                    Hospital / Clinic Purchase Order (PO) Number:
                  </label>
                  <input
                    type="text"
                    value={hospitalPONumber}
                    onChange={(e) => setHospitalPONumber(e.target.value)}
                    placeholder="e.g., PO-SKMCH-2026-084"
                    className="w-full px-3 py-2 rounded-lg border border-[#e0e0e0] text-[13px] focus:outline-none focus:border-[#0a3922]"
                  />
                  <p className="text-[11px] text-[#7a7a7a]">
                    Official GST invoice and delivery challan will be issued to this reference.
                  </p>
                </div>
              )}

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div 
                    key={item.product.id}
                    className="p-3 bg-[#ffffff] border border-[#e0e0e0] rounded-[16px] flex gap-3 items-start"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-[10px] object-cover bg-[#f7f8f9] shrink-0 border border-[#e0e0e0]"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-[13px] font-bold text-[#0a3922] leading-tight line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="text-[12px] text-[#7a7a7a]">
                        Unit: {currency === 'PKR' ? `PKR ${item.product.pricePKR.toLocaleString()}` : `$${item.product.priceUSD}`}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[#e0e0e0] rounded-full overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 hover:bg-[#faf7e8] text-[#0a3922] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-[12px] font-bold text-[#0a3922]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 hover:bg-[#faf7e8] text-[#0a3922] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-bold text-[#0a3922]">
                            {formatPrice(item.product.priceUSD * item.quantity, item.product.pricePKR * item.quantity)}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#7a7a7a] hover:text-[#ff643b] p-1 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Express Clinical Courier Toggle */}
              <div className="p-3 bg-[#e4f7ee] rounded-[16px] border border-[#d2f2e3] space-y-1">
                <label className="flex items-center justify-between cursor-pointer text-[13px]">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#0a3922]" />
                    <span className="font-semibold text-[#0a3922]">Express Paramedic Transport</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={expressCourier}
                    onChange={(e) => setExpressCourier(e.target.checked)}
                    className="w-4 h-4 accent-[#0a3922] cursor-pointer"
                  />
                </label>
                <p className="text-[11px] text-[#3d3d3d]">
                  Guaranteed sub-2hr hospital corridor delivery with tamper-evident seals.
                </p>
              </div>

              {/* Additional Notes */}
              <div className="space-y-1 text-[12px]">
                <label className="font-semibold text-[#7a7a7a]">
                  Special Delivery / Ward Instructions (Optional):
                </label>
                <textarea
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g., Deliver to 3rd floor Pediatric Emergency, attention Charge Nurse..."
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-[#e0e0e0] text-[13px] focus:outline-none focus:border-[#0a3922]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer with Totals & Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#e0e0e0] bg-[#f7f8f9] space-y-3">
            {/* Price breakdown */}
            <div className="space-y-1.5 text-[13px]">
              <div className="flex justify-between text-[#7a7a7a]">
                <span>Equipment Subtotal</span>
                <span>{formatPrice(subtotalUSD, subtotalPKR)}</span>
              </div>
              <div className="flex justify-between text-[#7a7a7a]">
                <span>Paramedic Courier</span>
                <span>{expressCourier ? formatPrice(expressShippingUSD, expressShippingPKR) : 'Free Standard'}</span>
              </div>
              <div className="flex justify-between text-[16px] font-bold text-[#0a3922] pt-1.5 border-t border-[#e0e0e0]">
                <span>Estimated Requisition Total</span>
                <span>{formatPrice(totalUSD, totalPKR)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-2 pt-1">
              {/* WhatsApp Push Order Button */}
              <button
                onClick={() => onWhatsAppOrder(items, orderNotes, isHospitalPO)}
                className="w-full py-3 px-4 rounded-[40px] bg-[#ff643b] hover:bg-[#e5522b] text-white text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Transmit Order to WhatsApp Desk</span>
              </button>

              {/* Simulated Clinical Checkout */}
              <button
                onClick={onCheckoutSuccess}
                className="w-full py-2.5 px-4 rounded-[40px] border border-[#000000] bg-white hover:bg-[#faf7e8] text-[#0a3922] text-[13px] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0a3922]" />
                <span>Generate Official Proforma Invoice</span>
              </button>
            </div>

            <div className="text-center text-[11px] text-[#7a7a7a] flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1dbf73]" />
              <span>Certified DRAP & ISO Compliant Medical Invoicing</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
