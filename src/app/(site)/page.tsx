import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <section className='flex flex-col gap-2'>
        <span className='flex items-baseline gap-2'>
          <h1 className='text-2xl font-bold font-display bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent'>
            Aulia Rahman
          </h1>
          <p className='text-xs text-foreground/65'>he/him</p>
        </span>
        <p className='text-sm text-pretty'>
          <em className='text-pretty'>
            Dreaming of hoops but excelling in loops
          </em>
          . Traded the jersey for a keyboard, yet I’m still scoring with tech
          flair and code that cares.
        </p>
        <div className='flex gap-2 mt-2'>
          <Button
            className='shadow-md dark:bg-neutral-900 bg-neutral-100'
            variant={'outline'}
          >
            Writing
          </Button>
          <Button
            className='shadow-md dark:bg-neutral-900 bg-neutral-100'
            variant={'outline'}
          >
            Learn more about me
          </Button>
        </div>
      </section>
    </div>
  )
}
