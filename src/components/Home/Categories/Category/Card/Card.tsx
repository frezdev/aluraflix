import { useVideosContext } from '@/hooks/useVideosContext';
import styles from './Card.module.css'
import { Icon } from '@/components/Icon'
import { useState } from 'react';
import { DeleteConfirm } from './DeleteConfirm';

interface Props {
  img: string;
  title: string;
  id: number;
  acentColor: string;
  url: string;
}
export const Card = ({ img, title, id, acentColor, url }: Props) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  const { selectVideo } = useVideosContext()

  const handleSelect = () => {
    selectVideo(id)
  }

  const handleDelete = () => {
    toggleAlert()
  }

  const toggleAlert = () => setIsOpenDelete(!isOpenDelete)

  return (
    <>
      <article className={styles.card} style={{ color: acentColor }}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <figure>
            <img src={img} alt={title} />
          </figure>
        </a>
        <footer>
          <button onClick={handleDelete}>
            <Icon.trash />
            BORRAR
          </button>
          <button onClick={handleSelect}>
            <Icon.edit />
            EDITAR
          </button>
        </footer>
      </article>
      {isOpenDelete && <DeleteConfirm onClose={toggleAlert} videoId={id} />}
    </>
  )
}
