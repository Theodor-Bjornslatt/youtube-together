import React, { useContext } from 'react'

import { useForm } from '../../hooks/useForm'
import { TextInput } from '../inputs/TextInput'
import { validateSignUp } from '../../utils/formValidationRules'
import { Form, Headline, SignupButton, Wrapper } from './Register.styled'
import { GlobalContext } from '../../state/GlobalState'
import { textColors } from '../../styles/variables'
import Dropdown from '../../components/inputs/Dropdown'

export default function RegisterForm() {
  const { dispatch } = useContext(GlobalContext)
  const initialValue = {
    username: '',
    color: '',
    email: '',
    password: '',
    repeat: ''
  }

  const submitForm = async () => {
    // eslint-disable-next-line
    const { repeat, ...signupValues } = values

    const res = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(signupValues)
    })

    if (!res.ok) return //@TODO handle error
    const data = await res.json()

    dispatch({ type: 'user', payload: data.user })
  }

  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    submitForm,
    initialValue,
    validateSignUp
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Headline>Create a user</Headline>
      <Wrapper>
        <TextInput
          placeholder="Username..."
          label="Create a username"
          name="username"
          error={errors.username}
          value={values.username}
          onChange={onChangeHandler}
        />
        <Dropdown
          values={values}
          label="Colors"
          title="Choose color"
          options={textColors}
        />
        <TextInput
          placeholder="Email..."
          label="Email"
          name="email"
          error={errors.email}
          value={values.email}
          onChange={onChangeHandler}
        />
        <TextInput
          placeholder="Password..."
          label="Password"
          name="password"
          type="password"
          error={errors.password}
          value={values.password}
          onChange={onChangeHandler}
        />
        <TextInput
          placeholder="Repeat password..."
          label="Repeat password"
          name="repeat"
          type="password"
          error={errors.repeat}
          value={values.repeat}
          onChange={onChangeHandler}
        />
      </Wrapper>
      <SignupButton onSubmit={handleSubmit}>Sign Up</SignupButton>
    </Form>
  )
}
