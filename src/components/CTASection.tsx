import Link from 'next/link'

interface CTASectionProps {
  title: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  variant?: 'default' | 'with-stats'
  stats?: Array<{ value: string; label: string }>
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Solicitar Asesoría Ahora',
  primaryButtonHref = '/contacto',
  secondaryButtonText = 'Nuestro Flujo',
  secondaryButtonHref = '/aplicaciones',
  variant = 'default',
  stats,
}: CTASectionProps) {
  if (variant === 'with-stats' && stats) {
    return (
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {title}
                </h2>
                {description && (
                  <p className="text-primary-100 mb-6">{description}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={primaryButtonHref}
                    className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center"
                  >
                    {primaryButtonText}
                  </Link>
                  <Link
                    href={secondaryButtonHref}
                    className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                  >
                    {secondaryButtonText}
                  </Link>
                </div>
              </div>

              {/* Right Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-primary-100 uppercase tracking-wider mt-1">
                      {stat.label}
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

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">{description}</p>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={primaryButtonHref}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
