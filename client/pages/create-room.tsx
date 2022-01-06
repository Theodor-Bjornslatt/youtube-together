import { useState } from 'react'

import { TextInput } from '../components/inputs/TextInput'
export default function CreateRoom() {
  const [value, setValue] = useState('')

  const onChangeHandler = (e: any) => {
    const text = e.target.value
    setValue(text)
  }

  const onClickHandler = async () => {
    if (!value) return
    //room-name
    //playlist
    const res = await fetch('http://localhost:8080/api/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(value)
    })
  }

  //

  return (
    <>
      <TextInput
        placeholder="url"
        label="video"
        name="youtube"
        value={value}
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>CLICK</button>
    </>
  )
}
