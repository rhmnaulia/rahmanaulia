import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'I write about anything here.',
}

export default function PostsPage() {
  return (
    <div className='prose dark:prose-invert flex-grow'>
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
