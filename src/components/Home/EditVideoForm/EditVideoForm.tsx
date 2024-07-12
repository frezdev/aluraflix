import { useVideosContext } from "@/hooks/useVideosContext"
import { Modal } from "@/components/Shared/Modal"
import { Select } from "@/components/Shared/Select"
import styles from './EditVideoForm.module.css'
import { Input } from "@/components/Shared/Input"
import { LabelInput } from "@/components/Shared/InputLabel"
import { Textarea } from "@/components/Shared/Textarea"
import { Icon } from "@/components/Icon"
import type { CustomHandleChange } from "@/types"
import { useValidationForm } from "@/hooks/useValidationForm"

export const EditVideoForm = () => {
  const { state, updateVideo, unselectVideo } = useVideosContext()
  const { categories, selectedVideo } = state
  const { formik, handleReset, handleSubmit } = useValidationForm(selectedVideo!, async (formValues) => {
    if (selectedVideo && formValues.categoryId !== null) {
      updateVideo({
        id: selectedVideo?.id,
        ...formValues,
        categoryId: formValues.categoryId,
      })
    }
  })
  const { errors, values } = formik

  const handleChange: CustomHandleChange = (e) => {
    const { id, value } = e.target
    e.target.setCustomValidity('')
    formik.setFieldValue(id, value)
  }

  const handleClose = () => {
    unselectVideo()
  }

  return (
    <Modal>
      <div className={styles.formContainer}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <Icon.close />
        </button>
        <form className={styles.form} onSubmit={handleSubmit(handleClose)}>
          <div className={styles.form__group_container}>
            <div className={styles.form__group}>
              <h3>EDITAR CARD:</h3>
              <div>
                <LabelInput htmlFor="title">Título</LabelInput>
                <Input
                  id='title'
                  type="text"
                  variant="blue"
                  value={values.title}
                  error={errors.title}
                  onChange={handleChange}
                  placeholder="Inserta un título"
                />
              </div>

              <div>
                <LabelInput htmlFor="categoryId">Categoría</LabelInput>
                <Select
                  id="categoryId"
                  variant="blue"
                  onChange={handleChange}
                  error={errors.categoryId}
                  value={values.categoryId!}
                  options={categories}
                />
              </div>

              <div>
                <LabelInput htmlFor="image">Imagen</LabelInput>
                <Input
                  id='image'
                  type="text"
                  variant="blue"
                  value={values.image}
                  error={errors.image}
                  onChange={handleChange}
                  placeholder="Inserta la url de la imagen"
                />
              </div>

              <div>
                <LabelInput htmlFor="url">Video</LabelInput>
                <Input
                  id='url'
                  type="text"
                  variant="blue"
                  value={values.url}
                  error={errors.url}
                  onChange={handleChange}
                  placeholder="Inserta la url del video"
                />
              </div>

              <div>
                <LabelInput htmlFor="description">Descripción</LabelInput>
                <Textarea
                  variant="blue"
                  id="description"
                  value={values.description}
                  error={errors.description}
                  onChange={handleChange}
                ></Textarea>
              </div>

              <div className={styles.formButtonsContainer}>
                <button
                  className={styles.formBtnSave}
                  type="submit"
                >
                  GUARDAR
                </button>
                <button
                  onClick={handleReset}
                  className={styles.formBtnClear}
                  type="reset"
                >
                  LIMPIAR
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

