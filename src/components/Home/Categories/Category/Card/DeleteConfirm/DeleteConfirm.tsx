import { Modal } from '@/components/Shared/Modal'
import styles from './DeleteConfirm.module.css'
import { useVideosContext } from '@/hooks/useVideosContext'
import type { Video } from '@/types'
import { videosService } from '@/services/videos';

interface Props {
  videoId: Video['id'];
  onClose: () => void;
}
export const DeleteConfirm = ({ videoId, onClose }: Props) => {
  const { deleteVideo } = useVideosContext()

  const handleDelete = async () => {
    const { error } = await videosService.deleteOne(videoId)
    if (error) return alert(error.message)
    deleteVideo(videoId)
  }

  return (
    <Modal>
      <div className={styles.cardDelete}>
        <h4 className={styles.messageConfirm}>¿Seguro que quieres elimiar este video?</h4>
        <div className={styles.buttonsContainer}>
          <button className={styles.cancel} onClick={onClose}>Cancelar</button>
          <button className={styles.delete} onClick={handleDelete}>Eliminar</button>
        </div>
      </div>
    </Modal>
  )
}
