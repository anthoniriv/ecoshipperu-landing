import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ecoship - Su Aliado Estratégico en Comercio Exterior',
  description: 'Transformamos la complejidad del comercio internacional en soluciones transparentes y eficientes. Conectamos su empresa con mercados globales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
