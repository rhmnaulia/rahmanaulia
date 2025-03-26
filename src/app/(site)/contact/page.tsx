import Image from 'next/image'
import { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact - Rahman Aulia',
  description:
    'Connect with Rahman Aulia - Software Engineer, Tech Enthusiast, and Writer. Available for collaborations, discussions, and opportunities.',
  openGraph: {
    type: 'website',
    url: 'https://rahmanaulia.com/contact',
    title: 'Contact - Rahman Aulia',
    description:
      'Connect with Rahman Aulia - Software Engineer, Tech Enthusiast, and Writer. Available for collaborations, discussions, and opportunities.',
    siteName: 'Rahman Aulia',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Contact - Rahman Aulia',
    description:
      'Connect with Rahman Aulia - Software Engineer, Tech Enthusiast, and Writer. Available for collaborations, discussions, and opportunities.',
    creator: '@rhmnaul',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const ContactPage = () => {
  const contactMethods = [
    {
      name: 'Email',
      description: 'For direct communication and inquiries',
      icon: Mail,
      href: 'mailto:rahmanauliax@gmail.com',
      value: 'rahmanauliax@gmail.com',
      action: 'Send an email',
    },
    {
      name: 'Twitter',
      description: 'For quick updates and casual conversations',
      icon: Twitter,
      href: 'https://twitter.com/rhmnaul',
      value: '@rhmnaul',
      action: 'Follow on Twitter',
    },
    {
      name: 'LinkedIn',
      description: 'For professional networking and opportunities',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rhmnaulia/',
      value: 'Rahman Aulia',
      action: 'Connect on LinkedIn',
    },
    {
      name: 'GitHub',
      description: 'For code-related discussions and collaborations',
      icon: Github,
      href: 'https://github.com/rhmnaul',
      value: 'rhmnaul',
      action: 'View on GitHub',
    },
  ]

  return (
    <section className='flex flex-col gap-8 w-full'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-medium font-serif text-3xl leading-none'>
          Let&apos;s Connect
        </h1>
        <p className='text-sm text-foreground/70'>
          I&apos;m always excited to meet new people and share ideas
        </p>
      </div>

      <div className='max-w-none prose-sm prose dark:prose-invert'>
        <p>
          Whether you&apos;re interested in collaboration, have a question, or
          just want to chat about technology, I&apos;m here to help. Choose your
          preferred way to reach out below:
        </p>
      </div>

      <Separator className='my-4' />

      <div className='grid gap-6 sm:grid-cols-2'>
        {contactMethods.map((method) => (
          <Link
            key={method.name}
            href={method.href}
            className='group relative flex flex-col gap-3 rounded-lg border border-foreground/10 p-6 transition-all hover:border-foreground/20 hover:bg-foreground/5 hover:shadow-sm'
          >
            <div className='flex items-center gap-3'>
              <div className='rounded-full bg-foreground/5 p-2'>
                <method.icon className='h-5 w-5 text-foreground/70' />
              </div>
              <h2 className='font-medium'>{method.name}</h2>
            </div>
            <p className='text-sm text-foreground/70'>{method.description}</p>
            <div className='mt-auto flex items-center justify-between'>
              <p className='text-sm font-medium'>{method.value}</p>
              <span className='text-sm text-foreground/50 transition-colors group-hover:text-foreground/70'>
                {method.action} →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-8 text-center'>
        <p className='text-sm text-foreground/70'>
          I aim to respond within 24 hours. Looking forward to our conversation!
        </p>
      </div>

      <div className='relative mx-auto mt-8 aspect-square w-full max-w-[400px] overflow-hidden rounded-lg border border-foreground/10'>
        <Image
          src='/assets/images/kobe-thanks.gif'
          alt='Kobe Bryant saying thanks'
          fill
          className='object-cover'
          priority
        />
      </div>
    </section>
  )
}

export default ContactPage
