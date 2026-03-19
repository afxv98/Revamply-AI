import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollAnimationInit from '@/components/ScrollAnimationInit'

export const metadata: Metadata = {
  title: 'Revamply | Modern Operating Systems for Established Businesses',
  description:
    'Revamply helps established companies modernise the systems that power their operations. Redesigning workflows and implementing intelligent automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <ScrollAnimationInit />
      </body>
    </html>
  )
}
