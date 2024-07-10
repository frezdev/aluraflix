import { LabelInput } from '@/components/Shared/InputLabel'
import styles from './CreateVideoForm.module.css'
import { Input } from '@/components/Shared/Input'
import { Select } from '@/components/Shared/Select'
import { Textarea } from '@/components/Shared/Textarea'
import { InitValues, useValidationForm } from '@/hooks/useValidationForm'
import { type CustomHandleChange } from '@/types'
import { useVideosContext } from '@/hooks/useVideosContext'
import { ErrorMessage } from '@/components/Shared/ErrorMessage'
import { videosService } from '@/services/videos'
import { useState } from 'react'
import { Loading } from '@/components/Shared/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import { FormikErrors } from 'formik'

const initialValues = {
  title: '',
  description: '',
  categoryId: null,
  url: '',
  image: ''
}
const initialErrors = {
  title: '',
  description: '',
  categoryId: '',
  url: '',
  image: ''
}
export const CreateVideoForm = () => {
  const { state, addVideo } = useVideosContext()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<FormikErrors<InitValues>>(initialErrors)

  const navigate = useNavigate()

  const { formik, handleReset, handleSubmit } = useValidationForm(initialValues, async (formValues) => {
    setLoading(true)
    if (formValues.categoryId !== null) {
      const newVideo = {
        ...formValues,
        categoryId: Number(formValues.categoryId)
      }
      const { data } = await videosService.create(newVideo);

      if (data) addVideo(data)
    }
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 2000)
  })

  const handleChangeText: CustomHandleChange = (e) => {
    const { value, id } = e.target
    e.target.setCustomValidity('')
    formik.setFieldValue(id, value)
  }

  const createHandleSubmit = handleSubmit(() => {
    setErrors(formik.errors)
    console.log(formik.errors);
  })

  return (
    <div className={styles.formContainer}>
      {loading && <Loading text='Cargando...' />}
      <div className={styles.titleContainer}>
        <h2>Crear Tarjeta</h2>
      </div>
      <form className={styles.form} onSubmit={createHandleSubmit}>
        <div className={styles.formFirst}>
          <div>
            <LabelInput htmlFor="title">Título</LabelInput>
            <Input
              id='title'
              type="text"
              variant="black"
              value={formik.values.title}
              error={errors.title}
              onChange={handleChangeText}
              placeholder="Inserta un título"
            />
            <ErrorMessage>{errors.title}</ErrorMessage>
          </div>
          <div>
            <LabelInput htmlFor="title">Título</LabelInput>
            <Select
              id='categoryId'
              variant="black"
              value={formik.values.categoryId ?? ''}
              error={errors.categoryId!}
              onChange={handleChangeText}
              options={state.categories}
            />
            <ErrorMessage>{errors.categoryId}</ErrorMessage>
          </div>
        </div>

        <div className={styles.formSecond}>
          <div>
            <LabelInput htmlFor="image">Imagen</LabelInput>
            <Input
              id='image'
              type="text"
              variant="black"
              value={formik.values.image}
              error={errors.image}
              onChange={handleChangeText}
              placeholder="Url de la imagen"
            />
            <ErrorMessage>{errors.image}</ErrorMessage>
          </div>

          <div>
            <LabelInput htmlFor="url">Video</LabelInput>
            <Input
              id='url'
              type="text"
              variant="black"
              value={formik.values.url}
              error={errors.url}
              onChange={handleChangeText}
              placeholder="Url del video"
            />
            <ErrorMessage>{errors.url}</ErrorMessage>
          </div>

        </div>
        <div className={styles.formTextArea}>
          <LabelInput htmlFor="description">Descripción</LabelInput>
          <Textarea
            rows={5}
            variant="black"
            id="description"
            value={formik.values.description}
            error={errors.description}
            onChange={handleChangeText}
          ></Textarea>
          <ErrorMessage>
            {errors.description}
          </ErrorMessage>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.btnSave} type='submit'>GUARDAR</button>
          <button onClick={handleReset} className={styles.btnReset} type='reset'>LIMPIAR</button>
        </div>
      </form>
    </div>
  )
}
