# SPEC.md — FUTURA Site Security + SEO Implementation

**Date:** 2026-04-05
**Repo:** LuiisGo/futura-site
**Deploy:** Netlify (auto-deploy from `main`)
**URL:** https://futuratt.com

---

## Overview

This spec covers two parallel workstreams for futuratt.com:

1. **Security hardening** — Zod validation, rate limiting, security headers, and CSP for all API endpoints
2. **SEO implementation** — sitemap, robots.txt, structured data, blog, sector pages, case studies, and AI SEO

Execution order: Security first (Blocks 1-7), then SEO (Phases 1-4).

---

## Decisions

| Topic | Decision |
|-------|----------|
| Zod schema | 7 fields: name, email, company?, phone?, country?, sector?, message |
| Blog architecture | Static TS data file (`lib/blog-data.ts`) with HTML content |
| Blog content | 5 full articles + 5 stubs |
| GA4 ID | `G-3RQ8K6MV86` |
| Rate limiting | In-memory Map (acceptable for current Netlify volume) |
| CSP | Add with allowlist (Google, Tally, Render, self) |
| Tally URL | `https://tally.so/r/ZjNEb5` (confirmed) |
| AI extraction | Visible paragraph on homepage (not sr-only) |
| Agrícola San Antonio | Publish calculator case (90% metric confirmed) + reference fuel tracking in sector page |
| OG image | Keep existing static `/og-image.png` |
| ERP page vs blog | Keep both `/futura-vs-erp` and blog article, link between them |
| Sector pages | Dynamic `[sector]` route with `generateStaticParams` |
| Existing sector content | Preserve and enhance with SEO data |
| ChatWidget leads | Route through protected `/api/contact` |
| Extra sectors | Include education + restaurantes (8 total) |
| lsa-control | Feature in agroindustria sector page + services (not dedicated case page) |

---

## PART 1: SECURITY

### Block 1 — Dependencies & Base Config

**Install:**
```bash
npm install zod
```

**Create `lib/validations.ts`:**
- `ContactSchema`: name (2-100 chars, regex), email (.email, lowercase, trim), company? (max 150), phone? (max 20, regex), country? (max 100), sector? (max 100), message (10-2000 chars)
- `BotMessageSchema`: message (1-500 chars), history? (array max 10, role enum user/assistant, content max 1000)
- Export types: `ContactFormData`, `BotMessageData`

**Create `lib/rate-limit.ts`:**
- `isRateLimited(ip, { maxRequests, windowMs })` — Map-based with cleanup every 100 requests
- `getClientIp(req)` — reads `x-forwarded-for` header

**Verify `.gitignore`** includes all `.env*` patterns.

### Block 2 — Protect `/api/contact`

Add to existing route handler (preserve webhook logic):
1. Rate limit: 5 req/IP/15min → 429
2. Content-Type check → 400
3. Safe JSON parse → 400
4. Zod validation → 422 with field errors
5. Env var check (N8N_LEAD_WEBHOOK_URL) → 500
6. Fetch timeout 8s with AbortController
7. Generic error messages (never expose internals)
8. Add GET handler → 405

### Block 3 — Protect `/api/futura-bot`

Add at top of existing POST handler (DO NOT touch system prompt):
1. Rate limit: 10 req/IP/15min → 429
2. OPENAI_API_KEY existence check → 500
3. Safe JSON parse → 400
4. Zod validation with BotMessageSchema → 422
5. Use `result.data` for rest of handler

### Block 4 — Client-side Validation

In `ContactForm.tsx`:
- Import `ContactSchema` from `lib/validations`
- Validate before fetch, show field errors in UI
- Send `result.data` (sanitized) not raw form data

### Block 5 — Security Headers + CSP

In `next.config.mjs`, add `async headers()`:

**All pages (`/(.*)`)**:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy`: self + Google Analytics + Tally + Render + Google Calendar + inline styles

**API routes (`/api/(.*)`)**:
- `Cache-Control: no-store, max-age=0`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`

### Block 6 — Key Scan

Grep for hardcoded secrets in `.ts/.tsx/.js` (excluding node_modules, .next, .git).

### Block 7 — Verification

- `npm run build` — clean
- `git status` — no `.env.local`
- curl tests: 422, 400, 405, 200

---

## PART 2: SEO

### Phase 1 — Technical Emergency

**Create:**
- `lib/constants.ts` — CALENDAR_URL, WHATSAPP_URL, WHATSAPP_MSG, TALLY_TERMOMETRO, WALLET_DEMO
- `app/sitemap.ts` — all pages (static + blog + sectors + cases)
- `app/robots.ts` — allow all except CCBot, reference sitemap

**Modify:**
- `app/layout.tsx` — full metadata (metadataBase, title template, keywords, robots, OG, Twitter, canonical) + GA4 script (`G-3RQ8K6MV86`)
- All page.tsx files — update metadata + canonical for each page
- `Hero.tsx` — H1 with "Digitalización y automatización para PYMEs en Guatemala" + visible intro paragraph
- `StatsBar.tsx` — SSR fix (render final values server-side, animate only on client)
- CTA buttons across components — use CALENDAR_URL from constants

### Phase 2 — Schema Markup

**Create:**
- `lib/schema.ts` — reusable JSON-LD builders (organization, FAQ, breadcrumb, article)

**Modify:**
- `app/layout.tsx` — add OrganizationSchema
- `FAQ.tsx` — add FAQPage schema (read existing questions first)
- All internal pages — add BreadcrumbList schema
- `sobre-futura/page.tsx` — enhance founder section with bio
- `CasosDeExito.tsx` — add Agrícola San Antonio (calculator: 90% cost reduction)

### Phase 3 — Content

**Blog (5 full + 5 stubs):**

Full articles (1,500+ words):
1. Cómo digitalizar inventario sin ERP (featured)
4. ERP vs sistema digital a medida (featured)
6. Caso real: Lechería San Antonio
7. Caso real: Calculadora insumos agrícolas
9. Cuánto cuesta no digitalizar (featured)

Stubs (metadata only):
2. Qué es n8n
3. WhatsApp Business automatización
5. Digitalizar ventas distribuidora
8. Automatización inventarios retail
10. Automatizar cotizaciones B2B

**Files:** `lib/blog-types.ts`, `lib/blog-data.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `components/blog/BlogCard.tsx`

**8 Sector pages (dynamic route):**
1. Agroindustria (+ lsa-control fuel tracking reference)
2. Retail
3. Distribución y logística
4. Combustibles y flotas
5. Servicios técnicos
6. Industrial B2B
7. Educación
8. Restaurantes

**Files:** `lib/sectors-data.ts`, `app/sectores/[sector]/page.tsx`

Preserve existing sector page content, enhance with: painPoints, solutions, tools, caseStudy, FAQ, schema, lsa-control reference (agroindustria).

**3 Case study pages:**
- `/casos/lecheria-san-antonio`
- `/casos/fueldepot-gt`
- `/casos/agricola-san-antonio`

**File:** `app/casos/[caso]/page.tsx` (or enhance existing)

**Services:** Add "Aplicaciones web a medida" + lsa-control as capability example

**Navigation:** Add "Blog" to Navbar

### Phase 4 — AI SEO

- Visible FUTURA definition paragraph (Phase 1)
- Citable statistics with attribution in blog + sector pages
- Sector FAQ renders as HTML text (not just JS accordion)
- FAQPage schema on each sector page
- Verify robots.txt allows AI bots
- Enhance /termometro with confirmed Tally URL

---

## ChatWidget Lead Routing

Route `ChatWidget.tsx` lead capture through `/api/contact` instead of direct n8n webhook call.
Add `source: 'futuratt.com/chatbot'` to distinguish from form submissions.

---

## Verification

```bash
npm run build                    # Clean build, no TS errors
git status                       # .env.local not staged
# curl tests against local dev server:
curl -X POST .../api/contact ... # 422 (invalid), 400 (bad JSON), 405 (GET), 200 (valid)
# Post-deploy: check /sitemap.xml, /robots.txt, security headers in DevTools
```

**Manual (user):**
1. Submit sitemap in Google Search Console
2. Request indexation of key URLs
3. Verify GA4 receiving data

---

## Files Summary

**CREATE (17 files):**
`lib/validations.ts`, `lib/rate-limit.ts`, `lib/constants.ts`, `lib/schema.ts`, `lib/blog-types.ts`, `lib/blog-data.ts`, `lib/sectors-data.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/sectores/[sector]/page.tsx`, `app/casos/[caso]/page.tsx`, `components/blog/BlogCard.tsx`

**MODIFY (14 files):**
`next.config.mjs`, `app/layout.tsx`, `app/api/contact/route.ts`, `app/api/futura-bot/route.ts`, `components/common/ContactForm.tsx`, `components/chat/ChatWidget.tsx`, `components/sections/Hero.tsx`, `components/sections/StatsBar.tsx`, `components/sections/FAQ.tsx`, `components/sections/CasosDeExito.tsx`, `components/sections/Services.tsx`, `components/layout/Navbar.tsx`, `app/sobre-futura/page.tsx`, `app/contacto/page.tsx`
