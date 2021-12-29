import { useEffect, useState } from 'react'

type GenericObject = { [key: string]: any }

type UseForm = {
  values: GenericObject
  errors: GenericObject
  onChangeHandler: (e: any) => void
  handleSubmit: (e: any) => void
}

export const useForm = (
  validate: any,
  submitForm: any,
  initialValue: GenericObject
): UseForm => {
  const [values, setValues] = useState(initialValue)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (errors === {} && isSubmitting) {
      console.log('useeffect')
      submitForm()
    }
  }, [errors])

  const handleSubmit = (e: any) => {
    if (e) e.preventDefault()
    console.log(values)

    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const onChangeHandler = (e: any) => {
    setValues((values) => ({ ...values, [e.target.name]: e.target.value }))
  }

  return { values, errors, onChangeHandler, handleSubmit }
}
