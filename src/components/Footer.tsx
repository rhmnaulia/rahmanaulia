const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className='pt-4 w-full text-sm text-center flex items-center justify-center'>
      © 2023 - {currentYear} Aulia Rahman ✨
    </footer>
  )
}

export default Footer
