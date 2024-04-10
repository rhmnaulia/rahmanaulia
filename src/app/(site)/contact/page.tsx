import Image from 'next/image'

const ContactPage = () => {
  return (
    <section className='flex flex-col gap-8 w-full'>
      <h1 className='font-medium font-serif text-3xl leading-none'>
        Get in Touch
      </h1>

      <div className='max-w-none prose-sm prose dark:prose-invert'>
        <p>
          I appreciate you getting in touch! If you&apos;ve got questions,
          ideas, or just want to share your feedback, I&apos;m ready to hear you
          out. You can reach me through any of the contact options listed below:
        </p>
        <p>
          <strong>Email: </strong>
          Feel free to drop me an email at{' '}
          <a href='mailto:rahmanauliax@gmail.com'>rahmanauliax@gmail.com</a>,
          and I’ll do my best to respond as soon as possible.
        </p>
        <p>
          <strong>Social Media: </strong>
          Connect with me on social media as well. Find me on{' '}
          <a href='https://twitter.com/rhmnaul'>Twitter</a> or{' '}
          <a href='https://www.linkedin.com/in/rhmnaulia/'>LinkedIn</a>.
        </p>{' '}
      </div>
      <Image
        className='mx-auto mt-4'
        src='/assets/images/kobe-thanks.gif'
        alt='the gif'
        height={800}
        width={800}
      />
    </section>
  )
}

export default ContactPage
