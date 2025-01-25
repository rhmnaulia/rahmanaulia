import type { Metadata } from 'next'
import { cx } from 'class-variance-authority'
import { ThemeProvider } from '@/components/theme-provider'
import { Newsreader } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
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
  ],
  authors: [{ name: 'Aulia Rahman' }],
  creator: 'Aulia Rahman',
  openGraph: {
    title: 'Aulia Rahman | Software Engineer & Tech Enthusiast',
    description:
      'Explore the world of web development and technology with Aulia Rahman. Software engineer, writer, and creator passionate about building innovative solutions.',
    url: 'https://rahmanaulia.com',
    siteName: 'Aulia Rahman',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Aulia Rahman | Software Engineer & Tech Enthusiast',
    description:
      'Software engineer, tech enthusiast, and sports hobbyist. Check out my latest projects and insights on web development.',
    creator: '@rhmnaul',
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
}

const NewsreaderFont = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
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
        GeistMono.variable,
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
