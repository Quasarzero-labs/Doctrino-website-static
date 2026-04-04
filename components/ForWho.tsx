const profiles = [
  {
    title: 'Avocats & cabinets',
    description:
      'Préparez vos dossiers avec des sources fiables et à jour. Citez les textes et décisions directement depuis doctrinoo.',
    usecases: ['Recherche de jurisprudence', 'Veille législative', 'Rédaction de mémoires'],
  },
  {
    title: 'Juristes d\'entreprise',
    description:
      'Sécurisez vos montages contractuels et vos due diligences avec une vision complète du droit applicable.',
    usecases: ['Conformité OHADA', 'Droit des contrats', 'Droit des sociétés'],
  },
  {
    title: 'Notaires & huissiers',
    description:
      'Accédez instantanément aux textes de référence pour vos actes, sans quitter votre flux de travail.',
    usecases: ['Actes authentiques', 'Recouvrement', 'Sûretés'],
  },
  {
    title: 'Étudiants en droit',
    description:
      'Maîtrisez le droit OHADA avec des ressources complètes et une organisation pensée pour l\'apprentissage.',
    usecases: ['Cours & TD', 'Recherche académique', 'Concours'],
  },
  {
    title: 'Institutions & administrations',
    description:
      'Dotez vos équipes d\'un outil commun pour harmoniser la lecture et l\'application des textes OHADA.',
    usecases: ['Formations internes', 'Accès multi-utilisateurs', 'Veille réglementaire'],
  },
  {
    title: 'Chercheurs & académiques',
    description:
      'Explorez les corpus doctrinaux et jurisprudentiels pour nourrir vos travaux de recherche.',
    usecases: ['Recherche comparée', 'Analyse de jurisprudence', 'Publications'],
  },
]

export default function ForWho() {
  return (
    <section id="pour-qui" className="py-24 border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-brand-gray-400" />
            Pour qui
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-brand-black leading-tight">
            Pour tous les professionnels
            <br className="hidden md:block" /> du droit en Afrique.
          </h2>
        </div>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-3 gap-px bg-brand-gray-200">
          {profiles.map((profile) => (
            <div key={profile.title} className="bg-white p-8 hover:bg-brand-gray-50 transition-colors">
              <h3 className="font-semibold text-brand-black text-lg mb-3 tracking-tight">
                {profile.title}
              </h3>
              <p className="text-sm text-brand-gray-500 leading-relaxed mb-5">
                {profile.description}
              </p>
              <ul className="space-y-1.5">
                {profile.usecases.map((uc) => (
                  <li key={uc} className="flex items-center gap-2 text-xs text-brand-gray-500">
                    <span className="w-1 h-1 rounded-full bg-brand-gray-300 flex-shrink-0" />
                    {uc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
