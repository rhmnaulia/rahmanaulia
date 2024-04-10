const Footer = () => {
  return (
    <footer className='w-full max-w-3xl mx-auto pt-12 pb-4'>
      <div className='pt-6 flex flex-col gap-4 border-t border-dashed border-neutral-500 sm:flex-row-reverse sm:justify-between sm:items-center'>
        <div className='flex flex-wrap gap-x-4 gap-y-1'>
          <a
            className='inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2'
            href='https://github.com/rhmnaulia'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            className='inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2'
            href='https://www.linkedin.com/in/rhmnaulia/'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          <a
            className='inline-flex items-center justify-center text-sm hover:underline hover:underline-offset-2'
            href='https://twitter.com/rhmnaul'
            target='_blank'
            rel='noopener noreferrer'
          >
            X/Twitter
          </a>
        </div>
        <p className='text-sm'>
          © 2024&nbsp;
          <a className='hover:underline hover:underline-offset-2' href='/'>
            Aulia Rahman
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
