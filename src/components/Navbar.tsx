'use client'
import { Oooh_Baby } from 'next/font/google'

import { useState } from 'react'
import { FaBars, FaLinkedin } from 'react-icons/fa'
import { Button } from './ui/button'
import { Github } from './icons'
const inter = Oooh_Baby({ weight: '400', subsets: ['latin'] })

const navItems = [
  {
    title: 'Home',
    link: '#'
  },
  {
    title: 'Projects',
    link: '#projects'
  },
  {
    title: 'Contact',
    link: '#contact'
  }
]

export default function Navbar () {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <nav className='mx-auto w-11/12 py-8 md:w-10/12 lg:max-w-[797px]'>
        <div className='flex items-center justify-between'>
          <h1 className={`${inter.className} text-4xl font-bold`}>Steven</h1>
          <ul className='hidden text-center md:flex md:gap-4'>
            {navItems.map((item, index) => (
              <li key={index} className='text-lg'>
                <a
                  href={item.link}
                  className='opacity-80 transition-opacity duration-300 hover:opacity-100'
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <div className='hidden items-center gap-3 md:flex'>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/steven-fernandez-11a522274/'
              >
                <span className='sr-only'>LinkedIn icon</span>
                <FaLinkedin className='text-3xl opacity-60 transition-opacity duration-200 hover:opacity-100 ' />
              </a>
              <a target='_blank' href='https://github.com/vengxdor'>
                <span className='sr-only'>github icon</span>
                <Github className='text-3xl opacity-60 transition-opacity duration-200 hover:opacity-100 ' />
              </a>
              {/* Todo: Add resume */}
              <Button className='px-7'>Resume</Button>
            </div>
            <button
              onClick={() => {
                setMobileMenu(!mobileMenu)
              }}
              className='block md:hidden'
            >
              <FaBars />
            </button>
          </div>
        </div>
        {/* mobile */}
        {!!mobileMenu && (
          <ul className='mt-4 flex flex-col gap-4 text-center md:hidden'>
            {navItems.map((item, index) => (
              <li key={index} className='text-lg'>
                <a
                  href={item.link}
                  className='opacity-80 transition-opacity duration-300 hover:opacity-100'
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <div className='flex flex-col items-center gap-3 md:hidden'>
                <div className='flex'>
                  <a
                    target='_blank'
                    href='https://www.linkedin.com/in/steven-fernandez-11a522274/'
                  >
                    <FaLinkedin className='text-3xl opacity-60 transition-opacity duration-200 hover:opacity-100 ' />
                  </a>
                  <a target='_blank' href='https://github.com/vengxdor'>
                    <Github className='text-3xl opacity-60 transition-opacity duration-200 hover:opacity-100 ' />
                  </a>
                </div>
                {/* Todo: Add resume */}
                <Button size='lg'>Resume</Button>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
