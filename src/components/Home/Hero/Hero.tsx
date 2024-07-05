import styles from './Hero.module.css'
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroShadow}></div>
      <div className={styles.heroContent}>
        <article className={styles.contentItem}>
          <div className={styles.contentItem_left}>
            <h3 className={styles.title}>FRONT END</h3>
            <div className={styles.itemInfo}>
              <h1>Challenge React</h1>
              <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
          </div>
          <div className={styles.contentItem_right}>
            <figure className={styles.imgContainer}>
              <img src="https://i.ytimg.com/vi/ov7vA5HFe6w/hq720.jpg" />
            </figure>
          </div>
        </article>
      </div>
    </section>
  )
}
