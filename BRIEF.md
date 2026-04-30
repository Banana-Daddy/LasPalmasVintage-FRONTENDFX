# Las Palmas Vintage — FRONTEND-FX Direction

## Brand Synopsis

Las Palmas Vintage is a curated boutique of preloved designer womenswear sold via Shopify at [laspalmasvintage.myshopify.com](https://laspalmasvintage.myshopify.com), based in the heart of Palm Springs. The shop specializes in 1970s, 80s, and 90s designer pieces — Oscar de la Renta, Oleg Cassini, A.J. Bari for Neiman Marcus, Pin Up Girl, Laurence Kozar, Cache — sequins, evening jackets, beaded boleros, and pieces that have already proven they last.

**This Frontend-FX direction repositions the brand** as the *exact opposite* of the Pro-Max editorial approach: instead of restrained Vogue luxury, it leans into **maximalist 1970s Palm Springs scrapbook joy**. The site reads like a sun-drenched scrapbook page on a coffee table — wallpapered backgrounds, polaroid product cards with handwritten captions, sticker-pile feature cards, washi-taped paper edges, postage stamps, postmarks, and ticket-perforation footers. It's deliberately fun, opinionated, tactile, and unapologetically chaotic in the way a good vintage shop actually feels.

## Design Decisions

### Direction: Sun-Drenched Wallpaper

- **Concept**: 1970s Palm Springs maximalist scrapbook. Slim Aarons + Memphis Group + your aunt's powder room wallpaper. Tactile, layered, joyful, intentionally "too much" in the best way.
- **Mood**: Saturated Kodachrome lifestyle. Hard noon shadows. Hibiscus prints. Polaroids tilted on the table. "Postcards from Palm Springs."
- **Fonts**:
  - Display: **Fraunces** (variable, dialed up to SOFT 100 + opsz 144 + wght 700–800 italic — chunky retro curves with personality)
  - Body: **Newsreader** (refined newspaper-y serif — pairs well with Fraunces for editorial body copy)
  - Handwritten: **Caveat** (used for polaroid captions, scrapbook annotations, and "xoxo" sign-offs)
  - Google Fonts URL combines all three with full weight ranges
- **Colors**:
  - `--paper: #F5EBDD` (cream paper)
  - `--paper-2: #EDE0CD` (darker cream — section bg)
  - `--ink: #2A1810` (dark brown ink — text + frames)
  - `--ink-soft: #4A2F22` (softer ink for body)
  - `--coral: #E94F37` (vintage coral red — primary accent)
  - `--terracotta: #F4A261` (warm terracotta — supporting)
  - `--mustard: #FFD23F` (hot mustard yellow — second accent)
  - `--palm: #4A8B5E` (palm leaf green)
  - `--blue: #1E3A8A` (retro electric blue)
- **Layout style**: Magazine spread / scrapbook composition. Asymmetric polaroid stack hero. Wallpapered section dividers. Polaroid grid for products. Sticker pile for feature cards. Postcard with stamp + postmark for the closing CTA. Ticket-perforation band at the very bottom. Multiple "rotated card" elements layered with hard 4px ink-colored shadows — every element has weight and shadow.
- **Signature move**: **The wallpapered hibiscus quote section.** Mid-page, the layout breaks into a full-bleed 1970s wallpaper print (generated palm/hibiscus illustration tiled as background) with three vertically stacked rotated stickers — "Always" mustard, "One of" coral, "a Kind." palm green — each with hard black borders and 4px ink shadows. This is the moment the page goes maximalist on purpose.
- **Recommended interactions**:
  - Polaroids rotate to 0deg + scale up on hover
  - Sticker badges tilt to 0deg + lift on hover
  - All buttons translate `(-2px, -2px)` with growing ink shadow on hover (a paper-cutout press effect)
  - Sticker marquee pauses on hover
  - Scroll reveals stagger-fade content into view
- **Anti-patterns I deliberately avoided**:
  - No purple gradients on white (Pro-Max would do that, this is the antithesis)
  - No glass / glassmorphism (saved for Pro-Max)
  - No neon (saved for the original existing build)
  - No emojis as icons in primary positions (sparingly used in playful contexts only — feature card icons are typographic / SVG)
  - No clip-art look — all textures and patterns are either AI-generated or handcrafted CSS gradients
- **Logos used (Logo Search)**: Instagram (cached), Shopify (cached). Used inline SVG cart icon and Instagram icon. No third-party logos rendered as imagery.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Polaroid product cards + hero polaroid stack | 3D Card / PhotoCard | `polaroid scrapbook collage hero` / `polaroid tilted card grid` | [21st-sources/polaroid-photocard.tsx](21st-sources/polaroid-photocard.tsx) | Polaroid frame geometry (white card + image inside + caption strip), rotation pattern (-8deg/+5deg/-3deg), hover-to-zero rotation + scale, handwritten font for captions (Zeyada-style — we used Caveat for similar effect) |
| Feature card sticker pile | Marketing Badges | `sticker badge marquee patches` | [21st-sources/marketing-badges-cluster.tsx](21st-sources/marketing-badges-cluster.tsx) | Rotated overlapping sticker geometry, gradient-to-b fills with inner highlight, hover rotates-to-zero + lift, per-element rotation values for organic chaos |
| Wallpaper section background pattern | Background Components / Woven Fabric | `wallpaper pattern background repeating` | [21st-sources/woven-fabric-pattern.tsx](21st-sources/woven-fabric-pattern.tsx) | Layered repeating-linear-gradient stack approach for textile/woven backgrounds (the technique inspired the multi-layer paper-grain CSS on `body`; the actual wallpaper section uses generated `wallpaper-palm.jpg` for richer detail) |
| Sticker marquee | (combined) Marquee + Marketing Badges | `sticker badge marquee patches` | (not cached separately) | Marquee with rotated pill badges, per-pill colored rotations, fade-to-edge gradient mask |

## Content Inventory

- **Images (CDN hotlinked from Shopify)**: 6 product images for the New Arrivals section, all live from `laspalmasvintage.myshopify.com/cdn/shop/files/`.
- **Generated images (local)**:
  - `images/hero-1.jpg` — woman in 1970s pink polka-dot maxi + straw hat + sunglasses, laughing in front of pink stucco wall, palm tree shadow. 1:1, 2K, Grok Standard.
  - `images/hero-2.jpg` — overhead flat-lay on aqua terrazzo: tan leather doctor's-bag handbag, 70s tortoise sunglasses, mustard/green silk scarf, brass mirror, bougainvillea petals, palm-frond shadow. 1:1, 2K, Grok Standard.
  - `images/hero-3.jpg` — woman's lower legs in mustard espadrille wedges with ribbon ties + cherry-red strap sandals on terracotta saltillo tile, palm shadow. 1:1, 2K, Grok Standard.
  - `images/wallpaper-palm.jpg` — flat illustrated 1970s Palm Springs motel wallpaper (hibiscus + fan-palm motif in terracotta/mustard/palm-green/cream). 1:1, 2K, Grok Standard.
- **Real key copy carried**: designer names, exact product names + prices, "always one of a kind", Palm Springs / California.
- **New scrapbook copy I wrote** (flagged in ACCURACY.md):
  - Overline: "postcards from palm springs"
  - About title: "It started in a thrift bin on Sunrise Way."
  - Polaroid captions for products: "a.j. bari, peplum & perfect", "oscar's bolero, finally", "lavender lace, real lace", "laurence kozar, sequins for days", "pin up girl, 'amanda'", "oleg cassini, lunch hour"
  - Quote stickers: "Always — One of — a Kind." + "that's the whole pitch"
  - Postcard: "Hi from Palm Springs," + "Some pieces are worth waiting forty years for. This one's been waiting for you."
  - Postcard signoff: "xoxo, the shop" / "— Las Palmas, '26"
  - Feature card titles + descriptions
- **Links preserved**: Shopify shop URL, Shopify cart URL, Instagram (`laspalmasvintage`), individual Shopify product URLs.

## Share Preview

- **OG image source**: cropped from generated `hero-1.jpg` (woman in pink polka-dot dress with straw hat, palm tree, pink stucco wall) → 1200×630 JPEG @ 85 quality. ~292 KB.
- **OG title**: `Las Palmas Vintage — Postcards from Palm Springs`
- **OG description**: `A sun-drenched scrapbook of preloved designer womenswear. Sequins, silks, and the last good evening jacket of an entire decade.`
- **Favicon source**: square crop of `hero-1.jpg` (face/hat area) at 512×512 PNG and 64×64 PNG.
- **Theme color**: `#F5EBDD` (paper-cream).
- **Sub-pages with their own OG**: none (single-page mockup).

## Image Generation Prompts

### Image 1 — Hero Polaroid 1 (woman + pink polka dots)
- **Slot**: Top polaroid in the hero stack
- **Aspect ratio**: 1:1 (Grok)
- **Prompt**: "Sun-drenched candid film photograph of a young woman in a 1970s pink polka-dot maxi dress and oversized vintage sunglasses, mid-laugh as she pulls a wide-brimmed straw sunhat onto her head, standing in front of a rough pink stucco wall with a single tall fan palm casting a hard diagonal shadow across her shoulder. Saturated 1970s Kodachrome film stock aesthetic, warm terracotta and dusty sage palette, harsh midday Palm Springs sun, hard-edged shadows, slight grainy film texture, square 1:1 framing like a vintage Polaroid family photo, no text, no signage."
- **Why**: Anchors the scrapbook with a candid lifestyle shot — sells the brand vibe (vintage worn JOYFULLY in Palm Springs sun) on first scroll. Doubles as the OG share preview (the most brand-recognizable image generated).
- **Verified facts**: pink stucco, fan palms, harsh Palm Springs midday sun.
- **Status**: Generated ✓ (Grok Standard 2K, $0.02, 1/2 attempts)

### Image 2 — Hero Polaroid 2 / Flat Lay
- **Slot**: Middle polaroid in the hero stack + reused as the about-section margin polaroid
- **Aspect ratio**: 1:1 (Grok)
- **Prompt**: "Overhead flat-lay photograph of a curated still life on a sun-drenched aqua-blue mid-century terrazzo tile surface: a vintage tan leather doctor's-bag handbag, a pair of oversized 1970s tortoise sunglasses, a coiled silk scarf in mustard and palm green, a spritz of dried bougainvillea petals, and a rolled brass-edged hand mirror. Hard diagonal shadow of a single tall fan-palm frond cuts across the entire arrangement. Sun-bleached saturated Kodachrome film stock aesthetic, harsh midday Palm Springs light, square 1:1 composition, no text, no logos, no labels visible."
- **Why**: Editorial flat-lay sells the curation aspect — "look at the haul" — without showing specific real items. The aqua terrazzo + coral + mustard palette ties directly to the build's color system.
- **Status**: Generated ✓ (Grok Standard 2K, $0.02, 1/2 attempts)

### Image 3 — Hero Polaroid 3 (vintage shoes)
- **Slot**: Bottom-front polaroid in the hero stack ("two pairs · always" caption)
- **Aspect ratio**: 1:1 (Grok)
- **Prompt**: "Sun-bleached candid film photograph of a woman's lower legs and feet wearing wedge espadrille sandals with mustard-yellow ribbon ties, standing on warm terracotta saltillo floor tiles. A second pair of low-heeled vintage strap sandals in scuffed cherry-red leather sits casually next to her feet, half in dappled palm shadow. Hard noon Palm Springs light raking across the tile surface, harsh-edged shadow patterns from a palm frond above, saturated 1970s Kodachrome film aesthetic with subtle grain, square 1:1 framing, no text, no logos, no faces."
- **Why**: Adds a third "shopper detail" angle to the polaroid stack — sells the joy of vintage accessory shopping without showing a face. Mustard espadrilles + cherry-red sandals + terracotta floor reinforces the palette.
- **Status**: Generated ✓ (Grok Standard 2K, $0.02, 1/2 attempts)

### Image 4 — Wallpaper Pattern
- **Slot**: Right-side hero accent + full-bleed background of the wallpapered quote section
- **Aspect ratio**: 1:1 (Grok)
- **Prompt**: "Flat illustrated vintage 1970s wallpaper pattern in the style of a Palm Springs motel powder room: rhythmic repeating motif of stylized fan-palm fronds, hibiscus flowers, and curving leaves, drawn in confident screen-printed line work with subtle off-register color, painted in warm terracotta-orange, dusty palm green, butter mustard yellow, and ivory cream on a soft cream-paper background, slight ink bleed at the edges, evenly distributed all-over repeating composition like a true wallpaper, square 1:1 print sample, mid-century maximalist decor catalog aesthetic, slightly aged paper feel, no text, no signage, no people, no logos."
- **Why**: This pattern IS the entire signature move — without a real wallpaper image, the wallpapered-quote section would just be flat color, killing the maximalist scrapbook concept. This drives the most distinctive moment of the build.
- **Status**: Generated ✓ (Grok Standard 2K, $0.02, 1/2 attempts)

## Suggested Next Mockups

1. **"The Scrapbook" archive page** — `/archive` — every piece ever sold, presented as a polaroid wall with handwritten captions and "sold" stamps. Sells the historical curation depth.
2. **Designer postcards** — `/designers` — one postcard-styled page per designer (Oscar, Oleg, A.J. Bari, etc.) with their bio, signature pieces, and a "mailed from Palm Springs" stamp. Editorial without the editorial formality.
3. **The Look Book by Era** — `/eras` — pages for "70s," "80s," "90s," each as a full-bleed wallpapered scrapbook spread with rotating polaroids and contextual era notes.
4. **Cocktail-hour curation** — a seasonal landing for "Desert Cocktail Hour" with curated outfit polaroids and drink-pairing illustrations. Pure brand fun.
5. **Mobile-first booking flow for in-person try-ons** — turn the postcard closing into a "stop by, we're in town" booking interaction with the same scrapbook frame.

## Build Timing

| Phase | Duration |
|---|---|
| Step 1: READ existing build | (shared with PRO-MAX, 1m) |
| Step 2: DIRECTION (Frontend-Design skill query + 4 Inspiration searches) | 3m |
| Step 3: BUILD (HTML + CSS + JS) | 8m |
| Image Generation (within BUILD, 4 images via Grok) | 26s |
| OG / favicon prep | 30s |
| Step 4: VERIFY + clipping fixes (era-stamp + price-tag overlap, hero meta-line) | 4m |
| Step 5: BRIEF | 5m |
| Step 6: PUBLISH (pending) | — |
| Step 7: DELIVER (pending) | — |

## Production Notes

For production, the right stack depends on Zack's preference — but **Astro is a strong fit for this design**: most of the page is static content (CSS-heavy scrapbook layout, generated imagery, no real-time state beyond the Shopify cart). Steps:

1. Astro project with the Shopify integration + Tailwind. Astro's island-architecture means the scrapbook layout stays static (cheap to render, fast to load) and only the cart drawer is hydrated.
2. Pull the cached `21st-sources/` components — `polaroid-photocard.tsx`, `marketing-badges-cluster.tsx`, `woven-fabric-pattern.tsx` — into Astro components. These give you the React-grade animation polish (Motion library polaroid hover, sticker rotate-to-zero) without rebuilding from scratch.
3. Re-apply the CSS variables (paper/coral/mustard/palm) to Tailwind config.
4. Wire product cards to Shopify Storefront API.
5. The wallpaper pattern asset (`wallpaper-palm.jpg`) lives in the static assets folder — repeated as section bg.
6. Vercel or Netlify hosting + image optimization.

If Zack prefers Next.js: same plan but with React Server Components instead of Astro islands. Slightly heavier client bundle but more flexibility for future interactive features (e.g., a polaroid-styled cart drawer, "save to scrapbook" wishlist).

Estimated production rebuild: 3–4 days for an experienced dev with the cached components in hand. The wallpaper, postcard, and ticket-band CSS are all worth preserving — they're more interesting than the React components themselves.
