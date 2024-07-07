import type { Category, Video } from '@/types'

export interface StateTypes {
  videos: Map<Video['id'], Video>;
  categories: Category[];
  selectedVideo: Video | null;
}

export const initialState: Readonly<StateTypes> = {
  videos: new Map(),
  categories: [],
  selectedVideo: null
}

interface SetVideos {
  type: 'SET_VIDEOS';
  payload: Map<Video['id'], Video>;
}
interface AddVideo {
  type: 'ADD_VIDEO';
  payload: Video;
}
interface DeleteVideo {
  type: 'DELETE_VIDEO';
  payload: Video['id'];
}
interface UpdateVideo {
  type: 'UPDATE_VIDEO';
  payload: Video;
}
interface SelectVideo {
  type: 'SELECT_VIDEO';
  payload: Video;
}

interface SetCategories {
  type: 'SET_CATEGORIES';
  payload: Category[];
}

type Action = SetVideos | AddVideo | DeleteVideo | SetCategories | UpdateVideo | SelectVideo;

export const reducer: React.Reducer<StateTypes, Action> = (state: StateTypes, action: Action): StateTypes => {
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

    default:
      return state
  }
}

function deleteVideo(videos: Map<Video['id'], Video>, id: Video['id']) {
  const newMap = structuredClone(videos);

  newMap.delete(id)
  return newMap
}



