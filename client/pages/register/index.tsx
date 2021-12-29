import React from 'react'

import { useForm } from '../../hooks/useForm'
import Button from '../../components/Button'
import { TextInput } from '../../components/inputs/TextInput'
import validate from '../../utils/formValidationRules'

const register = () => {
  const submitForm = async () => {
    /*   const res = await fetch('http://localhost:8080/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(values)
    })
    
    const data = await res.json() */
    console.log(values)
    console.log(errors)
  }
  const { values, errors, onChangeHandler, handleSubmit } = useForm(
    validate,
    submitForm,
    {
      username: '',
      color: '',
      email: '',
      password: '',
      repeat: ''
    }
  )

  return (
    <>
      <TextInput
        placeholder="Username..."
        label="Create a username"
        name="username"
        error={errors.username}
        value={values.username}
        onChange={onChangeHandler}
      />
      <TextInput
        label="Choose a color to use in chat"
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
      <Button onClick={handleSubmit} text="Signup" />
    </>
  )
}

export default register
