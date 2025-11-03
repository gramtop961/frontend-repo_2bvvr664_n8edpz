import { Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectGrid({ projects, query, community }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-dashed border-slate-800/80 bg-slate-900/40 p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-slate-800/60 ring-1 ring-slate-700">
          <Sparkles className="h-5 w-5 text-emerald-300" />
        </div>
        <h3 className="text-lg font-semibold text-slate-100">No matches yet</h3>
        <p className="mt-1 text-sm text-slate-400">
          Try adjusting your search or picking a different community.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
        <div>
          Showing <span className="font-semibold text-slate-200">{projects.length}</span> match{projects.length === 1 ? '' : 'es'}
          {query && (
            <>
              {' '}for “<span className="font-medium text-slate-200">{query}</span>”
            </>
          )}
          {community && community !== 'All Communities' && (
            <>
              {' '}in <span className="font-medium text-slate-200">{community}</span>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
