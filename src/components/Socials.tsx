import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    name: 'Twitter ',
    url: 'https://twitter.com/rhmnaul',
    icon: <Twitter size={28} />,
  },
  {
    name: 'Instagram ',
    url: 'https://instagram.com/rhmnaulia',
    icon: <Instagram size={28} />,
  },
  {
    name: 'Github ',
    url: 'https://github.com/rhmnaulia',
    icon: <Github size={28} />,
  },
  {
    name: 'LinkedIn ',
    url: 'https://linkedin.com/in/rhmnaulia',
    icon: <Linkedin size={28} />,
  },
]

const Socials = () => {
  return (
    <div className='inline-flex gap-4 mt-1 items-center'>
      {SOCIAL_LINKS.map((item, index) => (
        <Link
          href={item.url}
          target='_blank'
          key={index}
          className='hover:text-muted-foreground transition-colors'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
