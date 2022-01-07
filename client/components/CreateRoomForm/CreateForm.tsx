import React, { ChangeEvent } from 'react'

import { ButtonStyled } from '../Button/Button.styled'
import { TextInput } from '../inputs/TextInput'
import { Form } from './CreateRoomForm.styled'

export type GenericObject = { [key: string]: string }

type FormProps = {
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
  addToPlaylist: () => void
  values: GenericObject
  errors: GenericObject
}

export default function CreateForm({
  values,
  errors,
  onChangeHandler,
  addToPlaylist
}: FormProps) {
  return (
    <Form>
      <TextInput
        label="Name your room"
        name="name"
        value={values.name}
        error={errors.name}
        onChange={onChangeHandler}
      />
      <TextInput
        label="Paste your youtube video url here"
        name="url"
        value={values.url}
        error={errors.url}
        onChange={onChangeHandler}
      />
      <ButtonStyled onClick={addToPlaylist}>Add</ButtonStyled>
    </Form>
  )
}
