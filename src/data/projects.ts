import { type Project } from "@/types";

// Helper to get asset paths
const getAssetPath = (projectFolder: string, fileName: string) => {
  return new URL(`../assets/${projectFolder}/${fileName}`, import.meta.url).href;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "send-it",
    title: "Send It",
    summary: "Solana DeFi lending and margin trading platform supporting mostly liquid and volatile assets.",
    role: "Lead Frontend Engineer",
    techStack: ["Next.js", "Solana", "DeFi", "TailwindCSS"],
    metrics: [
      { metric: "TVL (7-Day Snapshot)", value: "$3.5M" },
      { metric: "Daily Active Users", value: "3,000+" },
      { metric: "Core Web Vitals (Target)", value: "LCP < 2.5s" },
      { metric: "Quote Freshness (Target)", value: "< 1s" },
    ],
    thumbnail: getAssetPath("SendIt", "1.png"),
    heroImage: getAssetPath("SendIt", "1.png"),
    gallery: [getAssetPath("SendIt", "2.png"), getAssetPath("SendIt", "3.png")],
    allImages: [getAssetPath("SendIt", "1.png"), getAssetPath("SendIt", "2.png"), getAssetPath("SendIt", "3.png")],
    problem: `Margin and lending users need instant feedback: prices, health factor, borrow limits, and liquidation risk can change within seconds.

Existing interfaces in this space often feel slow and brittle under load, wallet-connect edge cases, delayed quote refresh, and heavy UI re-renders make it hard for users to act confidently.

The challenge was to deliver a fast trading experience while keeping on-chain actions safe and understandable (clear risk warnings, predictable transaction steps, and transparent fees).`,
    solution: `I led the frontend build in Next.js with a performance-first approach.

Key decisions:
- Built reusable calculation hooks for leverage, collateral, and borrow limits so risk indicators stay consistent across pages.
- Minimized expensive re-renders via memoized selectors and component boundaries around real-time price/position panels.
- Designed a "batched transaction" UX that guides users through approvals/transactions and reduces confusion during wallet signing.
- Added resilient loading/error states for RPC hiccups so the UI fails gracefully instead of freezing.`,
    results: `The platform shipped with a responsive, low-latency trading experience that scales to high-frequency interactions.

Outcome highlights:
- Reached $3.5M TVL in the first 7 days (as reported by the project).
- Served 3,000+ daily active users.
- Established a clear KPI framework (Core Web Vitals + quote freshness) to keep performance measurable as features grow.`,
    featured: true,
    category: "DeFi",
  },
  {
    id: "2",
    slug: "addix-on-radix",
    title: "Addix On Radix",
    summary: "Staking and DeFi platform for the Radix ecosystem with high-throughput admin dashboards.",
    role: "Lead Developer",
    techStack: ["React", "TypeScript", "Radix DLT"],
    metrics: [
      { metric: "Assets Staked", value: "50M XRD" },
      { metric: "Treasury / Hedge Fund", value: "$9k+" },
      { metric: "Claim UX (Target)", value: "< 3 steps" },
      { metric: "Admin Ops (Target)", value: "Bulk + CSV" },
    ],
    thumbnail: getAssetPath("HitStaking", "1.png"),
    heroImage: getAssetPath("HitStaking", "1.png"),
    gallery: [getAssetPath("HitStaking", "2.png")],
    allImages: [getAssetPath("HitStaking", "1.png"), getAssetPath("HitStaking", "2.png")],
    problem: `The Radix community needed a staking product that was both easy for everyday users and powerful enough for operational workloads (airdrops, distribution, and high-volume admin actions).

The key problem was trust + usability: users must clearly understand what they are signing, and admins must be able to execute repetitive tasks without manual errors.`,
    solution: `I delivered the product end-to-end with a focus on clear transaction flows.

What I built:
- User-facing staking UI with clear states (connect → stake → claim → unstake) and explicit confirmations.
- Token distribution and airdrop workflows with guardrails to prevent incorrect amounts/addresses.
- Admin dashboards optimized for throughput (bulk operations, filters, and consistent validation).
- TypeScript-first codebase to reduce runtime issues and keep business rules centralized.`,
    results: `The platform provided a reliable interface for large staking operations and ongoing community programs.

Outcome highlights:
- 50M+ XRD managed in staked assets (as reported by the project).
- Repeatable admin workflows that reduce operational friction and make distributions safer to run.
- Clear KPIs defined around claim steps and bulk admin throughput for future reporting.`,
    featured: true,
    category: "DeFi",
  },
  {
    id: "3",
    slug: "spock-analytics",
    title: "Spock Analytics",
    summary: "On-chain analytics dashboard with advanced cohort and funnel visualizations.",
    role: "Frontend Developer",
    techStack: ["React", "Analytics", "Visualization"],
    metrics: [
      { metric: "Dashboard Load Time", value: "-35%" },
      { metric: "Events Analyzed", value: "Millions" },
      { metric: "Time-to-First-Chart (Target)", value: "< 2s" },
      { metric: "Export / Share (Target)", value: "1 click" },
    ],
    thumbnail: getAssetPath("Spock", "1.png"),
    heroImage: getAssetPath("Spock", "1.png"),
    gallery: [],
    allImages: [getAssetPath("Spock", "1.png"), getAssetPath("Spock", "2.png"), getAssetPath("Spock", "3.png"), getAssetPath("Spock", "4.png")],
    problem: `Analytics users need answers quickly, but cohort/funnel views can be extremely heavy: large time ranges, many segments, and complex aggregations.

The main pain points were slow initial load, janky interactions when switching filters, and inconsistent chart states when data arrived out of order.`,
    solution: `I optimized the dashboard around progressive rendering and stable data flows.

Approach:
- Introduced paginated and parameterized data fetching to avoid over-fetching.
- Built reusable chart/table components with predictable loading and empty states.
- Ensured filters and URL state stayed in sync so dashboards could be shared reliably.
- Reduced unnecessary renders by memoizing heavy visual components and decoupling filter state from chart state.`,
    results: `The dashboard became noticeably faster and more reliable for day-to-day analysis.

Outcome highlights:
- Reduced load times by 35% (as tracked by the team).
- Enabled analysis at “millions of events” scale without blocking the UI.
- Improved usability through shareable, stable dashboards and clearer progressive loading.`,
    featured: false,
    category: "SaaS",
  },
  {
    id: "4",
    slug: "node-manager",
    title: "Node Manager",
    summary: "Guided management platform for Radix node operators simplifying un-staking workflows.",
    role: "Open Source Contributor",
    techStack: ["Radix", "React", "Open Source"],
    metrics: [
      { metric: "Validators Onboarded", value: "100+" },
      { metric: "Staked Assets", value: "800M XRD" },
      { metric: "Operator Setup (Target)", value: "< 15 min" },
      { metric: "Workflow Completion", value: "Guided" },
    ],
    thumbnail: getAssetPath("NodeManager", "1.png"),
    heroImage: getAssetPath("NodeManager", "1.png"),
    gallery: [],
    allImages: [getAssetPath("NodeManager", "1.png"), getAssetPath("NodeManager", "2.png"), getAssetPath("NodeManager", "3.png")],
    problem: `Validator operators often face fragmented tooling: documentation, command-line steps, and manual verification are spread across multiple places.

That friction increases the chance of mistakes, especially for unstaking and operational maintenance, while also raising the barrier for new operators to onboard.`,
    solution: `As an open-source contributor, I helped shape a guided UI that turns complex operational tasks into clear, step-by-step workflows.

What the interface emphasizes:
- Guided flows for common operations (including unstaking) with clear prerequisites and outcomes.
- Safer defaults and validation to reduce operator error.
- A utility-driven layout that surfaces critical info without overwhelming the user.`,
    results: `The tool simplified day-to-day node operations and helped operators manage responsibilities with more confidence.

Outcome highlights:
- Supported 100+ validators.
- Helped standardize workflows around 800M+ XRD in staked assets (as reported by the project).
- Reduced operational friction by converting CLI-heavy processes into guided UI steps.`,
    featured: false,
    category: "Other",
  },
  {
    id: "5",
    slug: "family-wins",
    title: "Family Wins",
    summary: "Responsive devotional app with progress tracking and inclusive accessibility.",
    role: "React Developer",
    techStack: ["React", "PWA", "Mobile-First"],
    metrics: [
      { metric: "MAU Increase", value: "120%" },
      { metric: "Engagement", value: "15×" },
      { metric: "Load Time", value: "-50%" },
      { metric: "Accessibility (Target)", value: "WCAG AA" },
    ],
    thumbnail: getAssetPath("FamilyWins", "1.png"),
    heroImage: getAssetPath("FamilyWins", "1.png"),
    gallery: [],
    allImages: [getAssetPath("FamilyWins", "1.png"), getAssetPath("FamilyWins", "companions2.png")],
    problem: `The legacy experience was slow and didn’t encourage repeat usage, users struggled with long load times, limited interactivity, and a lack of progress feedback.

The goal was to create a mobile-first devotional experience that loads quickly, is accessible, and makes it easy for users to track consistency over time.`,
    solution: `I rebuilt the UI in React with a focus on speed, clarity, and retention loops.

Key improvements:
- Optimized media delivery (right-sized images + lazy loading) to reduce initial payload.
- Added progress tracking so users can build habits with visible milestones.
- Implemented a comments/community layer to increase engagement.
- Ensured accessibility-friendly typography/contrast and touch targets for mobile.`,
    results: `The refresh made the product faster and more engaging.

Outcome highlights:
- Cut load time by 50% (team-tracked).
- Increased monthly active users by 120%.
- Increased engagement by 15× through clearer progress and community feedback loops.`,
    featured: false,
    category: "Mobile",
  },
  {
    id: "6",
    slug: "lumina-dex",
    title: "Lumina Dex",
    summary:
      "Lumina Dex is a decentralized exchange on Mina, providing secure, non-custodial token trading. It leverages Mina’s compact chain architecture to enable efficient, privacy-preserving transactions for decentralized finance (DeFi) and broader global Web3 ecosystem growth.",
    role: "Frontend Developer",
    techStack: ["React", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Swap UX (Target)", value: "< 30s" },
      { metric: "Price Impact Visibility", value: "Always" },
      { metric: "Slippage Controls", value: "Advanced" },
      { metric: "Core Web Vitals (Target)", value: "LCP < 2.5s" },
    ],
    thumbnail: getAssetPath("LuminaDex", "1.png"),
    heroImage: getAssetPath("LuminaDex", "1.png"),
    gallery: [],
    allImages: [getAssetPath("LuminaDex", "1.png"), getAssetPath("LuminaDex", "2.png"), getAssetPath("LuminaDex", "3.png")],
    problem: `DEX users need a simple way to swap tokens while understanding the trade-offs (price impact, fees, slippage) and trusting the transaction they sign.

For Mina-based products in particular, the UX must bridge Web2 expectations (instant feedback) with Web3 realities (wallet approvals, confirmations, and network variability).`,
    solution: `I implemented the frontend experience in React + TypeScript with an emphasis on predictable state and transparent trade details.

Key UX building blocks:
- Clear quote presentation (expected output, minimum received, and fee breakdown).
- Robust states for wallet connection, pending confirmations, and recoverable errors.
- Responsive layout so swaps and portfolio views work well on smaller screens.
- Componentized UI patterns to keep trading, liquidity, and portfolio screens consistent.`,
    results: `Delivered a production-ready DEX interface that prioritizes clarity and safety in the swap flow.

Results you can report to clients:
- Defined measurable UX/performance KPIs (swap completion time, Core Web Vitals).
- Reduced user confusion by making slippage/price impact explicit and always visible.
- Established a scalable UI foundation for additional DeFi features (liquidity, analytics, rewards).`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "7",
    slug: "rampx",
    title: "RampX",
    summary:
      "RampX offers a decentralized token swapping service, enabling users to trade cryptocurrencies across multiple blockchain networks. By connecting a compatible wallet, users can easily exchange tokens, track real-time transaction details, and manage fees.",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Networks Supported", value: "Multi-chain" },
      { metric: "Swap Status", value: "Real-time" },
      { metric: "Fee Transparency", value: "Full breakdown" },
      { metric: "Wallet Connect (Target)", value: "< 10s" },
    ],
    thumbnail: getAssetPath("Rampx", "1.png"),
    heroImage: getAssetPath("Rampx", "1.png"),
    gallery: [],
    allImages: [getAssetPath("Rampx", "1.png"), getAssetPath("Rampx", "2.png"), getAssetPath("Rampx", "3.png"), getAssetPath("Rampx", "4.png")],
    link: "https://rampx-dapp.vercel.app/swap",
    problem: `Cross-chain swapping is complex for end users: token selection, chain switching, fees, and transaction status updates can overwhelm non-technical users.

The product needed a simple “connect → choose tokens → swap” journey while still showing enough detail to build trust.`,
    solution: `I built the swap UI in Next.js + TypeScript with a transaction-first mindset.

Highlights:
- Streamlined token + network selection with clear chain switching prompts.
- Real-time transaction state (pending / confirmed / failed) with actionable error messages.
- Explicit fee presentation so users understand what they’re paying and why.
- Responsive layout and guarded state transitions to prevent invalid swaps.`,
    results: `The result is a clean swapping experience that reduces user drop-off caused by confusion.

Client-facing outcomes:
- Clear, measurable KPIs (wallet connect time, swap completion time, error rate).
- Improved user trust via fee transparency and consistent transaction status reporting.
- A modular UI base that can expand to bridging, limits, and history views.`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "8",
    slug: "nebula",
    title: "Nebula",
    summary:
      "Nebula Agency’s secure login portal provides a centralized platform for users to manage projects, collaborate, and track performance, ensuring streamlined workflows and secure, efficient access to essential digital marketing tools.",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Auth Model", value: "Role-based" },
      { metric: "Session Security", value: "Hardened" },
      { metric: "Onboarding (Target)", value: "< 5 min" },
      { metric: "Time-to-First-View (Target)", value: "< 2s" },
    ],
    thumbnail: getAssetPath("Nebula", "1.png"),
    heroImage: getAssetPath("Nebula", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("Nebula", "1.png"),
      getAssetPath("Nebula", "2.png"),
      getAssetPath("Nebula", "3.png"),
      getAssetPath("Nebula", "4.png"),
      getAssetPath("Nebula", "5.png"),
    ],
    link: "https://app.nebula-agency.com/",
    problem: `Agency teams need a secure portal to manage work: projects, collaboration, and performance tracking.

The challenge is balancing strong access control with a fast, friendly UI, portals often become slow, hard to navigate, and inconsistent across roles.`,
    solution: `I built the frontend portal in Next.js + TypeScript with an emphasis on secure and predictable user journeys.

Key elements:
- Structured information architecture so users can find projects and performance views quickly.
- Authentication-aware navigation (only show what a user can access).
- Consistent UI components for dashboards and tables to reduce cognitive load.
- Performance-minded rendering for data-heavy screens (pagination, skeletons, and stable state).`,
    results: `Delivered a centralized portal experience that supports day-to-day agency operations.

Client-facing outcomes:
- Improved clarity for collaboration and reporting workflows.
- Defined KPIs around onboarding time and time-to-first-view for continuous improvement.
- A scalable UI foundation for new marketing tools and dashboards.`,
    featured: false,
    category: "SaaS",
  },
  {
    id: "9",
    slug: "gizmo-portal",
    title: "Gizmo Portal",
    summary:
      "Portal.GizmoLab.io offers a secure, centralized platform for users to manage projects, collaborate with teams, and monitor analytics, helping streamline product development while providing accessible, comprehensive tools for innovation and growth.",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Collaboration", value: "Projects + Teams" },
      { metric: "Analytics Views", value: "Dashboard" },
      { metric: "Table UX", value: "Sort / Filter" },
      { metric: "Support KPIs", value: "Export-ready" },
    ],
    thumbnail: getAssetPath("GizmoPortal", "1.png"),
    heroImage: getAssetPath("GizmoPortal", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("GizmoPortal", "1.png"),
      getAssetPath("GizmoPortal", "2.png"),
      getAssetPath("GizmoPortal", "3.png"),
      getAssetPath("GizmoPortal", "4.png"),
      getAssetPath("GizmoPortal", "5.png"),
      getAssetPath("GizmoPortal", "6.png"),
    ],
    link: "https://portal.gizmolab.io/",
    problem: `Product teams needed a single portal to manage projects, collaborate, and monitor analytics without jumping between disconnected tools.

The portal also had to handle data-heavy screens (tables, activity feeds, dashboards) while staying fast and intuitive.`,
    solution: `I implemented a Next.js + TypeScript frontend focused on usability for repeated daily use.

Key UX decisions:
- Consistent dashboard patterns (cards, tables, filters) so users can learn once and reuse everywhere.
- Predictable navigation for core workflows (project overview → details → analytics).
- Data-heavy UI built with stable loading states, pagination, and resilient empty/error states.
- Export/share-friendly views for stakeholders.`,
    results: `Delivered a centralized portal experience that supports collaboration and analytics in one place.

Client-facing outcomes:
- Reduced tool fragmentation by consolidating project management + analytics.
- Improved stakeholder reporting through export/share-friendly dashboards.
- Clear KPIs defined around table interaction speed and time-to-insight.`,
    featured: false,
    category: "SaaS",
  },
  {
    id: "10",
    slug: "pet-life",
    title: "PetLife",
    summary:
      "Pet Life merges pet companionship and interactive gaming in a community-driven ecosystem. Users explore pet care resources, virtual adventures, and social features, fostering well-being and fun for all pet lovers",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Community Features", value: "Social + Content" },
      { metric: "Mobile UX", value: "Responsive" },
      { metric: "Engagement Loop", value: "Missions" },
      { metric: "Performance (Target)", value: "LCP < 2.5s" },
    ],
    thumbnail: getAssetPath("PetLife", "1.png"),
    heroImage: getAssetPath("PetLife", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("PetLife", "1.png"),
      getAssetPath("PetLife", "2.png"),
      getAssetPath("PetLife", "3.png"),
      getAssetPath("PetLife", "4.png"),
      getAssetPath("PetLife", "5.png"),
    ],
    link: "https://pet-life-chi.vercel.app/",
    problem: `Pet owners want trustworthy care resources and community interaction, but many platforms are either content-only (no engagement) or community-only (no helpful structure).

The goal was to merge resources, interactive experiences, and community features into a single cohesive product that remains fast on mobile.`,
    solution: `I built the frontend in Next.js + TypeScript with a content + engagement structure.

Key elements:
- Modular pages for care resources and community content.
- Clear navigation and visual hierarchy to keep the experience approachable.
- Interaction patterns (quests/missions, profiles, and feed-like surfaces) to encourage repeat use.
- Performance-minded rendering and lazy-loaded media so pages stay snappy.`,
    results: `The project delivered a unified experience that blends education and engagement.

Client-facing outcomes:
- Strong foundation for measuring engagement KPIs (repeat visits, session depth, content completion).
- A mobile-first UI that supports growth without sacrificing performance.
- Clear product structure that can scale into gamification and rewards.`,
    featured: false,
    category: "Other",
  },
  {
    id: "11",
    slug: "hello-monster",
    title: "Hello Monster",
    summary:
      "Hello Monster is a Web3 gaming platform where users mint, stake, and earn points with NFT monsters. It integrates blockchain-based rewards, gamified staking mechanics, and a community-driven experience for digital collectors",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "NFT Actions", value: "Mint / Stake" },
      { metric: "Reward Tracking", value: "Points" },
      { metric: "Wallet UX (Target)", value: "< 10s" },
      { metric: "Transaction Clarity", value: "Step-by-step" },
    ],
    thumbnail: getAssetPath("HelloMonster", "1.png"),
    heroImage: getAssetPath("HelloMonster", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("HelloMonster", "1.png"),
      getAssetPath("HelloMonster", "2.png"),
      getAssetPath("HelloMonster", "3.png"),
      getAssetPath("HelloMonster", "4.png"),
      getAssetPath("HelloMonster", "5.png"),
      getAssetPath("HelloMonster", "6.png"),
    ],
    problem: `NFT gaming platforms frequently fail on UX: users get lost between minting, staking, rewards, and wallet confirmations.

The product needed a fun, game-like UI while keeping blockchain actions explicit, safe, and easy to recover from when transactions fail or are rejected.`,
    solution: `I implemented the user experience in Next.js + TypeScript with a clear action model.

Core UX components:
- A guided mint flow that explains what the user receives and what they sign.
- Staking screens that make lockup, rewards, and status unmistakable.
- Points and rewards tracking surfaced prominently to reinforce progress.
- Robust pending/confirmed/error states to reduce user anxiety during transactions.`,
    results: `Delivered a cohesive Web3 gaming experience that balances fun presentation with reliable transaction UX.

Client-facing outcomes:
- Improved conversion potential by reducing wallet-flow confusion.
- Defined KPIs around mint completion rate and staking conversion.
- A modular UI that can expand into marketplace and seasonal events.`,
    featured: false,
    category: "NFT",
  },
  {
    id: "12",
    slug: "fomo-staking",
    title: "FOMO Staking",
    summary:
      "FOMO on XRD is a Web3 staking and airdrop platform where users stake $FOMO tokens, earn rewards, and claim NFT-based incentives. It gamifies staking with airdrop bonuses and NFT reward tracking",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Ethereum"],
    metrics: [
      { metric: "Staking UX", value: "Gamified" },
      { metric: "Rewards", value: "Token + NFT" },
      { metric: "Claim Flow (Target)", value: "< 2 min" },
      { metric: "Eligibility Checks", value: "Transparent" },
    ],
    thumbnail: getAssetPath("FomoStaking", "1.png"),
    heroImage: getAssetPath("FomoStaking", "1.png"),
    gallery: [],
    allImages: [getAssetPath("FomoStaking", "1.png"), getAssetPath("FomoStaking", "2.png")],
    link: "https://www.fomostake.com/",
    problem: `Staking products can feel repetitive and unclear, users often don’t understand reward schedules, eligibility, or why their claim failed.

The challenge was to make staking feel engaging (FOMO-style incentives) while keeping reward logic and NFT incentives easy to verify.`,
    solution: `I built the UI in React with a "clarity first" staking and claim experience.

Highlights:
- Staking and airdrop eligibility presented as readable rules and statuses.
- Clear claim UX with progress states and recoverable errors.
- NFT incentive tracking surfaced alongside staking balances.
- Consistent UI patterns so users can repeat actions confidently.`,
    results: `The platform shipped with a more engaging staking experience and clearer reward visibility.

Client-facing outcomes:
- KPIs defined around claim completion time and claim error rate.
- Improved user confidence via transparent eligibility and reward status.
- A UI structure ready for expanding into campaigns, tiers, and seasonal drops.`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "13",
    slug: "dexter",
    title: "Dexter",
    summary:
      "Dexter on Radix is a decentralized exchange (DEX) enabling seamless token trading on the Radix network. It offers secure swaps, liquidity provision, and efficient trading with low fees and a user-friendly interface",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Swap Flow", value: "Streamlined" },
      { metric: "Liquidity UX", value: "Guided" },
      { metric: "Fee Visibility", value: "Explicit" },
      { metric: "Performance (Target)", value: "LCP < 2.5s" },
    ],
    thumbnail: getAssetPath("Dexter", "1.png"),
    heroImage: getAssetPath("Dexter", "1.png"),
    gallery: [],
    allImages: [getAssetPath("Dexter", "1.png")],
    link: "https://dexteronradix.com/trade",
    problem: `DEX users want low-friction swaps and liquidity actions, but still need confidence that their trade is safe (slippage, fees, and price impact).

The interface needed to feel as straightforward as a centralized exchange while remaining transparent about on-chain mechanics.`,
    solution: `I implemented a clean trading UI in Next.js + TypeScript.

Key elements:
- Clear quote and slippage controls with visible minimum received.
- Consistent transaction steps that reduce signing mistakes.
- Responsive layout and predictable loading so the trade experience stays smooth.
- Componentized UI foundation to extend into pools, charts, and history.`,
    results: `Delivered a user-friendly DEX trade page that makes on-chain swaps understandable.

Client-facing outcomes:
- Reduced confusion via explicit slippage/fee visibility.
- Defined KPIs around swap completion time and quote freshness.
- A scalable UI base for future features (liquidity, analytics, portfolio).`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "14",
    slug: "mesh",
    title: "Mesh",
    summary:
      "Mesh is a Solana-based DeFi platform offering token swaps, liquidity provision, and staking. It aggregates liquidity from multiple DEXs for optimal trading, rewarding users with competitive APY and leaderboard incentives.",
    role: "Frontend Developer",
    techStack: ["React", "TypeScript", "Ethereum"],
    metrics: [
      { metric: "Best-Route UX", value: "Aggregated" },
      { metric: "Leaderboard", value: "In-app" },
      { metric: "APY Surfaces", value: "Comparable" },
      { metric: "Quote Freshness (Target)", value: "< 1s" },
    ],
    thumbnail: getAssetPath("Mesh", "1.png"),
    heroImage: getAssetPath("Mesh", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("Mesh", "1.png"),
      getAssetPath("Mesh", "2.png"),
      getAssetPath("Mesh", "3.png"),
      getAssetPath("Mesh", "4.png"),
      getAssetPath("Mesh", "5.png"),
      getAssetPath("Mesh", "6.png"),
      getAssetPath("Mesh", "7.png"),
    ],
    link: "https://app.meshprotocol.xyz/",
    problem: `DeFi users want the best swap price without manually comparing DEXs.

At the same time, liquidity and staking features add complexity: users need clear information about APY, rewards, and where their funds are going.`,
    solution: `I implemented the UI in React + TypeScript with a focus on clarity across multiple DeFi modules.

Key pieces:
- Swap experience designed around "best route" and clear price impact visibility.
- Liquidity and staking screens that surface APY and reward mechanics plainly.
- Leaderboard and incentives integrated without overwhelming core actions.
- Strong visual hierarchy and responsive layouts for heavy dashboards.`,
    results: `Delivered a unified DeFi interface that supports swapping, liquidity, and staking in one product.

Client-facing outcomes:
- Clear KPIs defined around quote freshness, swap completion time, and engagement with incentives.
- Reduced user effort by consolidating discovery and execution in one place.
- Scalable UI patterns to expand additional pools and campaigns.`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "15",
    slug: "unipilot",
    title: "UNIPILOT",
    summary: "Unipilot is a concentrated liquidity manager on uniswap. that helps you to gain maximum APR on various token pools",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Ethereum"],
    metrics: [
      { metric: "Strategy UX", value: "Guided" },
      { metric: "APR Visibility", value: "Clear" },
      { metric: "Rebalance Model", value: "Automated" },
      { metric: "Deposit Flow (Target)", value: "< 2 min" },
    ],
    thumbnail: getAssetPath("Unipilot", "card.png"),
    heroImage: getAssetPath("Unipilot", "card.png"),
    gallery: [],
    allImages: [
      getAssetPath("Unipilot", "1.png"),
      getAssetPath("Unipilot", "2.png"),
      getAssetPath("Unipilot", "3.png"),
      getAssetPath("Unipilot", "4.png"),
      getAssetPath("Unipilot", "card.png"),
    ],
    problem: `Concentrated liquidity can produce strong yields, but it’s complex: ranges, rebalancing, and impermanent loss are difficult for most users to reason about.

The UX challenge is making strategies understandable so users can deposit confidently and monitor performance over time.`,
    solution: `I implemented strategy and pool views in React with a user-friendly mental model.

Key elements:
- Clear APR and strategy summaries (what it does, what risks exist).
- Guided deposit flow that validates inputs and prevents avoidable errors.
- Visual cues for ranges and status so users can understand where liquidity sits.
- Reusable UI components so pools and strategies remain consistent.`,
    results: `Delivered a concentrated liquidity manager interface that reduces complexity for end users.

Client-facing outcomes:
- KPIs defined around deposit completion rate and time-to-deposit.
- Clear performance reporting surfaces for APR and strategy status.
- Scalable UI foundation for additional strategies and networks.`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "16",
    slug: "sonar-wallet",
    title: "Sonar Wallet",
    summary: "A crypto Wallet Extension that let's you handle your crypto assets on multiple chains including multiple wallets",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Ethereum"],
    metrics: [
      { metric: "Form Factor", value: "Browser extension" },
      { metric: "Wallets", value: "Multiple" },
      { metric: "Chains", value: "Multi-chain" },
      { metric: "Send Flow (Target)", value: "< 60s" },
    ],
    thumbnail: getAssetPath("SonarWallet", "card.png"),
    heroImage: getAssetPath("SonarWallet", "card.png"),
    gallery: [],
    allImages: [
      getAssetPath("SonarWallet", "1.png"),
      getAssetPath("SonarWallet", "2.png"),
      getAssetPath("SonarWallet", "3.png"),
      getAssetPath("SonarWallet", "4.png"),
      getAssetPath("SonarWallet", "5.png"),
      getAssetPath("SonarWallet", "card.png"),
    ],
    problem: `Wallet UX is judged on trust and speed: users must be able to view balances, switch accounts, and send assets quickly without fear of mistakes.

In a browser extension, space constraints and fast context switching make it easy to create confusing navigation and error-prone send flows.`,
    solution: `I built the extension UI in React with a focus on predictable flows.

Key decisions:
- Clear account/wallet switching with visible active context.
- Consistent send/receive experiences with validation and helpful error messages.
- Clean layout patterns optimized for small extension viewports.
- Reusable transaction status UI so signing/sending outcomes are always clear.`,
    results: `Delivered a multi-wallet, multi-chain extension experience optimized for clarity and speed.

Client-facing outcomes:
- Defined KPIs around send flow completion time and error rate.
- Reduced user confusion through explicit account context and validation.
- Scalable UI base for adding chains, tokens, and activity history.`,
    featured: false,
    category: "Other",
  },
  {
    id: "17",
    slug: "numio",
    title: "Numio",
    summary: "An Ethereum Layer 2 scaling solution that lets you make instant Ethereum transactions with significantly lower gas fees",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Ethereum"],
    metrics: [
      { metric: "Fee Savings (KPI)", value: "Trackable" },
      { metric: "Transfer UX (Target)", value: "< 60s" },
      { metric: "Confirmation UX", value: "Real-time" },
      { metric: "Support Load (KPI)", value: "Tickets ↓" },
    ],
    thumbnail: getAssetPath("Numio", "card.jpg"),
    heroImage: getAssetPath("Numio", "card.jpg"),
    gallery: [],
    allImages: [
      getAssetPath("Numio", "1.webp"),
      getAssetPath("Numio", "2.webp"),
      getAssetPath("Numio", "3.webp"),
      getAssetPath("Numio", "4.webp"),
      getAssetPath("Numio", "card.jpg"),
    ],
    problem: `L2 products promise faster and cheaper transactions, but users struggle with bridging concepts, fee comparison, and understanding confirmation states.

The UX must make the “why” (lower fees) and the “how” (deposit/withdraw/transfer) obvious, otherwise users will drop off.`,
    solution: `I built a React UI focused on education through interaction.

Key elements:
- Simple flows for depositing/withdrawing and transfers.
- Clear fee comparison surfaces so users can see the cost difference.
- Real-time status indicators for confirmations and queued actions.
- Error states that explain next steps when network conditions change.`,
    results: `Delivered a user-friendly interface for an L2 product that makes fast/low-fee transfers approachable.

Client-facing outcomes:
- KPIs defined around fee savings visibility and transfer completion rate.
- Reduced confusion by surfacing confirmation states clearly.
- A modular UI foundation for expanding into accounts, history, and analytics.`,
    featured: false,
    category: "DeFi",
  },
  {
    id: "18",
    slug: "ovo",
    title: "OVO",
    summary: "A mobile Application crypto wallet for Ethereum. That allows users to send and receive crypto coins in a secure way.",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Ethereum"],
    metrics: [
      { metric: "Platform", value: "Mobile" },
      { metric: "Core Actions", value: "Send / Receive" },
      { metric: "Biometric UX (KPI)", value: "Enable rate" },
      { metric: "Crash-free (Target)", value: "> 99%" },
    ],
    thumbnail: getAssetPath("Ovo", "card.png"),
    heroImage: getAssetPath("Ovo", "card.png"),
    gallery: [],
    allImages: [
      getAssetPath("Ovo", "1.png"),
      getAssetPath("Ovo", "2.png"),
      getAssetPath("Ovo", "3.png"),
      getAssetPath("Ovo", "4.png"),
      getAssetPath("Ovo", "5.png"),
      getAssetPath("Ovo", "6.png"),
      getAssetPath("Ovo", "card.png"),
    ],
    problem: `On mobile, a wallet must feel secure and effortless. Users expect quick balance checks, easy address handling, and safe sends, with minimal friction.

The key problem was designing a send/receive experience that prevents common mistakes (wrong network, wrong address, invalid amounts) while keeping the flow fast.`,
    solution: `I implemented a mobile-first wallet UI in React.

Key UX safeguards:
- Strong input validation and clear error messaging for sends.
- QR-based receive flow and copy-safe address presentation.
- Clear transaction status screens so users know what’s happening.
- Layout optimized for one-handed use with accessible tap targets.`,
    results: `Delivered a secure-feeling mobile wallet experience centered on fast, validated transfers.

Client-facing outcomes:
- Defined KPIs around crash-free sessions and send-flow completion.
- Reduced user error risk through validation and status transparency.
- A scalable base for adding token lists, history, and security features.`,
    featured: false,
    category: "Mobile",
  },
  {
    id: "19",
    slug: "slack-clone-web-app",
    title: "Slack Clone Web App",
    summary: "A clone of slack built on ReactJS that offers direct messages as well as channel messages. including media messages with firebase at back",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Firebase"],
    metrics: [
      { metric: "Messaging", value: "Channels + DMs" },
      { metric: "Realtime Backend", value: "Firebase" },
      { metric: "Upload UX", value: "Media" },
      { metric: "Message Latency (KPI)", value: "Realtime" },
    ],
    thumbnail: getAssetPath("SlackClone", "1.png"),
    heroImage: getAssetPath("SlackClone", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("SlackClone", "1.png"),
      getAssetPath("SlackClone", "2.png"),
      getAssetPath("SlackClone", "3.png"),
      getAssetPath("SlackClone", "slackLogo.png"),
    ],
    link: "https://clone-slack-react-f2b16.firebaseapp.com",
    problem: `Team chat apps are only useful if they feel instantaneous and organized. The key problems are:

- Keeping channels and direct messages consistent and easy to navigate.
- Supporting media uploads without breaking the conversation flow.
- Maintaining realtime updates without UI flicker or confusing ordering.`,
    solution: `I built a Slack-style UI in React backed by Firebase.

Core features:
- Channel and DM experiences with predictable navigation.
- Realtime message streaming and updates.
- Media message support with upload and preview states.
- UI patterns that keep conversations readable and stable.`,
    results: `Delivered a functional realtime chat clone demonstrating end-to-end messaging workflows.

Client-facing outcomes:
- KPIs defined around message latency and upload success rate.
- Clear architecture for realtime collaboration patterns.
- A base that can grow into mentions, reactions, and read receipts.`,
    featured: false,
    category: "Other",
  },
  {
    id: "20",
    slug: "steps-counter-mobile-app",
    title: "Steps Counter Mobile App",
    summary:
      "A Mobile Side of My FYP where it counts the number of steps user has walked at the background and then periodically sends the user steps data to the iota tangle server",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Firebase"],
    metrics: [
      { metric: "Background Tracking", value: "Continuous" },
      { metric: "Sync Interval", value: "Periodic" },
      { metric: "Battery Impact (KPI)", value: "Minimized" },
      { metric: "Data Integrity (KPI)", value: "Verified" },
    ],
    thumbnail: getAssetPath("HealthEarn", "2.png"),
    heroImage: getAssetPath("HealthEarn", "2.png"),
    gallery: [],
    allImages: [
      getAssetPath("HealthEarn", "2.png"),
      getAssetPath("HealthEarn", "3.png"),
      getAssetPath("HealthEarn", "4.png"),
      getAssetPath("HealthEarn", "5.png"),
      getAssetPath("HealthEarn", "6.png"),
      getAssetPath("HealthEarn", "card.png"),
      getAssetPath("HealthEarn", "homeVideo.gif"),
      getAssetPath("HealthEarn", "video.gif"),
    ],
    link: "https://github.com/abdulhaseeb13mar/healthEarn",
    problem: `Background step counting is challenging: the app must continue tracking reliably when the user is not actively using it, without draining the battery.

On top of that, the project required periodic syncing of step data to an external ledger (IOTA Tangle server), which introduces reliability and connectivity concerns.`,
    solution: `I implemented the mobile UI and data flow in React.

Key elements:
- Background step tracking with user-friendly controls and clear daily summaries.
- Periodic sync pipeline that can tolerate intermittent connectivity.
- Transparent sync status so users know whether data is up to date.
- Clean separation of tracking, storage, and sync concerns to keep the app maintainable.`,
    results: `Delivered a functional research-grade mobile app that demonstrates reliable background tracking and periodic ledger syncing.

Client-facing outcomes:
- KPIs defined around sync success rate and battery impact.
- Improved data trust via explicit sync status and validation.
- A foundation for extending into rewards, health goals, and richer analytics.`,
    featured: false,
    category: "Mobile",
  },
  {
    id: "21",
    slug: "share-food-pakistan-mobile-app",
    title: "ShareFoodPakistan Mobile App",
    summary: "A Food Sharing app to let your excess food not go to waste instead you can post it and give it someone needy or even sell it",
    role: "Frontend Developer",
    techStack: ["React", "JavaScript", "Firebase"],
    metrics: [
      { metric: "Listings", value: "Post + Browse" },
      { metric: "Location UX", value: "Nearby" },
      { metric: "Trust Signals (KPI)", value: "Profiles" },
      { metric: "Time-to-Post (Target)", value: "< 2 min" },
    ],
    thumbnail: getAssetPath("ShareFoodPakistan", "card.png"),
    heroImage: getAssetPath("ShareFoodPakistan", "card.png"),
    gallery: [],
    allImages: [
      getAssetPath("ShareFoodPakistan", "1.png"),
      getAssetPath("ShareFoodPakistan", "2.png"),
      getAssetPath("ShareFoodPakistan", "3.png"),
      getAssetPath("ShareFoodPakistan", "4.png"),
      getAssetPath("ShareFoodPakistan", "5.png"),
      getAssetPath("ShareFoodPakistan", "card.png"),
    ],
    problem: `Food waste is often a logistics and discovery problem, people with excess food don’t have an easy way to find someone nearby who needs it.

The product needed a simple posting flow, clear listing details, and basic trust signals to encourage safe exchanges.`,
    solution: `I implemented a mobile-first sharing experience in React with Firebase as a backend.

Core features:
- Fast listing creation (photos/details) with validation and clear status.
- Browsing and discovery UX optimized for nearby listings.
- Basic user/account flows to support messaging and trust.
- Responsive UI patterns to keep interactions easy on mobile devices.`,
    results: `Delivered a functional food sharing app focused on reducing friction from “I have food” to “someone can pick it up.”

Client-facing outcomes:
- KPIs defined around time-to-post and listing-to-contact conversion.
- Clear UI foundation for adding moderation, verification, and delivery coordination.
- A scalable architecture for community growth.`,
    featured: false,
    category: "Mobile",
  },
  // {
  //   id: "22",
  //   slug: "interactive-to-do-app",
  //   title: "Interactive To-Do App",
  //   summary: "A To do app with a trello like drag n drop feature for the tasks",
  //   role: "Frontend Developer",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   metrics: [],
  //   thumbnail: getAssetPath("TodoApp", "1.png"),
  //   heroImage: getAssetPath("TodoApp", "1.png"),
  //   gallery: [],
  //   link: "https://abdulhaseeb13mar.github.io/todolist/",
  //   featured: false,
  //   category: "Other",
  // },
  {
    id: "23",
    slug: "tic-tac-toe-game",
    title: "Tic Tac Toe Game",
    summary: "A Simple Tic tac toe game using vanilla Javascript for the logic behind. with eye catching UI",
    role: "Frontend Developer",
    techStack: ["HTML", "CSS", "JavaScript"],
    metrics: [
      { metric: "Bundle / Dependencies", value: "0" },
      { metric: "Time-to-Interactive (Target)", value: "< 1s" },
      { metric: "Accessibility (Target)", value: "Keyboard" },
      { metric: "UX", value: "Responsive" },
    ],
    thumbnail: getAssetPath("TicTacToe", "1.png"),
    heroImage: getAssetPath("TicTacToe", "1.png"),
    gallery: [],
    allImages: [
      getAssetPath("TicTacToe", "1.png"),
      getAssetPath("TicTacToe", "2.png"),
      getAssetPath("TicTacToe", "3.png"),
      getAssetPath("TicTacToe", "4.png"),
      getAssetPath("TicTacToe", "logo.png"),
    ],
    link: "https://abdulhaseeb13mar.github.io/tictactoe/",
    problem: `Even simple games can feel unpolished if the UI isn’t responsive, the game state isn’t reliable, or users can’t play comfortably on mobile.

The goal here was to build a clean, interactive UI and implement correct game logic with a smooth player experience.`,
    solution: `I implemented the game in vanilla JavaScript with a UI-first approach.

What’s included:
- Reliable state handling for turns, wins, and resets.
- Clear visual feedback for moves and winning conditions.
- Responsive layout with an "eye-catching" UI.
- Keyboard-friendly interactions as an accessibility KPI to aim for.`,
    results: `Delivered a fast-loading, dependency-free game that demonstrates solid JavaScript fundamentals and UI polish.

Client-facing outcomes:
- Excellent performance potential due to zero framework overhead.
- Clear KPIs for interactivity and accessibility.
- A clean base for adding AI opponent, score history, and animations.`,
    featured: false,
    category: "Other",
  },
];
