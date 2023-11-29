import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://rahmanaulia.com'),
  title: {
    default: 'Aulia Rahman',
    template: '%s | Aulia Rahman',
  },
  description: 'Software Engineer',
  // openGraph: {
  //   title: 'Aulia Rahman',
  //   description: 'Software Engineer',
  //   url: 'https://rahmanaulia.com',
  //   siteName: 'Aulia Rahman',
  //   locale: 'en_US',
  //   type: 'website',
  // },
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
  twitter: {
    title: 'Aulia Rahman',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={GeistSans.className} lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <main className='mx-auto flex min-h-screen max-w-[736px] flex-col flex-wrap gap-9 px-6 md:py-12 py-8 md:gap-20'>
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
