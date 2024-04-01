import BioCard from '@/components/bio-card'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { EDUCATIONS, SKILLS, WORK_EXPERIENCE } from '@/data/resume'
import { cx } from 'class-variance-authority'

const AboutPage = () => {
  return (
    <section className='flex flex-col gap-16 w-full'>
      <BioCard />
      <article>
        <h2 className='text-2xl w-fit font-medium italic tracking-tight mb-6 font-serif'>
          About
        </h2>
        <p className='text-pretty text-sm'>
          As a full-stack engineer currently occupying a mid-level frontend
          engineer role in Indonesia&#39;s govtech procurement, I am passionate
          about building solid software that is clean, well-tested, and
          maintainable. I am committed to endless exploration—
          <em>stay hungry, stay foolish</em>.
        </p>
      </article>
      <article>
        <h2 className='text-2xl font-medium italic tracking-tight mb-6 font-serif w-fit'>
          Work Experience
        </h2>
        <div className='last-of-type:pb-0'>
          {WORK_EXPERIENCE.map((work, index) => {
            return (
              <Card key={work.company} className='border-none shadow-none mt-1'>
                <CardHeader className='px-0 pb-2 pt-0'>
                  <div className='flex items-center justify-between gap-x-1'>
                    <h3 className='inline-flex items-center justify-center gap-x-1 font-serif text-xl  leading-none'>
                      <a className='hover:underline' href={work.link}>
                        {work.company}
                      </a>
                    </h3>
                    <div className='text-sm tabular-nums text-muted-foreground'>
                      {work.start} - {work.end}
                    </div>
                  </div>
                  <h4 className='text-sm leading-none '>{work.title}</h4>
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
        <h2 className='text-2xl font-medium italic tracking-tight mb-6 font-serif w-fit'>
          Education
        </h2>
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
                <CardContent className='text-xs px-0 pb-0'>
                  {education.description}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </article>
      <article>
        <h2 className='text-2xl font-medium italic tracking-tight mb-3 font-serif w-fit'>
          Skills
        </h2>
        <div className='flex flex-wrap gap-2'>
          {SKILLS.map((skill) => {
            return (
              <Badge
                key={skill}
                className='rounded-sm shadow-sm dark:bg-neutral-300'
                variant={'default'}
              >
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
