import { DocumentRenderer } from '@keystatic/core/renderer'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../../keystatic.config'
import { getArticleRenderers } from './renderer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Post({ params }: { params: { slug: string } }) {
  const renderers = getArticleRenderers()
  const writings = await reader.collections.writings.read(params.slug)

  return writings ? (
    <article className='w-full flex flex-col'>
      <nav aria-label='Breadcrumb'>
        <Link
          href='/writing'
          className='text-base text-foreground/70 flex gap-1 items-center mb-4'
          aria-label='Back to writings list'
        >
          <button aria-label='Go back' className='flex items-center'>
            <ArrowLeft size={16} />
            <span>Back to list</span>
          </button>
        </Link>
      </nav>
      {writings.cover && (
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={writings.cover ?? ''}
            alt='Article cover'
            className='mb-8 aspect-video w-full rounded not-prose bg-neutral-500 object-cover'
          />
        </figure>
      )}
      <header>
        <h1 className='bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent md:text-3xl text-2xl font-bold text-pretty mb-2'>
          {writings.title}
        </h1>
        <p className='text-foreground/60 md:text-sm text-xs'>
          Published at {writings.publishedAt} by Aulia Rahman
        </p>
      </header>

      <hr className='my-3' />

      <section className='w-full prose-sm md:prose-base prose-h1:first-of-type:text-teal-400 prose-h1:first-of-type:text-center prose-h1:text-pretty prose dark:prose-invert'>
        <DocumentRenderer
          document={await writings.content()}
          renderers={renderers}
        />
      </section>

      <hr className='my-3' />
      <footer>
        <Link
          href='/writing'
          className='text-base text-foreground/70 flex gap-1 items-center mb-4'
          aria-label='Back to writings list'
        >
          <button aria-label='Go back' className='flex items-center'>
            <ArrowLeft size={16} />
            <span>Back to list</span>
          </button>
        </Link>
      </footer>
    </article>
  ) : (
    <div>No Writings Found</div>
  )
}
