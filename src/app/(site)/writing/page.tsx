import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

const WritingPage = async () => {
  const posts = await reader.collections.posts.all()
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <div className='flex gap-1 items-baseline'>
          <h1 className='font-bold md:text-2xl text-xl'>The Diverse Canvas</h1>
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
      </div>

      <div className='flex-grow border-t border-foreground/10'></div>

      <div className='w-full'>
        <ul>
          {posts.map((post, index) => (
            <li key={post.slug} className='flex items-baseline gap-1 tex'>
              <span className='mr-2 font-mono text-base text-foreground/80'>{`${(
                posts.length -
                index -
                1
              )
                .toString()
                .padStart(2, '0')}.`}</span>
              <Link href={`/writing/${post.slug}`} className='mb-6'>
                <h2 className='font-semibold text-base text-pretty '>
                  {post.entry.title}
                </h2>
                <p className='text-foreground/60 text-sm text-pretty'>
                  {post.entry.summary}
                </p>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {post.entry.tags.map((tag) => (
                    <Badge key={tag} variant='secondary' className='rounded-md'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WritingPage
