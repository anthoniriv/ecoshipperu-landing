import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HeroSlider from "@/components/HeroSlider";

const whyChooseUs = [
  {
    icon: <img src="/escudo.svg" alt="Transparencia Total" />,
    title: "Transparencia Total",

    description:
      "Seguimiento en tiempo real y comunicación proactiva en cada uno de sus trámites aduaneros.",
  },
  {
    icon: <img src="/velocidad.svg" alt="Eficiencia Operativa" />,
    title: "Eficiencia Operativa",
    description:
      "Optimización de tiempos y costos logísticos mediante procesos certificados y tecnología de vanguardia.",
  },
  {
    icon: <img src="/mundo.svg" alt="Alcance Global" />,
    title: "Alcance Global",
    description:
      "Red internacional de agentes en más de 150 países para asegurar que su carga llegue a cualquier destino.",
  },
];

const services = [
  {
    icon: (
      <div
        style={{
          backgroundColor: "#0A6F7C",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/doc.svg" alt="Agenciamiento de Carga" />
      </div>
    ),
    title: "Agenciamiento de Carga",
    description:
      "Clasificación arancelaria precisa con partidas SENIAT, artes y términos.",
  },
  {
    icon: (
      <div
        style={{
          backgroundColor: "#0A6F7C",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/avion.svg" alt="Agenciamiento de Aduana" />
      </div>
    ),
    title: "Agenciamiento de Aduana",
    description:
      "Gestión integral de importación y exportación estándares y complementarias.",
  },
  {
    icon: (
      <div
        style={{
          backgroundColor: "#0A6F7C",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/garage.svg" alt="Almacenaje" />
      </div>
    ),
    title: "Almacenaje",
    description: "Trabajamos al lado de Dinet para los direccionamientos.",
  },
  {
    icon: (
      <div
        style={{
          backgroundColor: "#0A6F7C",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/escudo2.svg" alt="Seguros" />
      </div>
    ),
    title: "Seguros",
    description:
      "Pólizas integrales para carga y custodia con cobertura de accidente de trabajo.",
  },
  {
    icon: (
      <div
        style={{
          backgroundColor: "#0A6F7C",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/mazo.svg" alt="Trasegados" />
      </div>
    ),
    title: "Trasegados",
    description:
      "Contamos con 2 empresas asociadas con +5000 m² de espacio y experiencia en cargas dimensionadas en flat rack.",
  },
  {
    icon: (
      <div
        style={{
          backgroundColor: "#0A6F7C",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/camion.svg" alt="Transporte Interno" />
      </div>
    ),
    title: "Transporte Interno",
    description:
      "Distribución nacional segura con seguimiento GPS y diferentes modalidades.",
  },
];

const howWeWork = [
  {
    number: "01",
    title: "Asesoría Inicial",
    description:
      "Analizamos sus necesidades específicas, mercados y recomendaciones de manera clara.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
  {
    number: "02",
    title: "Diseño de Estrategia",
    description:
      "Cotizamos el plan detallado de transporte y trámites, costos y tiempos de entrega.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
  },
  {
    number: "03",
    title: "Ejecución Operativa",
    description:
      "Coordinamos el movimiento de carga, despachos, aduanas y en las rutas establecidas.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
  },
  {
    number: "04",
    title: "Entrega y Reporte",
    description:
      "Realizamos la entrega en destino y proporcionamos informe completo de su operación.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop",
  },
];

const values = [
  {
    icon: (
      <img src="/manos.svg" alt="Principios Cristianos" className="w-8 h-8" />
    ),
    title: "Principios Cristianos",
    description:
      "Actuamos con amor al prójimo, ética, integridad y responsabilidad en cada gestión.",
  },

  {
    icon: <img src="/estrella.svg" alt="Transparencia" className="w-8 h-8" />,
    title: "Transparencia",
    description: "Generamos relaciones basadas en la confianza.",
  },
  {
    icon: <img src="/mira.svg" alt="Honestidad" className="w-8 h-8" />,
    title: "Honestidad",
    description: "Nos comprometemos con la veracidad de nuestros servicios.",
  },

  {
    icon: <img src="/personas.svg" alt="Justicia" className="w-8 h-8" />,
    title: "Justicia",
    description:
      "Mantenemos relaciones comerciales justas donde todos se benefician de manera equilibrada.",
  },
  {
    icon: (
      <img
        src="/mira.svg"
        alt="Compromiso con el Cliente"
        className="w-8 h-8"
      />
    ),
    title: "Compromiso con el Cliente",
    description:
      "Ofrecemos atención cercana y soluciones personalizadas basadas en la empatía.",
  },
  {
    icon: <img src="/manos.svg" alt="Confidencialidad" className="w-8 h-8" />,
    title: "Confidencialidad",
    description:
      "Protegemos la información de nuestros clientes con absoluta discreción y responsabilidad.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Why Choose Us Section */}
      <section
        id="why-choose-us"
        className="scroll-mt-24 bg-gray-50 py-16 md:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-subtitle">POR QUÉ ELEGIRNOS</span>
            <h2 className="section-title max-w-3xl mx-auto">
              Excelencia y compromiso en cada etapa de su cadena de suministro
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="scroll-mt-24 bg-white py-16 md:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-subtitle">PORTAFOLIO</span>
            <h2 className="section-title">Nuestros Servicios Especializados</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section
        id="how-we-work"
        className="scroll-mt-24 bg-gray-50 py-16 md:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="section-subtitle">OPERATIVA</span>
            <h2 className="section-title">Cómo trabajamos</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Hemos simplificado el proceso de importación y exportación en
              cuatro pasos claros diseñados para minimizar riesgos y maximizar
              rentabilidad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((step, index) => (
              <div key={index} className="group">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
                    PASO {step.number}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className="scroll-mt-24 bg-white py-16 md:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <span className="section-subtitle">NUESTROS VALORES</span>
          <h2 className="section-title mb-4">Cimientos de Confianza</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            En el mundo del B2B, la reputación es nuestro activo más valioso.
            Trabajamos bajo estándares éticos inquebrantables.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="scroll-mt-24">
        <CTASection
          title="¿Listo para expandir sus fronteras?"
          description="Agende hoy una consultoría técnica gratuita con nuestros especialistas en comercio exterior."
        />
      </section>
    </>
  );
}
