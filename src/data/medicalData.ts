import { Category, ClinicalPersona, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'vein-finders',
    name: 'Vascular Access & Vein Finders',
    shortName: 'Vein Finders',
    description: 'High-precision handheld and mobile stand infrared vein locators for painless pediatric and adult IV access.',
    itemCount: 14,
    pastelColor: '#d2f2e3', // Mint Wash
    textColor: '#0a3922',
    icon: 'Activity',
    featuredProduct: 'VF-Pro Infrared Mobile'
  },
  {
    id: 'patient-monitoring',
    name: 'Patient Monitoring & Vitals',
    shortName: 'Vitals & Monitors',
    description: 'Clinical-grade rechargeable pulse oximeters, automatic digital BP machines, and multipara monitors.',
    itemCount: 28,
    pastelColor: '#ccf0f8', // Sky Wash
    textColor: '#003642',
    icon: 'HeartPulse',
    featuredProduct: 'OxiPulse Pro 4-Wave'
  },
  {
    id: 'surgical-instruments',
    name: 'Surgical & Minor Op Instruments',
    shortName: 'Surgical Sets',
    description: 'German-grade stainless steel minor surgery kits, trauma shears, titanium forceps, and suture sets.',
    itemCount: 42,
    pastelColor: '#fdf0ff', // Lilac Wash
    textColor: '#460095',
    icon: 'Scissors',
    featuredProduct: 'Master Minor Surgery 24pc Kit'
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency Resuscitation & Trauma',
    shortName: 'Emergency & Trauma',
    description: 'Ambu bag resuscitators, CAT tactical tourniquets, portable electric suction, and emergency splints.',
    itemCount: 36,
    pastelColor: '#ffede8', // Peach Wash
    textColor: '#0a3922',
    icon: 'Cross',
    featuredProduct: 'AmbuCare Silicone Resuscitator'
  },
  {
    id: 'lab-equipment',
    name: 'Laboratory & Diagnostic Devices',
    shortName: 'Lab & Diagnostics',
    description: 'Centrifuges for PRP and hematology, digital hemoglobinometers, precision pipettes, and microscopes.',
    itemCount: 22,
    pastelColor: '#faf7e8', // Cream
    textColor: '#0a3922',
    icon: 'FlaskConical',
    featuredProduct: 'CentriSpin 4000 Benchtop'
  },
  {
    id: 'paramedic-bags',
    name: 'Paramedic Bags & Trauma Kits',
    shortName: 'EMS Trauma Bags',
    description: 'Waterproof 1000D Cordura response backpacks, first responder trauma jump kits, and oxygen tank carriers.',
    itemCount: 19,
    pastelColor: '#e4f7ee', // Sage Wash
    textColor: '#0a3922',
    icon: 'BriefcaseMedical',
    featuredProduct: 'Tactical EMS Responder Pack'
  },
  {
    id: 'clinical-training',
    name: 'Medical Training & Skills Simulators',
    shortName: 'Clinical Training',
    description: 'Realistic venipuncture IV practice arms, CPR feedback mannequins, and clinical examination prep sets.',
    itemCount: 16,
    pastelColor: '#d2f2e3', // Mint Wash
    textColor: '#0a3922',
    icon: 'GraduationCap',
    featuredProduct: 'AnatomyPro IV Injection Arm'
  },
  {
    id: 'consumables-ppe',
    name: 'Clinical Consumables & Infection Control',
    shortName: 'Consumables & PPE',
    description: 'Chemo-rated nitrile exam gloves, IV cannulas with injection port, sterile dressings, and syringe packs.',
    itemCount: 65,
    pastelColor: '#ccf0f8', // Sky Wash
    textColor: '#003642',
    icon: 'ShieldCheck',
    featuredProduct: 'UltraFlex Nitrile Box 200'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'ap-vf-900',
    name: 'AsianParamedics AccuVein Pro Portable Vein Finder',
    category: 'vein-finders',
    tagline: 'Dual-wavelength Near-Infrared projection for 98% first-stick cannulation success.',
    priceUSD: 680,
    pricePKR: 189000,
    originalPriceUSD: 790,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    badge: 'Flagship Device',
    stockStatus: 'in-stock',
    stockCount: 18,
    certifications: ['CE 0123', 'ISO 13485', 'DRAP Approved'],
    warranty: '2 Years Full Official Warranty',
    description: 'Designed specifically for challenging pediatric, geriatric, dark-skinned, or obese patient cannulation. Emits harmless near-infrared light absorbed by blood hemoglobin to project real-time subcutaneous vein maps directly on patient skin.',
    clinicalApplication: 'Emergency rooms, Neonatal ICU, Ambulances, Oncology wards, and Diagnostic Blood Centers.',
    specifications: {
      'Optical Mode': 'Near-infrared (NIR) 850nm / 940nm',
      'Depth Penetration': 'Up to 10mm subcutaneous vein imaging',
      'Projection Display': '5-color palette (Green, Blue, Purple, Orange, White)',
      'Battery Life': '5.5 hours continuous lithium-ion operation',
      'Mounting': 'Handheld + Optional mobile 360° stainless arm',
      'Weight': '280 grams lightweight ergonomic grip'
    },
    features: [
      'Visualizes veins down to 0.5mm caliber with micro-edge contrast',
      'Child mode reduces projection footprint for delicate infant limbs',
      'Brightness adjustable across 4 calibrated ambient light levels',
      'Cold-LED light source prevents cutaneous heat accumulation'
    ],
    featured: true,
    bestSeller: true,
    pastelBg: '#d2f2e3'
  },
  {
    id: 'ap-oxi-400',
    name: 'OxiPulse Pro Rechargeable OLED Finger Oximeter',
    category: 'patient-monitoring',
    tagline: 'Hospital-grade perfusion index (PI) + plethysmogram graph in a rugged IP22 casing.',
    priceUSD: 42,
    pricePKR: 11800,
    originalPriceUSD: 55,
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    stockStatus: 'in-stock',
    stockCount: 84,
    certifications: ['CE Mark', 'ISO 9001', 'RoHS'],
    warranty: '1 Year Instant Replacement Warranty',
    description: 'Built for high-turnover clinical triage and field paramedic deployment. Delivers accurate SpO2 and pulse readings even under low perfusion conditions (PI down to 0.2%) and motion artifacts.',
    clinicalApplication: 'Ambulance triage, Home healthcare, COVID respiratory monitoring, and Post-op recovery.',
    specifications: {
      'SpO2 Range': '35% – 100% (±2% clinical accuracy)',
      'Pulse Rate Range': '25 – 250 bpm',
      'Perfusion Index': '0.2% – 20.0%',
      'Display': 'Four-direction Dual-Color HD OLED',
      'Power Source': 'USB-C fast rechargeable lithium cell',
      'Auto-Off': '8 seconds no-signal automatic standby'
    },
    features: [
      'Audible alarms for low oxygen saturation and tachycardia/bradycardia',
      'Low perfusion algorithm ensures reliable reading on cold peripheries',
      'Type-C fast charging provides 30 hours continuous use per charge',
      'Lanyard and silicone shock bumper included in box'
    ],
    featured: true,
    bestSeller: true,
    pastelBg: '#ccf0f8'
  },
  {
    id: 'ap-surg-24',
    name: 'Master Trauma & Minor Surgery Kit (24-Piece German Steel)',
    category: 'surgical-instruments',
    tagline: 'Autoclavable grade 420 AISI medical stainless steel in a ballistic zippered fold.',
    priceUSD: 145,
    pricePKR: 40500,
    originalPriceUSD: 175,
    rating: 4.9,
    reviewsCount: 96,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    badge: 'Clinical Grade',
    stockStatus: 'in-stock',
    stockCount: 32,
    certifications: ['ISO 13485', 'CE Medical Class I', 'Autoclave Safe 134°C'],
    warranty: '5 Years Corrosion & Workmanship Guarantee',
    description: 'Comprehensive surgical ensemble tailored for emergency suturing, wound debridement, and minor outpatient procedures. Manufactured from tempered martensitic stainless steel with tungsten carbide inserts on needle holders.',
    clinicalApplication: 'Trauma centers, Outpatient minor OT, Rural clinics, and Emergency medical vehicles.',
    specifications: {
      'Material': 'Grade 420 Stainless Steel (Rockwell C50)',
      'Autoclave Durability': '> 1,000 cycles without passivation breakdown',
      'Key Contents': 'Mayo-Hegar needle driver, Iris scissors, Adson tissue forceps, Scalpel handles #3 & #4, Mosquito hemostats',
      'Case': 'Medical-grade washable Cordura zippered organizer',
      'Total Weight': '820 grams'
    },
    features: [
      'Micro-serrated tungsten carbide jaws prevent needle slippage',
      'Non-reflective matte satin finish minimizes operating light glare',
      'Individually laser-etched with batch code and CE mark',
      'Includes complimentary pack of sterile surgical blades'
    ],
    featured: false,
    bestSeller: true,
    pastelBg: '#fdf0ff'
  },
  {
    id: 'ap-ambu-100',
    name: 'Paramedic Silicone Resuscitator Bag (Adult / Child / Infant)',
    category: 'emergency-trauma',
    tagline: '100% medical-grade autoclavable liquid silicone with pressure relief safety valve.',
    priceUSD: 65,
    pricePKR: 18200,
    rating: 4.9,
    reviewsCount: 118,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    badge: 'Life Support',
    stockStatus: 'in-stock',
    stockCount: 45,
    certifications: ['CE 0434', 'ISO 10651-4', 'FDA Cleared'],
    warranty: '2 Years Manufacturer Warranty',
    description: 'Essential positive pressure resuscitation device for patients with respiratory arrest or severe distress. The silicone bag maintains elastic recoil even in extreme ambient temperatures (-20°C to +50°C).',
    clinicalApplication: 'Ambulance transport, Crash carts, ICU backup, and Anesthesia induction.',
    specifications: {
      'Bag Volume': '1500ml Adult / 550ml Pediatric options',
      'Reservoir Bag': '2500ml capacity for 100% FiO2 delivery',
      'Pop-off Valve': '60 cmH2O pressure limitation with override lock',
      'Material': 'Latex-Free liquid silicone + Polycarbonate housing',
      'Disinfection': 'Full steam autoclave safe up to 134°C'
    },
    features: [
      '360-degree patient valve swivel connector prevents tube kinking',
      'Textured surface ensures non-slip grip during frantic CPR',
      'Transparent cushion mask allows instant observation of vomiting/cyanosis',
      'Includes oxygen tubing and reservoir bag assembly'
    ],
    featured: true,
    bestSeller: false,
    pastelBg: '#ffede8'
  },
  {
    id: 'ap-bp-550',
    name: 'Clinical CardioCheck Digital Arm BP Monitor',
    category: 'patient-monitoring',
    tagline: 'Double-sensor oscillo-metric tech validated against mercury sphygmomanometer standards.',
    priceUSD: 58,
    pricePKR: 16200,
    originalPriceUSD: 72,
    rating: 4.7,
    reviewsCount: 204,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    badge: 'High Accuracy',
    stockStatus: 'in-stock',
    stockCount: 60,
    certifications: ['ESH Validated', 'AAMI Standard', 'CE Certified'],
    warranty: '3 Years Official Guarantee',
    description: 'High-throughput blood pressure and pulse rate monitor designed for busy hospital OPD desks and home patient tracking. Features dual 99-reading memory banks with irregular heartbeat (IHB) arrhythmia alert.',
    clinicalApplication: 'Hospital outpatient departments, Health centers, and Home hypertension management.',
    specifications: {
      'Pressure Range': '0 – 299 mmHg (±3 mmHg accuracy)',
      'Pulse Range': '40 – 199 bpm (±5% accuracy)',
      'Cuff Size': 'Universal ergonomic conical cuff 22 – 42 cm',
      'Memory': '2 Users x 99 sets with date & time stamp',
      'Power': 'Dual AC adapter + 4x AA battery redundancy'
    },
    features: [
      'Gentle-inflate algorithm eliminates painful arm over-pressurization',
      'WHO blood pressure classification color risk scale indicator',
      'Body movement detection icon prevents corrupted measurements',
      'Whisper-quiet electric air pump with rapid deflation valve'
    ],
    featured: false,
    bestSeller: false,
    pastelBg: '#faf7e8'
  },
  {
    id: 'ap-lab-4000',
    name: 'CentriSpin 4000 Clinical Benchtop Centrifuge',
    category: 'lab-equipment',
    tagline: 'Brushless DC motor 4000 RPM for PRP, blood serum, and urine sediment separation.',
    priceUSD: 340,
    pricePKR: 94800,
    originalPriceUSD: 390,
    rating: 4.8,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    badge: 'Lab Grade',
    stockStatus: 'in-stock',
    stockCount: 12,
    certifications: ['CE Mark', 'ISO 9001', 'IEC 61010-1'],
    warranty: '2 Years Comprehensive Warranty',
    description: 'Precision laboratory centrifuge with an 8 x 15ml angle rotor. Microprocessor control allows digital speed and time adjustment, with electronic lid lock for user safety during high centrifugal force spins.',
    clinicalApplication: 'Clinical pathology labs, Aesthetic PRP clinics, Veterinary hospitals, and Medical research.',
    specifications: {
      'Max Speed': '4,000 RPM (Adjustable in 10 RPM increments)',
      'Max RCF': '2,200 x g relative centrifugal force',
      'Rotor Capacity': '8 tubes x 15ml or 10ml/7ml with included adapters',
      'Timer Range': '1 to 99 minutes or continuous mode',
      'Noise Level': 'Under 58 dB whisper quiet operation',
      'Safety': 'Auto lid-lock mechanism and imbalance sensor'
    },
    features: [
      'Maintenance-free brushless motor ensures no carbon dust contamination',
      'Dynamic braking system brings rotor to smooth stop without resuspension',
      'Backlit LCD shows simultaneous RPM and RCF readings',
      'Compact footprint fits easily on crowded clinical lab benches'
    ],
    featured: true,
    bestSeller: false,
    pastelBg: '#faf7e8'
  },
  {
    id: 'ap-ems-bag',
    name: 'Paramedic Elite 1000D Waterproof Trauma Backpack',
    category: 'paramedic-bags',
    tagline: 'Modular color-coded pouches, high-vis 3M reflective trim, and oxygen cylinder sleeve.',
    priceUSD: 120,
    pricePKR: 33500,
    rating: 4.9,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    badge: 'EMS Standard',
    stockStatus: 'in-stock',
    stockCount: 26,
    certifications: ['Mil-Spec 1000D', 'EN 1789 Ambulance Compliant'],
    warranty: '3 Years Heavy-Duty Field Warranty',
    description: 'Engineered in consultation with active emergency response paramedics. The rugged waterproof exterior protects vital medications and diagnostic tools in monsoons, road accidents, and industrial disaster sites.',
    clinicalApplication: 'Mobile EMS ambulance crews, Mine rescue, Event standby paramedics, and Disaster response.',
    specifications: {
      'Volume': '48 Liters ergonomic capacity',
      'Fabric': '1000-Denier ballistic waterproof PVC-backed Cordura',
      'Interior': '6 Removable velcro-backed color-coded organization pouches',
      'Bottom Panel': 'Tarpaulin waterproof skid-feet reinforcement',
      'Harness': 'Padded lumbar belt + ventilated air-mesh shoulder harness'
    },
    features: [
      'Clamshell 180° flat-opening layout for immediate access to critical supplies',
      'Dedicated padded harness accommodates D-size portable O2 cylinder',
      'Heavy-duty YKK double-zippers with glove-friendly oversized pull tabs',
      'Integrated rain cover concealed in bottom zipper pocket'
    ],
    featured: false,
    bestSeller: true,
    pastelBg: '#e4f7ee'
  },
  {
    id: 'ap-arm-trainer',
    name: 'AnatomyPro Venipuncture & IV Injection Practice Arm',
    category: 'clinical-training',
    tagline: 'Lifelike skin resistance, anatomically correct basilic/cephalic veins, and real blood flashback.',
    priceUSD: 165,
    pricePKR: 46000,
    rating: 4.8,
    reviewsCount: 74,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    badge: 'Skill Simulator',
    stockStatus: 'in-stock',
    stockCount: 20,
    certifications: ['ISO 9001', 'Medical Training Benchmark'],
    warranty: '1 Year Warranty + Vein Replacement Kit',
    description: 'Designed for medical colleges, nursing institutions, and paramedic academies. Replicates the human tactile sensation of entering the vein lumen with genuine blood flashback when cannula is positioned correctly.',
    clinicalApplication: 'Paramedic schools, Nursing colleges, Phlebotomy certifications, and Hospital CME training.',
    specifications: {
      'Vein Network': 'Cephalic, Basilic, Median cubital, and Dorsal metacarpal veins',
      'Puncture Endurance': '> 800 needle insertions before skin replacement',
      'Kit Includes': 'Full arm simulator, Fluid reservoir stand, Artificial blood powder, IV cannula pack',
      'Skin Material': 'Platin-cured medical silicone elastomer'
    },
    features: [
      'Tactile "pop" sensation upon entering the vascular lumen',
      'Self-sealing veins prevent leakage during consecutive student drills',
      'Includes gravity IV infusion pole and fluid administration lines',
      'Easily cleanable and stain-resistant surface'
    ],
    featured: false,
    bestSeller: false,
    pastelBg: '#d2f2e3'
  },
  {
    id: 'ap-ppe-nitrile',
    name: 'UltraFlex Chemo-Tested Medical Nitrile Exam Gloves',
    category: 'consumables-ppe',
    tagline: 'Powder-free, textured fingertips, 5.0 mil puncture resistance (Box of 200).',
    priceUSD: 24,
    pricePKR: 6700,
    rating: 4.9,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80',
    badge: 'Hospital Bulk',
    stockStatus: 'in-stock',
    stockCount: 450,
    certifications: ['EN 455 Parts 1-4', 'ASTM D6978 Chemo', 'FDA 510(k)'],
    warranty: 'Guaranteed Sterile / Defect Replacement',
    description: 'Premium medical-grade nitrile examination gloves offering barrier protection against pathogens, blood-borne viruses, and hazardous chemotherapy agents without triggering Type I latex allergies.',
    clinicalApplication: 'Operating theaters, Emergency care, Clinical diagnostics, and Patient examination.',
    specifications: {
      'Thickness': '5.0 mil finger / 4.2 mil palm',
      'AQL Level': '1.5 Hospital Medical Grade',
      'Tensile Strength': '> 18 MPa before aging',
      'Color': 'Cobalt Blue for rapid blood & chemical contrast',
      'Packaging': 'Dispenser box of 200 ambidextrous gloves'
    },
    features: [
      'Micro-textured fingertips for secure grip on wet surgical instruments',
      'Beaded cuff prevents roll-down and makes donning quick and effortless',
      'Latex-free and protein-free formulation prevents allergic dermatitis',
      'Certified resistant to fentanyl, chemotherapy drugs, and bleach'
    ],
    featured: false,
    bestSeller: true,
    pastelBg: '#ccf0f8'
  },
  {
    id: 'ap-cat-gen7',
    name: 'Tactical Combat Application Tourniquet (CAT Gen-7)',
    category: 'emergency-trauma',
    tagline: 'Proven arterial occlusion windlass system for massive extremity hemorrhage control.',
    priceUSD: 36,
    pricePKR: 9900,
    rating: 5.0,
    reviewsCount: 165,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    badge: 'Life Saving',
    stockStatus: 'in-stock',
    stockCount: 110,
    certifications: ['CoTCCC Approved', 'CE 0123', 'NSN Standard'],
    warranty: 'Lifetime Functional Guarantee',
    description: 'The standard of care for pre-hospital rapid tourniquet application. Allows single-handed rapid self-application or buddy-aid application to stop fatal arterial limb bleeding in under 60 seconds.',
    clinicalApplication: 'Combat medics, Ambulance crews, Police first responders, Industrial safety, and Extreme sports.',
    specifications: {
      'Windlass': 'Machined aluminum / reinforced polymer rod with dual-locking clips',
      'Band Width': '38mm wide band reduces tissue damage under high tension',
      'Time Strap': 'Writeable white velcro time strap for tourniquet duration recording',
      'Weather Proof': 'Operates reliably in mud, saltwater, blood, and freezing conditions'
    },
    features: [
      'Single routing buckle for faster one-handed application',
      'High-contrast red tip allows rapid orientation under low visibility',
      'Validated by military trauma committees worldwide',
      'Individually vacuum-sealed for sterile field readiness'
    ],
    featured: false,
    bestSeller: false,
    pastelBg: '#ffede8'
  },
  {
    id: 'ap-oto-set',
    name: 'ProVision Fiber-Optic Otoscope & Ophthalmoscope Set',
    category: 'patient-monitoring',
    tagline: 'True-color 3.5V LED illumination with 3x magnification optical lens.',
    priceUSD: 115,
    pricePKR: 32000,
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    badge: 'Diagnostic Standard',
    stockStatus: 'in-stock',
    stockCount: 35,
    certifications: ['CE Mark', 'ISO 13485'],
    warranty: '2 Years Manufacturer Warranty',
    description: 'Dual diagnostic set for comprehensive ear, nose, throat, and retinal examination. Fiber-optic light path delivers cool, shadow-free illumination of the tympanic membrane without obstructing the view.',
    clinicalApplication: 'General practitioners, Pediatric clinics, ENT specialists, and Medical training.',
    specifications: {
      'Illumination': '3.5V TrueColor Warm LED (> 20,000 hours life)',
      'Magnification': '3x optical swivel viewing window with airtight insufflation port',
      'Ophthalmoscope Apertures': 'Large spot, small spot, semi-circle, fixation star, red-free filter',
      'Handle': 'Knurled metal handle compatible with rechargeable Li-ion or AA cells'
    },
    features: [
      'High-grade glass lenses eliminate optical distortion and glare',
      'Includes 10 reusable autoclavable ear specula in assorted pediatric & adult sizes',
      'Rigid protective hard case with molded foam interior for safe transport',
      'Rotary dial allows quick lens selection from -20 to +20 diopters'
    ],
    featured: false,
    bestSeller: false,
    pastelBg: '#faf7e8'
  },
  {
    id: 'ap-suction-unit',
    name: 'RapidEvac Portable Electric Phlegm & Airway Suction',
    category: 'emergency-trauma',
    tagline: 'High-flow 20L/min vacuum pump with overflow protection bottle & AC/DC car cord.',
    priceUSD: 195,
    pricePKR: 54500,
    rating: 4.7,
    reviewsCount: 44,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    badge: 'Emergency Essential',
    stockStatus: 'in-stock',
    stockCount: 16,
    certifications: ['CE Mark', 'ISO 10079-1'],
    warranty: '1 Year Full Replacement Warranty',
    description: 'Compact medical aspirator for oral and tracheal secretion clearance in bedridden patients, post-surgical recovery, and patient transport ambulances. Dual AC/DC car adapter allows continuous roadside operation.',
    clinicalApplication: 'Tracheostomy care, Post-stroke nursing, Ambulance transfer, and Minor surgical drainage.',
    specifications: {
      'Pumping Rate': '≥ 20 Liters / min air displacement',
      'Max Vacuum': '≥ 0.08 MPa steplessly adjustable',
      'Collection Jar': '1000ml autoclavable polycarbonate with anti-overflow float valve',
      'Power': 'Dual 220V AC wall plug + 12V DC vehicle adapter plug',
      'Noise': 'Under 60 dBA quiet motor dampening'
    },
    features: [
      'Anti-overflow float valve prevents aspirate fluids from reaching the motor pump',
      'Stepless negative pressure regulation knob with intuitive analog dial gauge',
      'Oil-free piston pump requires zero routine mechanical maintenance',
      'Includes bacterial air filter and set of silicone suction catheters'
    ],
    featured: false,
    bestSeller: false,
    pastelBg: '#ffede8'
  }
];

export const CLINICAL_PERSONAS: ClinicalPersona[] = [
  {
    id: 'paramedic',
    title: 'Emergency Paramedic / EMS Crew',
    badge: 'Field Triage & Resuscitation',
    icon: 'Ambulance',
    description: 'Equipment hardened for rapid roadside deployment, mobile patient transport, and immediate life-saving airway & vascular stabilization.',
    clinicalContext: 'Every second counts during trauma response. Our field-certified tools feature 1000D water-tight enclosures, USB-C recharging, and CoTCCC-tested arterial bleed management.',
    recommendedProductIds: ['ap-vf-900', 'ap-cat-gen7', 'ap-ambu-100', 'ap-ems-bag'],
    urgencyBenefit: 'Emergency dispatch ready with same-day shipment within 2 hours across major metropolitan centers.'
  },
  {
    id: 'clinic-gp',
    title: 'Clinic & General Practitioner',
    badge: 'OPD Diagnostic Precision',
    icon: 'Stethoscope',
    description: 'High-throughput diagnostic instruments, blood pressure monitoring, and minor surgical kits for private outpatient clinics.',
    clinicalContext: 'Enhance clinical confidence and reduce patient referral delays with ESH-validated diagnostic devices and precision German minor surgery sets.',
    recommendedProductIds: ['ap-oxi-400', 'ap-bp-550', 'ap-surg-24', 'ap-oto-set'],
    urgencyBenefit: 'Includes calibration certificates, 3-year warranty packages, and free clinical trial for local practices.'
  },
  {
    id: 'hospital-icu',
    title: 'Hospital & ICU Department',
    badge: 'Institutional Procurement',
    icon: 'Building2',
    description: 'Batch-certified vascular access locators, bulk hospital consumables, and ICU-grade resuscitation accessories.',
    clinicalContext: 'Designed to cut cannulation failure rates by 80% in pediatric and oncology wards while satisfying institutional ISO 13485 audit standards.',
    recommendedProductIds: ['ap-vf-900', 'ap-ppe-nitrile', 'ap-ambu-100', 'ap-suction-unit'],
    urgencyBenefit: 'Official GST tax invoices, institutional purchase orders (PO) accepted, with dedicated account manager.'
  },
  {
    id: 'pathology-lab',
    title: 'Diagnostic Pathology & Lab',
    badge: 'Laboratory Grade',
    icon: 'Microscope',
    description: 'High-reliability benchtop centrifuges, micropipettes, and specimen processing instruments with brushless DC reliability.',
    clinicalContext: 'Ensure artifact-free blood separation, clean serum yields for biochemistry tests, and continuous round-the-clock centrifuge performance.',
    recommendedProductIds: ['ap-lab-4000', 'ap-ppe-nitrile', 'ap-oxi-400', 'ap-vf-900'],
    urgencyBenefit: 'Pre-calibrated with ISO calibration log sheets and replacement rotors stocked in our central warehouse.'
  },
  {
    id: 'medical-student',
    title: 'Medical Student & Trainee',
    badge: 'Skills Mastery & Exams',
    icon: 'GraduationCap',
    description: 'Venipuncture injection training arms, diagnostic examination kits, and OSCE preparation medical reference material.',
    clinicalContext: 'Practice real IV cannulation, catheterization, and auscultation techniques with realistic skin resistance before touching your first patient.',
    recommendedProductIds: ['ap-arm-trainer', 'ap-surg-24', 'ap-oxi-400', 'ap-oto-set'],
    urgencyBenefit: 'Special 15% academic discount with verified student ID and free instructional video library access.'
  }
];

export const TRUST_STATS = [
  { value: '10,000+', label: 'Clinicians & EMS Equipped' },
  { value: '99.4%', label: 'First-Stick Vein Locator Accuracy' },
  { value: '100% Verified', label: 'CE & ISO 13485 Certified' },
  { value: '< 2 Hours', label: 'Express Metropolitan Dispatch' },
  { value: '24/7 Hotline', label: 'Direct Clinical Paramedic Support' }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 'rev-1',
    name: 'Dr. Tariq Mahmood, FRCS',
    role: 'Head of Emergency & Trauma Care',
    hospital: 'Metropolitan Surgical Hospital',
    text: 'The AccuVein Pro vein detector from AsianParamedics has radically transformed our pediatric trauma bay. Difficult veins that previously took three nurses 20 minutes to cannulate are now accessed on the first attempt.',
    productBought: 'AccuVein Pro Vein Finder',
    verified: true,
    rating: 5
  },
  {
    id: 'rev-2',
    name: 'Captain A. Hafeez',
    role: 'Chief Paramedic Officer',
    hospital: 'Highway Rescue & EMS Services',
    text: 'We equipped 40 emergency ambulances with the 1000D trauma backpacks and CAT Gen-7 tourniquets. Exceptional durability, authentic batch certification, and fast local warranty support.',
    productBought: 'Paramedic Elite Trauma Backpack',
    verified: true,
    rating: 5
  },
  {
    id: 'rev-3',
    name: 'Dr. Sarah Al-Badr',
    role: 'Consultant Clinical Pathologist',
    hospital: 'Al-Shifa Diagnostic Labs',
    text: 'The CentriSpin 4000 benchtop centrifuge runs whisper quiet with zero rotor wobble. Great value and impeccable customer service over WhatsApp whenever we need technical advice.',
    productBought: 'CentriSpin 4000 Clinical Centrifuge',
    verified: true,
    rating: 5
  }
];
