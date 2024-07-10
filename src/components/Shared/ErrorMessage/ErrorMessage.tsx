import styles from './ErrorMessage.module.css'

export const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className={styles.error}>{children}</span>
  )
}
