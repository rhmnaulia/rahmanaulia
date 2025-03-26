import type { Metadata } from 'next'
import { cx } from 'class-variance-authority'
import { ThemeProvider } from '@/components/theme-provider'
import { Newsreader, IBM_Plex_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rahmanaulia.com'),
  title: {
    default: 'Aulia Rahman | Software Engineer & Tech Enthusiast',
    template: '%s | Aulia Rahman',
  },
  description:
    'Personal website of Aulia Rahman - Software engineer, tech enthusiast, and sports hobbyist. Explore my projects, articles, and insights on web development and technology.',
  keywords: [
    'productivity',
    'software engineer',
    'web development',
    'tech enthusiast',
    'programming',
    'JavaScript',
    'Typescript',
    'Rust',
    'React',
    'Next.js',
    'Full Stack Development',
    'Web Performance',
    'Developer Blog',
    'Tech Articles',
  ],
  authors: [{ name: 'Aulia Rahman' }],
  creator: 'Aulia Rahman',
  publisher: 'Aulia Rahman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://rahmanaulia.com',
  },
  openGraph: {
    title: 'Aulia Rahman | Software Engineer & Tech Enthusiast',
    description:
      'Explore the world of web development and technology with Aulia Rahman. Software engineer, writer, and creator passionate about building innovative solutions.',
    url: 'https://rahmanaulia.com',
    siteName: 'Aulia Rahman',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aulia Rahman - Software Engineer & Tech Enthusiast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aulia Rahman | Software Engineer & Tech Enthusiast',
    description:
      'Software engineer, tech enthusiast, and sports hobbyist. Check out my latest projects and insights on web development.',
    creator: '@rhmnaul',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
  category: 'technology',
  classification: 'personal',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  applicationName: 'Aulia Rahman Portfolio',
  bookmarks: [
    'https://rahmanaulia.com/blog',
    'https://rahmanaulia.com/projects',
  ],
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Aulia Rahman',
    'mobile-web-app-capable': 'yes',
  },
}

const NewsreaderFont = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

const IbmPlexMonoFont = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cx(
        GeistSans.variable,
        IbmPlexMonoFont.variable,
        NewsreaderFont.variable
      )}
    >
      <body className='antialiased dark:text-foreground/90'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='mx-auto flex min-h-screen max-w-3xl flex-col flex-wrap gap-10 px-6 md:py-12 py-8 md:gap-16'>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
