const features = [
  {
    number: '01',
    title: 'Recherche d\'articles',
    description:
      'Naviguez dans les Actes Uniformes OHADA article par article, avec renvois croisés et historique des modifications.',
    tags: ['Actes Uniformes', 'Droit national', 'Textes consolidés'],
  },
  {
    number: '02',
    title: 'Jurisprudence CCJA & nationale',
    description:
      'Accédez aux décisions de la Cour Commune de Justice et d\'Arbitrage ainsi qu\'aux juridictions sénégalaises, indexées et annotées.',
    tags: ['CCJA', 'Tribunaux nationaux', 'Arrêts commentés'],
  },
  {
    number: '03',
    title: 'Doctrine & commentaires',
    description:
      'Lisez les analyses doctrinales, notes d\'arrêt et contributions académiques liées directement aux textes concernés.',
    tags: ['Doctrine', 'Notes d\'arrêt', 'Analyses'],
  },
  {
    number: '04',
    title: 'Recherche sémantique',
    description:
      'Posez une question juridique en langage naturel et obtenez les textes et décisions les plus pertinents, classés par proximité.',
    tags: ['IA juridique', 'Langage naturel', 'Pertinence'],
  },
]

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-24 border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-4">
              <span className="w-4 h-px bg-brand-gray-400" />
              Fonctionnalités
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-brand-black leading-tight">
              Tout ce dont vous avez besoin,
              <br className="hidden md:block" /> en un seul outil.
            </h2>
          </div>
          <p className="text-brand-gray-500 text-sm max-w-xs leading-relaxed">
            Doctrino est conçu pour les professionnels du droit qui ont besoin de fiabilité,
            de rapidité et d'exhaustivité.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-px bg-brand-gray-200">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-white p-8 md:p-10 hover:bg-brand-gray-50 transition-colors"
            >
              <div className="text-xs font-medium text-brand-gray-400 mb-4 tabular-nums">
                {feature.number}
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-brand-gray-500 leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-brand-gray-500 border border-brand-gray-200 rounded px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
