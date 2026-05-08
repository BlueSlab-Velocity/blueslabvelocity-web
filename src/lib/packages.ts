export type PaymentTerms = "50/50" | "monthly";

export interface Package {
  /** Stable SKU code shown on the site, e.g. BSV-PKG-01 */
  code: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceSuffix?: string;
  paymentTerms: PaymentTerms;
  delivery: string;
  /** One-line summary used on dense grids */
  summary: string;
  /** Two short paragraphs used on the package detail page */
  scope: string[];
  deliverables: string[];
  outOfScope: string[];
}

export const PACKAGES: readonly Package[] = [
  {
    code: "BSV-PKG-01",
    slug: "azure-startup-launchpad",
    name: "The Azure Startup Launchpad",
    tagline:
      "For greenfield pre-revenue or early seed startups getting onto Azure properly.",
    price: 4500,
    paymentTerms: "50/50",
    delivery: "10 business days",
    summary:
      "Production-ready landing zone, identity, networking and IaC pipeline for a startup starting clean on Azure.",
    scope: [
      "A small-scale Azure landing zone aligned to the Microsoft Cloud Adoption Framework. Management groups, subscriptions, naming conventions and tagging baked in from day one.",
      "Identity, networking and an Infrastructure-as-Code pipeline you can extend without rework. Hand-over is a working environment plus the documentation a future hire can read in an afternoon.",
    ],
    deliverables: [
      "Azure tenant setup and governance baseline (management groups, subscriptions, naming conventions)",
      "Identity and access foundation (Microsoft Entra ID, RBAC, Conditional Access)",
      "Core networking (hub-spoke or single-VNet, sized to current scale)",
      "Terraform or Bicep IaC and a GitHub Actions pipeline scaffold",
      "Cost management dashboards and budget alerts",
      "Hand-over documentation and a 2-week async Q&A window",
    ],
    outOfScope: [
      "Application code, CI for application repositories, or product-side architecture",
      "Production data migration from another cloud or on-premises",
      "24/7 support or on-call cover",
    ],
  },
  {
    code: "BSV-PKG-02",
    slug: "ai-ready-platform",
    name: "AI-Ready Platform",
    tagline:
      "For startups building AI or agentic features who need a proper Azure data foundation.",
    price: 9500,
    paymentTerms: "50/50",
    delivery: "20 business days",
    summary:
      "Microsoft Foundry or Azure OpenAI scaffold, RAG-ready search, and a data platform secured with private endpoints and managed identities.",
    scope: [
      "A grown-up data and model layer for product teams shipping AI features. The scaffold is opinionated, observable and built on services that are in general availability.",
      "Security is in the foundation, not bolted on. Private endpoints, managed identities and key rotation are configured before the first prompt is served.",
    ],
    deliverables: [
      "Microsoft Foundry or Azure OpenAI integration scaffold",
      "Azure AI Search setup for RAG workloads where applicable",
      "Security baseline for the data platform: private endpoints, managed identities, Key Vault",
      "Network and data egress controls aligned to the Well-Architected Framework",
      "Documentation, runbook, and a model and prompt versioning convention",
    ],
    outOfScope: [
      "Custom model training or fine-tuning runs",
      "Front-end product UI for the AI feature",
      "Long-term content moderation or human-review workflows",
    ],
  },
  {
    code: "BSV-PKG-03",
    slug: "architecture-review-and-roadmap",
    name: "The Architecture Review and Roadmap",
    tagline:
      "For startups with an existing Azure environment that needs a hard look.",
    price: 3200,
    paymentTerms: "50/50",
    delivery: "7 business days",
    summary:
      "A full Well-Architected Framework assessment, a written findings report with severities, and a 90-day remediation plan.",
    scope: [
      "An honest read of what is in your tenant today against the five Well-Architected pillars. We sit with the Advisor and Defender for Cloud findings and separate noise from signal.",
      "You get a written report you can hand to your board or your next CTO hire, and a 90-minute debrief that turns it into a plan.",
    ],
    deliverables: [
      "Well-Architected Framework assessment across Reliability, Security, Cost Optimisation, Operational Excellence and Performance Efficiency",
      "Azure Advisor and Defender for Cloud findings triage",
      "Written findings report with severity ratings",
      "Prioritised 90-day remediation roadmap",
      "90-minute debrief call with founder or CTO",
    ],
    outOfScope: [
      "Implementation of the remediation items (separate engagement)",
      "Application-layer code review",
      "Penetration testing",
    ],
  },
  {
    code: "BSV-PKG-04",
    slug: "fractional-cto-retainer",
    name: "Fractional CTO Retainer",
    tagline:
      "For founders who want ongoing strategic cloud cover without hiring full-time.",
    price: 3500,
    priceSuffix: "/month",
    paymentTerms: "monthly",
    delivery: "Rolling monthly after a 3-month minimum",
    summary:
      "Up to two days a month of senior hands-on time, async availability inside business hours, and a monthly strategy session.",
    scope: [
      "A senior Azure architect on call for the decisions that matter: review of architecture choices, sanity checks on a vendor proposal, board prep, hiring a first cloud engineer.",
      "The retainer is rolling after the initial three months. Thirty days notice to exit. No long lock-in.",
    ],
    deliverables: [
      "Up to 2 days per month of hands-on technical work (architecture, code review, deployment)",
      "Async Slack or Teams availability with a 4 business-hour response window",
      "Monthly 1:1 strategy call with the founder",
      "Attendance at one board or investor meeting per quarter (remote)",
      "First right of refusal on follow-on project work",
    ],
    outOfScope: [
      "Acting as the named senior engineer on a regulator submission",
      "On-call or out-of-hours operational cover",
      "Day-to-day people management of an internal engineering team",
    ],
  },
  {
    code: "BSV-PKG-05",
    slug: "security-and-compliance-sprint",
    name: "Security and Compliance Sprint",
    tagline:
      "For startups approaching ISO 27001, SOC 2, or a regulated customer security review.",
    price: 6800,
    paymentTerms: "50/50",
    delivery: "15 business days",
    summary:
      "Defender for Cloud hardening to a Secure Score of 80+, Sentinel or Defender XDR, MFA and PIM, and an evidence pack for auditors.",
    scope: [
      "A focused two-week push to get a tenant from default to defensible. The work is scoped against a real auditor's checklist, not a theoretical one.",
      "You finish with controls in place, evidence captured and a Secure Score that holds up to scrutiny.",
    ],
    deliverables: [
      "Defender for Cloud hardening to a Secure Score of 80 or above",
      "Network security group audit and remediation",
      "Key Vault secrets management implementation",
      "Microsoft Sentinel basic SIEM setup, or Defender XDR where appropriate",
      "Microsoft Entra ID MFA enforcement and Privileged Identity Management basics",
      "Evidence pack for auditors: policy assignments, log exports, access reviews",
    ],
    outOfScope: [
      "Full ISO 27001 or SOC 2 audit preparation outside the technical scope",
      "Third-party penetration testing",
      "Application code SAST or DAST tooling integration",
    ],
  },
  {
    code: "BSV-PKG-06",
    slug: "cost-management-rescue",
    name: "The Cost Management Rescue",
    tagline:
      "For startups with a runaway Azure bill or preparing for board scrutiny of cloud spend.",
    price: 2800,
    paymentTerms: "50/50",
    delivery: "8 business days",
    summary:
      "Founders credits preserved, idle resources retired, right-sizing and Reserved Instance advice, and a forecast you can show a board.",
    scope: [
      "An end-to-end pass over what you are spending and why. Idle resources are retired, compute and storage are right-sized, and Reserved Instance or Savings Plan options are quantified.",
      "You leave with a tagging strategy, a monthly forecast versus actuals dashboard and a clear path to extend founders credits as far as they will go.",
    ],
    deliverables: [
      "Optimise and preserve Azure founders credits, protecting financial runway",
      "Full cost analysis across all subscriptions (Cost Management and Billing)",
      "Identification and elimination of idle or orphaned resources",
      "Right-sizing recommendations for compute and storage",
      "Reserved Instance or Savings Plan analysis and purchase advisory",
      "Tagging strategy implementation for cost attribution",
      "Monthly spend forecast versus actuals dashboard (Power BI or Azure Workbooks)",
    ],
    outOfScope: [
      "Application refactoring for cost (separate engagement)",
      "Long-term FinOps operating model implementation",
      "Negotiation of an Enterprise Agreement on the customer's behalf",
    ],
  },
] as const;

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
