import IconMarquee from './ui/IconMarquee'
import {
  CSS,
  Firebase,
  Git,
  Github,
  HTML5,
  JavaScript,
  Nextjs,
  ReactIcon,
  TailwindCSS,
  TypeScript
} from './ui/icons'

interface Skill {
  icon: React.ReactNode
}
const skillsList: Skill[] = [
  {
    icon: <CSS />
  },
  {
    icon: <Git />
  },
  {
    icon: <Github />
  },
  {
    icon: <HTML5 />
  },
  {
    icon: <ReactIcon />
  },
  {
    icon: <TypeScript />
  },
  {
    icon: <Firebase />
  },
  {
    icon: <TailwindCSS />
  },
  {
    icon: <JavaScript />
  },
  {
    icon: <Nextjs />
  }
]
export default function Skills () {
  return (
    <section
      className='full-section mt-20 flex w-full flex-col items-center'
      id='skills'
    >
      <h2 className='mt-4 text-[44px] font-bold'>Skills</h2>
      <IconMarquee icons={skillsList} />
    </section>
  )
}
