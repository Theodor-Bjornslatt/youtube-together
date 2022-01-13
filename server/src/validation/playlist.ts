import { BadRequest } from '../errors'
import { IPlayList } from '../interfaces'

export interface IRoomObject {
  name: string
  playlist: IPlayList[]
  nickname?: string
}

const validatePlaylist = (urlObject: IPlayList[]): boolean => {
  const validRegex =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/

  const validationResults = urlObject.map((object) => {
    return validRegex.test(object.url)
  })

  return validationResults.includes(false)
}

export const validatePlaylistItem = async (
  item: IPlayList | undefined
): Promise<void> => {
  const validRegex =
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/

  if (!item?.url) {
    throw new BadRequest('Must provide a url')
  }

  if (!validRegex.test(item.url)) {
    throw new BadRequest('Youtube url is not valid')
  }
}

export const validateRoom = async ({
  name,
  playlist
}: IRoomObject): Promise<void> => {
  if (!name) {
    throw new BadRequest('Must provide a name for the room')
  } else if (name.length < 1 || name.length > 15) {
    throw new BadRequest('Name must be between 1 and 15 characters')
  }

  if (!playlist) {
    throw new BadRequest('Must provide at least one url')
  } else if (validatePlaylist(playlist)) {
    throw new BadRequest(`playlist is not valid`)
  }
}
