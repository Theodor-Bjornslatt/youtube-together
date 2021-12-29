import React, { useState } from 'react'

import { TextInput } from '../../components/inputs/TextInput'
import { ErrorMessage, FormContainer } from './Login.styled'
import { useForm } from '../../hooks/useForm'
import { LoginButton } from './Login.styled'

export default function Login() {
  const [loginData, onChangeHandler] = useForm({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const submitHandler = async () => {
    if (!loginData.email || !loginData.password) return

    const res = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(loginData)
    })

    if (!res.ok) return setError(true)
    const data = await res.json()
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

      {error && <ErrorMessage>Invalid email or password</ErrorMessage>}
      <LoginButton onClick={submitHandler}>Login</LoginButton>
    </FormContainer>
  )
}
