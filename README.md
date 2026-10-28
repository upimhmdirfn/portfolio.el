<div align="center">

# 🪐 Muhamad Irfan — Portfolio

**Software Developer & Data Enthusiast**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

*Obsidian Digital Self — A cinematic, long-form editorial portfolio featuring interactive 3D, advanced motion design, and research-driven engineering.*

[Live Demo](https://portfolio-el.vercel.app) · [LinkedIn](https://linkedin.com/in/mhmdirfn) · [GitHub](https://github.com/upimhmdirfn)

</div>

---

## 📖 About The Project

This portfolio is not just a static showcase, but a fully engineered digital identity. It blends **cinematic editorial design** with **interactive 3D experiences**, built on top of the ultra-fast Astro 5 framework.

### ✨ Core Features

- **Interactive 3D Hero**: A GLB astronaut model rendered with Three.js, featuring ambient studio lighting, pointer-responsive parallax, and idle floating animations.
- **Cinematic Scroll Experience**: Long-form homepage with staggered mask reveals, sticky timelines, and a signature animated closing quote.
- **Advanced Motion System**: Custom CSS tokens, IntersectionObservers, and hardware-accelerated transitions for 60fps interactions.
- **Editorial Typography**: A blend of *Instrument Serif* and *Geist* for a premium, academic-grade reading experience.
- **Glassmorphism UI**: Subtle translucent surfaces and neon-blue accent lighting, optimized for deep obsidian backgrounds.
- **Performance First**: 100% static prerendering, zero framework hydration, and highly optimized WebGL rendering (pauses when out of viewport).
- **Accessible & Responsive**: Respects `prefers-reduced-motion`, includes skip-to-content links, and scales seamlessly from ultrawide monitors to mobile.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build) (Static Site Generation)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) (via Vite plugin)
- **3D Engine**: [Three.js](https://threejs.org) with `GLTFLoader`
- **Typography**: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), [Geist](https://vercel.com/font) (via Fontsource)
- **Icons**: SVG paths & Astro Icon
- **Deployment**: [Vercel](https://vercel.com)

---

## 🚀 Getting Started

To run this project locally:

### Prerequisites
Make sure you have **Node.js v22.12.0 or higher** installed.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/upimhmdirfn/portfolio.el.git
   cd portfolio.el
Install dependencies

bash
npm install
Run the development server

bash
npm run dev
Open http://localhost:4321 in your browser.

Building for Production
To generate the static production build:

bash
npm run build
You can preview the build locally using:

bash
npm run preview
📂 Project Structure
text
/
├── public/
│   └── images/               # Assets (3D GLB models, project thumbnails, portraits)
├── src/
│   ├── components/           # UI Components
│   │   ├── CyberneticHero.astro # The Three.js 3D Astronaut scene
│   │   ├── ClosingQuote.astro   # Signature typewriter ending
│   │   ├── SocialLinks.astro    # Reusable social brand icons
│   │   └── loader/              # Cinematic page loader
│   ├── content/              # Astro Content Collections (Markdown project files)
│   ├── data/                 # Centralized configs (portfolio images, social links, profile)
│   ├── layouts/              # Astro BaseLayout with SEO & Navigation
│   ├── pages/                # File-based routing (Home, Work, About, Research, etc.)
│   └── styles/               # Global CSS, Design Tokens, Motion System
├── astro.config.mjs          # Astro configuration & integrations
├── package.json
└── tailwind.config.mjs       # (if applicable)
🎨 Design System: "Obsidian / Liquid Chrome"
This project uses a custom @theme configuration in global.css:

Background: #08090C (Deep Obsidian)

Surface: #141720 (Graphite Glass)

Primary Text: #F4F5F7 (Off-white)

Accent: #8BA8FF (Icy Blue)

Typography:

Display: Instrument Serif (Elegant, editorial)

Sans: Geist Variable (Clean, highly legible)

Mono: Geist Mono Variable (Technical metadata)

👨‍💻 Author
Muhamad Irfan
Computer Science Graduate from Universitas Pendidikan Indonesia.

LinkedIn

GitHub

Email

<div align="center"> <i>"Build with purpose. Stay curious. Let the work speak."</i> </div> ```
