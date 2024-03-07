import { GithubIcon, XIcon, LinkedInIcon } from '@/assets/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { GlobeIcon, Mail } from 'lucide-react'

const socials = [
  { name: 'email', url: '', icon: Mail },
  { name: 'Github', url: '', icon: GithubIcon },
  { name: 'LinkedIn', url: '', icon: LinkedInIcon },
  { name: 'X', url: '', icon: XIcon },
]

const BioCard = () => {
  return (
    <div className='flex items-center w-fit mx-auto gap-8 p-8 rounded-2xl border shadow-md'>
      <div className='flex flex-col gap-3'>
        <p className='max-w-md items-center text-pretty text-xs text-muted-foreground'>
          <a
            className='inline-flex gap-x-1.5 align-baseline leading-none hover:underline'
            href=''
            target='_blank'
          >
            <GlobeIcon className='size-3 text-pretty' />
            Jakarta, Indonesia
          </a>
        </p>
        <span className='flex items-baseline gap-2'>
          <h1 className='md:text-2xl text-xl font-bold font-display text-pretty'>
            Aulia Rahman
          </h1>
          <p className='text-xs text-foreground/65'>he/him</p>
        </span>
        <div className='flex gap-2 text-foreground/70'>
          {socials.map((social) => (
            <Button
              key={social.name}
              className='size-8'
              variant='outline'
              size='icon'
              asChild
            >
              <a href={social.url}>
                <social.icon className='size-4' />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <Avatar className='md:size-28 size-20 rounded-2xl'>
        <AvatarImage src='https://github.com/rhmnaulia.png' />
        <AvatarFallback className='size-28 rounded-2xl'>AR</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default BioCard
