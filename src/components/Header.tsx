import { useEffect, useState } from 'react'

const navItems = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header className='sticky top-5 z-50 my-5 flex w-full justify-center'>
        <nav
          className={`flex justify-center gap-4 rounded-3xl px-6 py-1 backdrop-blur-md transition-colors duration-200 ${
            scrolled
              ? 'border border-zinc-600 bg-black'
              : 'border-transparent bg-transparent'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              className='opacity-80 transition-opacity duration-300 hover:opacity-100'
            >
              {item.title}
            </a>
          ))}
        </nav>
      </header>
    </>
  )
}
