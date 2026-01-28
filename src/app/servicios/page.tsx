import Image from 'next/image'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import HeroSection from '@/components/HeroSection'

const stats = [
  { value: '15+', label: 'Años de Trayectoria' },
  { value: '10k+', label: 'Operaciones Exitosas' },
  { value: '50+', label: 'Clientes Global' },
  { value: '500+', label: 'Aliados ATR' },
]

const services = [
  {
    id: 'carga',
    title: 'Agenciamiento de Carga',
    description: 'Clasificación arancelaria precisa con partidas SENIAT, artes y términos. Gestión integral de su carga con los más altos estándares de calidad.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    features: ['Clasificación estándares y complementarias'],
  },
  {
    id: 'aduana',
    title: 'Agenciamiento de Aduana',
    description: 'Gestión integral de importación y exportación estándares y complementarias. Especialistas en cumplimiento normativo y procesos aduaneros de alto nivel.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop',
    features: ['Importación y exportación'],
  },
  {
    id: 'almacenamiento',
    title: 'Almacenaje',
    description: 'Trabajamos al lado de Dinet para los direccionamientos. Centro de distribución seguro con control total de inventario y condiciones de almacén clasificado.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop',
    features: ['Control de inventario y servicios de valor agregado'],
  },
  {
    id: 'trasegados',
    title: 'Trasegados y Maniobras',
    description: 'Contamos con 2 empresas asociadas que tienen un espacio de +5000 metros cuadrados y con la experiencia para poder trabajar cargas dimensionadas en flat rack, entre otras.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop',
    features: ['Seguridad de contenido y diferentes modelos'],
  },
  {
    id: 'seguros',
    title: 'Seguros de Carga',
    description: 'Tranquilidad total para su mercancía. Ofrecemos pólizas integrales de riesgo de bodega internacional y nacional para proporcionar la máxima protección de sus operaciones.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    features: ['Cobertura de accidente de trabajo'],
  },
  {
    id: 'transporte',
    title: 'Transporte Interno',
    description: 'Cobertura total en transporte interno con seguimiento en tiempo real. Distribución nacional segura, siempre a tiempo y con cobertura garantizada.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop',
    features: ['Seguimiento GPS y diferentes modalidades'],
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Servicios de Comercio Exterior"
        description="Soluciones integrales de logística, aduanas y transporte diseñadas para maximizar la eficiencia de sus operaciones globales."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&h=1080&fit=crop"
        primaryButtonText="Ver Portafolio"
        primaryButtonHref="#servicios"
        secondaryButtonText="Contactar Consultor"
        secondaryButtonHref="/contacto"
      />

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="bg-gray-50 py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-subtitle">NUESTRA OFERTA ESPECIALIZADA</span>
            <h2 className="section-title">Soluciones Logísticas de Punta a Punta</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    Solicitar información
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para optimizar su logística?"
        description="Nuestros consultores especializados están listos para diseñar una solución personalizada que reduzca sus costos y tiempos operativos."
      />
    </>
  )
}
