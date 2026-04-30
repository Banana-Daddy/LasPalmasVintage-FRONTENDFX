# Accuracy Review — Las Palmas Vintage (FRONTEND-FX)

## Verified

These factual elements were carried forward from the existing `LasPalmasVintage/` build and re-checked against [laspalmasvintage.myshopify.com](https://laspalmasvintage.myshopify.com):

- **Brand name**: "Las Palmas Vintage" ✓
- **Location**: Palm Springs, California ✓
- **Shopify shop URL**: https://laspalmasvintage.myshopify.com ✓
- **Designer labels carried**: Oscar de la Renta, Oleg Cassini, A.J. Bari (for Neiman Marcus), Pin Up Girl, Cache, Laurence Kozar, Neiman Marcus ✓
- **Product names + prices** (all from real Shopify product pages):
  - A.J. Bari for Neiman Marcus 1980's Peplum Blazer — **$50** ✓
  - Oscar De La Renta Evening Jacket / Bolero — **$410** ✓
  - Lavender Lace Evening Dress — **$65** ✓
  - Laurence Kozar Sequined "Tassle" Bolero — **$96** ✓
  - Pin Up Girl "Amanda" Dress (Plus Size) — **$86** ✓
  - Oleg Cassini Short Sleeve Blazer — **$35** ✓
- **Product image URLs**: hotlinked from `laspalmasvintage.myshopify.com/cdn/shop/files/...`
- **Product page URLs**: all 6 product polaroid cards link to real Shopify product pages ✓
- **Tagline / value prop**: "Always one of a kind" carried forward from source

## Flagged for Zack

These were written or assumed during this build and need Zack's confirmation:

- **"Est. 2018"** — repeated from the existing `LasPalmasVintage/index.html`. **Confirm or replace** with the real founding year.
- **Polaroid captions** (handwritten Caveat font) — pure brand-voice color writing for fun:
  - "summer, '74" (hero polaroid 1)
  - "two pairs · always" (hero polaroid 2)
  - "the haul ✦" (hero polaroid 3)
  - "a.j. bari, peplum & perfect"
  - "oscar's bolero, finally"
  - "lavender lace, real lace"
  - "laurence kozar, sequins for days"
  - "pin up girl, 'amanda'"
  - "oleg cassini, lunch hour"
  - "the haul, in a single afternoon" (about-section margin)
- **About-section title**: "It started in a thrift bin on Sunrise Way." — Sunrise Way is a real Palm Springs street, and the brand DOES carry an Oscar De La Renta bolero, so the framing is plausible — but it's fictional. **Confirm or replace** with Zack's preferred origin story.
- **Quote stickers**: "Always — One of — a Kind." with attribution "that's the whole pitch" — playful framing of the brand's actual "always one of a kind" tagline.
- **Postcard greeting**: "Hi from Palm Springs," + "Some pieces are worth waiting forty years for. This one's been waiting for you." — written in brand voice but new copy.
- **Postcard body**: "Stop in online. We're always open, always one-of-a-kind, and we just got a sequined Oscar De La Renta bolero that we cannot believe walked through the door." — the Oscar bolero IS in the brand's archive ($410 product), so this is technically referenceable real product, framed as voicy copy.
- **Postcard signoff**: "xoxo, the shop" + "— Las Palmas, '26"
- **Sticker stamp postmark text**: "✦ Palm Springs ✦" + "LP palm spgs est. '18"
- **Ticket-band tagline**: "always open online ✦ always one of a kind"
- **Feature card titles + descriptions**: all five sticker cards (One of a kind / Slow fashion / Curated in Palm Springs / Ships everywhere / Designer labels) — written in brand voice.
- **Instagram URL**: linked to `https://www.instagram.com/laspalmasvintage` — **the handle was assumed, not verified.** Zack needs to confirm or supply the real handle.
- **Cart count "Bag · 0"** — placeholder for static mockup; needs to be wired to Shopify cart state in production.

## Fixed During Review

Two layout issues were caught and corrected during the verify pass:

1. **Hero meta-line clipping** — the line "Est. 2018 · Always one of a kind" was being partially obscured by the rotated wallpaper card on the right side of the hero. **Fix**: shortened to "Est. 2018" so the line fits cleanly to the left of the wallpaper card.
2. **Era-stamp / price-tag overlap on product polaroids** — the era stamp ("VINTAGE", "PLUS SIZE", etc.) at top-left and the price tag at top-right were overlapping each other on narrow mobile polaroids, causing visual clipping where one element drew over the other. **Fix**: (a) restructured HTML so era-stamp and price-tag are siblings of `.img-wrap` (no longer clipped by `overflow: hidden`); (b) moved the price-tag from top-right to bottom-right so it no longer competes for space with the era-stamp.

Both fixes were validated against the live preview at 375px mobile width.

No factual errors were found in the build — all product names, prices, links, and designer attributions match the source Shopify storefront.
