export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        {/* Label */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-8">
          <span className="w-4 h-px bg-brand-gray-400" />
          Droit OHADA · Droit sénégalais · LegalTech
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tightest text-brand-black leading-[1.05] mb-8">
          Le droit OHADA,{' '}
          <br className="hidden md:block" />
          enfin accessible.
        </h1>

        {/* Subhead */}
        <p className="text-xl md:text-2xl text-brand-gray-500 font-light leading-relaxed max-w-2xl mb-12">
          doctrinoo centralise les textes, la jurisprudence et la doctrine du droit OHADA
          et des droits nationaux africains — en un seul endroit, consultable en secondes.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://app.doctrinoo.com"
            className="inline-flex items-center gap-2 bg-brand-black text-white text-sm font-medium px-6 py-3.5 rounded hover:bg-brand-gray-800 transition-colors"
          >
            Accéder gratuitement
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#fonctionnalites"
            className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors underline underline-offset-4"
          >
            Découvrir les fonctionnalités
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-20 pt-8 border-t border-brand-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: '4 000+', label: 'Articles indexés' },
          { value: '5 000+', label: 'Documents de jurisprudence' },
          { value: '1 000+', label: 'Articles de doctrine' },
          { value: '17', label: 'États membres OHADA' },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-semibold tracking-tightest text-brand-black">
              {stat.value}
            </div>
            <div className="text-sm text-brand-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
