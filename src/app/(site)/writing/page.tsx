import Link from 'next/link'
import { Metadata } from 'next'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../keystatic.config'
import { Separator } from '@/components/ui/separator'
import formatDate from '@/lib/format-date'

const reader = createReader(process.cwd(), keystaticConfig)
const POSTS_PER_PAGE = 10

export const metadata: Metadata = {
  title: 'The Diverse Canvas - Rahman Aulia',
  description:
    'A collection of writings about software engineering, gym, basketball, music, and self-improvement by Rahman Aulia.',
  openGraph: {
    type: 'website',
    url: 'https://rahmanaulia.com/writing',
    title: 'The Diverse Canvas - Rahman Aulia',
    description:
      'A collection of writings about software engineering, gym, basketball, music, and self-improvement by Rahman Aulia.',
    siteName: 'Rahman Aulia',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'The Diverse Canvas - Rahman Aulia',
    description:
      'A collection of writings about software engineering, gym, basketball, music, and self-improvement by Rahman Aulia.',
    creator: '@rhmnaul',
  },
  robots: {
    index: true,
    follow: true,
  },
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const WritingPage = async ({ searchParams }: PageProps) => {
  const page = Number(searchParams.page) || 1
  const getWriting = await reader.collections.writings.all()
  const writings = getWriting.sort(
    (a, b) =>
      new Date(b.entry.publishedAt).getTime() -
      new Date(a.entry.publishedAt).getTime()
  )

  const totalPages = Math.ceil(writings.length / POSTS_PER_PAGE)
  const startIndex = (page - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentWritings = writings.slice(startIndex, endIndex)

  return (
    <article className='flex flex-col gap-8'>
      <section>
        <div className='flex md:flex-row flex-col md:gap-2 items-baseline'>
          <h1 className='font-medium font-serif text-3xl leading-none'>
            The Diverse Canvas
          </h1>
          <p className=' text-xs text-foreground/80 tracking-tight italic leading-none'>
            tech, sports, and whatever.
          </p>
        </div>
        <p className='text-sm text-pretty mt-6'>
          I write about a diverse range of topics here, from software
          engineering to gym, basketball, music, and self-improvement.
          Basically, I write about whatever catches my interest here, so I hope
          you enjoy the reads.
        </p>
      </section>
      <Separator
        className='flex-grow border-t border-foreground/10'
        aria-hidden='true'
      />
      <section className='w-full'>
        <h2 className='sr-only'>Writings List</h2>
        {currentWritings.map((writing) => (
          <Link
            key={writing.slug}
            className='flex justify-between items-start gap-8 group mb-10 text-foreground/85'
            href={`/writing/${writing.slug}`}
          >
            <div className='grow'>
              <h3 className='text-xl text-foreground/85 leading-tight font-serif font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1'>
                {writing.entry.title}
              </h3>
              <div className='mt-1 text-sm text-foreground/70 leading-normal'>
                <time dateTime={writing.entry.publishedAt}>
                  {formatDate(writing.entry.publishedAt)}
                </time>
              </div>
              <div className='mt-3 text-sm leading-normal text-foreground/65'>
                {writing.entry.description}
              </div>
            </div>
            <div className='hidden font-serif italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0'>
              Read Post
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current w-4 h-4'
              >
                <path d='M4.286 12c0-0.533 0.432-0.964 0.964-0.964v0h11.172l-4.14-4.138c-0.175-0.175-0.283-0.416-0.283-0.683 0-0.533 0.432-0.965 0.965-0.965 0.267 0 0.508 0.108 0.683 0.283v0l5.785 5.785c0.175 0.175 0.283 0.416 0.283 0.683s-0.108 0.508-0.283 0.683l-5.785 5.785c-0.175 0.175-0.416 0.283-0.683 0.283-0.533 0-0.965-0.432-0.965-0.965 0-0.267 0.108-0.508 0.283-0.683v0l4.14-4.138h-11.172c-0.533 0-0.964-0.432-0.964-0.964v0z'></path>
              </svg>
            </div>
          </Link>
        ))}
      </section>
      {totalPages > 1 && (
        <nav aria-label='Pagination' className='flex justify-center gap-2 mt-8'>
          {page > 1 && (
            <Link
              href={`/writing?page=${page - 1}`}
              className='px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors'
            >
              Previous
            </Link>
          )}
          <span className='px-4 py-2 text-sm text-foreground/70'>
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link
              href={`/writing?page=${page + 1}`}
              className='px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors'
            >
              Next
            </Link>
          )}
        </nav>
      )}
    </article>
  )
}

export default WritingPage
