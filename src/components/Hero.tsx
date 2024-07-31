import { Button } from './ui/button'

export default function Hero () {
  return (
    <section id='hero' className=' flex flex-col items-center gap-4'>
      <img className='rounded-md' src='/author2.png' alt='' />
      <article className='mt-3 grid gap-8 text-center'>
        <h1 className='max-w-[24ch] text-4xl font-bold leading-tight sm:text-5xl md:text-title'>
          Transforming <span className='text-secondary'>Concepts</span> into
          Engaging Websites
        </h1>
        <p className='text-sm opacity-70 md:text-base'>
          Welcome! I&apos;m Steven Fernandez, dedicated to delivering visually
          appealing web solutions.
        </p>
        <div className='flex justify-center gap-4'>
          <Button
            className='transition duration-300 hover:-translate-y-1'
            asChild
            size='lg'
          >
            <a href='#projects'>Explore my Projects</a>
          </Button>
          <Button
            className='px-12 transition duration-300 hover:-translate-y-1'
            variant='outline'
            size='lg'
          >
            Get in Touch
          </Button>
        </div>
      </article>
    </section>
  )
}
