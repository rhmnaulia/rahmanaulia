import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <section className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>Aulia Rahman</h1>
        <p className='text-base'>
          <em>Crafting interfaces.</em> Building polished software and web
          experiences. Experimenting with magical details in user interfaces.
          Software Engineer at Indonesian GovTech Procurement.
        </p>
        <div className='flex gap-2 mt-2'>
          <Button variant={'outline'}>writings</Button>
          <Button variant={'outline'}>learn more about me</Button>
        </div>
      </section>
    </div>
  )
}
