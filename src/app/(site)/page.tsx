/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <article className='flex flex-col gap-8'>
      <section className='flex flex-col gap-2'>
        <span className='flex items-baseline gap-2'>
          <h1 className='text-2xl font-bold font-display bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent'>
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
            className='bg-gradient-to-r from-foreground/40 to-foreground/10'
            variant={'outline'}
          >
            Writing
          </Button>
          <Button variant={'outline'}>Learn more about me</Button>
        </div>
      </section>
      <section className='w-full'>
        <h2 className='text-xl font-semibold w-full  bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent'>
          Featured Writings
        </h2>
      </section>
      {/* <section>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                alt=''
              />
            </div>
            <div>
              <img
                className='h-auto max-w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </section> */}
    </article>
  )
}
