import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Post } from 'contentlayer/generated'
import formatDate from '@/lib/formatDate'

type TPostCardProps = {
  post: Post
}

const PostCard = ({ post }: TPostCardProps) => {
  return (
    <Link
      href={`/blog/${post.slugAsParams}`}
      className='transition-all duration-300 hover:-translate-y-2 w-full'
    >
      <Card>
        <CardHeader>
          <span className='inline-flex justify-between gap-2 items-center'>
            <CardTitle className='text-base line-clamp-1'>
              {post.title}
            </CardTitle>
            <p className='text-sm'>{formatDate(post.date)}</p>
          </span>
          <CardDescription className='text-sm line-clamp-2'>
            {post.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default PostCard
