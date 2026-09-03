import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact,
  SiTailwindcss, SiFirebase, SiGit, SiGithub, SiAstro,
} from 'react-icons/si'

const tabsList = [
  { value: 'story', label: 'Story' },
  { value: 'experience', label: 'Experience' },
  { value: 'skills', label: 'Skills' },
]

const skills = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Astro', icon: SiAstro },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
]

export default function TabsAbout() {
  return (
    <Tabs defaultValue='story' className='w-full'>
      <TabsList className='mb-6 inline-flex items-center justify-center rounded-full border border-border bg-card px-1 py-5 text-muted-foreground'>
        {tabsList.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className='inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium opacity-60 ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:opacity-100 data-[state=active]:shadow-sm'
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value='story' className='min-h-[300px] space-y-4 text-[15.5px] leading-relaxed text-muted-foreground'>
        <p>
          I'm a junior front-end developer based in Chicago. Over the past
          two years I've built a solid set of skills for making{' '}
          <span className='text-primary'>
            responsive, accessible, genuinely nice-looking websites
          </span>
          .
        </p>
        <p>
          My focus is on seamless user experience and clean, efficient code.
          I like{' '}
          <span className='text-primary'>
            turning design concepts into fully functional sites
          </span>{' '}
          that meet both client needs and modern web standards.
        </p>
        <p>
          It started with a passion for problem-solving and creativity.
          Since then{' '}
          <span className='text-primary'>
            I've worked on personal projects and built free websites for
            local stores
          </span>{' '}
          — real-world practice in understanding what users actually need.
        </p>
      </TabsContent>

      <TabsContent value='skills' className='min-h-[300px]'>
        <p className='mb-5 text-[15.5px] leading-relaxed text-muted-foreground'>
          The tools I reach for, and keep sharpening.
        </p>
        <div className='grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5'>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className='flex flex-col items-center gap-2.5 rounded-xl border border-border bg-card px-2.5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5'
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <skill.icon className='h-7 w-7' />
              <span className='text-center text-xs tracking-wide'>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value='experience' className='min-h-[300px] space-y-6'>
        <div className='relative border-l border-border pl-5'>
          <span className='absolute -left-[3.5px] top-1.5 h-[7px] w-[7px] rounded-full bg-primary' />
          <div className='mb-1.5 text-xs uppercase tracking-wide text-primary'>
            2023 — Present
          </div>
          <h3 className='font-display mb-2 text-xl font-normal'>
            Freelance Web Developer
          </h3>
          <p className='text-sm leading-relaxed text-muted-foreground'>
            Designed and developed websites for local businesses, focusing on
            responsive design and user experience.
          </p>
        </div>
        <div className='relative border-l border-border pl-5'>
          <span className='absolute -left-[3.5px] top-1.5 h-[7px] w-[7px] rounded-full bg-secondary' />
          <div className='mb-1.5 text-xs uppercase tracking-wide text-secondary'>
            2022 — 2023
          </div>
          <h3 className='font-display mb-2 text-xl font-normal'>
            Personal Projects
          </h3>
          <p className='text-sm leading-relaxed text-muted-foreground'>
            Built various web applications to sharpen my skills in React,
            TypeScript, and modern web development practices.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}