import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  FileCode, 
  Layers, 
  Sparkles, 
  Info,
  Check
} from 'lucide-react';

export interface SectionItem {
  id: string;
  name: string;
  filename: string;
  badge: string;
  description: string;
  previewHeight: string;
  tags: string[];
}

export const SECTIONS: SectionItem[] = [
  {
    id: 'header',
    name: 'Top Navigation & Helpline',
    filename: 'header.html',
    badge: 'Navbar',
    description: 'Header with emergency paramedic dispatch hotline (+92 300 8472910), official medical cross logo, category anchor links, search trigger, and WhatsApp order button.',
    previewHeight: '140px',
    tags: ['Urgent Helpline', 'Logo & Navigation', 'WhatsApp Button']
  },
  {
    id: 'hero',
    name: 'Hero & Live WhatsApp Desk',
    filename: 'hero.html',
    badge: 'Main Hero',
    description: 'Forest green hero banner with high-impact headline ("Turn Clinical Challenges into Instant Care"), CE/ISO trust bullets, and interactive live WhatsApp phone mockup with scenario switcher tabs.',
    previewHeight: '720px',
    tags: ['Hero Headline', 'Coral CTA', 'WhatsApp Phone Mockup', 'Interactive Chat']
  },
  {
    id: 'secondsection',
    name: 'Accreditation & Metric Strip',
    filename: 'secondsection.html',
    badge: 'Trust Strip',
    description: '10,000+ clinicians metric counter bar alongside official regulatory badges: CE Mark 0123, ISO 13485:2016, WHO-GMP, DRAP Registered, and CoTCCC Benchmark.',
    previewHeight: '260px',
    tags: ['10k+ Clinicians', 'CE Mark 0123', 'ISO 13485', 'DRAP Registered']
  },
  {
    id: 'categories',
    name: 'Medical Specialties Grid',
    filename: 'categories.html',
    badge: 'Categories',
    description: 'Pastel department cards (Mint, Sky, Lilac, and Peach washes) with clean icons, active device counts, and specialty descriptions.',
    previewHeight: '440px',
    tags: ['Vascular Access', 'Patient Vitals', 'Surgical Sets', 'Resuscitation']
  },
  {
    id: 'search',
    name: 'Clinical Search & Filters',
    filename: 'search.html',
    badge: 'Interactive',
    description: 'Instant search bar with trending clinical tag chips ("Vein Finder", "Centrifuge", "Ambu Bag"), in-stock toggle, and CE certification filter.',
    previewHeight: '240px',
    tags: ['Real-time Search', 'Filter Tags', 'Stock Toggle']
  },
  {
    id: 'recommendations',
    name: 'Role-Based Recommendations',
    filename: 'recommendations.html',
    badge: 'Smart Bundles',
    description: 'Interactive persona switcher (EMS Paramedic, Outpatient GP, ICU Director, Pathology Lab) displaying targeted clinical equipment bundles and match percentages.',
    previewHeight: '620px',
    tags: ['EMS Paramedic', 'Clinic GP', 'ICU Director', 'Pathology Lab']
  },
  {
    id: 'shop',
    name: 'Equipment Catalog Grid',
    filename: 'shop.html',
    badge: 'Product Catalog',
    description: 'Product cards featuring verified medical hardware (AccuVein Pro, PulsePro, MasterSurg Kit) with PKR pricing, stock badges, CE specs, and WhatsApp purchase buttons.',
    previewHeight: '800px',
    tags: ['Vein Finder', 'Pulse Oximeter', 'Minor Surgery', 'PKR Pricing']
  },
  {
    id: 'about',
    name: 'Why Clinicians Trust Us',
    filename: 'why-us.html',
    badge: 'Authority & Tenders',
    description: 'Manufacturer verification protocols, local 48-hour service center, emergency 2-hour ambulance dispatch, verified doctor testimonial, and hospital bulk procurement banner.',
    previewHeight: '680px',
    tags: ['Clinical Audits', 'Local Service', 'Doctor Review', 'Hospital Tenders']
  },
  {
    id: 'footer',
    name: 'Clinical Footer & Legal',
    filename: 'footer.html',
    badge: 'Official Footer',
    description: 'Comprehensive forest green footer with brand identity, catalog links, institutional procurement, central distribution desk info, and medical device regulatory disclaimer.',
    previewHeight: '460px',
    tags: ['Distribution Desk', 'Procurement', 'Regulatory Notice', 'Copyright']
  },
  {
    id: 'full-page',
    name: 'Full Combined Platform',
    filename: 'full-page.html',
    badge: 'All-in-One',
    description: 'Complete unified single-page HTML containing all sections together with shared styling for 1-click preview or Elementor custom HTML copy-paste.',
    previewHeight: '1200px',
    tags: ['Complete Website', 'Unified Layout', 'All Sections']
  }
];

interface SectionManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSectionId?: string;
}

export const SectionManagerModal: React.FC<SectionManagerModalProps> = ({
  isOpen,
  onClose,
  defaultSectionId = 'hero'
}) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>(defaultSectionId);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [fileCode, setFileCode] = useState<string>('Loading code...');
  const [isLoadingCode, setIsLoadingCode] = useState<boolean>(false);

  const currentSection = SECTIONS.find(s => s.id === selectedSectionId) || SECTIONS[0];

  useEffect(() => {
    if (!isOpen) return;
    setIsLoadingCode(true);
    fetch(`/${currentSection.filename}`)
      .then(res => res.text())
      .then(text => {
        setFileCode(text);
        setIsLoadingCode(false);
      })
      .catch(err => {
        setFileCode(`<!-- Error loading ${currentSection.filename}: ${err.message} -->`);
        setIsLoadingCode(false);
      });
  }, [currentSection.filename, isOpen]);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(fileCode);
    setCopiedSection(currentSection.id);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      <div className="bg-[#ffffff] text-[#111111] rounded-[24px] max-w-[1240px] w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-[#d1d5db]">
        {/* Header */}
        <div className="bg-[#0b151e] text-white px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] sm:text-[20px] font-bold text-white font-serif">
                  GlobalParamedics Modular Sections
                </h2>
                <span className="bg-[#25D366]/20 text-[#25D366] text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-[#25D366]/30">
                  Elementor Ready
                </span>
              </div>
              <p className="text-[12px] text-gray-400">
                Original site extracted section by section into standalone HTML files with isolated CSS and JS.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="bg-[#faf7e8] border-b border-[#e5e7eb] px-6 py-2.5 flex items-center justify-between text-[12px] text-[#0a3922] shrink-0">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#ff643b] shrink-0" />
            <span>
              <strong>How to use in Elementor:</strong> Select any section &rarr; Click <strong>"Copy Section HTML"</strong> &rarr; Add an <strong>"HTML"</strong> widget in your Elementor page &rarr; Paste and Update!
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-gray-600">
            <span>Files: 9 individual + 1 combined</span>
          </div>
        </div>

        {/* Content Body: Sidebar + Main Stage */}
        <div className="flex-1 flex overflow-hidden">
          {/* Section Selector Sidebar */}
          <div className="w-72 sm:w-80 bg-[#f8fafc] border-r border-[#e2e8f0] p-3 overflow-y-auto shrink-0 flex flex-col gap-1.5">
            <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-500">
              Select Section ({SECTIONS.length})
            </div>

            {SECTIONS.map((section, idx) => {
              const isSelected = section.id === selectedSectionId;
              return (
                <button
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className={`text-left p-3 rounded-xl transition-all flex flex-col gap-1 border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#0f6f9a] shadow-sm ring-2 ring-[#0f6f9a]/20'
                      : 'bg-white/60 border-transparent hover:bg-white hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[13px] text-[#0f172a] flex items-center gap-1.5">
                      <span className="text-[11px] w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center font-mono text-gray-600">
                        {idx + 1}
                      </span>
                      {section.name}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isSelected ? 'bg-[#0f6f9a] text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {section.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono pl-6">
                    {section.filename}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Stage: Preview & Code View */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#eef3f4]">
            {/* Top Section Details Bar */}
            <div className="bg-white border-b border-[#e2e8f0] p-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[16px] font-bold text-[#0f172a]">
                    {currentSection.name}
                  </h3>
                  <code className="text-[12px] bg-gray-100 text-[#0f6f9a] font-mono px-2 py-0.5 rounded">
                    /{currentSection.filename}
                  </code>
                </div>
                <p className="text-[12px] text-gray-600 mt-0.5 max-w-2xl">
                  {currentSection.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* View Tabs */}
                <div className="bg-gray-100 p-1 rounded-lg flex items-center text-[12px]">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                      activeTab === 'preview'
                        ? 'bg-white text-[#0f172a] shadow-xs'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    Live Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-colors flex items-center gap-1.5 ${
                      activeTab === 'code'
                        ? 'bg-white text-[#0f172a] shadow-xs'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>Raw Code</span>
                  </button>
                </div>

                {/* Open In New Tab */}
                <a
                  href={`/${currentSection.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg border border-gray-200"
                  title="Open standalone section in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Copy Section Code */}
                <button
                  onClick={handleCopyCode}
                  className="bg-[#0a3922] hover:bg-[#003642] text-white text-[13px] font-semibold px-4 py-2 rounded-[40px] flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  {copiedSection === currentSection.id ? (
                    <>
                      <Check className="w-4 h-4 text-[#25D366]" />
                      <span>Copied HTML!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy HTML</span>
                    </>
                  )}
                </button>

                {/* Download .html */}
                <a
                  href={`/${currentSection.filename}`}
                  download={currentSection.filename}
                  className="bg-[#ff643b] hover:bg-[#e5522b] text-white text-[13px] font-semibold px-4 py-2 rounded-[40px] flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            </div>

            {/* Stage Body */}
            <div className="flex-1 overflow-auto p-4 flex justify-center">
              {activeTab === 'preview' ? (
                <div className="w-full bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden flex flex-col">
                  <div className="bg-[#1e293b] px-3 py-1.5 flex items-center justify-between text-white text-[11px] font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                      <span className="ml-2 text-gray-300">Preview: {currentSection.filename}</span>
                    </div>
                    <span className="text-gray-400">Isolated Frame</span>
                  </div>

                  <iframe
                    key={currentSection.filename}
                    src={`/${currentSection.filename}`}
                    title={currentSection.name}
                    className="w-full flex-1 border-none"
                    style={{ minHeight: '600px', height: '100%' }}
                  />
                </div>
              ) : (
                <div className="w-full bg-[#0d1117] text-[#c9d1d9] rounded-xl shadow-md border border-[#30363d] overflow-hidden flex flex-col font-mono text-[12px]">
                  <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-[#30363d]">
                    <div className="flex items-center gap-2 text-[12px] text-gray-300">
                      <FileCode className="w-4 h-4 text-[#58a6ff]" />
                      <span>{currentSection.filename}</span>
                      <span className="text-[10px] text-gray-500">
                        ({Math.round(fileCode.length / 1024)} KB)
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="text-[12px] text-[#58a6ff] hover:text-[#79c0ff] flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </button>
                  </div>

                  <pre className="flex-1 p-4 overflow-auto whitespace-pre leading-relaxed selection:bg-[#264f78]">
                    {isLoadingCode ? 'Loading source code...' : fileCode}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
