import { useEffect, useState } from 'react'

export type GenericObject = { [key: string]: string }

type UseForm = {
  values: GenericObject
  errors: GenericObject
  onChangeHandler: (e: any) => void
  handleSubmit: (e: any) => void
}

export const useForm = (
  submitForm: () => void,
  initialValue: GenericObject,
  validate?: (values: GenericObject) => GenericObject
): UseForm => {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm()
    }
  }, [errors])

  const handleSubmit = (e: any) => {
    if (e) e.preventDefault()
    if (validate) {
      setErrors(validate(values))
    }
    setIsSubmitting(true)
  }

  const onChangeHandler = (e: any) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }))
  }

  return { values, errors, onChangeHandler, handleSubmit }
}
