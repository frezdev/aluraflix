import type { Video } from '@/types'
import {
  ReducerVideosAction as Action,
  ReducerVideosStateTypes as State
} from './videosReducer.types'


export const initialState: Readonly<State> = {
  videos: new Map(),
  categories: [],
  selectedVideo: null
}

export const reducer: React.Reducer<State, Action> = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_VIDEOS':
      return { ...state, videos: action.payload }

    case 'ADD_VIDEO':
      return { ...state, videos: state.videos.set(action.payload.id, action.payload) }

    case 'DELETE_VIDEO':
      return { ...state, videos: deleteVideo(state.videos, action.payload) }

    case 'UPDATE_VIDEO':
      return { ...state, videos: state.videos.set(action.payload.id, action.payload) }

    case 'SELECT_VIDEO':
      return { ...state, selectedVideo: action.payload }

    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }

    case 'UNSELECT_VIDEO':
      return { ...state, selectedVideo: null }

    default:
      return state
  }
}

function deleteVideo(videos: Map<Video['id'], Video>, id: Video['id']) {
  const newMap = structuredClone(videos);

  newMap.delete(id)
  return newMap
}



