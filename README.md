# DataSpire - Corporate Website

> **Data. Technology. Transformation.**  
> A modern, professional, responsive static corporate website for **DataSpire**, built with Angular 18 (standalone components, TypeScript, Angular Router, and SCSS).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
# or
npx ng serve
```
Open your browser and navigate to `http://localhost:4200/`.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be output to `dist/dataspire/`.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── seo.service.ts                 # Dynamic SEO & Open Graph meta manager
│   ├── shared/
│   │   ├── models/
│   │   │   └── site.models.ts             # TypeScript interfaces for all site entities
│   │   ├── data/
│   │   │   ├── company.data.ts            # Company info, philosophy, mission, vision & stats
│   │   │   ├── solutions.data.ts          # Core solutions & customizable domain suites
│   │   │   ├── services.data.ts           # 8 core enterprise engineering services
│   │   │   ├── industries.data.ts         # Targeted industry verticals (Edu, HR, Bank, SMB)
│   │   │   ├── careers.data.ts            # 9 active job opening profiles & requirements
│   │   │   └── navigation.data.ts         # Nav links & multi-column footer data
│   │   └── components/
│   │       ├── navbar/                    # Sticky glassmorphism header & mobile drawer
│   │       ├── footer/                    # Multi-column footer & copyright
│   │       ├── section-heading/           # Reusable gradient heading & pill badge
│   │       ├── tech-visual/               # Interactive animated data nodes & intelligence visual
│   │       ├── solution-card/             # Solution card with feature checklist
│   │       ├── industry-card/             # Industry card with target beneficiaries & modules
│   │       ├── service-card/              # Service card with capabilities & deliverables
│   │       ├── job-card/                  # Career position card with modal apply trigger
│   │       └── cta-section/               # High-conversion gradient Call to Action banner
│   ├── pages/
│   │   ├── home/                          # Hero, trust grid, value proposition, core cards
│   │   ├── about/                         # Purpose, mission, vision, 6-step roadmap
│   │   ├── solutions/                     # Education, Staff HR, SMB & Co-op Bank suites
│   │   ├── services/                      # Web, enterprise software, analytics & cloud services
│   │   ├── industries/                    # Education, HR, SMB, Banking, Financials & Enterprise
│   │   ├── careers/                       # 9 detailed career openings with apply modal
│   │   └── contact/                       # Contact details, department desks & inquiry form
│   ├── app.routes.ts                      # Standalone lazy-loaded routing
│   ├── app.config.ts                      # App configuration (view transitions, scroll restore)
│   └── app.component.ts                   # Root shell layout
├── assets/                                # Static images, icons, and fonts
├── index.html                             # Web entry point with fonts & metadata
├── main.ts                                # Bootstrap entry point
└── styles.scss                            # Enterprise dark navy SaaS design system
```

---

## 🎨 Design System & Theme
- **Theme:** Enterprise Deep Navy (`#070b14`, `#0c1427`, `#0f172a`) with Vivid Cyan (`#38bdf8`) and Electric Blue (`#2563eb`) accents.
- **Typography:** `Plus Jakarta Sans` for bold headings, `Inter` for crisp body copy, and `JetBrains Mono` for tech tags.
- **Glassmorphism:** Subtle frosted glass surfaces (`backdrop-filter: blur(16px)`), delicate cyan glows, and refined hover elevations.
- **100% Responsive:** Tested across mobile (< 640px), tablet (768px - 1024px), laptop (1200px), and widescreen monitors.

---

## 📝 Content Customization
All website text, cards, solutions, job postings, and contact information are decoupled in `src/app/shared/data/*.ts` files:
- Edit company bio & contact in `src/app/shared/data/company.data.ts`
- Edit solution modules in `src/app/shared/data/solutions.data.ts`
- Edit services in `src/app/shared/data/services.data.ts`
- Edit industry verticals in `src/app/shared/data/industries.data.ts`
- Edit career openings in `src/app/shared/data/careers.data.ts`
- Edit nav menu & footer links in `src/app/shared/data/navigation.data.ts`
