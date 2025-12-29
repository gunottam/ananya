# Futuristic Romantic Birthday Website

A beautiful, futuristic romantic birthday website built with Next.js App Router, Tailwind CSS, and Framer Motion. Features glassmorphism design, smooth animations, and multiple pages for a complete experience.

## Features

- 🎨 **Pastel Futuristic Theme** - Soft lavender, blush pink, white, and subtle gold accents
- ✨ **Glassmorphism Design** - Translucent cards with backdrop blur effects
- 🎭 **Smooth Animations** - Subtle Framer Motion animations throughout
- 🔐 **Password Gate** - Protected entry with elegant password input
- 📸 **Memories Gallery** - Interactive comet-card gallery for photos
- 💌 **Love Letter** - Editable handwritten-style letter section
- 👑 **Princess Section** - Royal highlight with soft glow effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🚀 **Vercel Ready** - Optimized for deployment

## Routing Structure

- `/` - Password gate (entry point)
- `/home` - Main romantic page with all sections
- `/memories` - Photo gallery with comet-card interactions
- `/surprise` - Final 3D surprise page (iframe)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Change the Password

Edit `components/PasswordGate.tsx` and update the `CORRECT_PASSWORD` constant:

```tsx
const CORRECT_PASSWORD = "your-password-here";
```

### Change the Name

Edit `app/home/page.tsx` and update the `name` prop:

```tsx
<Hero name="Your Name Here" />
```

### Add Photos to Memories Gallery

1. Add your photos to the `/public/photos` directory
2. Name them sequentially: `1.jpg`, `2.jpg`, `3.jpg`, etc.
3. The gallery will automatically display them

### Edit Memory Cards

Modify the `memories` array in `components/MemoryCards.tsx` to customize the memory cards.

### Edit Love Letter

The love letter content can be edited directly on the page by clicking on it, or you can modify the default content in `components/LoveLetter.tsx`.

### Add 3D Surprise Content

Replace `/public/surprise/index.html` with your 3D surprise content. The page will load it in a fullscreen iframe.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

The site will be live at `your-project.vercel.app`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - UI component library
- **Aceternity UI** - Comet card component

## Design System

### Colors
- Pastel Pink: `#FFE5E5`
- Pastel Lavender: `#E8D5FF`
- Blush Pink: `#FFD6E8`
- Gold Accent: `#F4D03F`

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Handwritten: Dancing Script

### Effects
- Glassmorphism with backdrop blur
- Soft glow effects
- Gradient backgrounds
- Smooth hover animations

## License

MIT
