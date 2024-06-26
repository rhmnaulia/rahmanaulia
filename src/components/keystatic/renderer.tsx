import { DocumentRendererProps } from '@keystatic/core/renderer'
import { Shiki } from '@/components/shiki'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

export function getArticleRenderers(): DocumentRendererProps['renderers'] {
  return {
    block: {
      code: ({ children: code, language = 'plain' }) => {
        return (
          <ScrollArea
            className={cn('not-prose relative rounded-sm md:text-sm text-xs')}
          >
            <Shiki code={code} language={language} className='[&>pre]:p-4' />
            <ScrollBar orientation='horizontal' />
          </ScrollArea>
        )
      },
    },
  }
}
