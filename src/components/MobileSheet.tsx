import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Menu } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'

export default function MobileSheet() {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <Menu className='h-6 w-6' />
        </SheetTrigger>
        <SheetContent side='right'>
          <nav className='mt-8 flex flex-col gap-4'>
            <a
              href='#'
              className='text-lg font-medium transition-colors hover:text-primary'
            >
              Home
            </a>
            <a
              href='#projects'
              className='text-lg font-medium transition-colors hover:text-primary'
            >
              Projects
            </a>
            <a
              href='#about'
              className='text-lg font-medium transition-colors hover:text-primary'
            >
              About
            </a>
            <a
              href='#contact'
              className='text-lg font-medium transition-colors hover:text-primary'
            >
              Contact
            </a>
            <Button asChild className='w-full'>
              <a
                href='/cv.pdf'
                download='cv.pdf'
                className={`${buttonVariants({ variant: 'outline' })}  md:flex text-accent !bg-secondary/10 !border-accent`}
              >
                Resume
              </a>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
