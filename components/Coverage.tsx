const ohadaCountries = [
  'Bénin',
  'Burkina Faso',
  'Cameroun',
  'Centrafrique',
  'Comores',
  'Congo',
  'Côte d\'Ivoire',
  'Gabon',
  'Guinée',
  'Guinée-Bissau',
  'Guinée Équatoriale',
  'Mali',
  'Niger',
  'RD Congo',
  'Sénégal',
  'Tchad',
  'Togo',
]

export default function Coverage() {
  return (
    <section id="couverture" className="py-24 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-4">
            <span className="w-4 h-px bg-brand-gray-600" />
            Couverture géographique
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tightest leading-tight">
            17 États membres OHADA.
            <br />
            <span className="text-brand-gray-500">Le Sénégal en avant-première.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Countries list */}
          <div>
            <p className="text-xs font-medium text-brand-gray-500 uppercase tracking-widest mb-6">
              États membres
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {ohadaCountries.map((country) => (
                <div key={country} className="flex items-center gap-3 group">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      country === 'Sénégal'
                        ? 'bg-white'
                        : 'bg-brand-gray-700 group-hover:bg-brand-gray-500 transition-colors'
                    }`}
                  />
                  <span
                    className={`text-sm ${
                      country === 'Sénégal'
                        ? 'text-white font-medium'
                        : 'text-brand-gray-500'
                    }`}
                  >
                    {country}
                    {country === 'Sénégal' && (
                      <span className="ml-2 text-[10px] text-brand-gray-500 font-normal">
                        pilote
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Explanatory text */}
          <div className="space-y-8">
            <div className="border-l-2 border-brand-gray-700 pl-6">
              <h3 className="text-lg font-semibold mb-2">L'OHADA en chiffres</h3>
              <p className="text-brand-gray-500 text-sm leading-relaxed">
                L'Organisation pour l'Harmonisation en Afrique du Droit des Affaires regroupe
                17 États et couvre un marché de plus de 350 millions de personnes.
                Ses 10 Actes Uniformes régissent les domaines essentiels du droit des affaires :
                sociétés, contrats, recouvrement, sûretés, arbitrage et plus encore.
              </p>
            </div>

            <div className="border-l-2 border-white pl-6">
              <h3 className="text-lg font-semibold mb-2">Sénégal — Phase pilote</h3>
              <p className="text-brand-gray-500 text-sm leading-relaxed">
                doctrinoo lance sa couverture nationale par le Sénégal : Code des obligations
                civiles et commerciales (COCC), jurisprudence de la Cour Suprême, textes
                de l'OHADA appliqués localement. D'autres pays suivront progressivement.
              </p>
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-3 gap-6 border-t border-brand-gray-800 pt-8">
                {[
                  { value: '17', label: 'États membres' },
                  { value: '10', label: 'Actes Uniformes' },
                  { value: '350M+', label: 'Personnes concernées' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold tracking-tighter">{stat.value}</div>
                    <div className="text-xs text-brand-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
