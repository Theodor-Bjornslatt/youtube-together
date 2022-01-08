import { BadRequest } from '../errors'

export type UrlObject = {
  id: number
  url: string
}
export type PlaylistObject = {
  name: string
  url: UrlObject[]
}

const validateUrl = (urlObject: UrlObject[]): boolean => {
  const validRegex =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/

  const validationResults = urlObject.map((object) => {
    return validRegex.test(object.url)
  })

  return validationResults.includes(false)
}

export const validatePlaylist = async ({
  name,
  url
}: PlaylistObject): Promise<void> => {
  if (!name) {
    throw new BadRequest('Please name your playlist')
  } else if (name.length < 1 || name.length > 15) {
    throw new BadRequest('Name must be between 1 and 15 characters')
  }

  if (!url) {
    throw new BadRequest('Please enter a valid Url')
  } else if (validateUrl(url)) {
    throw new BadRequest(`Url is not valid`)
  }
}
