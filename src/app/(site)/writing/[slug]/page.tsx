import { DocumentRenderer } from '@keystatic/core/renderer'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '../../../../../keystatic.config'
import { getArticleRenderers } from './renderer'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Post({ params }: { params: { slug: string } }) {
  const renderers = getArticleRenderers()
  const post = await reader.collections.posts.read(params.slug)

  return post ? (
    <div className='w-full prose-h1:text-center  prose-h1:font-semibold prose-h1:text-pretty prose  dark:prose-invert'>
      <DocumentRenderer document={await post.content()} renderers={renderers} />
    </div>
  ) : (
    <div>No Post Found</div>
  )
}
