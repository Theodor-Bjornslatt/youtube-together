import { GetServerSideProps } from 'next'
import React from 'react'

import Header from '../features/Header'
import RoomList from '../features/RoomList'
import { Room, Rooms } from '../types'
import { apiGetRooms } from '../utils/api'

type RoomsProp = {
  rooms: Room[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  let rooms: Room[]
  try {
    rooms = await apiGetRooms()
  } catch (error) {
    console.log('error', error)
    //@TODO maybe prop something else that indicates that our server sent a 500?
    return { notFound: true }
  }
  return {
    props: {
      rooms
    }
  }
}

const Rooms = ({ rooms }: RoomsProp) => {
  return (
    <>
      <Header title={'Rooms'} />
      <RoomList rooms={rooms} />
    </>
  )
}

export default Rooms
