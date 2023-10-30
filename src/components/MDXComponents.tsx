'use client'

import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  Image,
}

type TMdxProps = {
  code: string
}

export function Mdx({ code }: TMdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
