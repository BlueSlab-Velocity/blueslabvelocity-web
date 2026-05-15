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
  /** Optional grouped categories rendered on the detail page after scope */
  categories?: { title: string; items: string[] }[];
  deliverables: string[];
  outOfScope: string[];
}

export const PACKAGES: readonly Package[] = [
  {
    code: "BSV-PKG-01",
    slug: "azure-startup-launchpad",
    name: "The Startup Launchpad",
    tagline:
    "A startup-scale Azure landing zone, ALZ-aligned and deployable from day one. Management groups, subscriptions, naming conventions, RBAC, and tagging are in from the start — not retrofitted later.",  
    price: 4500,
    paymentTerms: "50/50",
    delivery: "10 business days",
    summary:
      "Opinionated, production-ready Azure Landing Zone for Azure tenants with startup scale workloads, typically with no existing Azure estate. Multi-subscription, policy-governed foundation that passes SOC2/ISO27001.",
    scope: [
      "The Launchpad Engine deployment covers greenfield Azure tenant setup for single-workload startups, typically pre-seed to Series A stage with no existing Azure estate, no hybrid connectivity requirements.",
      "You get identity, networking, a security baseline, and an IaC pipeline structured to extend as you grow. Hand-over is a working environment plus documentation a future hire can read in an afternoon.",
    ],
    deliverables: [
      "Deployed management group hierarchy",
      "Deployed prod + nonprod landing zone",
      "RBAC Baseline (Entra ID Groups + Role Assignments)",
      "Core networking",
      "Policy Assignments (security, tagging)",
      "Defender for Cloud + Log Analytics Baseline",
      "Cost management budgets + tag attributions",
      "IaC code (Terraform or Bicep) and GitHub Actions CI/CD pipeline scaffold",
      "Handover documentation (Resource Inventory, Solution Architecture) + 2-week async Q&A window",
    ],
    outOfScope: [
      "Application code, container images,, CI for application repositories, product-side architecture, or workload deployments",
      "Production data migration from another cloud or on-premises",
      "24/7 support or on-call cover",
      "Hub VNet, Azure Firewall, ExpressRoute, VPN Gateway",
      "Microsoft Entra ID Conditional Access policies beyond Security Defaults",
      "Privileged Identity Management (PIM)",
      "Private DNS Zones at scale",
      "Migration of an existing environment",
    ],
  },
  {
    code: "BSV-PKG-02",
    slug: "ai-ready-platform",
    name: "The AI-Ready Platform",
    tagline:
      "For startups building AI-powered products who need a proper Azure foundation.",
    price: 11500,
    paymentTerms: "50/50",
    delivery: "25 business days",
    summary:
      "Microsoft Foundry foundations, RAG-ready search, and Agentic AI-ready platform secured with compliant networks, private endpoints and managed identities. Secure, observable, production-ready AI platform on Azure.",
    scope: [
      "Most startups building with AI start the same way: Azure OpenAI API key in a .env file, no private networking, no audit trail, no cost controls, and a single engineer who knows how it all fits together. That is fine for a prototype. It is not fine when you are onboarding regulated customers, raising a Series A, or hitting production load.",
      "This package deploys a secure, observable, production-ready AI platform on Azure — with an agentic AI foundation built on Microsoft Foundry Agent Service, so your dev team can build and ship agents without starting from scratch.",
    ],
    deliverables: [
      "Azure AI Foundry Hub and Project — the governance and workload layer for all AI development",
      "Azure OpenAI deployment — model, version, and capacity configured for your expected load",
      "Azure Foundry Agent Service — the managed agent runtime, wired to your knowledge base and ready for your dev team",
      "Azure AI Search — RAG-ready knowledge index, configured for your document types and retrieval pattern",
      "Private networking throughout — private endpoints on all PaaS services, no public exposure",
      "Managed identity authentication across every service-to-service connection",
      "Azure Monitor coverage — token consumption, agent run latency and failure rate, cost alerts",
      "Microsoft Agent Framework starter project — working code in your repo that your team can build on from Day 1",
      "Agent evaluation baseline — groundedness and relevance scoring wired and verified",
      "IaC in your GitHub repo (Terraform) with CI/CD pipeline for model and agent updates",
      "Full handover pack: architecture decisions, operational runbook, cost management guide",
    ],
    outOfScope: [
      "Custom model training or fine-tuning runs",
      "Front-end product UI for the AI feature",
      "Long-term content moderation or human-review workflows",
    ],
  },
  {
    code: "BSV-PKG-03",
    slug: "fractional-cto-retainer",
    name: "The Fractional CTO of Infrastructure",
    tagline:
      "Senior technical leadership at a fraction of the full-time cost. For founders who want ongoing strategic Azure cover without hiring full-time.",
    price: 3500,
    priceSuffix: "/month",
    paymentTerms: "monthly",
    delivery: "Rolling after a 3-month minimum",
    summary:
      "Up to two days a week of senior hands-on time, async availability inside business hours, embedded within your team and working on the decisions and delivery that matter. Architecture or hands-on engineering.",
    categories: [
      {
        title: "Strategic work",
        items: [
          "Technology roadmap: aligning technical priorities with business goals through business-first engineering",
          "Architecture decisions: making choices that scale without over-engineering",
          "Build vs. buy analysis: when to use existing solutions vs. building custom",
          "Technical due diligence: preparing for Series A or B fundraising rounds",
          "Budgeting: infrastructure costs, team sizing, tool selection",
          "Vendor evaluation: choosing technology partners and platforms",
        ],
      },
      {
        title: "Team leadership",
        items: [
          "Hiring: defining roles, sourcing candidates, running technical interviews",
          "Team structure: organising engineers into effective teams",
          "Mentoring: developing your engineering leads and managers",
        ],
      },
      {
        title: "Operational work",
        items: [
          "Sprint planning: ensuring the team is working on the right things",
          "Architecture reviews: catching problems before they ship",
          "Code reviews: sometimes, especially for critical systems",
          "Security: ensuring appropriate security practices",
          "Technical debt: prioritising and managing accumulated shortcuts",
        ],
      },
    ],
    scope: [
      "A fractional CTO is an experienced technology leader who works with your company part-time, typically 1-3 days per week. You get senior technical leadership, strategic guidance, and team development without hiring a full-time executive.",
      "A senior architect on call for the decisions that matter: review of architecture choices, sanity checks on a vendor proposal, board prep, hiring cloud engineers.",
      "The retainer is rolling after the initial three months. Thirty days notice to exit. No long lock-in.",
      "The work varies based on your specific needs, but typically falls into three categories: "
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
    code: "BSV-PKG-04",
    slug: "architecture-review-and-roadmap",
    name: "The Well-Architected Review and Roadmap",
    tagline:
      "For startups with an existing Azure environment that needs a hard look.",
    price: 3200,
    paymentTerms: "50/50",
    delivery: "7 business days",
    summary:
      "A full Well-Architected Framework assessment, a written findings report with severities, and a 90-day remediation plan. For brownfielfd Azure tenants that need a hard look and a clear path forward.",
    scope: [
      "An honest read of what is in your tenant today against the five Well-Architected pillars. We sit with the Advisor and Defender for Cloud findings and separate noise from signal.",
      "You get a written report you can hand to your board or your next CTO hire, and a 90-minute debrief that turns it into a plan.",
    ],
    deliverables: [
      "Well-Architected Framework assessment across Reliability, Security, Cost Optimisation, Operational Excellence and Performance Efficiency",
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
    code: "BSV-PKG-05",
    slug: "resilience-audit-and-hardening",
    name: "The Resilience Shield Sprint",
    tagline:
      "For startups operating in highly regulated industries, and approaching ISO 27001, SOC 2, or a regulated customer security review.",
    price: 7000,
    paymentTerms: "50/50",
    delivery: "15 business days",
    summary:
      "This focused sprint aligns your tenant architecture with global security frameworks—ensuring your identity, data, and networking configurations are fully prepared fordeep-dive customer audits.",
    scope: [
      "The Resilience Shield is a high-impact, 2-week engagement designed to harden your Azure environment against the strict regulatory frameworks (DORA, ISO 27001, and SOC2).",
      "A focused two-week push to get a tenant from default to defensible. The work is scoped against a real auditor's checklist, not a theoretical one.",
      "You finish with controls in place, evidence captured and a Secure Score that holds up to scrutiny.",
    ],
    deliverables: [
      "Defender for Cloud hardening to a target Secure Score of 75 or above",
      "Network security group audit and remediation",
      "Key Vault secrets management implementation",
      "Microsoft Sentinel basic SIEM setup, or Defender XDR where appropriate",
      "Microsoft Entra ID MFA enforcement and Privileged Identity Management basics",
      "Evidence pack for auditors: policy assignments, log exports, access reviews",
      "Compliance-as-Code implementation: Terraform/Bicep code with Azure Policy initiatives and custom policies to enforce regulatory requirements delivered to your repo.",
      "Report and remediation recommendations of your current state against DORA, ISO 27001, or SOC2 requirements.",
    ],
    outOfScope: [
      "Full ISO 27001 or SOC 2 audit preparation outside the technical scope",
      "Third-party penetration testing",
      "Application code SAST or DAST tooling integration",
      "Official Certification: We prepare you for the audit and map the controls, but the final ISO/SOC2 certification must be granted by an independent accredited auditor.",
      "Application-Level Code Fixes: While we secure the infrastructure, remediating vulnerabilities within your proprietary application code is the responsibility of your dev team",
      "24/7 Security Operations (SOC): We build the shield, but we do not provide 24/7 monitoring or services",
      "Legal Advice: We provide technical implementation based on regulatory requirements; we do not provide legal interpretations of DORA or HealthTech laws.",
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
      "Manage your financial runway and secure Azure cloud cost savings. Founders credits preserved, idle resources retired, right-sizing and Reserved Instance advice, and a forecast you can show a board.",
    scope: [
      "An end-to-end pass over what you are spending and why. Idle resources are retired, compute and storage are right-sized, and Reserved Instance or Savings Plan options are quantified.",
      "You leave with a tagging strategy and a clear path to extend founders credits as far as they will go.",
    ],
    deliverables: [
      "Extend your financial runway by optimising Azure consumption of your Azure Founders Hub credits, VC or self-funded capital.",
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
  /**{
    code: "BSV-PKG-05",
    slug: "security-and-compliance-sprint",
    name: "The Security and Compliance Sprint",
    tagline:
      "For startups approaching ISO 27001, SOC 2, or a regulated customer security review.",
    price: 6800,
    paymentTerms: "50/50",
    delivery: "15 business days",
    summary:
      "This focused sprint aligns your tenant architecture with global security frameworks—ensuring your identity, data, and networking configurations are fully prepared fordeep-dive customer audits.",
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
      "Manage your financial runway and secure Azure cloud cost savings. Founders credits preserved, idle resources retired, right-sizing and Reserved Instance advice, and a forecast you can show a board.",
    scope: [
      "An end-to-end pass over what you are spending and why. Idle resources are retired, compute and storage are right-sized, and Reserved Instance or Savings Plan options are quantified.",
      "You leave with a tagging strategy and a clear path to extend founders credits as far as they will go.",
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
  },*/
] as const;

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
