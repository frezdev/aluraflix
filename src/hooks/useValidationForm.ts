import { useFormik } from 'formik'

import * as Yup from 'yup'

export interface InitValues {
  title: string
  categoryId: number | null
  image: string
  description: string
  url: string
}
const initialValues = (): InitValues => ({
  title: '',
  categoryId: null,
  image: '',
  description: '',
  url: '',
})

function validationSchema() {
  return Yup.object({
    title: Yup.string().required('Debe ingresar un título'),
    categoryId: Yup.number().required('Debe ingresar una categoría'),
    image: Yup.string().url('Ingrese una url válida').required('Debe ingresar una imagen'),
    description: Yup.string().min(20, 'La descripción debe tener minimo 20 caractéres').required('Debe ingresar una descripción'),
    url: Yup.string().url('Ingrese una url válida').required('Debe ingresar una url'),
  })
}

interface Config {
  calback: (formValues: ReturnType<typeof initialValues>) => Promise<void>
}

export function useValidationForm(calback: Config['calback']) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (formValues: ReturnType<typeof initialValues>) => {
      await calback(formValues)
    }
  })

  return {
    formik,
  }
}
