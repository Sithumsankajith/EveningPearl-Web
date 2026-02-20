# Evening Pearl - Luxury Senior Residence

A modern, premium, user-friendly marketing website for a luxury senior care home in Sri Lanka. 
Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features
- Dynamic layout with a focus on luxury, calmness, and modern design.
- Fully responsive and accessible component library (semantic HTML, keyboard focus).
- Comprehensive UI for exploring residences with advanced filtering capabilities (Room types, availability).
- Placeholder generator system for premium dummy images.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Customization Guide
- **Data Models**: Look in `src/data/mockData.ts` to adjust details about rooms, services, pricing, and locations.
- **Images**: There is an `ai_prompts.txt` file in the `public/` directory outlining exact image requirements for when real photos or generated images are ready to be integrated. The `PlaceholderImage` standard component currently powers the aesthetic placeholders.
- **Styling**: `tailwind.config.js` contains the comprehensive brand theme including precise color scales (Navy & Gold) and font definitions.
