export default function CTA() {
  return (
    <section id="acces" className="py-24 border-t border-brand-gray-200 bg-brand-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-6">
            <span className="w-4 h-px bg-brand-gray-400" />
            Accès bêta
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-brand-black leading-tight mb-6">
            Rejoignez les premiers utilisateurs de doctrinoo.
          </h2>

          <p className="text-brand-gray-500 text-lg leading-relaxed mb-10">
            La plateforme est en accès bêta. Rejoignez la liste d'attente ou contactez-nous
            directement pour un accès anticipé — institutions et cabinets bienvenus.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="mailto:team.analytics@quasarzero.fr?subject=Accès bêta doctrinoo"
              className="inline-flex items-center justify-center gap-2 bg-brand-black text-white text-sm font-medium px-6 py-3.5 rounded hover:bg-brand-gray-800 transition-colors"
            >
              Demander un accès bêta
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
              href="mailto:team.analytics@quasarzero.fr"
              className="inline-flex items-center justify-center gap-2 border border-brand-gray-200 text-brand-black text-sm font-medium px-6 py-3.5 rounded hover:border-brand-gray-400 transition-colors bg-white"
            >
              Nous contacter
            </a>
          </div>

          {/* Trust line */}
          <p className="text-xs text-brand-gray-400">
            Une initiative de{' '}
            <span className="font-medium text-brand-gray-600">Quasarzero Labs</span>.
            Aucune donnée personnelle collectée lors de l'accès bêta.
          </p>
        </div>
      </div>
    </section>
  )
}
