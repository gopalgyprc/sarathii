import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/ui/CustomCursor'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sarathii.online'),
  title: {
    default: 'Sarathii | Transform Your Potential into Excellence',
    template: '%s | Sarathii Mentorship',
  },
  description:
    'Sarathii is an elite mentorship platform for Civil Services (UPSC), strategic leadership, and purposeful public service, founded by Jay Prakash Singh.',
  keywords: [
    'UPSC Mentorship',
    'Civil Services Preparation',
    'Jay Prakash Singh',
    'Leadership Coaching',
    'UPSC Answer Writing',
    'Public Service Excellence',
    'Sarathii',
    'Mindset & Resilience',
  ],
  authors: [{ name: 'Jay Prakash Singh' }],
  creator: 'Sarathii',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sarathii.online',
    siteName: 'Sarathii',
    title: 'Sarathii | Transform Your Potential into Excellence',
    description:
      'Elite Civil Services and Leadership mentorship founded on five decades of distinguished public service.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-K9nlBQOeap4yE4fxld0piI45F0q7tl.webp',
        width: 1200,
        height: 630,
        alt: 'Jay Prakash Singh - Founder of Sarathii',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarathii | Transform Your Potential into Excellence',
    description:
      'Elite Civil Services and Leadership mentorship founded on five decades of distinguished public service.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4B1458',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakartaSans.variable} ${cinzel.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FFFDF9] text-[#1F1722] selection:bg-[#4B1458] selection:text-[#FFFDF9]">
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
