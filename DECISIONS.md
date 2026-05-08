# Design decisions

A handful of decisions that shaped this build, written down so the next engineer (or a curious CTO running diligence on us) can read the rationale and either keep them or change them on purpose.

## 1. No JavaScript framework on the homepage

**Decision.** The homepage and every static route ship with no UI framework runtime. The only client-side JavaScript on `/` is the theme toggle (~280 B minified) and the View Transitions client (~3 KB, only fetched on first in-site navigation). React, Vue, Svelte, Solid — none of them are present.

**Why.** The homepage is a credibility surface for a Series A founder or a CTO looking us up before a discovery call. Their device is a corporate laptop on a hotel Wi-Fi at 9 a.m. Tuesday. Every kilobyte of framework runtime would have to earn its place against an LCP budget of 1.0 s on throttled 4G. Nothing on this page genuinely needs reactivity. A static `<button>` and a five-line `<script>` will outperform any island-driven equivalent and remove an entire class of hydration bugs.

**Tradeoff.** If we ever need a richer interactive surface (a real-time pricing calculator, a multi-step intake wizard), we will add one Astro island for that page, scoped tightly. We will not retrofit a framework into the rest of the site to keep things "consistent."

**What would change our mind.** A measured conversion lift from interactivity that the current static surface cannot provide. We have not seen one. Until we do, the budget is the constraint.

## 2. Self-hosted fonts via fontsource, not Google Fonts

**Decision.** Inter Variable and JetBrains Mono Variable are bundled at build time from `@fontsource-variable/*`, served from the same origin as the rest of the site, and declared in CSS with explicit `size-adjust`, `ascent-override`, `descent-override` and `line-gap-override` matched to the system fallback.

**Why.**

1. **CSP stays narrow.** `font-src 'self'` is the whole story. No Google origins in the policy, no preconnect, no DNS round-trip in the critical path. The CSP audit a diligence team would run on us comes back clean in one screenshot.
2. **CLS = 0, measured.** Variable fonts plus tuned `size-adjust` descriptors mean the swap from system fallback to webfont does not move a single line of text. Google Fonts ships its own font-display behaviour and offers no equivalent control.
3. **Privacy.** A request to `fonts.googleapis.com` is a request to Google with the visitor's IP and `Referer`. A consultancy that recommends private endpoints to its clients should not phone home from its own marketing site.
4. **Cache and version control.** The fonts are pinned in `package-lock.json`. We know exactly what shipped on every deploy. No upstream surprise can mutate the typography of a live site.

**Tradeoff.** Larger initial deploy size (~50 KB compressed for the two variable subsets) and the maintenance cost of bumping fontsource minor versions when Inter or JetBrains Mono updates. Both are tiny. The CLS and CSP wins are not.

**What would change our mind.** Nothing realistic. The defaults of self-hosted via fontsource are strictly better for our use case than Google Fonts.

## 3. No analytics in v1

**Decision.** No Google Analytics, no Plausible, no Fathom, no Cloudflare Web Analytics, no first-party event collection. The only signals we read are the inbound emails and the discovery calls booked. The colophon page documents this publicly.

**Why.** At v1 the question we have to answer is "is the positioning landing." We answer that by reading the inbound. We do not need a heatmap to tell us that. Adding any analytics tool means a CSP carve-out (`script-src` widening, often `connect-src` and `img-src` too), JavaScript on every page, a cookie banner if we are honest about it, a privacy policy update, and a recurring vendor decision. The compounded cost is not worth what a low-traffic site would learn from the data in the first six months.

There is a second-order benefit. A consultancy that hardens its clients' tenants and then ships a marketing site with five third-party trackers on it has a credibility problem. The colophon turns the absence of analytics into a signal — a small one, but the kind of CTO we want to attract is exactly the kind to read it and notice.

**Tradeoff.** We do not know which writing posts get read most, which pages have the highest exit rate, or where time-on-page concentrates. We accept that. When traffic justifies measurement we will revisit, and when we do it will be first-party (`/api/event`), explicitly named here, and on a route that does not ship JavaScript to readers who have not opted in.

**What would change our mind.** Sustained inbound traffic where post-level engagement would meaningfully change what we publish next, or a paid acquisition channel that needs attribution.

## 4. Strict Content Security Policy with no inline script

**Decision.** `script-src 'self'`, no `'unsafe-inline'`, no per-script nonces, no SHA-256 hashes. The no-FOUC theme bootstrap that has to run before paint is served as `/theme-bootstrap.js`, an external file fetched synchronously from the same origin. Same approach for the JSON-LD blob — it sits in a static script tag with `is:inline` and renders inside the same-origin HTML.

**Why.** The most common shape of a strict CSP regression is a developer adding `'unsafe-inline'` to ship a one-off analytics snippet, then forgetting to remove it. We removed the temptation by removing the need: there is no inline script anywhere on the site. The bootstrap costs an extra HTTP request (cached for a year, ~250 B compressed), which is a fair price for a CSP that is impossible to weaken accidentally.

**Tradeoff.** A nonce-based CSP would let us inline the bootstrap and save the request. It would also couple the CSP to per-build nonce generation, which is awkward on a static site served by a CDN. The 250 B of network is the smaller cost.

**What would change our mind.** Migration to an SSR runtime where nonce generation is trivial. Even then, the current setup is fine.
