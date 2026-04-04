export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-brand-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-brand-black text-lg tracking-tight">doctrinoo</span>
              <span className="text-[10px] font-medium text-brand-gray-400 uppercase tracking-widest border border-brand-gray-200 rounded px-1.5 py-0.5">
                Bêta
              </span>
            </div>
            <p className="text-sm text-brand-gray-500 leading-relaxed max-w-xs">
              La plateforme de référence pour le droit OHADA et les droits nationaux africains.
              Conçue pour les professionnels du droit.
            </p>
            <p className="text-xs text-brand-gray-400 mt-4">
              Une initiative de{' '}
              <span className="font-medium text-brand-gray-500">Quasarzero Labs</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-400 mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {[
                { label: 'Solution', href: '#solution' },
                { label: 'Fonctionnalités', href: '#fonctionnalites' },
                { label: 'Couverture', href: '#couverture' },
                { label: 'Pour qui', href: '#pour-qui' },
                { label: 'Accès bêta', href: '#acces' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-400 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:team.analytics@quasarzero.fr"
                  className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
                >
                  team.analytics@quasarzero.fr
                </a>
              </li>
              <li>
                <a
                  href="mailto:team.analytics@quasarzero.fr?subject=Accès bêta doctrinoo"
                  className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors"
                >
                  Demander un accès bêta
                </a>
              </li>
            </ul>

            <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-400 mt-8 mb-4">
              Légal
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="/mentions-legales" className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="text-sm text-brand-gray-500 hover:text-brand-black transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gray-200 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-brand-gray-400">
            © {year} Quasarzero Labs. Tous droits réservés.
          </p>
          <p className="text-xs text-brand-gray-400">
            doctrinoo est en phase bêta — données et fonctionnalités susceptibles d'évoluer.
          </p>
        </div>
      </div>
    </footer>
  )
}
