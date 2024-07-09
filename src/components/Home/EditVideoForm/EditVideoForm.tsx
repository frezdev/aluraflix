import { useState } from "react"
import { useVideosContext } from "@/hooks/useVideosContext"
import { Modal } from "@/components/Shared/Modal"
import { Select } from "@/components/Shared/Select"
import styles from './EditVideoForm.module.css'
import { Input } from "@/components/Shared/Input"
import { LabelInput } from "@/components/Shared/InputLabel"
import { Textarea } from "@/components/Shared/Textarea"
import { Icon } from "@/components/Icon"
import { Video } from "@/types"

const INITIAL_VALUES = {
  title: '',
  categoryId: 0,
  image: '',
  description: '',
  url: '',
  id: 0
}

export const EditVideoForm = () => {
  const { state, updateVideo, unselectVideo } = useVideosContext()
  const { categories, selectedVideo } = state
  const [formValues, setFormValues] = useState(selectedVideo ? selectedVideo : INITIAL_VALUES)


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormValues((prev => ({ ...prev, [id]: value })))
  }


  const handleSave: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const categoryId = Number(formValues.categoryId)

    const values: Video = {
      ...selectedVideo,
      ...formValues,
      categoryId,
    }
    updateVideo(values)
    unselectVideo()
  }


  const handleReset = () => {
    setFormValues(INITIAL_VALUES)
  }

  const handleClose = () => {
    setFormValues(INITIAL_VALUES)
    unselectVideo()
  }

  return (
    <Modal>
      <div className={styles.formContainer}>
        <button className={styles.closeBtn} onClick={handleClose}>
          <Icon.close />
        </button>
        <form className={styles.form} onSubmit={handleSave}>
          <div className={styles.form__group_container}>
            <div className={styles.form__group}>
              <h3>EDITAR CARD:</h3>
              <div>
                <LabelInput htmlFor="title">Título</LabelInput>
                <Input
                  id='title'
                  type="text"
                  variant="blue"
                  required
                  value={formValues.title}
                  onChange={handleChange}
                  placeholder="Inserta un título"
                />
              </div>

              <div>
                <LabelInput htmlFor="categoryId">Categoría</LabelInput>
                <Select
                  id="categoryId"
                  variant="blue"
                  required
                  onChange={handleChange}
                  value={formValues.categoryId}
                  options={categories}
                />
              </div>

              <div>
                <LabelInput htmlFor="image">Imagen</LabelInput>
                <Input
                  id='image'
                  type="text"
                  variant="blue"
                  required
                  value={formValues.image}
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
                  required
                  value={formValues.url}
                  onChange={handleChange}
                  placeholder="Inserta la url del video"
                />
              </div>

              <div>
                <LabelInput htmlFor="description">Descripción</LabelInput>
                <Textarea
                  variant="blue"
                  id="description"
                  required
                  value={formValues.description}
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

