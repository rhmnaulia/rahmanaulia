import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { allPages } from 'contentlayer/generated'

import { Mdx } from '@/components/MDXComponents'

type TPageProps = {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: TPageProps['params']) {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: TPageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<TPageProps['params'][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split('/'),
  }))
}

export default async function PagePage({ params }: TPageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className='flex-grow prose dark:prose-invert'>
      <h1 className='text-2xl mb-6 font-semibold'>{page.title}</h1>
      {page.description && <p className='text-xl'>{page.description}</p>}
      <Mdx code={page.body.code} />
    </article>
  )
}
