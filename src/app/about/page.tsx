import BioCard from '@/components/bio-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { EDUCATIONS, SKILLS, WORK_EXPERIENCE } from '@/data/resume'
import { cx } from 'class-variance-authority'

const AboutPage = () => {
  return (
    <section className='flex flex-col gap-12 w-full'>
      <BioCard />
      <article>
        <h2 className='text-xl font-bold mb-3'>About</h2>
        <p className='text-pretty text-sm'>
          As a Full Stack Engineer, I have successfully taken multiple products
          from 0 to 1. I lead teams effectively, ensuring an environment where
          people can do their best work. Currently, I work mostly with
          TypeScript, React, Node.js, and GraphQL. I have over 8 years of
          experience in working remotely with companies all around the world.
        </p>
      </article>
      <article>
        <h2 className='text-xl font-bold mb-3'>Work Experience</h2>
        <div className='last-of-type:pb-0'>
          {WORK_EXPERIENCE.map((work, index) => {
            return (
              <Card key={work.company} className='border-none shadow-none mt-1'>
                <CardHeader className='px-0 pb-2 pt-0'>
                  <div className='flex items-center justify-between gap-x-1 text-base'>
                    <h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
                      <a className='hover:underline' href={work.link}>
                        {work.company}
                      </a>
                    </h3>
                    <div className='text-sm tabular-nums text-muted-foreground'>
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <h4 className='text-sm leading-none'>{work.title}</h4>
                </CardHeader>
                <CardContent
                  className={cx(
                    'text-xs px-0',
                    index === WORK_EXPERIENCE.length - 1 ? 'pb-0' : ''
                  )}
                >
                  {work.description}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </article>
      <article>
        <h2 className='text-xl font-bold mb-3'>Education</h2>
        <div className='last-of-type:pb-0'>
          {EDUCATIONS.map((education, index) => {
            return (
              <Card
                key={education.institution}
                className='border-none shadow-none mt-1'
              >
                <CardHeader className='px-0 pb-2 pt-0'>
                  <div className='flex items-center justify-between gap-x-1 text-base'>
                    <h3 className='inline-flex items-center justify-center gap-x-1 font-semibold leading-none'>
                      <a className='hover:underline' href={education.link}>
                        {education.institution}
                      </a>
                    </h3>
                    <div className='text-sm tabular-nums text-muted-foreground'>
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent
                  className={cx(
                    'text-xs px-0',
                    index === WORK_EXPERIENCE.length - 1 ? 'pb-0' : ''
                  )}
                >
                  {education.description}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </article>
      <article>
        <h2 className='text-xl font-bold mb-3'>Skills</h2>
        <div className='flex flex-wrap gap-1'>
          {SKILLS.map((skill) => {
            return (
              <Badge key={skill} className='rounded-lg'>
                {skill}
              </Badge>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default AboutPage
