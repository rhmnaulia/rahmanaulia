import { DocumentRenderer } from '@keystatic/core/renderer'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../../keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await reader.collections.posts.read(params.slug)

  return post ? (
    <div className='w-full'>
      <h1 className='text-2xl text-balance text-center font-semibold mb-6'>
        {post.title}
      </h1>
      <div className='prose dark:prose-invert'>
        <DocumentRenderer
          document={await post.content()}
          componentBlocks={{}}
        />
      </div>
    </div>
  ) : (
    <div>No Post Found</div>
  )
}
