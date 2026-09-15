# POLCEBLAZER LLC

A production-ready React/Vite company website for POLCEBLAZER LLC, a software engineering and technology consulting company focused on better business systems.

## Stack

- Vite, React 19, TypeScript, React Router
- Tailwind CSS Vite plugin and a focused CSS design system
- Lucide React icons
- ESLint, Prettier, Vitest, and React Testing Library

## Run locally

Prerequisite: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run test       # Run component tests
npm run lint       # Run ESLint
npm run build      # Typecheck and create production bundle
npm run preview    # Preview the production bundle
npm run format     # Format project files
```

## Routes

The app includes `/`, `/services`, `/solutions`, `/industries`, `/process`, `/about`, `/insights`, `/insights/:slug`, `/contact`, `/privacy`, `/terms`, and a custom 404 view. Routes are lazy-loaded through the main application shell.

## Structure

- `src/components.tsx` - reusable layout, navigation, cards, timeline, CTA, and contact form
- `src/data.ts` - typed local content for services, industries, process steps, and articles
- `src/pages.tsx` - route page views
- `src/App.css` - brand variables, responsive layout, and accessible states
- `src/tests` - component and form behavior tests
- `public` - favicon, robots.txt, and sitemap.xml

## Content and brand updates

Update service, industry, process, and article content in `src/data.ts`. Update the color variables at the top of `src/App.css`. The company detail placeholders in the About, Contact, Footer, legal, sitemap, and SEO metadata should be replaced with verified business information before launch.

## Future contact API

The `submitProjectInquiry` function in `src/components.tsx` currently validates fields and completes locally without transmitting data. Replace the marked future API section with a `fetch` call using `VITE_CONTACT_API_URL` from `.env` and retain loading, success, and error states. Never place secrets in frontend environment variables.

## SEO and deployment

Replace `[your-domain]` in `index.html`, `public/robots.txt`, and `public/sitemap.xml`. Page titles and descriptions are updated per route. Organization JSON-LD intentionally contains only placeholder-safe company information.

For Vercel or Netlify, import the repository, use `npm run build` as the build command, and publish `dist`. For a standard static host, run `npm run build` and upload `dist`; configure SPA fallback/rewrite behavior so unknown paths serve `index.html`.

Legal pages are starter templates and require qualified legal review before publication.
