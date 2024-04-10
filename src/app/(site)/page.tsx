import { Button } from '@/components/ui/button'
import { createReader } from '@keystatic/core/reader'
import Link from 'next/link'
import keystaticConfig from '../../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Page() {
  const writings = await reader.collections.writings.all()
  const latestWriting = writings.sort(
    (a, b) =>
      new Date(b.entry.publishedAt).getTime() -
      new Date(a.entry.publishedAt).getTime()
  )

  return (
    <article className='flex flex-col gap-14'>
      <section className='flex flex-col gap-2'>
        <span className='flex items-baseline gap-2'>
          <h1 className='text-3xl font-serif'>Aulia Rahman</h1>
          <p className='text-xs text-foreground/65'>he/him</p>
        </span>
        <p className='text-sm text-pretty'>
          <em className='text-pretty text-base font-serif'>
            Crafting experiences
          </em>
          , building software, and creating refined web interfaces, I am
          committed to endless exploration. Engineer at Indonesia{' '}
          <a
            className='underline underline-offset-4 decoration-1 decoration-neutral-700 hover:decoration-neutral-500 transition-colors'
            href='https://www.linkedin.com/company/govtech-procurement'
            target='_blank'
          >
            Govtech Procurement
          </a>
          .
        </p>
        <div className='flex gap-2 mt-2'>
          <Button
            variant={'default'}
            className='dark:bg-neutral-300 dark:hover:bg-neutral-100 bg-neutral-800 rounded-sm'
            asChild
          >
            <Link href='/contact' className='font-serif'>
              Get in touch
            </Link>
          </Button>
          <Button
            variant={'outline'}
            asChild
            className='rounded-sm border-neutral-700'
          >
            <a
              href='https://docs.google.com/document/d/1kh7blSsBGbVJB8QAAQQvWhAgKUaiIW63GoaCTX8N-_o/edit?usp=sharing'
              className='font-serif'
              target='_blank'
            >
              Resume
            </a>
          </Button>
        </div>
      </section>
      <section className='w-full'>
        <h2 className='text-2xl font-medium font-serif mb-6'>Latest writing</h2>
        {latestWriting.map((writing) => (
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
                <time dateTime='2024-01-11T00:00:00.000Z'>
                  January 11, 2024
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
        <Button
          className='border-neutral-600 rounded-sm font-serif'
          variant={'outline'}
          asChild
        >
          <Link href='/writing' className='font-serif'>
            View all posts
          </Link>
        </Button>
      </section>
    </article>
  )
}
