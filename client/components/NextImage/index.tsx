import Image from 'next/image'

type NextImageProps = {
  src: string | StaticImageData
  width?: number
  height?: number
  isStaticImageData?: boolean
  priority?: boolean
}

export default function NextImage({
  src,
  width,
  height,
  isStaticImageData,
  priority
}: NextImageProps) {
  return width && height ? (
    <Image
      src={src}
      layout={'intrinsic'}
      width={width}
      height={height}
      quality={90}
      placeholder={isStaticImageData ? 'blur' : 'empty'}
      priority={priority}
    />
  ) : (
    <Image
      src={src}
      layout="fill"
      objectFit="cover"
      quality={90}
      placeholder={isStaticImageData ? 'blur' : 'empty'}
      priority={priority}
    />
  )
}
