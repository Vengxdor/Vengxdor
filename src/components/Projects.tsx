import { FaAngleRight } from 'react-icons/fa'
import { Button } from './ui/button'

interface Project {
  img: {
    src: string
    alt: string
  }
  title: string
  description: string
  link: string
}
const projects: Project[] = [
  {
    img: {
      src: '/projects/joint.png',
      alt: 'The Joint - Smoke shop'
    },
    title: 'The Joint - Smoke shop',
    description:
      'Page for “The Joint”  a local business. With a lot of smoke products I create a page to showcase a large amount of them. ',
    link: 'https://the-joint-sooty.vercel.app/'
  },
  {
    img: {
      src: '/projects/danny.png',
      alt: 'Danny the groomer - Dog grooming shop'
    },
    title: 'Danny the groomer - Dog grooming shop',
    description:
      'Danny a dog groomer. I created a page to showcase his work and services with a lot of images.',
    link: 'https://danny-groomer.vercel.app/'
  },
  {
    img: {
      src: '/projects/library.png',
      alt: 'svete library'
    },
    title: 'Svete Library',
    description: 'A test library created to showcase my skills using React and Tailwind.',
    link: 'https://svete-library.vercel.app/'
  }
]

export default function Projects () {
  return (
    <section className='mt-32' id='projects'>
      <h2 className='text-center text-subtitle font-bold'>
        Some recents projects
      </h2>
      <ul className='mx-auto mt-8 grid w-3/4 grid-cols-2 justify-center gap-3'>
        {projects.map((project, index) => (
          <li
            className='mx-auto mt-5 grid max-w-[435px] justify-center gap-2'
            key={index}
          >
            <img
              className='rounded-md'
              src={project.img.src}
              alt={project.img.alt}
            />
            <h4 className='text-2xl font-bold '>{project.title}</h4>
            <p className='opacity-60'>{project.description}</p>
            <div className='mt-2 flex justify-end'>
              <Button className='flex gap-1' asChild variant='link'>
                <a target='_blank' href={project.link}>
                  Visit
                  <FaAngleRight />
                </a>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
