import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type FormValueObject = { [key: string]: string | number }

type FormValues<Initial extends FormValueObject> = {
  values: Initial
  errors: Partial<Initial>
  setErrors: Dispatch<SetStateAction<Partial<Initial>>>
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => void
}

export function useForm<
  InitialValue extends FormValueObject,
  S extends () => void,
  V extends (values: InitialValue) => Partial<InitialValue>
>(
  initialValue: InitialValue,
  submitForm: S,
  validate?: V
): FormValues<InitialValue> {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState<Partial<InitialValue>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm()
      setValues(initialValue)
    }
  }, [errors])

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    if (e) e.preventDefault()
    if (validate) {
      setErrors(validate(values))
    }
    setIsSubmitting(true)
  }

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }))
  }

  return {
    values,
    errors,
    setErrors,
    onChangeHandler,
    handleSubmit
  }
}
