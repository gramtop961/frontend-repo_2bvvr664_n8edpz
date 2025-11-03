import { Rocket, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-emerald-500/20 p-2 ring-1 ring-emerald-500/30">
            <Rocket className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-100 sm:text-base">
            Matchmaker
          </span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="#community"
            className="inline-flex items-center gap-2 rounded-md bg-slate-800/60 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-slate-700 hover:bg-slate-800 hover:ring-slate-600 sm:text-sm"
          >
            <Users className="h-4 w-4" />
            Community
          </a>
        </nav>
      </div>
    </header>
  );
}
