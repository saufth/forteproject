'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { contactEmail, siteConfig, siteNav } from '@/config/site'

const contactLink = siteNav.find(({ title }) => title === 'Contáctanos')!

export default function SiteHeader () {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className='w-full sticky top-0 left-0 z-40 transition-colors duration-300 border-b border-black/20 bg-white/90 backdrop-filter backdrop-blur-sm'>
        <nav
          className='relative'
          aria-label='Emah Directory'
        >
          <div className='container relative'>
            <div
              className='flex items-center w-full h-[68px] lg:h-[84px]'
            >
              <div className='w-1/2 lg:w-1/4 h-5 lg:h-6'>
                <Link href='/' onClick={closeMenu}>
                  <Icons.Logoname className='w-auto h-full fill-black' />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </Link>
              </div>
              <div className='hidden lg:flex w-1/2 justify-around'>
                {siteNav.map((navItem, key) => (
                  key < siteNav.length - 1 && (
                    <Button variant='link' size='lg' asChild key={key}>
                      <Link className='flex items-center gap-x-1' href={navItem.href}>
                        {navItem.title}
                      </Link>
                    </Button>
                  )))}
              </div>
              <div className='w-1/2 lg:w-1/4 flex justify-end'>
                <div className='hidden lg:flex justify-end'>
                  <Button size='lg' asChild>
                    <Link href={contactLink.href}>
                      {contactLink.title}
                    </Link>
                  </Button>
                </div>
                <div className='block lg:hidden w-6 h-4 relative [&>span]:transition-all' onClick={toggleMenu}>
                  <span className={cn('w-full h-[2px] bg-primary absolute top-0 left-0', isMenuOpen && 'inset-0 m-auto rotate-45')} />
                  <span className={cn('w-full h-[2px] bg-primary absolute top-0 bottom-0 my-auto', isMenuOpen && 'opacity-0')} />
                  <span className={cn('w-full h-[2px] bg-primary absolute bottom-0 left-0', isMenuOpen && 'inset-0 m-auto -rotate-45')} />
                  <span className='sr-only'>Toggle menu</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={cn(
          'w-full h-0 bg-background fixed flex flex-col justify-between top-0 left-0 z-30 overflow-hidden transition-[height] duration-300',
          isMenuOpen && 'h-[100dvh]'
        )}
      >
        <nav className='container mt-spacing-9'>
          {siteNav.map((navItem, key) => (
            <Button className='rounded-none w-full px-0' variant='link' size='lg' asChild key={key}>
              <Link className='flex justify-between text-xl' href={navItem.href} onClick={() => setIsMenuOpen(false)}>
                {navItem.title}
              </Link>
            </Button>
          ))}
        </nav>
        <div className='container pb-8'>
          <div className='text-sm text-muted-foreground'>
            Correo electrónico
          </div>
          <Link className='text-baseg' href={`mailto:${contactEmail}`} onClick={() => setIsMenuOpen(false)}>
            {contactEmail}
          </Link>
        </div>
      </div>
    </>
  )
}
