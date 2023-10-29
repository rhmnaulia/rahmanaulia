import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

type TPostCardProps = {
  post: { description: string; slug: string; title: string; date: string }
}

const PostCard = ({ post }: TPostCardProps) => {
  return (
    <Link
      href={`/blog${post.slug}`}
      className='transition-all duration-300 hover:-translate-y-2 w-full'
    >
      <Card>
        <CardHeader>
          <span className='inline-flex justify-between items-center'>
            <CardTitle className='text-base line-clamp-1'>
              {post.title}
            </CardTitle>
            <p className='text-xs'>{post.date}</p>
          </span>
          <CardDescription className='text-xs line-clamp-2'>
            {post.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default PostCard
