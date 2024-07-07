import { Card } from './Card'
import styles from './Category.module.css'
import { useVideosContext } from '@/hooks/useVideosContext';

interface Props {
  title: string;
  acentColor: string;
  id: number;
}

export const Category = ({ title, acentColor, id }: Props) => {
  const { state } = useVideosContext()

  const videos = Array.from(state.videos.values());
  if (videos.length === 0) return null;

  const filteredByCategory = videos.filter(video => video.categoryId === id)

  return (
    <section className={styles.category}>
      <h2
        className={styles.categoryTitle}
        style={{ background: acentColor }}
      >
        {title.toUpperCase()}
      </h2>
      <ul className={styles.categoryVideos}>
        {
          filteredByCategory.map(video => (
            <li key={`${video.id}_${video.url}_card`}>
              <Card
                img={video.image}
                title={video.title}
                id={video.id}
                acentColor={acentColor}
                url={video.url}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}
