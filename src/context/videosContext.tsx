import { useVideosReducer } from '@/hooks/useVideosReducer';
import { initialState } from '@/reducers/videos/videosReducer';
import { categoriesService } from '@/services/categories';
import { videosService } from '@/services/videos';
import { createContext, useEffect } from 'react';


const defaulValue: ReturnType<typeof useVideosReducer> = {
  state: initialState,
  setVideos: () => { },
  addVideo: () => { },
  deleteVideo: () => { },
  updateVideo: () => { },
  setCategories: () => { },
  selectVideo: () => { },
  unselectVideo: () => { }
}
export const VideosContext = createContext(defaulValue)

export const VideoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    state,
    addVideo,
    setVideos,
    deleteVideo,
    updateVideo,
    selectVideo,
    setCategories,
    unselectVideo,
  } = useVideosReducer()

  useEffect(() => {
    videosService.getAll()
      .then(({ data, error }) => {
        if (data) return setVideos(data)
        alert(error.message)
      })
    categoriesService.getAll()
      .then(({ data, error }) => {
        if (data) return setCategories(data)
        alert(error.message)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = {
    state,
    addVideo,
    setVideos,
    deleteVideo,
    updateVideo,
    selectVideo,
    setCategories,
    unselectVideo
  }
  return (
    <VideosContext.Provider value={value}>
      {children}
    </VideosContext.Provider>
  )
}
