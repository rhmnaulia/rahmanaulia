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
      <h1 className='text-2xl mb-6 font-semibold'>Blog Posts</h1>
      <div className=' flex-col gap-2 flex'>
        {allPosts.map((post) => (
          <article className='flex items-center justify-between' key={post._id}>
            <Link href={`/blog/${post.slugAsParams}`}>
              <h2 className='md:text-lg text-base line-clamp-1 text-foreground/90 hover:text-foreground/100'>
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
