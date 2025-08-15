export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  participants: string[];
  organizer: string;
  status: 'completed' | 'upcoming' | 'live';
  transcript?: string;
  transcriptSegments?: TranscriptSegment[];
  outline?: OutlineItem[];
  summary?: string;
  audioUrl?: string;
}

export interface OutlineItem {
  id: string;
  title: string;
  timestamp: string;
  content: string;
}

export interface Channel {
  id: string;
  name: string;
  memberCount: number;
  isPrivate: boolean;
  lastActivity: string;
}

export interface TranscriptSegment {
  id: string;
  speaker: string;
  timestamp: string; // mm:ss
  text: string;
}

export const dummyMeetings: Meeting[] = [
  {
    id: "fireflies-ai-overview",
    title: "Fireflies AI Platform Quick Overview",
    date: "Thu, Aug 08 2024",
    time: "04:22 PM",
    duration: "8 mins",
    participants: ["Fred Fireflies", "Krish Ramineni"],
    organizer: "Fred Fireflies",
    status: "completed",
    summary:
      "Engaging walkthrough of Fireflies core features: automatic note-taking, AI summaries, smart search, collaboration tools, and integrations across the stack.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    outline: [
      { id: "overview-1", title: "Welcome and Dashboard Overview", timestamp: "00:00", content: "Walkthrough of the dashboard, past digests, and quick settings." },
      { id: "overview-2", title: "Core Features", timestamp: "00:37", content: "AI tasks, contacts CRM, and rich notes with timestamps and speakers." },
      { id: "overview-3", title: "Collaboration Tools", timestamp: "02:15", content: "Ask Fred, soundbites, bookmarks, and sharing workflows." },
      { id: "overview-4", title: "Integrations & Team", timestamp: "04:30", content: "Salesforce, Slack, and org-level analytics and controls." }
    ],
    transcriptSegments: [
      { id: "seg-1", speaker: "Krish Ramineni", timestamp: "00:00", text: "Welcome to Fireflies! Let's explore features that help you work smarter in meetings." },
      { id: "seg-2", speaker: "Krish Ramineni", timestamp: "00:18", text: "This feed shows your past meetings with quick digests and insights at a glance." },
      { id: "seg-3", speaker: "Krish Ramineni", timestamp: "00:37", text: "You can control which meetings Fireflies joins and who gets access to notes." },
      { id: "seg-4", speaker: "Fred Fireflies", timestamp: "01:05", text: "I keep defaults on so I never miss important context from calls." },
      { id: "seg-5", speaker: "Krish Ramineni", timestamp: "02:01", text: "Global language settings ensure accurate transcription for multilingual teams." }
    ]
  },
  {
    id: "product-roadmap-q4",
    title: "Product Roadmap Q4 2024",
    date: "Wed, Aug 07 2024",
    time: "02:15 PM",
    duration: "45 mins",
    participants: ["Sarah Johnson", "Mike Chen", "Alex Rodriguez", "Emma Thompson"],
    organizer: "Sarah Johnson",
    status: "completed",
    summary:
      "Quarterly roadmap review aligning on AI features, mobile UX revamp, performance targets, and resourcing constraints for Q4 delivery.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    outline: [
      { id: "roadmap-1", title: "Q3 Retrospective", timestamp: "00:00", content: "What shipped, what slipped, quality metrics, and user feedback." },
      { id: "roadmap-2", title: "Q4 Priorities", timestamp: "15:30", content: "Top initiatives: real-time summaries, improved speaker diarization, and mobile UI refresh." },
      { id: "roadmap-3", title: "Resourcing & Risks", timestamp: "32:00", content: "Hiring plan, dependencies, and risk mitigation strategies." }
    ],
    transcriptSegments: [
      { id: "pr-seg-1", speaker: "Sarah Johnson", timestamp: "00:12", text: "Let's ground ourselves on Q3 learnings before locking Q4 scope." },
      { id: "pr-seg-2", speaker: "Mike Chen", timestamp: "08:10", text: "Diarization accuracy improved 6% after the latest model update." },
      { id: "pr-seg-3", speaker: "Emma Thompson", timestamp: "23:22", text: "Mobile UX beta tests show 18% higher task completion rates." }
    ]
  },
  {
    id: "weekly-standup-aug-5",
    title: "Weekly Team Standup",
    date: "Mon, Aug 05 2024",
    time: "09:00 AM",
    duration: "30 mins",
    participants: ["John Doe", "Jane Smith", "Bob Wilson", "Alice Brown"],
    organizer: "John Doe",
    status: "completed",
    summary:
      "Sprint check-in covering progress on tickets, cross-team blockers, and next 48h priorities.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    outline: [
      { id: "standup-1", title: "Yesterday", timestamp: "00:00", content: "Updates from each member on completed work." },
      { id: "standup-2", title: "Today", timestamp: "12:00", content: "Work planned and any pairing needs." },
      { id: "standup-3", title: "Blockers", timestamp: "22:15", content: "Identify and assign owners to unblock." }
    ],
    transcriptSegments: [
      { id: "su-1", speaker: "Jane Smith", timestamp: "02:04", text: "Ship the hotfix for the transcript alignment bug by EOD." },
      { id: "su-2", speaker: "Bob Wilson", timestamp: "10:50", text: "Need review on the caching changes for meeting search." },
      { id: "su-3", speaker: "Alice Brown", timestamp: "18:03", text: "Running perf tests; early results look promising." }
    ]
  },
  {
    id: "client-demo-acme",
    title: "ACME Corp Product Demo",
    date: "Fri, Aug 09 2024",
    time: "03:00 PM",
    duration: "60 mins",
    participants: ["Tom Anderson", "Lisa Parker", "David Kim"],
    organizer: "Tom Anderson",
    status: "upcoming",
    summary:
      "Live demo for ACME showing call recording, instant summaries, topic trackers, and CRM sync.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    outline: [
      { id: "acme-1", title: "Discovery Recap", timestamp: "00:00", content: "Restate ACME goals and success metrics." },
      { id: "acme-2", title: "Demo Flow", timestamp: "05:30", content: "Record, transcribe, summarize, and share." },
      { id: "acme-3", title: "Integrations", timestamp: "32:40", content: "HubSpot, Slack, and Google Drive hand-offs." }
    ],
    transcript:
      "Agenda: recap, demo, Q&A. We'll tailor the integrations segment based on ACME's stack."
  },
  {
    id: "sales-discovery-globex",
    title: "Sales Discovery - Globex",
    date: "Tue, Aug 06 2024",
    time: "11:30 AM",
    duration: "40 mins",
    participants: ["Nina Patel", "Carlos Diaz", "Priya Singh"],
    organizer: "Nina Patel",
    status: "completed",
    summary:
      "Discovery call to understand Globex's workflow, security requirements, and adoption plan.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    outline: [
      { id: "globex-1", title: "Context & Goals", timestamp: "00:00", content: "Team structure, KPIs, and success definition." },
      { id: "globex-2", title: "Process Mapping", timestamp: "12:45", content: "Current meeting tooling and pain points." },
      { id: "globex-3", title: "Security", timestamp: "28:10", content: "Data retention, SSO/SCIM, and SOC2 queries." }
    ],
    transcriptSegments: [
      { id: "gx-1", speaker: "Carlos Diaz", timestamp: "03:18", text: "SOC2 Type II is a must, plus granular sharing controls." },
      { id: "gx-2", speaker: "Priya Singh", timestamp: "17:02", text: "We need highlights pushed to Slack channels automatically." },
      { id: "gx-3", speaker: "Nina Patel", timestamp: "34:55", text: "We'll share a sandbox with pre-configured policies." }
    ]
  },
  {
    id: "design-review-notifications",
    title: "Design Review: Notifications",
    date: "Thu, Aug 08 2024",
    time: "01:00 PM",
    duration: "50 mins",
    participants: ["Emma Thompson", "Liam Wong", "Grace Lee", "Mike Chen"],
    organizer: "Emma Thompson",
    status: "completed",
    summary:
      "Reviewed notification taxonomy, default settings, and digest strategy to reduce noise.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    outline: [
      { id: "notif-1", title: "Use Cases", timestamp: "00:00", content: "What events need user attention vs passive logging." },
      { id: "notif-2", title: "Delivery", timestamp: "19:12", content: "Real-time vs batched digests by role." },
      { id: "notif-3", title: "Config", timestamp: "36:40", content: "Per-user overrides and admin policies." }
    ],
    transcriptSegments: [
      { id: "nr-1", speaker: "Grace Lee", timestamp: "07:52", text: "Digest summaries reduce cognitive load for managers." },
      { id: "nr-2", speaker: "Mike Chen", timestamp: "22:11", text: "We can piggyback on the existing events pipeline." },
      { id: "nr-3", speaker: "Emma Thompson", timestamp: "41:48", text: "Let's prototype two variants and run usability tests." }
    ]
  },
  {
    id: "marketing-kickoff-q4",
    title: "Marketing Campaign Kickoff (Q4)",
    date: "Mon, Aug 12 2024",
    time: "10:00 AM",
    duration: "55 mins",
    participants: ["Olivia Perez", "Hannah Kim", "Dan Brown", "Kevin Wu"],
    organizer: "Olivia Perez",
    status: "completed",
    summary:
      "Established ICP, channels, budget caps, and creative timelines for Q4 demand gen.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    outline: [
      { id: "mk-1", title: "ICP Refresh", timestamp: "00:00", content: "Segments, personas, and updated messaging pillars." },
      { id: "mk-2", title: "Channels", timestamp: "16:20", content: "Paid social, webinars, and partner co-marketing." },
      { id: "mk-3", title: "Timeline", timestamp: "39:30", content: "Asset production and launch milestones." }
    ],
    transcriptSegments: [
      { id: "mk-t1", speaker: "Hannah Kim", timestamp: "05:44", text: "Webinars drive the highest qualified pipeline for us." },
      { id: "mk-t2", speaker: "Dan Brown", timestamp: "27:31", text: "Let's A/B test headline angles around AI copilots." },
      { id: "mk-t3", speaker: "Kevin Wu", timestamp: "46:12", text: "We can repurpose snippets into short-form video." }
    ]
  },
  {
    id: "company-allhands-aug",
    title: "Company All-Hands (August)",
    date: "Fri, Aug 09 2024",
    time: "11:00 AM",
    duration: "60 mins",
    participants: ["Exec Team", "All Staff"],
    organizer: "CEO Office",
    status: "completed",
    summary:
      "Business updates, product wins, customer stories, and AMA with leadership.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    outline: [
      { id: "ah-1", title: "Business Update", timestamp: "00:00", content: "MRR, churn, and hiring updates." },
      { id: "ah-2", title: "Product", timestamp: "14:10", content: "Recent launches and roadmap teasers." },
      { id: "ah-3", title: "AMA", timestamp: "42:05", content: "Open Q&A with leadership." }
    ],
    transcriptSegments: [
      { id: "ah-t1", speaker: "CEO", timestamp: "02:33", text: "Kudos to the team for shipping on time while maintaining quality." },
      { id: "ah-t2", speaker: "CTO", timestamp: "18:47", text: "Latency dropped 23% after infra upgrades." }
    ]
  },
  {
    id: "support-review-week32",
    title: "Customer Support Review - Week 32",
    date: "Tue, Aug 06 2024",
    time: "04:00 PM",
    duration: "35 mins",
    participants: ["Maya Patel", "Chris Evans", "Julia Roberts"],
    organizer: "Maya Patel",
    status: "completed",
    summary:
      "Top issues, SLA adherence, and proactive docs to reduce repeat tickets.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    outline: [
      { id: "sr-1", title: "Ticket Trends", timestamp: "00:00", content: "Top 5 issues and root causes." },
      { id: "sr-2", title: "SLA & Quality", timestamp: "13:40", content: "Response times and CSAT trends." },
      { id: "sr-3", title: "Prevention", timestamp: "25:18", content: "Docs and in-product tips to deflect tickets." }
    ],
    transcriptSegments: [
      { id: "sr-t1", speaker: "Chris Evans", timestamp: "06:22", text: "Most failures cluster around legacy upload endpoints." },
      { id: "sr-t2", speaker: "Julia Roberts", timestamp: "20:10", text: "We should surface retry guidance inside the UI." }
    ]
  },
  {
    id: "sprint-planning-30",
    title: "Sprint Planning - #30",
    date: "Wed, Aug 14 2024",
    time: "10:30 AM",
    duration: "75 mins",
    participants: ["Eng Team", "PM Team"],
    organizer: "Mike Chen",
    status: "upcoming",
    summary:
      "Plan scope for Sprint 30 with capacity allocations and cross-team dependencies.",
    outline: [
      { id: "sp-1", title: "Capacity", timestamp: "00:00", content: "Holidays and load balancing." },
      { id: "sp-2", title: "Priority", timestamp: "10:00", content: "Must-haves vs stretch goals." },
      { id: "sp-3", title: "Risks", timestamp: "62:30", content: "Mitigations for API stability." }
    ]
  },
  {
    id: "retro-sprint-29",
    title: "Sprint 29 Retrospective",
    date: "Mon, Aug 12 2024",
    time: "04:30 PM",
    duration: "45 mins",
    participants: ["Eng Team"],
    organizer: "Jane Smith",
    status: "completed",
    summary:
      "What went well, what could improve, and actionable experiments for the next sprint.",
    outline: [
      { id: "re-1", title: "Went Well", timestamp: "00:00", content: "Cross-team collaboration and faster reviews." },
      { id: "re-2", title: "Improve", timestamp: "17:45", content: "Clearer handoffs and better release notes." },
      { id: "re-3", title: "Actions", timestamp: "33:10", content: "Introduce release captains and doc templates." }
    ],
    transcriptSegments: [
      { id: "re-t1", speaker: "Jane Smith", timestamp: "12:11", text: "Rotating captains should improve reliability without adding overhead." }
    ]
  },
  {
    id: "board-update-prep",
    title: "Board Update Prep",
    date: "Thu, Aug 15 2024",
    time: "02:00 PM",
    duration: "50 mins",
    participants: ["Exec Team", "Finance", "Product"],
    organizer: "CFO Office",
    status: "upcoming",
    summary:
      "Finalize narrative, metrics, and customer anecdotes for the quarterly board deck.",
    outline: [
      { id: "bd-1", title: "KPIs", timestamp: "00:00", content: "Growth, retention, and burn." },
      { id: "bd-2", title: "Product", timestamp: "18:22", content: "Feature adoption and roadmap." },
      { id: "bd-3", title: "Customers", timestamp: "35:10", content: "Notable wins and expansions." }
    ],
    transcript:
      "Focus on clarity and momentum; keep the appendix for deep dives."
  },
  {
    id: "partnership-negotiation-zenith",
    title: "Partnership Negotiation - Zenith Labs",
    date: "Tue, Aug 13 2024",
    time: "01:30 PM",
    duration: "55 mins",
    participants: ["BD Team", "Zenith Legal"],
    organizer: "Laura Hill",
    status: "live",
    summary:
      "Live review of commercial terms, data-sharing addendum, and rollout plan.",
    outline: [
      { id: "zn-1", title: "Scope", timestamp: "00:00", content: "Pilot footprint and success metrics." },
      { id: "zn-2", title: "Terms", timestamp: "22:18", content: "Pricing tiers and renewal clauses." },
      { id: "zn-3", title: "Timeline", timestamp: "44:05", content: "Rollout and joint PR." }
    ],
    transcriptSegments: [
      { id: "zn-t1", speaker: "Laura Hill", timestamp: "03:12", text: "Let's align on the MSA language before pricing." },
      { id: "zn-t2", speaker: "Zenith Legal", timestamp: "27:40", text: "We can accept annual prepay with a ramp clause." }
    ]
  },
  {
    id: "research-interview-032",
    title: "User Research Interview #032",
    date: "Wed, Aug 07 2024",
    time: "05:00 PM",
    duration: "35 mins",
    participants: ["UX Research", "Participant"],
    organizer: "UX Research",
    status: "completed",
    summary:
      "Interview exploring meeting recap usage and how teams share highlights.",
    outline: [
      { id: "ri-1", title: "Background", timestamp: "00:00", content: "Role, tools, and workflows." },
      { id: "ri-2", title: "Habits", timestamp: "10:20", content: "How notes are captured and shared." },
      { id: "ri-3", title: "Pain Points", timestamp: "24:55", content: "Gaps in current solutions." }
    ],
    transcriptSegments: [
      { id: "ri-t1", speaker: "Participant", timestamp: "16:03", text: "Automatic summaries save us hours each week." }
    ]
  }
];

export const dummyChannels: Channel[] = [
  {
    id: "general",
    name: "General",
    memberCount: 12,
    isPrivate: false,
    lastActivity: "2 hours ago"
  },
  {
    id: "product-team",
    name: "Product Team",
    memberCount: 8,
    isPrivate: true,
    lastActivity: "1 day ago"
  },
  {
    id: "engineering",
    name: "Engineering",
    memberCount: 15,
    isPrivate: false,
    lastActivity: "30 minutes ago"
  },
  {
    id: "design-reviews",
    name: "Design Reviews",
    memberCount: 6,
    isPrivate: true,
    lastActivity: "3 days ago"
  }
];
