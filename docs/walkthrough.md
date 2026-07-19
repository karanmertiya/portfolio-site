# Portfolio Website Walkthrough

I have successfully built the core structure and pages for your modern portfolio website.

## 🏗️ Architecture

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v3 + Framer Motion
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## 🚀 Features Implemented

### 1. Home Page (`/`)
- **Hero Section**: Animated background, gradient text, and tech badges.
- **Call to Action**: Links to projects and resume download.

### 2. Projects Structure
- **Landing Page (`/projects`)**: Grid of group cards (Data & Finance, Applied Math, etc.) with progress bars.
- **Group Detail (`/projects/[group]`)**: Lists all projects within a selected group.
- **Case Study (`/projects/[group]/[project]`)**: Detailed view with:
  - Problem & Solution
  - Architecture Diagrams
  - Database Schemas
  - ML Metrics
  - Live Demo & Repo Links

### 3. Timeline (`/timeline`)
- Vertical chronological timeline of your development journey.
- Interactive nodes with project summaries.

### 4. About & Blog
- **About (`/about`)**: Bio, skills matrix, and contact info.
- **Blog (`/blog`)**: Placeholder for technical articles.

## 🎨 Design System

- **Colors**: Primary Blue (`#3b82f6`) with glassmorphism effects.
- **Animations**: Smooth page transitions and hover effects using Framer Motion.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
portfolio/
├── app/                  # Next.js App Router
│   ├── projects/         # Project pages
│   ├── timeline/         # Timeline page
│   ├── about/            # About page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── Hero.tsx          # Homepage hero
│   ├── GroupCard.tsx     # Project group card
│   └── ...
├── data/                 # Static data
│   └── projects.ts       # Project content
└── lib/                  # Utilities
```

## ✅ Next Steps

1. **Add Content**: Update `data/projects.ts` with your real project details.
2. **Add Images**: Place project screenshots in `public/images/`.
3. **Deploy**: Push to GitHub and connect to Vercel.
