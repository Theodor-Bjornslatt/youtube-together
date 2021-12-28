import React from 'react'

import { TextInput } from '../../components/inputs/TextInput'
import { FormContainer } from './Login.styled'
import { useForm } from '../../hooks/useForm'
import { LoginButton } from './Login.styled'

export default function Login() {
  const [loginData, onChangeHandler] = useForm({
    email: '',
    password: ''
  })

  const submitHandler = async () => {
    if (!loginData.email || !loginData.password) return

    const res = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(loginData)
    })

    const data = await res.json()
    console.log('data :>> ', data)
  }

  return (
    <FormContainer>
      <TextInput
        label="Email"
        value={loginData.email}
        name="email"
        onChange={onChangeHandler}
      />
      <TextInput
        label="Password"
        type="password"
        value={loginData.password}
        name="password"
        onChange={onChangeHandler}
      />
      <LoginButton onClick={submitHandler}>Login</LoginButton>
    </FormContainer>
  )
}
