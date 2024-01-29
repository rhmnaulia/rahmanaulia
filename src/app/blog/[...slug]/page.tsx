import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'

import { Metadata } from 'next'
import { Mdx } from '@/components/MDXComponents'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { MotionDiv, MotionArticle } from '@/components/MotionClient'

type TPostProps = {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: TPostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: TPostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const { title, slugAsParams, description } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://rahmanaulia.com/posts/${slugAsParams}`,
    },
    twitter: {
      title,
      description,
    },
  }
}

export async function generateStaticParams(): Promise<TPostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }))
}

const pageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 5 },
};

export default async function PostPage({ params }: TPostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <MotionDiv
      className='w-full'
      initial='hidden'
      animate='visible'
      variants={pageVariants}
    >
      <Link
        href='/blog'
        className='inline-flex items-center gap-2 text-muted-foreground hover:text-foreground/80'
      >
        <ArrowLeft size={18} />
        <p>Back to list</p>
      </Link>
      <MotionArticle
        className='py-6 prose dark:prose-invert'
        variants={pageVariants}
      >
        <h1 className='mb-2 text-center text-balance'>{post.title}</h1>
        {post.description && (
          <p className='text-xl text-center mt-0 text-slate-700 text-balance dark:text-slate-200'>
            {post.description}
          </p>
        )}
        <hr className='my-4' />
        <Mdx code={post.body.code} />
      </MotionArticle>
    </MotionDiv>
  )
}
