import React from 'react';
import { CATEGORIES } from '../data/medicalData';
import { 
  Activity, 
  HeartPulse, 
  Scissors, 
  PlusCircle, 
  FlaskConical, 
  BriefcaseMedical, 
  GraduationCap, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Scissors': return <Scissors className="w-6 h-6" />;
      case 'Cross': return <PlusCircle className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'BriefcaseMedical': return <BriefcaseMedical className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      default: return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="categories" className="py-12 sm:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with Design Token Display */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#d2f2e3] text-[#0a3922] text-[12px] font-bold px-3 py-1 rounded-[9999px]">
              <span>Curated Departments</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-semibold text-[#0a3922] tracking-[-0.019em] leading-[1.15]">
              Explore by Medical Specialty
            </h2>
            <p className="text-[16px] text-[#3d3d3d] max-w-[600px]">
              Every device is pre-tested and certified to meet high clinical standards across emergency care, diagnostics, and outpatient treatments.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectCategory('all')}
              className={`text-[14px] font-semibold px-4 py-2 rounded-[40px] transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#0a3922] text-[#ffffff]'
                  : 'bg-[#ffffff] text-[#0a3922] border border-[#000000] hover:bg-[#0a3922] hover:text-white'
              }`}
            >
              View All Categories
            </button>
          </div>
        </div>

        {/* 2-column on mobile/tablet, 4-column on desktop Pastel Cards Grid (cycling through design.md pastel colors) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
                style={{ backgroundColor: cat.pastelColor }}
                className={`p-6 sm:p-7 rounded-[24px] transition-all duration-200 cursor-pointer flex flex-col justify-between relative group ${
                  isSelected 
                    ? 'ring-3 ring-[#0a3922] transform -translate-y-1' 
                    : 'hover:-translate-y-1'
                }`}
              >
                {/* Upper Badge & Icon */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-[16px] bg-[#ffffff] flex items-center justify-center text-[#0a3922] transition-transform group-hover:scale-105"
                  >
                    {getIcon(cat.icon)}
                  </div>
                  <span className="bg-[#ffffff]/80 backdrop-blur-xs text-[#0a3922] text-[12px] font-bold px-2.5 py-1 rounded-[9999px]">
                    {cat.itemCount} Devices
                  </span>
                </div>

                {/* Card Typography (32px / 20px DM Sans in #0a3922) */}
                <div className="space-y-2">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0a3922] leading-tight group-hover:text-[#003642] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[14px] text-[#3d3d3d] leading-[1.4] line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Action Hint */}
                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[13px] font-semibold text-[#0a3922]">
                  <span>{isSelected ? 'Filtered Active' : 'Explore Category'}</span>
                  <div className={`w-7 h-7 rounded-full bg-white flex items-center justify-center transition-transform ${isSelected ? 'rotate-90 bg-[#0a3922] text-white' : 'group-hover:translate-x-1'}`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
