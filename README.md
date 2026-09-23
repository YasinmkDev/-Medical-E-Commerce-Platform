Medical E-Commerce Platform

A modern, responsive medical supplies and equipment e-commerce platform built with React 19, Vite 8, and Tailwind CSS 4.

## Features

- **Product Catalog** - Browse medical equipment and supplies with advanced filtering
- **Category Navigation** - Organized medical categories for easy discovery
- **Personalized Recommendations** - AI-powered suggestions based on clinical personas
- **Quick View Modal** - View product details without leaving the page
- **Shopping Cart** - Slide-out cart drawer with quantity management
- **WhatsApp Support** - Direct customer support integration
- **Dynamic Page Composition** - Admin-configurable section layout
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **AI Integration**: Google GenAI
- **Language**: TypeScript 7
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # React components
│   ├── CartDrawer.tsx       # Slide-out shopping cart
│   ├── CategoryGrid.tsx     # Product category display
│   ├── Footer.tsx           # Site footer with newsletter
│   ├── HeroSection.tsx      # Landing hero with CTA
│   ├── PersonalizedRecommendations.tsx  # AI recommendations
│   ├── ProductCatalog.tsx   # Product listing with filters
│   ├── ProductQuickView.tsx # Product detail modal
│   ├── SearchBar.tsx        # Real-time search & filtering
│   ├── SectionManagerModal.tsx # Dynamic page layout admin
│   ├── StickyBottomNotification.tsx # Promo announcements
│   ├── TopNav.tsx           # Navigation header with cart
│   ├── TrustStrip.tsx       # Trust indicators
│   ├── WhatsAppChatModal.tsx # Customer support chat
│   └── WhyChooseUs.tsx      # Value proposition section
├── data/
│   └── medicalData.ts       # Product, category, persona data
├── types.ts                 # TypeScript type definitions
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles & Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd frontendwebApp

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove build artifacts |

## Environment Variables

Create a `.env.local` file with the following variables:

```env
VITE_GEMINI_API_KEY=your_google_genai_api_key
VITE_WHATSAPP_NUMBER=your_whatsapp_business_number
```

## Deployment

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The `dist/` directory contains the production-ready assets for deployment to any static hosting service (Vercel, Netlify, AWS S3, etc.).

## Architecture

This project follows a component-based architecture with:

- **Type-safe development** - Strict TypeScript configuration
- **Modular components** - Each feature in its own component
- **Centralized data** - Medical product data in `src/data/medicalData.ts`
- **Path aliases** - `@/` imports for clean imports
- **Graphify analysis** - Code dependency visualization in `graphify-out/`

## License

Private project - All rights reserved.