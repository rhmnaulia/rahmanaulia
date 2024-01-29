import PostCard from '@/components/PostCard'
import ProjectCard from '@/components/ProjectCard'
import Socials from '@/components/Socials'
import presentation from '@/data/presentation'
import projects from '@/data/projects'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
import { MotionArticle, MotionDiv, MotionSection } from '@/components/MotionClient'


const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <MotionSection
      className='w-full flex flex-col gap-14 md:gap-20 flex-grow'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionArticle
        className='flex flex-col gap-4'
        variants={sectionVariants}
      >
         <h1 className='text-2xl dark:text-foreground/100 font-bold text-pretty'>
          {presentation.title}
        </h1>
        <p className='break-words dark:text-foreground/80 text-pretty'>
          {presentation.description}
        </p>
        <span className='mt-1'>
          <Socials />
        </span>
      </MotionArticle>

      <MotionArticle
        className='flex flex-col gap-6'
        variants={sectionVariants}
      >
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
        <MotionDiv
          className='flex flex-col md:flex-row gap-4 justify-between'
          variants={containerVariants}
        >
          {allPosts.slice(0, 2).map((post, index) => (
            <MotionDiv key={index} variants={cardVariants}>
              <PostCard post={post} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionArticle>

      <MotionArticle
        className='flex flex-col gap-6'
        variants={sectionVariants}
      >
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
        <MotionDiv
          className='flex flex-col w-full gap-4'
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <MotionDiv key={idx} variants={cardVariants}>
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionArticle>
    </MotionSection>
  )
}