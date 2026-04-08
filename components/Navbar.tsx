export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-brand-black font-semibold text-lg tracking-tighter">
            doctrinoo
          </span>
          <span className="text-[10px] font-medium text-brand-gray-400 uppercase tracking-widest border border-brand-gray-200 rounded px-1.5 py-0.5">
            Bêta
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-brand-gray-600">
          <a href="#solution" className="hover:text-brand-black transition-colors">
            Solution
          </a>
          <a href="#fonctionnalites" className="hover:text-brand-black transition-colors">
            Fonctionnalités
          </a>
          <a href="#couverture" className="hover:text-brand-black transition-colors">
            Couverture
          </a>
          <a href="#pour-qui" className="hover:text-brand-black transition-colors">
            Pour qui
          </a>
        </nav>

        <a
          href="https://app.doctrinoo.com"
          className="text-sm font-medium bg-brand-black text-white px-4 py-2 rounded hover:bg-brand-gray-800 transition-colors"
        >
          Accéder gratuitement
        </a>
      </div>
    </header>
  )
}
