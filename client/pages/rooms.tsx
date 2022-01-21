import { GetServerSideProps } from 'next'
import React from 'react'

import Header from '../components/Header'
import RoomList from '../components/RoomList'
import { Room, Rooms } from '../types'
import { serverSideGetRooms } from '../utils/api'

type RoomsProp = {
  rooms: Room[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  let rooms: Room[]
  console.log('getServerSideProps')
  try {
    rooms = await serverSideGetRooms()
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
