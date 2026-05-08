# Blue Slab Velocity — Business Context File
> Load this file into your Claude Project as a persistent knowledge source.
> Last updated: 07 May 2026

---

## 1. Business Identity

**Company name:** Blue Slab Velocity (BSV)
**Trading status:** Solo consultancy — single principal, no employees
**Founder persona:** NSV (SC) Cleared Certified Senior Azure architect with enterprise background in Azure platform architecture, DevSecops, Platform engineering, IaC (Terraform/Bicep), containerisation, operating as a fractional CTO and Azure cloud strategy partner for early-stage startups
**Tagline (working):** *Small scale Enterprise-grade Azure. Founder-friendly terms.*
**Location:** United Kingdom (primary market: UK + Western Europe), open to international markets (Africa)
**Website:** [TBD — in development]
**Brand tone:** Confident, direct, jargon-lite. Sounds like a veteran azure platform engineer who also understands a P&L — not a sales deck.

---

## 2. The Problem We Solve

For many seed-stage and Series A startups who receive Azure Founders credits through the Microsoft Founder's hub, they burn through those credits too fast because they haven't implement the mechanisms (likle VM rightsizing, deleting unused resources if brownfield, using Azure reserved isntance where appropriate, etc) to help preserve credits and manage costs/financlai runway. Also,hiring a full-time CTO or senior specialists costs £150,000–£250,000 annually plus equity. That is unsustainable before product-market fit.Large managed service providers (MSPs) lock founders into long-term contracts with slow procurement cycles and account managers who don't write code.

**BSV sits in the gap:**
- Too technical for a generalist agency
- Too agile and affordable for a Big Four consultancy
- Too independent and senior for a junior freelancer

BSV delivers fractional CTO-level Azure strategy and hands-on architecture and deployments on a **packaged, time-boxed, outcome-focused** basis — little retainer lock-in, no account managers, no fluff. Deployments are based on Microsoft's verified architecture, ensuring startups are enterprise ready from Day 1, making future due diligence for Series A/B funding seamless. We use thousands of hours of community and Microsoft R&D and our value add is the customisation, orchestration and policy layer we wrap around the modules

---

## 3. Target Client Profile

### Primary ICP (Ideal Customer Profile)

| Attribute | Detail |
|---|---|
| **Funding stage** | Seed (£500K–£3M raised) to Series A (£3M–£15M raised), pre-revenue startups |
| **Headcount** | 1–30 people |
| **Tech maturity** | Has a dev team (1–5 engineers) but no dedicated cloud architect or CTO |
| **Cloud posture** | On Azure or evaluating Azure; may have inherited a messy setup from a previous agency |
| **Pain points** | Preserving founders azure credits, Spiralling Azure bills, security audit failures, lack of a defensible architecture, needing to impress a technical due diligence team before a funding round, production-grade agentic AI infrastructure, enterprise-grade infrastructure and governance, infrastructure scalabiloity |
| **Sector** | Startups, B2B SaaS, FinTech, HealthTech, LegalTech, PropTech, EdTech — regulated or semi-regulated industries preferred but not essential |
| **Decision maker** | Founder/CEO, CTO (if exists), VP Engineering |
| **Geography** | UK-first, secondarily EU, Africa and US-based companies with UK entities |

### Secondary ICP

- **Pre-revenue startups** preparing for their first cloud deployment post-MVP
- **Founders raising Series A** who need a "clean" Azure environment to pass technical due diligence
- **CTOs at seed stage** who need a specialist Azure pair to accelerate a specific workload (AI/ML pipelines, event-driven architecture, compliance-ready infrastructure)

---

## 4. Service Packages

BSV sells fixed-scope, outcome-defined packages — NOT hourly billing or open-ended retainers.

### Package 1 —  The Azure Startup Launchpad (£4,500 fixed)
*For greenfield pre-revenue or early seed startups getting onto Azure properly.*
- Hero Product
- Small-scale Azure platform Landing zone 
- Azure tenant setup and governance baseline (management groups, subscriptions, naming conventions)
- Identity and access foundation (Entra ID, RBAC, Conditional Access)
- Core networking (hub-spoke or single-VNet depending on scale)
- IaC (Terraform/Bicep) and GitHub Actions pipeline scaffold
- Cost management dashboards and budget alerts
- Handover documentation + 2-week async Q&A window
- **Delivery: 10 business days**

---

### Package 2 — AI-Ready Platform (£9,500 fixed)
*For startups building AI/Agentic AI features who need a proper Azure data foundation.*
- Azure OpenAI or Microsoft Foundry integration scaffold
- Azure AI Search setup for RAG workloads (if applicable)
- Security baseline for data platform (private endpoints, managed identities)
- Documentation and runbook
- **Delivery: 20 business days**

---

### Package 3 — The Architecture Review & Roadmap (£3,200 fixed)
*For startups with an existing Azure environment that needs a hard look.*
- Full Azure Well-Architected Framework assessment (Reliability, Security, Cost Optimisation, Operational Excellence, Performance Optimisation)
- Azure Advisor + Defender for Cloud findings triage
- Written findings report with severity ratings
- Prioritised 90-day remediation roadmap
- 90-minute debrief call with founder/CTO
- **Delivery: 7 business days**

---

### Package 4 — Fractional CTO Retainer (£3,500/month, 3-month minimum)
*For founders who want ongoing strategic cloud cover without hiring full-time.*
- Up to 2 days/month hands-on technical work (architecture, code review, deployment)
- Async Slack/Teams availability (response within 4 business hours)
- Monthly 1:1 strategy call with founder
- Attendance at 1 board/investor meeting per quarter (remote)
- First right of refusal on any follow-on project work
- **Rolling monthly after 3-month minimum, 30-day notice to exit**

---

### Package 5 — Security & Compliance Sprint (£6,800 fixed)
*For startups approaching ISO 27001, SOC 2, or a regulated customer security review.*
- Defender for Cloud hardening (CSPM posture to Secure Score 80+)
- Network security group audit and remediation
- Key Vault secrets management implementation
- Microsoft Sentinel basic SIEM setup (or Defender XDR where appropriate)
- Entra ID MFA enforcement and Privileged Identity Management (PIM) basics
- Evidence pack for auditors (policy assignments, log exports, access reviews)
- **Delivery: 15 business days**

---

### Package 6 — The Cost Management Rescue (£2,800 fixed)
*For startups with a runaway Azure bill or preparing for board scrutiny of cloud spend.*
- Optimise and preserve Azure founders credits consumption, managing financial runway.
- Full cost analysis across all subscriptions (Cost Management + Billing)
- Identification and elimination of idle/orphaned resources
- Right-sizing recommendations for compute and storage
- Reserved Instance or Savings Plan analysis and purchase advisory
- Tagging strategy implementation for cost attribution
- Monthly spend forecast vs actuals dashboard (Power BI or Azure Workbooks)
- **Delivery: 8 business days**

---

## 5. Pricing Philosophy

- All packages are **fixed price** — no surprise invoices
- Pricing is designed to be under the cost of **one month of a full-time CTO salary**
- Payment terms: 50% upfront, 50% on delivery (packages); monthly in advance (retainer)
- No equity taken — BSV is not an investor, it is a service provider
- Discounts available for pre-revenue startups (20% on first package only)
- BSV does not compete on price — if a prospect wants cheaper, they are not the right client

---

## 6. Go-To-Market Strategy

### Phase 1 — Foundation (Months 1–3)
- Build website (Astro and Tailwind (core framework adn styling) on Azure Static Web Apps — dogfooding)
- Establish LinkedIn presence and begin thought leadership content
- Outreach to founder communities: Founder Forum UK, Technation, local VC networks
- Target: first 2 paying clients via network referral

### Phase 2 — Pipeline Building (Months 4–6)
- Partner with seed-stage VCs and angel networks as a recommended technical resource
- Guest posts on startup-focused publications (Sifted, TechCrunch EU)
- Speak at 1–2 startup/cloud events (Azure Community days, SaaStr Europe)
- Target: 4–6 active engagements, first Fractional CTO retainer signed

### Phase 3 — Productisation & Scale (Months 7–12)
- Launch self-serve diagnostic tool (Azure health check questionnaire → automated report)
- Build a referral programme with delivery partners (Azure-aligned design agencies, law firms serving startups)
- Target: £15,000–£20,000 MRR equivalent from mix of packages + retainers

---

## 7. Competitive Landscape

| Competitor Type | Example | BSV Advantage |
|---|---|---|
| Big 4 / GSIs | Accenture, Capgemini | Speed, cost, founder empathy, no bureaucracy |
| Large MSPs | Avanade, Softchoice | Direct access to the architect, not account managers |
| Freelance marketplaces | Upwork, Toptal | Packaged outcomes, not hourly; senior-only; accountability |
| In-house hire | Full-time CTO | Fraction of the cost, no equity, no HR overhead |
| Generalist agencies | Web dev shops | Deep Azure specialism, not a side service |

---

## 8. Key Partnerships & Ecosystem

- **Microsoft for Startups Founders Hub** — pursue enrolment to offer credits to clients
- **Azure Partner Network** — working toward Solutions Partner designation (Digital & App Innovation)
- **GitHub for Startups** — bundle-friendly for clients
- **Target referral partners:** startup law firms (Stephenson Harwood, Mishcon startup desk), seed-stage VCs (Seedcamp, LocalGlobe), startup-focused accountants (Osome, Mazars startup division)

---

## 9. BSV Founder Background (Persona Reference)

Use this to write bios, LinkedIn content, proposals, and case studies in the first person.

- 10+ years in Azure platforms
- Previously: senior roles at enterprise clients in FinTech, HealthTech and Public sector.
- Microsoft certifications: AZ-104, AZ-305, AZ-400, CKA, Terraform Associate, FinOps certified practitioner
- Deep expertise in: Azure landing zones, Entra ID, Microsoft Foundry, event-driven architecture (Event Grid, Service Bus), Azure Kubernetes Service, Azure DevOps, GitHub Enterprise, IaC (Terraform/Bicep), Automation, Networking, Data Platforms, AI & Innovation, Agentic AI.
- Based in the UK; available to travel to client sites within the UK
- Speaks fluent "founder" — understands runway, burn rate, and the emotional reality of building a company

---

## 10. Financial Model (Internal Reference)

| Metric | Target (Month 6) | Target (Month 12) |
|---|---|---|
| Active retainer clients | 1 | 2–3 |
| Active package engagements/month | 2 | 4 |
| Blended monthly revenue | £9,000–£12,000 | £20,000–£25,000 |
| COGS (tools, subcontractors) | <15% | <15% |
| Gross margin target | >85% | >85% |
| Utilisation target | 70% (billable) | 70% (billable) |

**Key levers:**
- Retainers provide baseline MRR stability
- Package work provides lumpy but predictable project revenue
- No employees = no payroll risk; subcontract specialist work only if needed

---

## 11. Brand & Visual Identity (Guidelines)

- **Primary colour:** Azure blue (#0078D4 — Microsoft Azure brand blue) with a distinctive secondary
- **Secondary accent:** Deep slate / near-black for gravitas
- **Typography:** Clean sans-serif (Inter or similar) — engineering precision, not playful
- **Logo concept:** "Blue Slab" evokes solidity, foundation, reliability — the slab is what you build on. velocity signals speed and momentum
- **"Velocity"** in the name signals speed and momentum — this is not a slow, cautious consultancy
- **Avoid:** Generic cloud iconography (cloud + arrow up), clichéd "rocket" startup imagery, overly corporate stock photography

---

## 12. Legal & Operational Setup

- **Legal structure:** UK Limited Company (to be incorporated — Companies House)
- **Registered for VAT:** Yes, once threshold is reached or voluntarily at launch
- **Contracts:** All client work governed by BSV's own MSA (Master Services Agreement) + SOW per package
- **Insurance:** Professional indemnity (minimum £1M coverage), Cyber insurance
- **Accounting:** Xero; UK-based accountant familiar with IT contracting
- **Data protection:** Registered with ICO as a data controller; DPA clause in all client contracts
- **Domain:** www.blueslabvelocity.com and www.blueslabvelocity.co.uk registered on https://my.ionos.co.uk/