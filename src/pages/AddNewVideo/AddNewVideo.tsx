import { CreateVideoForm } from "@/components/AddNewVideo/CreateVideoForm/CreateVideoForm"
import { Hero } from "@/components/AddNewVideo/Hero"
import styles from './AddNewVideo.module.css'

export const AddNewVideo = () => {
  return (
    <section className={styles.container}>
      <Hero />
      <CreateVideoForm />
    </section>
  )
}
