import { GetServerSidePropsContext } from 'next'

type QueryProp = {
  query?: string
  room: string | null
}

export const serverSideWhoAmI = async (ctx: GetServerSidePropsContext) => {
  const { req } = ctx
  const { cookies } = req
  // @TODO throw different errors depending on case
  if (!cookies.sid) throw new Error()

  try {
    const res = await fetch('http://localhost:8080/api/whoami', {
      headers: { Cookie: `sid=${cookies.sid}` },
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const whoAmI = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/whoami', {
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const serverSideGetRooms = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/rooms', {
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiGetRoomMessages = async ({ query, room }: QueryProp) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/rooms/${room}/messages${query && query}`,
      {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    if (!res.ok) throw new Error()
    const { messages } = await res.json()
    return messages
  } catch (e) {
    throw new Error()
  }
}

export const logout = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiSaveNewPlaylistOrder = async (room: string, data: any) => {
  await fetch(`http://localhost:8080/api/rooms/${room}/playlist`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

export const apiPostPlaylistItem = async (room: string, data: any) => {
  try {
    const res = await fetch(
      `http://localhost:8080/api/rooms/${room}/playlist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: data })
      }
    )
    if (!res.ok) console.log('res :>> ', res)
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}
