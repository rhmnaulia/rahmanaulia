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
    label: 'Posts',
    path: '/posts',
  },
  {
    label: 'About',
    path: '/about',
  },
]

const Header = () => {
  const pathname = usePathname()
  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center text-sm'>
      <nav className='flex items-center gap-4'>
        {NAV_MENU_LINK.map((menu, index) => (
          <Link
            key={index}
            href={menu.path}
            className={cn(
              pathname === menu.path
                ? 'font-bold dark:text-white underline decoration-dashed underline-offset-8'
                : 'dark:text-neutral-300'
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
