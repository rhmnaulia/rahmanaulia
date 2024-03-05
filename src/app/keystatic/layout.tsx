import KeystaticApp from './keystatic'

export default function Layout() {
  return (
    <html>
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <KeystaticApp />
      </body>
    </html>
  )
}
