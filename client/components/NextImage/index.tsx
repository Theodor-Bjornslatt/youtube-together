import Image from 'next/image'

type NextImageProps = {
  src: string | StaticImageData
}

export default function NextImage({ src }: NextImageProps) {
  return <Image src={src} layout="fill" objectFit="cover" />
}
