import { useState } from 'react'

type GenericObject = { [key: string]: any }

type UseForm = [GenericObject, (e: any) => void]

export const useForm = (initialValues: GenericObject): UseForm => {
  const [values, setValues] = useState(initialValues)
  return [
    values,
    (e: any) => {
      const target = e.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      setValues({
        ...values,
        [target.name]: value
      })
    }
  ]
}
