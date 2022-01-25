import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'

import { validateSignIn } from '../../utils/formValidationRules'
import { TextInput } from '../inputs/TextInput'
import { ErrorMessage } from './Login.styled'
import { useForm } from '../../hooks/useForm'
import { LoginButton, Form } from './Login.styled'
import { GlobalContext } from '../../state/GlobalState'
import FormContainer from '../FormContainer'
import { apiLogin } from '../../utils/api'
import { LoginObject } from '../../types'

export default function LoginForm() {
  const router = useRouter()

  const intialLoginValues: LoginObject = {
    email: '',
    password: ''
  }

  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    intialLoginValues,
    submitHandler,
    validateSignIn
  )

  const [error, setError] = useState(false)
  const { dispatch } = useContext(GlobalContext)

  async function submitHandler() {
    if (!values.email || !values.password) return

    let user
    try {
      user = await apiLogin(values)
    } catch (error) {
      setError(true)
    }
    if (!user) return

    dispatch({ type: 'loggedIn', payload: true })
    router.push('/')
  }

  return (
    <FormContainer>
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
