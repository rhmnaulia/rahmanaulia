import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const SOCIAL_LINKS = [
  {
    name: 'Twitter ',
    url: 'https://twitter.com/rhmnaul',
    icon: <Twitter />,
  },
  {
    name: 'Instagram ',
    url: 'https://instagram.com/rhmnaulia',
    icon: <Instagram />,
  },
  {
    name: 'Github ',
    url: 'https://github.com/rhmnaulia',
    icon: <Github />,
  },
  {
    name: 'LinkedIn ',
    url: 'https://linkedin.com/in/rhmnaulia',
    icon: <Linkedin />,
  },
]

const Socials = () => {
  return (
    <div className='inline-flex gap-4 items-center dark:text-white'>
      {SOCIAL_LINKS.map((item, index) => (
        <Link
          href={item.url}
          target='_blank'
          key={index}
          className='dark:hover:text-sky-400'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
