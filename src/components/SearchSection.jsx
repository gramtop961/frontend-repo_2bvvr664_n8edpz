import { Search, ChevronDown } from 'lucide-react';

export default function SearchSection({
  query,
  onQueryChange,
  community,
  onCommunityChange,
  communities = [],
}) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
        <label className="group relative flex items-center overflow-hidden rounded-xl bg-slate-900/70 ring-1 ring-slate-800 focus-within:ring-emerald-500/50">
          <Search className="ml-3 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-emerald-400" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search projects, topics, or tags..."
            className="w-full bg-transparent px-3 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none sm:text-base"
            aria-label="Search projects"
          />
        </label>

        <div id="community" className="relative">
          <button
            className="flex w-full items-center justify-between gap-3 rounded-xl bg-slate-900/70 px-4 py-3.5 text-left text-sm text-slate-200 ring-1 ring-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 sm:min-w-[240px] sm:text-base"
            aria-haspopup="listbox"
            aria-expanded="true"
          >
            <span className="truncate">
              {community}
            </span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {communities.map((c) => (
              <button
                key={c}
                onClick={() => onCommunityChange(c)}
                className={`truncate rounded-lg px-3 py-2 text-xs font-medium ring-1 transition-colors sm:text-sm ${
                  c === community
                    ? 'bg-emerald-500/15 text-emerald-300 ring-emerald-500/30'
                    : 'bg-slate-900/60 text-slate-300 ring-slate-800 hover:bg-slate-900'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
        <span className="rounded-full bg-slate-800/60 px-2.5 py-1 ring-1 ring-slate-700">
          Tip: combine community + keywords like “AI routing” or “civic maps”.
        </span>
      </div>
    </div>
  );
}
