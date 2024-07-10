import type { Category, Video } from "@/types";

export interface ReducerVideosStateTypes {
  videos: Map<Video['id'], Video>;
  categories: Category[];
  selectedVideo: Video | null;
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
interface UnselectVideo {
  type: 'UNSELECT_VIDEO';
  payload: null;
}

interface SetCategories {
  type: 'SET_CATEGORIES';
  payload: Category[];
}

export type ReducerVideosAction
  = SetVideos
  | AddVideo
  | DeleteVideo
  | SetCategories
  | UpdateVideo
  | SelectVideo
  | UnselectVideo;
