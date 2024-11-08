export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-100 h-screen">
      <h1 className="flex items-center gap-3 font-bold text-5xl before:w-0.5 before:h-8  before:bg-sky-500">
        Hello Tailwind
      </h1>
      <button className="bg-sky-500 text-white py-2 px-4 rounded font-medium mt-4 enabled:hover:bg-sky-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
        Sign In
      </button>
    </div>
  );
}
