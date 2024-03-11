import Link from 'next/link'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

const WritingPage = async () => {
  const writings = await reader.collections.writings.all()

  const filtered = writings.sort(
    (a, b) =>
      new Date(b.entry.publishedAt).getTime() -
      new Date(a.entry.publishedAt).getTime()
  )

  return (
    <article className='flex flex-col gap-8'>
      <section>
        <div className='flex gap-1 items-baseline'>
          <h1 className='font-bold md:text-2xl text-xl bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent'>
            The Diverse Canvas
          </h1>
          <p className='italic text-xs text-foreground/60'>
            tech, tales, and triumphs.
          </p>
        </div>
        <p className='text-sm text-pretty'>
          I write about a diverse range of topics here, from software
          engineering to gym, basketball, music, and self-improvement.
          Basically, I write about whatever catches my interest here, so I hope
          you enjoy the reads.
        </p>
      </section>

      <hr
        className='flex-grow border-t border-foreground/10'
        aria-hidden='true'
      />

      <section className='w-full'>
        <h2 className='sr-only'>Writings List</h2>
        <ul>
          {filtered.map((writing, index) => (
            <li key={writing.slug} className='flex items-baseline gap-1'>
              <span className='mr-2 font-mono text-base text-foreground/80'>{`${(
                writings.length -
                index -
                1
              )
                .toString()
                .padStart(2, '0')}.`}</span>
              <Link
                href={`/writing/${writing.slug}`}
                aria-label={`Read more about ${writing.entry.title}`}
                className='mb-6 block'
              >
                <h3 className='font-semibold text-base text-pretty'>
                  {writing.entry.title}
                </h3>
                <p className='text-foreground/60 text-sm text-pretty'>
                  {writing.entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default WritingPage
