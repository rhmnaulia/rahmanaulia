import { MotionArticle, MotionDiv } from '@/components/MotionClient';
import formatDate from '@/lib/formatDate';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'I write about anything here.',
}

export default function PostsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  // Variants for each individual post
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };


  return (
    <div className='flex-grow'>
    <h1 className='text-2xl mb-6 font-semibold'>Blog Posts</h1>
    <MotionDiv
      className='flex-col gap-2 flex'
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {allPosts.map((post, index) => (
        <MotionArticle
          className='flex items-center justify-between'
          key={post._id}
          variants={itemVariants}
        >
          <Link href={`/blog/${post.slugAsParams}`}>
            <h2 className='md:text-lg text-base line-clamp-1 text-foreground/90 hover:text-foreground/100'>
              {post.title}
            </h2>
          </Link>
          <p className='text-sm text-muted-foreground italic'>
            {formatDate(post.date)}
          </p>
        </MotionArticle>
      ))}
    </MotionDiv>
  </div>
  );
}
