import { initialState, reducer } from "@/reducers/videos/videosReducer"
import type { Category, Video } from "@/types"
import { useReducer } from "react"

export const useVideosReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setVideos = (videos: Video[]) => {
    const mapVideos = new Map()
    videos.forEach((video) => mapVideos.set(video.id, video))
    dispatch({ type: 'SET_VIDEOS', payload: mapVideos })
  }

  const addVideo = (video: Video) => {
    dispatch({ type: 'ADD_VIDEO', payload: video })
  }

  const deleteVideo = (id: Video['id']) => {
    dispatch({ type: 'DELETE_VIDEO', payload: id })
  }

  const updateVideo = (video: Video) => {
    dispatch({ type: 'UPDATE_VIDEO', payload: video })
  }

  const selectVideo = (id: Video['id']) => {
    const selected = state.videos.get(id)
    dispatch({ type: 'SELECT_VIDEO', payload: selected! })
  }

  const setCategories = (categories: Category[]) => {
    dispatch({ type: 'SET_CATEGORIES', payload: categories })
  }

  const unselectVideo = () => {
    dispatch({ type: 'UNSELECT_VIDEO', payload: null })
  }

  return {
    setVideos,
    addVideo,
    deleteVideo,
    setCategories,
    updateVideo,
    selectVideo,
    unselectVideo,
    state
  }
}