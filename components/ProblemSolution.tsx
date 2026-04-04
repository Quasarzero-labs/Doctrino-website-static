const problems = [
  {
    icon: '⊘',
    title: 'Sources dispersées',
    description:
      'Les textes OHADA sont éparpillés entre le site officiel, des PDFs introuvables et des compilations obsolètes.',
  },
  {
    icon: '⊘',
    title: 'Jurisprudence inaccessible',
    description:
      'Les décisions de la CCJA et des juridictions nationales ne sont pas indexées ni facilement consultables.',
  },
  {
    icon: '⊘',
    title: 'Pas de recherche intelligente',
    description:
      'Aucun outil ne permet de chercher simultanément dans les lois, règlements, arrêts et commentaires doctrinaux.',
  },
]

const solutions = [
  {
    icon: '✓',
    title: 'Base de données unifiée',
    description:
      'Tous les actes uniformes, règlements et textes nationaux consolidés et mis à jour en temps réel.',
  },
  {
    icon: '✓',
    title: 'Recherche plein texte',
    description:
      'Retrouvez n\'importe quel article, disposition ou décision en quelques mots-clés — comme une recherche Google du droit.',
  },
  {
    icon: '✓',
    title: 'Doctrine et annotations',
    description:
      'Accédez aux commentaires doctrinaux, notes d\'arrêt et analyses juridiques associées à chaque texte.',
  },
]

export default function ProblemSolution() {
  return (
    <section id="solution" className="py-24 bg-brand-gray-50 border-t border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-brand-gray-400" />
            Problème & Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest text-brand-black leading-tight max-w-2xl">
            Le droit OHADA mérite mieux que des PDFs éparpillés.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Problems */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-400 mb-8">
              Aujourd'hui
            </p>
            <div className="space-y-8">
              {problems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-brand-gray-300 text-xl mt-0.5 select-none">{item.icon}</span>
                  <div>
                    <h3 className="font-medium text-brand-gray-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-400 mb-8">
              Avec Doctrino
            </p>
            <div className="space-y-8">
              {solutions.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-brand-black text-xl mt-0.5 select-none font-semibold">{item.icon}</span>
                  <div>
                    <h3 className="font-medium text-brand-black mb-1">{item.title}</h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
