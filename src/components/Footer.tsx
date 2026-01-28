import Link from 'next/link'

const footerLinks = {
  servicios: [
    { name: 'Trasegados', href: '/servicios#trasegados' },
    { name: 'Almacenamiento', href: '/servicios#almacenamiento' },
    { name: 'Transporte', href: '/servicios#transporte' },
    { name: 'Seguros', href: '/servicios#seguros' },
  ],
  compania: [
    { name: 'Quienes Somos', href: '/nosotros' },
    { name: 'Nuestros Valores', href: '/nosotros#valores' },
  ],
  aplicaciones: [
    { name: 'Proceso Operativo', href: '/aplicaciones' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold">
                <span className="text-primary-600">Eco</span>
                <span className="text-gray-900">ship</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Agencia de Comercio Exterior, soluciones Logísticas y Integrales.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compañía */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Compañía</h3>
            <ul className="space-y-3">
              {footerLinks.compania.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aplicaciones */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Aplicaciones</h3>
            <ul className="space-y-3">
              {footerLinks.aplicaciones.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                contacto@logagency.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +1 234 567 890
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2026 Onilabs. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/politicas" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Políticas de Privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
