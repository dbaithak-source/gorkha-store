import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Gorkha Jaibik | Premium Himalayan Organic Products Export',
  description: 'Premium organic Himalayan wellness products - Shilajit, Raw Honey, Ghee, Cashmere & more. Direct export to 50+ countries. ISO & Organic certified.',
  keywords: 'himalayan shilajit export, raw honey nepal, organic products, bulk export',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-cream text-gray-900">
        <main>{children}</main>
      </body>
    </html>
  )
}
