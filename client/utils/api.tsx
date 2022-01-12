import { GetServerSidePropsContext } from 'next'

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
