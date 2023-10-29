import { ExternalLink } from 'lucide-react'
import { Card, CardTitle } from './ui/card'
import Link from 'next/link'

type TProjectCardProps = {
  project: {
    url: string
    title: string
    stacks: string[]
  }
}

const formatStacks = (values: string[]) =>
  values.toString().replaceAll(',', ' • ')

const ProjectCard = ({ project }: TProjectCardProps) => {
  return (
    <Link href={project.url} target='_blank'>
      <Card className='transition-all duration-300 hover:-translate-y-2'>
        <div className='flex flex-row w-full justify-between items-center px-6 py-4'>
          <div className='flex items-center gap-4'>
            <CardTitle className='text-base'>{project.title}</CardTitle>
            <p className='text-xs'>{formatStacks(project.stacks)}</p>
          </div>
          <ExternalLink size={18} />
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
