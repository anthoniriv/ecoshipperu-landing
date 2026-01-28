import CTASection from '@/components/CTASection'
import HeroSection from '@/components/HeroSection'

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
    title: 'Misión',
    description: 'Brindar un servicio integral y confiable en operaciones de comercio exterior, facilitando los procesos de importación, exportación y logística interna. Lo hacemos a través de una gestión transparente, justa y eficiente, una firme ética profesional, generando confianza y tranquilidad en cada cliente.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visión',
    description: 'Ser una agencia líder en servicios de comercio exterior, reconocida por nuestro compromiso con la transparencia, la honestidad y valores cristianos, ofreciendo soluciones ágiles y personalizadas que se adapten a las necesidades logísticas de cada cliente en un mundo globalizado.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Objetivos',
    description: 'Garantizar la seguridad jurídica y comercial de las operaciones de nuestros clientes, optimizando tiempos y costos logísticos con una firme ética profesional.',
  },
]

const values = [
  {
    title: 'Principios Cristianos',
    description: 'Actuamos con amor al prójimo, ética, integridad y responsabilidad en cada gestión.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Transparencia',
    description: 'Generamos relaciones basadas en la confianza.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Honestidad',
    description: 'Nos comprometemos con la veracidad de nuestros servicios.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Justicia',
    description: 'Nos esforzamos por mantener relaciones comerciales justas, donde nuestros stakeholders se beneficien de manera equilibrada.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: 'Compromiso con el Cliente',
    description: 'Nos basamos en la empatía, ofreciendo atención cercana y soluciones personalizadas.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Confidencialidad',
    description: 'Protegemos la información de nuestros clientes con absoluta discreción y responsabilidad.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Compromiso Humano en Comercio Exterior"
        description="Más que logística, somos su socio estratégico en cada paso del proceso aduanero. Descubra la experiencia humana detrás de su éxito comercial."
        image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&h=1080&fit=crop"
        primaryButtonText="Conocer al Equipo"
        primaryButtonHref="#quienes-somos"
        secondaryButtonText="Contáctenos"
        secondaryButtonHref="/contacto"
      />

      {/* Who We Are Section */}
      <section id="quienes-somos" className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Quiénes Somos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En nuestra agencia, la transparencia y la excelencia profesional son los pilares que sostienen cada operación internacional. Creemos que la confianza se construye con resultados y comunicación honesta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title">Nuestros Valores Corporativos</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              En el mundo del B2B, la reputación es nuestro activo más valioso. Trabajamos bajo estándares éticos inquebrantables.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
            EMPRESAS QUE CONFÍAN EN NOSOTROS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para llevar su logística al siguiente nivel?"
        description="Nuestro equipo de expertos está listo para asesorarle personalmente en su próxima operación."
      />
    </>
  )
}
