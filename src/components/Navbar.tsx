'use client'

import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { Button } from './ui/button'

export default function Navbar () {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <nav className='mx-auto w-11/12 py-8 md:w-10/12 lg:max-w-screen-xl'>
        <div className='flex items-center justify-between'>
          <div>
            <a href='/'>
              <img
                width={80}
                height='auto'
                src='/logo.webp'
                alt='The logo of the joint smoke store'
              />
            </a>
          </div>
          <ul className='hidden text-center md:flex md:gap-4'>
            <li className='text-lg'>
              <button className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                Shop now
              </button>
            </li>
            <li className='text-lg'>
              <button className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                Contact
              </button>
            </li>
            <li className='text-lg'>
              <a
                className='opacity-80 transition-opacity duration-300 hover:opacity-100'
                href='#products'
              >
                Products
              </a>
            </li>
          </ul>
          <div>
            <button
              onClick={() => {
                setMobileMenu(!mobileMenu)
              }}
              className='block md:hidden'
            >
              <FaBars />
            </button>

            <Button className='hidden rounded-md md:block'>Shop</Button>
          </div>
        </div>
        {/* mobile */}
        {!!mobileMenu && (
          <ul className='mt-4 flex flex-col gap-4 text-center md:hidden '>
            <li className='text-lg'>
              <button className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                Shop now
              </button>
            </li>
            <li className='text-lg'>
              <button className='opacity-80 transition-opacity duration-300 hover:opacity-100'>
                Contact
              </button>
            </li>
            <li className='text-lg'>
              <a
                className='opacity-80 transition-opacity duration-300 hover:opacity-100'
                href='#products'
              >
                Products
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}
