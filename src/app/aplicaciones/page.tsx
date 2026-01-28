import CTASection from '@/components/CTASection'
import HeroSection from '@/components/HeroSection'

const processSteps = [
  {
    number: '01',
    title: 'Análisis & Estrategia',
    description: 'No existen dos envíos iguales. Iniciamos con una auditoría de sus necesidades específicas para diseñar la ruta más eficiente y rentable, mitigando cuellos de botella antes de que ocurran.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Revisión & Cumplimiento',
    description: 'Verificamos exhaustivamente toda la documentación aduanera y requisitos legales. Nuestra prioridad es el cumplimiento normativo total para evitar retrasos y sanciones costosas.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Coordinación Multimodal',
    description: 'Sincronizamos todos los eslabones de la cadena: transporte terrestre, marítimo o aéreo. Seleccionamos a los mejores carriers basándonos en indicadores de desempeño real (KPIs).',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Seguimiento en Tiempo Real',
    description: 'Usted nunca estará a oscuras. A través de nuestra plataforma, monitoree la ubicación exacta y el estado de su carga las 24 horas del día con alertas automáticas ante cualquier evento.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Entrega & Reporte Final',
    description: 'Garantizamos la excelencia en la última milla. Tras la entrega exitosa, proporcionamos un reporte detallado de tiempos, costos y desempeño para la mejora continua de su cadena logística.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '24/7', label: 'SOPORTE HUMANO' },
  { value: '99.8%', label: 'ENTREGAS A TIEMPO' },
  { value: '150+', label: 'PAÍSES CUBIERTOS' },
  { value: 'ISO', label: 'CERTIFICADOS 9001' },
]

export default function AplicacionesPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="¿Por qué Ecoship?"
        description="Desde el análisis inicial hasta la entrega final, transformamos la complejidad del comercio exterior en un proceso transparente, eficiente y totalmente monitoreado."
        image="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&h=1080&fit=crop"
        primaryButtonText="Explorar Proceso"
        primaryButtonHref="#proceso"
        secondaryButtonText="Contáctenos"
        secondaryButtonHref="/contacto"
      />

      {/* Process Section */}
      <section id="proceso" className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-subtitle">ESTANDARIZACIÓN OPERATIVA</span>
            <h2 className="section-title mb-4">Nuestro Proceso Operativo</h2>
            <p className="text-gray-600">
              Un camino de 5 etapas diseñado para garantizar que su carga llegue a tiempo y sin contratiempos.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-primary-100" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-500 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary-500 bg-primary-100 px-2 py-1 rounded">
                        PASO {step.number}
                      </span>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Stats */}
      <CTASection
        title="¿Listo para optimizar su logística hoy?"
        description="Nuestro equipo de expertos está listo para realizar un diagnóstico gratuito de sus operaciones actuales y proponer un plan de mejora inmediata."
        variant="with-stats"
        stats={stats}
      />
    </>
  )
}
