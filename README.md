# Prerita Saini — Portfolio

A modern, dark-themed developer portfolio built with **React 18 + Vite**.

## ✨ Features

- 🎨 Cyberpunk terminal aesthetic (dark bg, cyan accents, Space Mono font)
- 🖱️ Custom animated cursor with lag effect
- ⌨️ Typewriter animation in the hero terminal
- 🌊 Scroll-triggered fade-in animations
- 📱 Fully responsive (mobile-first)
- ⚡ Lightning fast — Vite + React 18
- 🔍 SEO optimised meta tags
- 🌐 Animated grid background + scanlines overlay

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Fonts | Space Mono + Outfit (Google Fonts) |
| Styling | Pure CSS with CSS variables |
| Animations | CSS keyframes + IntersectionObserver |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview build
npm run preview
```

## 📁 Structure

```
prerita-portfolio/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx        # Custom animated cursor
│   │   ├── Navbar.jsx        # Sticky nav with active state
│   │   ├── Hero.jsx          # Typewriter terminal hero
│   │   ├── About.jsx         # About + education cards
│   │   ├── Projects.jsx      # SciSPY featured + grid
│   │   ├── Skills.jsx        # Tech skill groups
│   │   ├── Experience.jsx    # Timeline
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useInView.js      # IntersectionObserver hook
│   ├── App.jsx
│   ├── App.css               # Global card/button styles
│   └── index.css             # CSS variables + animations
├── index.html
├── vite.config.js
└── package.json
```

## 🌐 Deploy

**Vercel (Recommended):**
```bash
npm i -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# drag & drop the dist/ folder to netlify.com
```

**GitHub Pages:**
```bash
# In vite.config.js, add: base: '/your-repo-name/'
npm run build
# push dist/ to gh-pages branch
```

## 📄 Customisation

All content is in the component files. Search for:
- `FEATURED` object in `Projects.jsx` → update SciSPY details
- `PROJECTS` array → add more projects
- `SKILL_GROUPS` in `Skills.jsx` → update skills
- `CERTS` in `Certifications.jsx` → add certifications

---

Built by Prerita Saini · preritasaini1@gmail.com
