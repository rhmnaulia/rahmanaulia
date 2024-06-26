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
    label: 'Contact',
    path: '/contact',
  },
]

export function Navbar() {
  let pathname = usePathname()

  pathname = pathname.startsWith('/writing/') ? '/writing' : pathname

  function getLinkClassName(isActive: boolean) {
    return cn(
      ' font-serif',
      isActive
        ? 'font-medium underline underline-offset-4 decoration-1 decoration-neutral-700 hover:decoration-neutral-500 transition-colors dark:text-foreground/80 text-foreground/90 hover:text-foreground/100 hover:dark:text-foreground/90'
        : 'dark:text-foreground/60 text-foreground/80 transition-colors hover:text-foreground/100 hover:dark:text-foreground/90'
    )
  }

  return (
    <header className='z-40 flex w-full gap-2 flex-row justify-between items-center'>
      <nav
        aria-label='Main navigation'
        className='flex items-center gap-3 md:gap-4'
      >
        {NAV_MENU_LINK.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
            className={getLinkClassName(pathname === menu.path)}
            aria-label={menu.label}
          >
            {menu.label}
          </Link>
        ))}
      </nav>
      <ModeToggle />
    </header>
  )
}
