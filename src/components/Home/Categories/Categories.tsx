import styles from './Categories.module.css'
import { Category } from './Category'
import { useVideosContext } from '@/hooks/useVideosContext';

export const Categories = () => {
  const { state } = useVideosContext()
  const { categories } = state

  return (
    <section className={styles.categories}>
      {
        categories.map(category => (
          <Category
            key={`${category.id}_category-item`}
            id={category.id}
            acentColor={category.asentColor}
            title={category.title}
          />
        ))
      }
    </section>
  )
}
