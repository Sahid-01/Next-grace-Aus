# Grace International Australia — Project Overview

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v4, inline CSS-in-JS
- **Email:** EmailJS (client-side) + Resend API (server-side fallback via `/api/contact`)
- **Map:** Leaflet + React Leaflet (dynamically imported, SSR disabled)
- **Font:** Poppins via Google Fonts

---

## Features

### Pages
| Route | Description |
|---|---|
| `/` | Main landing page — all sections composed together |
| `/services` | Services detail page |
| `/process` | Step-by-step process page |
| `/universities` | Full university partners listing |
| `/destinations` | Study destinations page |
| `/blog` | Blog/articles listing |
| `/contact` | Standalone contact page |

### Components

**Hero**
- Full-screen background image with gradient overlay
- Animated headline, subtext, and CTA buttons
- Stats grid (50K+ students, 500+ partners, 19 years, 45 branches)
- Decorative SVG wave transition at the bottom

**Navbar**
- Transparent on top, frosted glass on scroll
- Logo swaps between colour and white based on scroll state
- Responsive: hamburger menu on mobile/tablet with body scroll lock
- "Book Free Consultation" CTA button (shortened to "Consult" on small screens)

**Why Choose Grace**
- 6-card grid highlighting key differentiators (19+ years, 50K+ students, 98% visa success rate, etc.)
- Hover lift animation on each card

**Branch Map**
- Interactive Leaflet map with custom SVG pin markers
- Sidebar list of branches — clicking a card flies the map to that location and opens its popup
- Mobile tab switcher to toggle between branch list and map views
- Branch data driven from `/data/branches.js`

**Services**
- Auto-playing carousel (3s interval) with prev/next controls and dot indicators
- Responsive: 1 card on mobile, 2 on tablet, 3 on desktop
- 5 services: University Admission, Visa Assistance, IELTS/PTE Coaching, Career Counselling, Scholarship Guidance

**Team**
- 4-member grid with photo, name, role, and bio
- Intersection Observer entrance animation

**Process**
- 5-step horizontal layout on desktop, stacked on mobile
- Dark gradient background with dot pattern overlay

**Testimonials**
- Auto-playing carousel (4s interval) with 6 student reviews
- Star ratings, quote icon, student initials avatar
- Responsive: 1/2/3 cards based on breakpoint

**Blog**
- 3 article cards with tag, date, title, excerpt
- "View All Posts" button
- Mobile: compact row layout hiding excerpt

**FAQ**
- Accordion with 5 questions, single-open behaviour
- Two-column layout on desktop: accordion left, image right
- Overlay CTA button on the image

**CTA Banner**
- Full-width gradient card with "Book Free Consultation" and phone call buttons

**Contact Form**
- Fields: Full Name, Email, Phone (optional), Message
- Client-side validation with inline error messages
- Sends via EmailJS; success state replaces form with confirmation
- 3 info cards: phone, email, location

**Footer**
- 4-column grid: brand/tagline/social, quick links, services, contact info
- Social icon buttons (Facebook, Twitter, LinkedIn)
- MARA registration notice

**Floating Utilities**
- WhatsApp button (fixed, bottom-right, pulse animation)
- ScrollToTop — resets scroll position on route change

**FadeIn**
- Reusable wrapper using IntersectionObserver for scroll-triggered entrance animations with configurable delay

### API
- `POST /api/contact` — server-side form handler with validation; sends via Resend if `RESEND_API_KEY` is set, otherwise logs to console

### University Partners
- 50 partner institutions listed with logo, name, CRICOS code, and external link

---

## Potential Improvements

### Code Quality
- **Consolidate responsive logic** — `isMobile`/`isTablet` state + `useEffect` resize listeners are duplicated across ~8 components. Extract into a shared `useBreakpoint()` hook.
- **Replace inline styles with Tailwind** — most components mix inline CSS and Tailwind inconsistently. Standardising on Tailwind would reduce bundle size and improve maintainability.
- **Carousel abstraction** — `Services` and `Testimonials` both implement near-identical carousel logic. Extract a reusable `<Carousel>` component.
- **Data files** — blog posts, FAQs, team members, and destinations are hardcoded in component files. Move them to `/data/*.js` files like branches already are.

### Performance
- **Image optimisation** — most images use `<img>` tags. Switch to Next.js `<Image>` for automatic lazy loading, WebP conversion, and responsive sizing.
- **Font loading** — Poppins is loaded via a `<link>` in `layout.jsx`. Use `next/font/google` instead for better performance and no layout shift.
- **Hero image** — the hero background is applied via a CSS `backgroundImage` string, bypassing Next.js image optimisation entirely.
- **University logos** — 50 logos are imported as static variables at the top of `Universities.jsx`. Lazy loading or virtualisation would help on slower connections.

### UX & Accessibility
- **Carousel keyboard navigation** — the service and testimonial carousels have no keyboard support (arrow keys, focus management).
- **FAQ animation** — the accordion content appears/disappears instantly with a conditional render. A CSS height transition would feel smoother.
- **Form `<label>` elements** — the contact form inputs use only `placeholder` text with no associated `<label>`, which is an accessibility issue for screen readers.
- **WhatsApp phone number** — `wa.me/96629020` is missing the country code. Should be `wa.me/61396629020` for the Melbourne number.
- **"View All Posts" button** — currently has no `href` or `onClick` handler; it goes nowhere.
- **Social media links** — footer social buttons are `<button>` elements with no `href`. They need actual URLs.
- **CTA "Call" button** — the phone button in the CTA section has no `tel:` link action.

### Features
- **Blog** — articles are static strings. Connect to a CMS (Contentful, Sanity, or MDX files) to make content manageable.
- **Search/filter on Universities page** — with 50 institutions, a search bar or category filter would improve usability.
- **Destinations page** — the `Destinations` component exists but the `/destinations` page file is present without confirmed content integration.
- **Dark mode** — the colour palette is well-defined; adding a dark mode toggle would be straightforward.
- **Toast notifications** — the contact form shows inline success/error states. A toast system would be more consistent across the app.
- **Rate limiting on `/api/contact`** — the API route has no rate limiting, making it vulnerable to spam submissions.
- **Environment variable validation** — missing EmailJS env vars fail silently. Add a startup check or use a library like `zod` to validate required env vars.
