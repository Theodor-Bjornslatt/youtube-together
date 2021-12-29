import React from 'react'

import { useForm } from '../../hooks/useForm'
import { TextInput } from '../../components/inputs/TextInput'
import validate from '../../utils/formValidationRules'
import { Form, Headline, SignupButton } from './register.styled'

const register = () => {
  const submitForm = async () => {
    // eslint-disable-next-line
    const { repeat, ...signupValues } = values
    const res = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(signupValues)
    })

    const data = await res.json()
    console.log(data)
    console.log(errors)
  }

  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    submitForm,
    {
      username: '',
      color: '',
      email: '',
      password: '',
      repeat: ''
    },
    validate
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Headline>Create a user</Headline>
      <TextInput
        placeholder="Username..."
        label="Create a username"
        name="username"
        error={errors.username}
        value={values.username}
        onChange={onChangeHandler}
      />
      <TextInput
        label="Choose a color"
        placeholder="Choose a color..."
        name="color"
        error={errors.color}
        value={values.color}
        onChange={onChangeHandler}
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
        error={errors.password}
        value={values.password}
        onChange={onChangeHandler}
      />
      <TextInput
        placeholder="Repeat password..."
        label="Repeat password"
        name="repeat"
        error={errors.repeat}
        value={values.repeat}
        onChange={onChangeHandler}
      />
      <SignupButton onSubmit={handleSubmit}>Sign Up</SignupButton>
    </Form>
  )
}

export default register
