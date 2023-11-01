import formatDate from '@/lib/formatDate'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'I write about anything here.',
}

export default function PostsPage() {
  return (
    <div className='flex-grow'>
      <h1 className='dark:text-white text-2xl mb-6 font-semibold'>Posts</h1>
      <div className=' flex-col gap-2 flex'>
        {allPosts.map((post) => (
          <article className='flex items-center justify-between' key={post._id}>
            <Link href={post.slug}>
              <h2 className='md:text-lg text-base line-clamp-1 text-primary hover:dark:text-sky-300 hover:text-sky-500'>
                {post.title}
              </h2>
            </Link>
            <p className='text-sm text-muted-foreground italic'>
              {formatDate(post.date)}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
