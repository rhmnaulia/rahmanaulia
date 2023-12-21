import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import Socials from '@/components/Socials'
import presentation from '@/data/presentation'
import projects from '@/data/projects'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
  return (
    <section className='w-full flex flex-col gap-14 md:gap-20 flex-grow'>
      <article className='flex flex-col gap-4'>
        <h1 className='text-2xl dark:text-foreground/100 font-bold text-pretty'>
          {presentation.title}
        </h1>
        <p className='break-words dark:text-foreground/80 text-pretty'>
          {presentation.description}
        </p>
        <span className='mt-1'>
          <Socials />
        </span>
      </article>

      <article className='flex flex-col gap-6'>
        <header className='flex w-full flex-row items-center justify-between gap-2'>
          <h3 className='text-lg'>Latest posts</h3>
          <Link
            className='text-foreground/80 hover:text-foreground/90 underline decoration-dashed text-sm hover:decoration-foreground/80 decoration-foreground/60 underline-offset-8'
            href='/blog'
            target='_self'
          >
            See all posts
          </Link>
        </header>
        <div className='flex flex-col md:flex-row gap-4 justify-between'>
          {allPosts.slice(0, 2).map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </div>
      </article>

      <article className='flex flex-col gap-6'>
        <header className='flex w-full flex-row items-center justify-between gap-2'>
          <h3 className='text-lg'>Latest projects</h3>
          <Link
            className='text-foreground/80 hover:text-foreground/90 underline text-sm decoration-dashed hover:decoration-foreground/80 decoration-foreground/60 underline-offset-8'
            href='https://github.com/rhmnaulia'
            target='_blank'
          >
            See all projects
          </Link>
        </header>
        <div className='flex flex-col w-full gap-4'>
          {projects.map((project, idx) => (
            <ProjectCard project={project} key={idx} />
          ))}
        </div>
      </article>
    </section>
  )
}
