import Image from 'next/image'

type NextImageProps = {
  src: string | StaticImageData
  width?: number
  height?: number
}

export default function NextImage({ src, width, height }: NextImageProps) {
  return width && height ? (
    <Image src={src} layout={'intrinsic'} width={width} height={height} />
  ) : (
    <Image src={src} layout="fill" objectFit="cover" />
  )
}
