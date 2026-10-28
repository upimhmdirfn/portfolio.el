 <div align="center">

# 🪐 Muhamad Irfan — Portfolio

### Software Developer & Data Enthusiast

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Obsidian Digital Self**

*A cinematic, long-form editorial portfolio featuring interactive 3D, advanced motion design, and research-driven engineering.*

[**Live Demo ↗**](https://portfolio-el.vercel.app/) · [LinkedIn](https://linkedin.com/in/mhmdirfn) · [GitHub](https://github.com/upimhmdirfn)

</div>

---

## 📖 About the Project

This portfolio is more than a static showcase of projects. It is a thoughtfully engineered digital identity that combines **cinematic editorial design, interactive 3D visualization, and modern web engineering**.

Built with Astro 5 and Three.js, the experience embraces an *Obsidian / Liquid Chrome* aesthetic, pairing immersive motion with a clean, content-focused interface.

The goal is to create a digital space that communicates technical expertise, creativity, and a continuous commitment to learning.

## ✨ Core Features

- **Interactive 3D Hero** — A GLB astronaut model rendered with Three.js, enhanced with ambient studio lighting, pointer-responsive parallax, and subtle floating animations.
- **Cinematic Scroll Experience** — A long-form homepage featuring staggered reveals, masked transitions, sticky timelines, and an animated closing quote.
- **Advanced Motion System** — Reusable CSS design tokens, Intersection Observer-based animations, and hardware-accelerated transitions designed for smooth interactions.
- **Editorial Typography** — A combination of Instrument Serif and Geist for a refined visual hierarchy and a premium reading experience.
- **Glassmorphism UI** — Translucent surfaces, subtle gradients, and icy-blue accent lighting against a deep obsidian background.
- **Performance-Conscious Rendering** — Static page generation, minimal client-side JavaScript, and viewport-aware WebGL rendering.
- **Accessible by Design** — Semantic HTML, skip-to-content navigation, responsive layouts, and support for `prefers-reduced-motion`.
- **Responsive Experience** — An adaptive interface designed for desktop, tablet, and mobile screens.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Astro 5](https://astro.build/) | Static site generation and page architecture |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling and design consistency |
| [Three.js](https://threejs.org/) | Interactive 3D rendering |
| `GLTFLoader` | Loading GLB/GLTF 3D assets |
| [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) | Editorial display typography |
| [Geist](https://vercel.com/font) | Interface typography |
| SVG / Astro Icon | Scalable interface and social icons |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## 🎨 Design System — Obsidian / Liquid Chrome

The visual language is built around dark surfaces, restrained contrast, editorial typography, and subtle futuristic accents.

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Obsidian | `#08090C` | Primary background |
| Graphite | `#141720` | Surface and card backgrounds |
| Off-White | `#F4F5F7` | Primary text |
| Icy Blue | `#8BA8FF` | Accent and interactive elements |

### Typography

- **Display:** Instrument Serif — expressive, elegant headings.
- **Sans-serif:** Geist Variable — clean and readable interface text.
- **Monospace:** Geist Mono Variable — technical metadata and code-oriented details.

The design prioritizes clarity and readability while maintaining a cinematic, futuristic identity.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) `v22.12.0` or higher.
- npm, included with Node.js.
- Git.

> **Note:** The Node.js version above is the project's documented development requirement. Verify `package.json` and the Astro version if you change the runtime requirements.

### 1. Clone the Repository

```bash
git clone https://github.com/upimhmdirfn/portfolio.el.git
cd portfolio.el
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Preview the Production Build

```bash
npm run preview
```

## 📂 Project Structure

```text
portfolio.el/
├── public/
│   └── images/                  # Images, portraits, and 3D assets
├── src/
│   ├── components/
│   │   ├── CyberneticHero.astro # Three.js 3D hero scene
│   │   ├── ClosingQuote.astro   # Animated closing quote
│   │   ├── SocialLinks.astro    # Social media links and icons
│   │   └── loader/              # Page loading experience
│   ├── content/                 # Project content and collections
│   ├── data/                    # Profile, images, and social links
│   ├── layouts/                 # Shared layouts and page structure
│   ├── pages/                   # File-based routes
│   └── styles/                  # Global styles and design tokens
├── astro.config.mjs             # Astro configuration
├── package.json                 # Dependencies and npm scripts
└── README.md
```

*The structure above illustrates the intended organization. Adjust filenames and directories to match the current repository.*

## ⚡ Performance & Accessibility

Performance and accessibility are considered throughout the development process.

- Static generation for pages that do not require server-side rendering.
- Lightweight, component-based architecture with Astro.
- Viewport-aware 3D rendering to reduce unnecessary GPU work.
- Responsive layouts across common screen sizes.
- Reduced-motion support for users who prefer fewer animations.
- Semantic markup and keyboard-accessible navigation.
- Optimized visual effects to balance aesthetics and usability.

Actual performance depends on the implementation, asset sizes, browser, and device capabilities.

## 🗺️ Roadmap

- [x] Establish the Obsidian / Liquid Chrome visual direction.
- [x] Build the Astro-based portfolio foundation.
- [x] Integrate the Three.js 3D hero experience.
- [x] Develop reusable motion and visual components.
- [ ] Further optimize 3D assets and loading behavior.
- [ ] Refine mobile interactions and responsive animations.
- [ ] Expand project documentation and case studies.

## 👨‍💻 About the Author

**Muhamad Irfan**  
Computer Science Graduate · Universitas Pendidikan Indonesia

Software developer and data enthusiast interested in building useful digital products, exploring data-driven solutions, and continuously improving through engineering and experimentation.

### Connect with Me

- **LinkedIn:** [linkedin.com/in/mhmdirfn](https://linkedin.com/in/mhmdirfn)
- **GitHub:** [github.com/upimhmdirfn](https://github.com/upimhmdirfn)
- **Portfolio:** [portfolio-el.vercel.app](https://portfolio-el.vercel.app/)

---

<div align="center">

*"Build with purpose. Stay curious. Let the work speak."*

**Designed with intention. Built with curiosity.**

</div>
