import { ImageResponse } from 'next/og'
import { GeistSans } from 'geist/font/sans'

export const runtime = 'edge'
export const alt = 'Aulia Rahman - Software Engineer & Tech Enthusiast'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: GeistSans.style.fontFamily,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            color: 'white',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              marginBottom: '20px',
              lineHeight: 1.2,
              background: 'linear-gradient(to right, #fff, #a8a8a8)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Aulia Rahman
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#a8a8a8',
              margin: 0,
            }}
          >
            Software Engineer & Tech Enthusiast
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
