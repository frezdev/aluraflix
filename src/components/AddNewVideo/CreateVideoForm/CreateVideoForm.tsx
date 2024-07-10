import { LabelInput } from '@/components/Shared/InputLabel'
import styles from './CreateVideoForm.module.css'
import { Input } from '@/components/Shared/Input'
import { Select } from '@/components/Shared/Select'
import { Textarea } from '@/components/Shared/Textarea'
import { useValidationForm } from '@/hooks/useValidationForm'
import { type CustomHandleChange } from '@/types'
import { useVideosContext } from '@/hooks/useVideosContext'
import { ErrorMessage } from '@/components/Shared/ErrorMessage'
import { videosService } from '@/services/videos'

const initialValues = {
  title: '',
  description: '',
  categoryId: null,
  url: '',
  image: ''
}
export const CreateVideoForm = () => {
  const { state, addVideo } = useVideosContext()
  const { formik, handleReset, handleSubmit } = useValidationForm(initialValues, async (formValues) => {
    console.log('form submitted')
    if (formValues.categoryId !== null) {
      const newVideo = {
        ...formValues,
        categoryId: formValues.categoryId
      }
      const { data, error } = await videosService.create(newVideo);

      console.log({ data, error });

      if (data) addVideo(data)
    }
  })

  const handleChangeText: CustomHandleChange = (e) => {
    const { value, id } = e.target
    e.target.setCustomValidity('')
    formik.setFieldValue(id, value)
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.titleContainer}>
        <h2>Crear Tarjeta</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formFirst}>
          <div>
            <LabelInput htmlFor="title">Título</LabelInput>
            <Input
              id='title'
              type="text"
              variant="black"
              error={formik.errors.title}
              value={formik.values.title}
              onChange={handleChangeText}
              placeholder="Inserta un título"
            />
            <ErrorMessage>{formik.errors.title}</ErrorMessage>
          </div>
          <div>
            <LabelInput htmlFor="title">Título</LabelInput>
            <Select
              id='categoryId'
              variant="black"
              value={formik.values.categoryId ?? ''}
              error={formik.errors.categoryId}
              onChange={handleChangeText}
              options={state.categories}
            />
            <ErrorMessage>{formik.errors.categoryId}</ErrorMessage>
          </div>
        </div>

        <div className={styles.formSecond}>
          <div>
            <LabelInput htmlFor="image">Imagen</LabelInput>
            <Input
              id='image'
              type="text"
              variant="black"
              error={formik.errors.image}
              value={formik.values.image}
              onChange={handleChangeText}
              placeholder="Url de la imagen"
            />
            <ErrorMessage>{formik.errors.image}</ErrorMessage>
          </div>

          <div>
            <LabelInput htmlFor="url">Video</LabelInput>
            <Input
              id='url'
              type="text"
              variant="black"
              error={formik.errors.url}
              value={formik.values.url}
              onChange={handleChangeText}
              placeholder="Url del video"
            />
            <ErrorMessage>{formik.errors.url}</ErrorMessage>
          </div>

        </div>
        <div className={styles.formTextArea}>
          <LabelInput htmlFor="description">Descripción</LabelInput>
          <Textarea
            rows={5}
            variant="black"
            id="description"
            error={formik.errors.description}
            value={formik.values.description}
            onChange={handleChangeText}
          ></Textarea>
          <ErrorMessage>
            {formik.errors.description}
            {' - '}
            {formik.errors.description && `${formik.values.description.length} de 20`}
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
