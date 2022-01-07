import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { validateSignIn } from '../../utils/formValidationRules'
import { TextInput } from '../inputs/TextInput'
import { ErrorMessage, FormContainer } from './Login.styled'
import { useForm } from '../../hooks/useForm'
import { LoginButton } from './Login.styled'
import { Form, Headline } from '../RegisterForm/Register.styled'
import { GlobalContext } from '../../state/GlobalState'

export default function LoginForm() {
  const router = useRouter()

  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    submitHandler,
    {
      email: '',
      password: ''
    },
    validateSignIn
  )

  const [error, setError] = useState(false)
  const { dispatch } = useContext(GlobalContext)

  async function submitHandler() {
    if (!values.email || !values.password) return

    const res = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(values)
    })

    if (!res.ok) return setError(true)
    const user = await res.json()

    if (!user.id) return

    dispatch({ type: 'loggedIn', payload: true })
    router.push('/')
  }

  return (
    <FormContainer>
      <Headline>Login</Headline>
      <Form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          value={values.email}
          error={errors.email}
          name="email"
          onChange={onChangeHandler}
        />
        <TextInput
          label="Password"
          type="password"
          value={values.password}
          error={errors.password}
          name="password"
          onChange={onChangeHandler}
        />
        {error && <ErrorMessage>Invalid email or password</ErrorMessage>}
        <LoginButton onSubmit={handleSubmit}>Login</LoginButton>
      </Form>
    </FormContainer>
  )
}
