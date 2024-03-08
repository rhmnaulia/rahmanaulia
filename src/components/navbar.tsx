'use client'

import Link from 'next/link'
import { ModeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const NAV_MENU_LINK = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Writing',
    path: '/writing',
  },
  {
    label: 'About',
    path: '/about',
  },
]

export function Navbar() {
  let pathname = usePathname()

  // Simplify pathname adjustment
  pathname = pathname.startsWith('/writing/') ? '/writing' : pathname

  function getLinkClassName(isActive: boolean) {
    return cn(
      'text-base tracking-tight',
      isActive
        ? 'font-medium'
        : 'dark:text-foreground/60 text-foreground/60 transition-colors hover:text-foreground/100 hover:dark:text-foreground/90'
    )
  }

  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
      <nav aria-label='Main navigation' className='flex items-center gap-4'>
        {NAV_MENU_LINK.map((menu) => (
          <Link
            key={menu.path} // Use menu.path as a key for better uniqueness
            href={menu.path}
            className={getLinkClassName(pathname === menu.path)}
            aria-label={menu.label} // Improve accessibility
          >
            {menu.label}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  )
}
