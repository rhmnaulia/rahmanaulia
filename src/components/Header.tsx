'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from './ModeToggle'

export const NAV_MENU_LINK = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Blog',
    path: '/blog',
  },
  {
    label: 'About',
    path: '/about',
  },
]

const Header = () => {
  let pathname = usePathname()
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
      <nav className='flex items-center gap-4'>
        {NAV_MENU_LINK.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={cn(
              pathname === menu.path
                ? 'dark:text-foreground/90 font-medium text-foreground/100 underline decoration-wavy underline-offset-8'
                : 'dark:text-foreground/60 text-foreground/80 transition-colors hover:text-foreground/100 hover:dark:text-foreground/90'
            )}
          >
            {menu.label}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  )
}

export default Header
