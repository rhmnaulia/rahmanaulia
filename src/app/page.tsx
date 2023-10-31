import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import Socials from '@/components/Socials'
import presentation from '@/data/presentation'
import projects from '@/data/projects'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function Home() {
  return (
    <section className='w-full flex flex-col gap-20 flex-grow'>
      <article className='flex flex-col gap-6'>
        <h1 className='text-2xl dark:text-white font-bold tracking-tighter'>
          {presentation.title}
        </h1>
        <p className='break-words'>{presentation.description}</p>
        <Socials />
      </article>

      <article className='flex flex-col gap-6'>
        <header className='flex w-full flex-row items-center justify-between gap-2'>
          <h3 className='text-lg dark:text-white'>Latest posts</h3>
          <Link
            className='underline decoration-dashed underline-offset-8'
            href='/posts'
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
          <h3 className='text-lg dark:text-white'>Latest projects</h3>
          <Link
            className='underline decoration-dashed underline-offset-8'
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
