import React from 'react'
import Button from '../components/Button'
import { TextInput } from '../components/inputs/TextInput'
import { useForm } from '../hooks/useForm'

type Inputs = {
  //
}

const register = () => {
  const [values, onChangeHandler] = useForm({
    username: '',
    color: '',
    email: '',
    password: '',
    repeat: ''
  })

  const submitHandler = async () => {
    const res = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(values)
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <>
      <form>
        <TextInput
          placeholder="Username..."
          label="Create a username"
          name={'username'}
          value={values.username}
          onChange={onChangeHandler}
        />
        <TextInput
          label="Choose a color to use in chat"
          placeholder="Choose a color..."
          name={'color'}
          value={values.color}
          onChange={onChangeHandler}
        />
        <TextInput
          placeholder="Email..."
          label="Email"
          name={'email'}
          value={values.email}
          onChange={onChangeHandler}
        />
        <TextInput
          placeholder="Password..."
          label="Password"
          name={'password'}
          value={values.password}
          onChange={onChangeHandler}
        />
        <TextInput
          placeholder="Repeat password..."
          label="Repeat password"
          name={'repeat'}
          value={values.repeat}
          onChange={onChangeHandler}
        />
        <Button />
      </form>
    </>
  )
}

export default register
