import styles from './Loading.module.css'

export function Loading({ text }: { text?: string }) {
  return (
    <div className={`${styles.loading} ${styles.show}`}>
      <div className={styles.spin}></div>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
