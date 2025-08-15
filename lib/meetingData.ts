import { MeetingData } from '@/types';

export const meetingsData: MeetingData[] = [
  {
    id: 'm1',
    title: 'YGoldfish AI Platform Quick Overview',
    host: 'Fred Fireflies',
    date: '2024-08-08T16:22:00Z',
    durationMinutes: 8,
    overview: 'The "Fireflies AI Platform Quick Overview" presentation provided an engaging summary of the platform\'s core features and capabilities, focusing on enhancing meeting efficiency and collaboration. The meeting began with a welcome segment that showcased a dashboard displaying past meeting digests, upcoming attendance options, and language settings for transcription.',
    outline: [
      {
        id: 'o1',
        title: 'Welcome & Dashboard Overview',
        timestamp: '00:00',
        duration: '2:30'
      },
      {
        id: 'o2', 
        title: 'Automatic Action Items Feature',
        timestamp: '02:30',
        duration: '1:45'
      },
      {
        id: 'o3',
        title: 'Meeting Notes & Search',
        timestamp: '04:15',
        duration: '2:00'
      },
      {
        id: 'o4',
        title: 'Collaboration Tools',
        timestamp: '06:15',
        duration: '1:30'
      },
      {
        id: 'o5',
        title: 'Analytics & Performance',
        timestamp: '07:45',
        duration: '0:37'
      }
    ],
    chapters: [
      {
        id: 'c1',
        title: 'Chapter 1: Platform Introduction',
        timestamp: '00:00',
        duration: '2:30',
        summary: 'Welcome to Fireflies. Dashboard displays past meeting digests, upcoming attendance options, and transcription settings.'
      },
      {
        id: 'c2',
        title: 'Chapter 2: Task Management',
        timestamp: '02:30',
        duration: '1:45', 
        summary: 'Tasks feature auto-generates action items for participants with smart categorization.'
      },
      {
        id: 'c3',
        title: 'Chapter 3: Note Taking',
        timestamp: '04:15',
        duration: '2:00',
        summary: 'Meeting notes include timestamps, speaker identification, and smart search filters for easy navigation.'
      },
      {
        id: 'c4',
        title: 'Chapter 4: Team Collaboration',
        timestamp: '06:15',
        duration: '1:30',
        summary: 'Tools like "Ask Fred" and soundbite creation enhance team collaboration and knowledge sharing.'
      },
      {
        id: 'c5',
        title: 'Chapter 5: Analytics Dashboard',
        timestamp: '07:45',
        duration: '0:37',
        summary: 'Team management features and analytics provide insights into meeting productivity and performance metrics.'
      }
    ],
    transcript: [
      {
        id: 't1',
        speaker: 'Krish Ramineni',
        timestamp: '00:00',
        text: 'Welcome to Fireflies. Now that you\'ve signed up, we\'re going to show you some of the core features that you can start using. Right now we\'re on the welcome screen. In this screen you\'ll see a feed where all of your past meetings with quick little digests are shown here that you can scroll through.'
      },
      {
        id: 't2',
        speaker: 'Krish Ramineni', 
        timestamp: '00:37',
        text: 'I can also scroll down and look at my upcoming meetings and toggle on if I want fireflies to join it, or toggle off if I don\'t want it to join it. And I can also pick the language of those meetings in case I\'m about to have a meeting in another language.'
      },
      {
        id: 't3',
        speaker: 'Krish Ramineni',
        timestamp: '01:14',
        text: 'Usually if you have fireflies connected we recommend you just having the auto join settings so that it\'ll just join your meetings and you have to constantly remember to enable these settings. That\'s my preferred settings.'
      },
      {
        id: 't4',
        speaker: 'Krish Ramineni',
        timestamp: '02:30',
        text: 'The Tasks feature automatically generates action items for participants. These are smart categorizations that help teams stay on track with their commitments and deliverables discussed during meetings.'
      },
      {
        id: 't5',
        speaker: 'Krish Ramineni',
        timestamp: '04:15',
        text: 'Meeting notes include comprehensive timestamps, accurate speaker identification, and powerful search filters. This makes it incredibly easy to navigate through long meetings and find specific discussions or decisions.'
      },
      {
        id: 't6',
        speaker: 'Krish Ramineni',
        timestamp: '06:15',
        text: 'Our collaboration tools like "Ask Fred" and soundbite creation enhance team collaboration. You can create shareable moments from meetings and get AI-powered insights about your discussions.'
      },
      {
        id: 't7',
        speaker: 'Krish Ramineni',
        timestamp: '07:45',
        text: 'Finally, our analytics dashboard provides deep insights into meeting productivity, helping teams understand their collaboration patterns and improve their meeting effectiveness over time.'
      }
    ]
  },
  {
    id: 'm2',
    title: 'Weekly Product Sync',
    host: 'Product Team',
    date: '2024-08-12T14:00:00Z',
    durationMinutes: 30,
    overview: 'Weekly product synchronization meeting covering sprint progress, upcoming features, and team coordination. Discussed current development status and planning for next iteration.',
    outline: [
      {
        id: 'o1',
        title: 'Sprint Review',
        timestamp: '00:00',
        duration: '10:00'
      },
      {
        id: 'o2',
        title: 'Feature Planning',
        timestamp: '10:00',
        duration: '15:00'
      },
      {
        id: 'o3',
        title: 'Team Updates',
        timestamp: '25:00',
        duration: '5:00'
      }
    ],
    chapters: [
      {
        id: 'c1',
        title: 'Chapter 1: Current Sprint Status',
        timestamp: '00:00',
        duration: '10:00',
        summary: 'Review of completed tasks, blockers, and progress towards sprint goals.'
      },
      {
        id: 'c2',
        title: 'Chapter 2: Next Sprint Planning',
        timestamp: '10:00',
        duration: '15:00',
        summary: 'Discussion of upcoming features, priorities, and resource allocation.'
      },
      {
        id: 'c3',
        title: 'Chapter 3: Team Coordination',
        timestamp: '25:00',
        duration: '5:00',
        summary: 'Individual team member updates and cross-team dependencies.'
      }
    ],
    transcript: [
      {
        id: 't1',
        speaker: 'Sarah Chen',
        timestamp: '00:00',
        text: 'Good afternoon everyone. Let\'s start with our sprint review. We completed 8 out of 10 planned stories this sprint.'
      },
      {
        id: 't2',
        speaker: 'Mike Johnson',
        timestamp: '02:15',
        text: 'The API integration took longer than expected due to some authentication issues we discovered during testing.'
      },
      {
        id: 't3',
        speaker: 'Sarah Chen',
        timestamp: '10:00',
        text: 'Moving on to next sprint planning. Our main focus will be the new dashboard redesign and mobile responsiveness improvements.'
      }
    ]
  }
];

export const getMeetingById = (id: string): MeetingData | undefined => {
  return meetingsData.find(meeting => meeting.id === id);
};
