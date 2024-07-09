import styles from './Footer.module.css'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <figure className={styles.logoContainer}>
        <img src="/images/logo.webp" alt="logo" />
      </figure>
    </footer>
  )
}
