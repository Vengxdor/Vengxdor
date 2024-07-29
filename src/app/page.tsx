import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home () {
  return (
    <>
      <Navbar />
      <main className='mx-auto w-11/12 py-8 md:w-10/12 lg:max-w-screen-xl'>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
