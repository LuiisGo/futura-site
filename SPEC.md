# SPEC.md — FUTURA Site: Content Expansion + Blog Completion

**Date:** 2026-04-05
**Repo:** LuiisGo/futura-site
**Deploy:** Netlify (auto-deploy from `main`)
**URL:** https://futuratt.com
**Previous:** Security (Blocks 1-7) + SEO (Phases 1-4) completed in commit `0cf65fb`

---

## Overview

This spec covers three workstreams:

1. **Blog completion** — Fill 5 stub articles + add 4 new articles (3 Wallet + 1 Apps a medida) = 9 new full articles
2. **Case studies expansion** — Add SUPESA, Calculadora LSA, and lsa-control (milk) as cases
3. **Homepage + /casos updates** — Top 3-4 cases on homepage with "Ver todos" → /casos page shows all

---

## Interview Decisions

| Topic | Decision |
|-------|----------|
| SUPESA | Landing + formularios. URL: supesaguatemala.com. 4 deals cerrados. Combustibles B2B |
| LSA Projects | 3 separate projects: (1) lsa-control = entry/exit for leche AND combustible, (2) Calculadora LSA = PWA offline multi-calc, (3) ERP-lite quesos = already documented |
| lsa-control | Same codebase used for Agrícola San Antonio (fuel) AND Lechería San Antonio (milk entry/exit). PWA offline-first |
| Calculadora LSA | PWA offline, used in plant. Multiple calculations: dosis, tiempos, temperaturas, costos |
| Inventario quesos | Is the same ERP-lite already documented. No new case needed |
| Testimonials | Based on results data — no real quotes. Create representative phrases without false attribution |
| Blog total | 9 new articles: 5 stubs→full + 3 Wallet + 1 Apps a medida. Grand total: 19 articles |
| Wallet blog | 3 articles: (1) educativo lealtad digital, (2) product story FUTURA Wallet, (3) resultados de un programa de lealtad |
| Apps a medida blog | Generic with mentions of lsa-control and calculadora as examples |
| Homepage CasosDeExito | Top 3-4 cases + "Ver todos" link to /casos |
| /casos page | Show ALL projects including new ones |
| Repos | `/Users/luismarroquin/lsa-control` and `/Users/luismarroquin/Calculadora LSA` |

---

## PART 1: BLOG — Complete 5 Stubs

Fill each stub article with 1,500+ words of real, useful content (HTML strings in `lib/blog-data.ts`).

### Stub 1: `que-es-n8n-automatizacion-pyme-guatemala`
**Title:** "¿Qué es n8n y cómo puede automatizar tu PYME en Guatemala?"
**Focus:** What n8n is, how it compares to Zapier/Make, why it's ideal for SMEs (self-hosted, no per-task pricing). Real use cases: WhatsApp notifications, inventory alerts, invoice follow-up. Reference FUTURA's implementation approach.

### Stub 2: `whatsapp-business-automatizacion-pymes-guatemala`
**Title:** "WhatsApp Business + automatización: la combinación que tu PYME necesita"
**Focus:** WhatsApp Business API vs regular. Automation possibilities: auto-replies, order confirmations, payment reminders, chatbots with AI. How FUTURA integrates WhatsApp into digital workflows with n8n.

### Stub 3: `digitalizar-proceso-ventas-distribuidora-guatemala`
**Title:** "Cómo digitalizar el proceso de ventas en una distribuidora guatemalteca"
**Focus:** Common pain points in distribution (paper orders, no visibility, route management). Step-by-step digitalization: from paper to Forms, then automation. Reference FUTURA's methodology.

### Stub 4: `automatizacion-inventarios-retail-guatemala`
**Title:** "Automatización de inventarios para retail en Guatemala: por dónde empezar"
**Focus:** Retail-specific inventory challenges (multi-location, shrinkage, reorder points). How to start: stock counts → digital forms → automated alerts → dashboards. Reference FUTURA Wallet for customer loyalty integration.

### Stub 5: `automatizar-cotizaciones-b2b-empresa-guatemala`
**Title:** "Automatizar cotizaciones B2B: menos errores, más velocidad en tu empresa"
**Focus:** B2B quotation pain (manual Excel, copy-paste errors, no follow-up). Solutions: template systems, auto-calculation, CRM integration, auto-follow-up via n8n.

---

## PART 2: BLOG — 4 New Articles

### New 1: `programa-lealtad-digital-pymes-guatemala` (Wallet — educativo)
**Title:** "Cómo implementar un programa de lealtad digital en tu PYME en Guatemala"
**Tags:** ["lealtad", "FUTURA Wallet", "QR", "WhatsApp", "Guatemala"]
**Focus:** What digital loyalty is, how it works for SMEs (not just big chains). QR/NFC identification, points systems, WhatsApp campaigns. Why it beats paper stamp cards. Reference FUTURA Wallet as solution. ~1,500 words.

### New 2: `por-que-creamos-futura-wallet` (Wallet — product story)
**Title:** "Por qué creamos FUTURA Wallet: la historia detrás del producto"
**Tags:** ["FUTURA Wallet", "producto", "lealtad", "innovación"]
**Focus:** The problem we saw (SMEs losing customers to big chains with loyalty programs). What makes Wallet different (WhatsApp-native, QR/NFC, AI segmentation, no app download needed). Vision: mini-CRM de recurrencia. ~1,500 words.

### New 3: `resultados-programa-lealtad-pymes` (Wallet — resultados)
**Title:** "¿Qué resultados puede dar un programa de lealtad a tu PYME? Datos y ejemplos"
**Tags:** ["lealtad", "resultados", "retención", "PYME", "Guatemala"]
**Focus:** Industry benchmarks and data on loyalty programs. Metrics: customer retention rates, repeat purchase frequency, average ticket increase. Framework for measuring ROI. CTA to FUTURA Wallet demo. ~1,500 words.

### New 4: `apps-web-medida-pymes-guatemala` (Apps a medida)
**Title:** "Apps web a medida para PYMEs: cuándo Google Sheets se queda corto"
**Tags:** ["apps a medida", "PWA", "offline", "Guatemala", "PYME"]
**Focus:** When Forms/Sheets aren't enough (offline needs, photo evidence, complex calculations, biometric auth). Examples: lsa-control (fuel/milk entry/exit), Calculadora LSA (preservation calculations). What makes a good PWA for field operations. ~1,500 words.

---

## PART 3: NEW CASE STUDIES

### Case: SUPESA Guatemala
- **Company:** SUPESA Guatemala
- **Sector:** Combustibles · B2B
- **Detail:** Guatemala
- **Tag:** Landing page + formularios
- **Problem:** Necesitaban presencia digital profesional con formularios integrados para captar leads B2B de forma consistente en el mercado de combustibles.
- **Solution:** Landing page B2B optimizada con formularios de captura conectados al proceso comercial. Diseño enfocado en credibilidad y conversión.
- **Results:** ["4 deals cerrados desde la landing page", "Canal de leads activo y medible"]
- **URL:** supesaguatemala.com

### Case: lsa-control (Entradas y Salidas de Leche)
- **Company:** Lechería San Antonio
- **Sector:** Agroindustria · Lácteos
- **Detail:** Control de entradas/salidas de leche cruda · Guatemala
- **Tag:** App a medida
- **Problem:** El registro de entradas y salidas de leche cruda se hacía en papel. No había trazabilidad, ni evidencia fotográfica, ni forma de detectar discrepancias entre lo recibido y lo registrado.
- **Solution:** PWA offline-first con autenticación biométrica para registro de entradas/salidas de leche por proveedor. Evidencia fotográfica, análisis de varianza en tiempo real y exportación a Excel. Funciona sin internet en áreas rurales.
- **Results:** ["Registro en menos de 30 segundos desde el celular", "Trazabilidad completa de cada entrega", "Funciona offline y sincroniza automáticamente", "Evidencia fotográfica de cada recepción"]
- **Tech details:** Read from /Users/luismarroquin/lsa-control

### Case: Calculadora LSA
- **Company:** Lechería San Antonio
- **Sector:** Agroindustria · Lácteos
- **Detail:** Cálculos de preservación de leche cruda · Guatemala
- **Tag:** App a medida
- **Problem:** Los cálculos de preservación de leche cruda (dosis de conservantes, tiempos, temperaturas, costos) se hacían manualmente con tablas en papel o Excel. Propenso a errores en planta.
- **Solution:** PWA offline-first para uso en planta. Calcula dosis, tiempos de almacenamiento, temperaturas y costos de preservación. Los operarios la usan desde el celular directamente en la planta de producción.
- **Results:** ["Cálculos instantáneos en planta desde el celular", "Eliminación de errores de cálculo manual", "Funciona offline en áreas sin cobertura", "Múltiples cálculos: dosis, tiempos, temperaturas y costos"]
- **Tech details:** Read from /Users/luismarroquin/Calculadora LSA

---

## PART 4: HOMEPAGE + /CASOS UPDATES

### CasosDeExito.tsx (homepage)
**Current:** 3 cases (Lechería ERP-lite, Agrícola San Antonio fuel, FUELDEPOT GT)
**Target:** Top 3-4 + "Ver todos los casos →" link to /casos

Keep top 3-4 most impressive:
1. Lechería San Antonio (ERP-lite) — strongest results
2. Agrícola San Antonio (fuel tracking) — app a medida showcase
3. Calculadora LSA — another app a medida showcase (or SUPESA for variety)

Add "Ver todos los casos →" CTA button at the bottom linking to /casos.

### /casos page (CasosContent.tsx)
**Current:** 2 cases (Lechería ERP-lite, FUELDEPOT)
**Target:** All cases:
1. Lechería San Antonio (ERP-lite — quesos/lácteos procesados)
2. Lechería San Antonio (lsa-control — entradas/salidas de leche)
3. Lechería San Antonio (Calculadora LSA — preservación)
4. Agrícola San Antonio (fuel tracking)
5. FUELDEPOT GT (landing page)
6. SUPESA Guatemala (landing + formularios)

### /casos/[caso] dynamic pages
Add 3 new case slugs:
- `supesa-guatemala`
- `lecheria-san-antonio-leche` (lsa-control for milk)
- `calculadora-lsa`

### Sector page updates
- Update agroindustria sector with calculadora and lsa-control milk references
- Update combustibles sector with SUPESA reference

### Testimonials approach
Create representative phrases based on real results. Do NOT attribute to specific named people. Use format:
- "Result-based statement" — Sector/type indicator

Example: "De 15 horas semanales a 30 minutos. Ahora cada empleado registra desde el celular." — Agroindustria · Lácteos

---

## PART 5: SITEMAP UPDATE

Add new pages to `app/sitemap.ts`:
- `/casos/supesa-guatemala`
- `/casos/lecheria-san-antonio-leche`
- `/casos/calculadora-lsa`
- All 4 new blog articles
- (Stubs already in sitemap with priority 0.4)

---

## Execution Order

1. Read repos (lsa-control, Calculadora LSA) for technical details
2. Complete 5 blog stubs in `lib/blog-data.ts`
3. Add 4 new blog articles to `lib/blog-data.ts`
4. Add 3 new cases to `/casos/[caso]/page.tsx` data
5. Update CasosContent.tsx (/casos page) with all 6 cases
6. Update CasosDeExito.tsx (homepage) — top 3-4 + "Ver todos"
7. Update sector data (agroindustria, combustibles) with new references
8. Update sitemap with new pages
9. `npm run build` — verify clean
10. Commit + push

---

## Files Summary

**MODIFY (6 files):**
- `lib/blog-data.ts` — complete 5 stubs + add 4 new articles
- `app/casos/[caso]/page.tsx` — add 3 new case studies
- `app/casos/CasosContent.tsx` — all 6 cases on /casos page
- `components/sections/CasosDeExito.tsx` — top 3-4 + "Ver todos"
- `lib/sectors-data.ts` — update agroindustria + combustibles sectors
- `app/sitemap.ts` — add new pages

**NO NEW FILES** — all changes are additions/modifications to existing structure.
