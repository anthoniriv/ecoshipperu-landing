import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
    title: 'Misión',
    description: 'Simplificar el comercio internacional mediante servicios logísticos integrales que impulsen el crecimiento de nuestros clientes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visión',
    description: 'Ser el enlace logístico más confiable y eficiente de las Américas, reconocidos por nuestra innovación y calidad humana.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Objetivos',
    description: 'Garantizar la seguridad jurídica y comercial de las operaciones de nuestros clientes, optimizando tiempos y costos logísticos.',
  },
]

const values = [
  {
    title: 'Transparencia',
    description: 'Procesos claros y comunicación constante en cada etapa. Además de la solidaridad personal en sus operaciones.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
  },
  {
    title: 'Honestidad',
    description: 'Integridad total en costos, tiempos y gestiones. Comprometidos con ofrecer acuerdos favorables.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
  },
  {
    title: 'Ética Profesional',
    description: 'Cumplimiento estricto de normativas y estándares internacionales. Además hay y está el todo momento por el trabajador.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="section-subtitle">SOBRE NOSOTROS</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Compromiso Humano en Comercio Exterior
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                Más que logística, somos su socio estratégico en cada paso del proceso aduanero. Descubra la experiencia humana detrás de su éxito comercial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#quienes-somos"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center"
                >
                  Conocer al Equipo
                </Link>
                <Link
                  href="/contacto"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
                >
                  Nuestra Sede
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop"
                  alt="Equipo de trabajo profesional"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
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
          <div className="mb-12">
            <h2 className="section-title">Nuestros Valores Corporativos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
