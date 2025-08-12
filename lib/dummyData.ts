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
  outline?: OutlineItem[];
  summary?: string;
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
    summary: "The 'Fireflies AI Platform Quick Overview' presentation provided an engaging summary of the platform's core features and capabilities, focusing on enhancing meeting efficiency and collaboration. The meeting began with a welcome segment that showcased a dashboard displaying past meeting digests, upcoming attendance options, and language settings for transcription. Notably, the platform's tasks feature automatically generates action items, while the contacts section offers a lightweight CRM for participants. Comprehensive meeting notes with timestamps, speaker identification, and smart search filters were highlighted, along with collaboration tools such as 'Ask Fred,' soundbite creation, and bookmarking. Additionally, the presentation covered organizational capabilities like private/public channels, audio file uploads, and integrations with major platforms such as Salesforce and Slack. Finally, team management features and analytics for performance insights were discussed, positioning Fireflies as a powerful tool for improving meeting productivity and collaboration.",
    outline: [
      {
        id: "overview-1",
        title: "Welcome and Dashboard Overview",
        timestamp: "00:00",
        content: "Introduction to Fireflies platform with dashboard displaying past meeting digests and settings"
      },
      {
        id: "overview-2", 
        title: "Core Features Presentation",
        timestamp: "00:37",
        content: "Overview of automated tasks, CRM capabilities, and meeting notes with timestamps"
      },
      {
        id: "overview-3",
        title: "Collaboration Tools",
        timestamp: "02:15",
        content: "Discussion of Ask Fred, soundbite creation, and bookmarking features"
      },
      {
        id: "overview-4",
        title: "Platform Integrations",
        timestamp: "04:30",
        content: "Coverage of Salesforce, Slack integrations and team management"
      }
    ],
    transcript: `Welcome to Fireflies. Now that you've signed up, we're going to show you some of the core features that you can start using. Right now we're on the welcome screen. In this screen you'll see a feed where all of your past meetings with quick little digests are shown here that you can scroll through. We also have on the top right my join and share settings. Here I can pick which meetings fireflies should automatically join or should not join and then who those meetings should be shared with or not shared with. Usually I have it set so that it joins all the meetings on my calendar and it shares it with all the participants that were in that meeting if I wanted to.

I can also scroll down and look at my upcoming meetings and toggle on if I want fireflies to join it, or toggle off if I don't want it to join it. And I can also pick the language for those meetings in case I'm about to have a meeting in another language, I can go and click that before the meeting and then fireflies will transcribe and summarize it in the right language. We also have the global language settings here, so if you want all of your meetings by default transcribed and captured in a particular language, you can change it by default it'll be English if I want to add fireflies to a live meeting that I forgot to invite it to, I can use add to live meeting. But in the meeting URL and then hit start and it'll join that meeting in the background.`
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
    summary: "Quarterly product roadmap review covering upcoming features, resource allocation, and timeline adjustments for Q4 2024 deliverables.",
    outline: [
      {
        id: "roadmap-1",
        title: "Q3 Retrospective",
        timestamp: "00:00",
        content: "Review of Q3 achievements and missed targets"
      },
      {
        id: "roadmap-2",
        title: "Q4 Feature Priorities",
        timestamp: "15:30",
        content: "Discussion of new AI features and user interface improvements"
      },
      {
        id: "roadmap-3",
        title: "Resource Planning",
        timestamp: "32:00",
        content: "Team allocation and budget considerations for Q4"
      }
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
    summary: "Weekly team standup covering current sprint progress, blockers, and upcoming priorities.",
    outline: [
      {
        id: "standup-1",
        title: "Sprint Progress Review",
        timestamp: "00:00",
        content: "Team updates on current sprint tasks and completion status"
      },
      {
        id: "standup-2",
        title: "Blockers Discussion",
        timestamp: "20:00",
        content: "Identification and resolution planning for current blockers"
      }
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
    summary: "Product demonstration for ACME Corp showcasing key platform features and integration capabilities."
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
