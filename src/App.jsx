import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import SearchSection from './components/SearchSection.jsx';
import ProjectGrid from './components/ProjectGrid.jsx';

// Sample dataset to demonstrate the UI. In a real app, this would come from an API.
const SAMPLE_PROJECTS = [
  {
    id: 'p1',
    title: 'OpenAI Prompt Toolkit',
    description:
      'A toolkit for building, testing, and sharing prompt engineering workflows. Includes templates and evaluation harness.',
    tags: ['AI', 'NLP', 'Open Source'],
    stars: 1240,
    community: 'AI Builders',
    url: 'https://github.com/example/prompt-toolkit',
  },
  {
    id: 'p2',
    title: 'GreenCity Mapper',
    description:
      'Community-driven mapping of urban green spaces with crowd-sourced maintenance tasks and events.',
    tags: ['Civic', 'Maps', 'Sustainability'],
    stars: 412,
    community: 'Civic Tech',
    url: 'https://github.com/example/greencity-mapper',
  },
  {
    id: 'p3',
    title: 'DevSync',
    description:
      'Real-time team presence and pairing scheduler for remote-first engineering orgs.',
    tags: ['Web', 'Productivity'],
    stars: 980,
    community: 'Open Source',
    url: 'https://github.com/example/devsync',
  },
  {
    id: 'p4',
    title: 'HealthTrack',
    description:
      'Privacy-first wellness tracking with plug-and-play integrations and local-first sync.',
    tags: ['Health', 'Mobile', 'Privacy'],
    stars: 265,
    community: 'Makers',
    url: 'https://github.com/example/healthtrack',
  },
  {
    id: 'p5',
    title: 'EcoRoute Planner',
    description:
      'Route optimization that prioritizes carbon reduction and public transit interop.',
    tags: ['AI', 'Sustainability', 'Logistics'],
    stars: 735,
    community: 'AI Builders',
    url: 'https://github.com/example/ecoroute',
  },
];

const COMMUNITIES = ['All Communities', 'AI Builders', 'Civic Tech', 'Open Source', 'Makers'];

export default function App() {
  const [query, setQuery] = useState('');
  const [community, setCommunity] = useState('All Communities');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SAMPLE_PROJECTS.filter((p) => {
      const matchesCommunity =
        community === 'All Communities' || p.community === community;
      if (!q) return matchesCommunity;
      const haystack = [p.title, p.description, p.tags.join(' '), p.community]
        .join(' ')
        .toLowerCase();
      return matchesCommunity && haystack.includes(q);
    });
  }, [query, community]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section className="py-10 sm:py-12">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Smart Recommendations
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Project Matchmaker
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
              Search projects, pick a community, and discover matches that fit your
              interests.
            </p>
          </div>

          <SearchSection
            query={query}
            onQueryChange={setQuery}
            community={community}
            onCommunityChange={setCommunity}
            communities={COMMUNITIES}
          />
        </section>

        <section className="pb-16">
          <ProjectGrid projects={filtered} query={query} community={community} />
        </section>
      </main>

      <footer className="border-t border-slate-800/60 py-8 text-center text-xs text-slate-400">
        Built for exploring and matching with meaningful projects.
      </footer>
    </div>
  );
}
