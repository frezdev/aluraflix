import styles from './Modal.module.css'

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <dialog className={styles.modal}>
      {children}
    </dialog>
  )
}
