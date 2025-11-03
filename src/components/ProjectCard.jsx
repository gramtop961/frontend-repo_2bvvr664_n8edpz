import { ExternalLink, Star, Tag, Users } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-900/60 p-4 ring-1 ring-slate-800 transition-transform hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-slate-700">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-400">
            {project.description}
          </p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/20"
        >
          Visit <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.tags?.slice(0, 4).map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1 rounded-md bg-slate-800/60 px-2 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700"
          >
            <Tag className="h-3 w-3" />
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <div className="inline-flex items-center gap-1.5">
          <Star className="h-4 w-4 text-amber-400" />
          <span className="font-medium text-slate-200">{project.stars.toLocaleString()}</span>
          <span>stars</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Users className="h-4 w-4 text-sky-400" />
          <span>{project.community}</span>
        </div>
      </div>
    </div>
  );
}
