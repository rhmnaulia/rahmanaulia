import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <section className='flex flex-col gap-2'>
        <span className='flex items-baseline gap-2'>
          <h1 className='text-3xl font-bold font-display'>Aulia Rahman</h1>
          <p className='text-xs text-foreground/65'>he/him</p>
        </span>
        <p className='text-base text-pretty'>
          <em>Crafting interfaces</em>. Building sophisticated software and web
          experiences. Pushing boundaries! Ensure functionality, quality, and
          speed.
        </p>
        <div className='flex gap-2 mt-2'>
          <Button
            className='shadow-md dark:bg-neutral-900 bg-neutral-100'
            variant={'outline'}
          >
            Writings
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
