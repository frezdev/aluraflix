import { CreatedVideo, type Video } from "@/types"
import { API_URL } from "./config"

const getByCategoryId = async (id: number) => {
  try {
    const res = await fetch(`${API_URL}/videos/${id}`)
    const videos = await res.json() as Video[]

    const filteredVideos = videos.filter(videos => videos.categoryId === id)

    return { data: filteredVideos, error: null }
  } catch (error) {
    if (error instanceof Error) {
      return { error, data: null }
    }
    return {
      error: new Error('Unknown error'),
      data: null
    }
  }
}

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/videos`)

    if (!res.ok) throw new Error(res.statusText);
    const videos = await res.json() as Video[]

    return { data: videos, error: null }
  } catch (error) {
    if (error instanceof Error) {
      return { error, data: null }
    }
    return {
      error: new Error('Unknown error'),
      data: null
    }
  }
}

const create = async (video: CreatedVideo) => {
  try {
    const res = await fetch(`${API_URL}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video)
    });

    if (!res.ok) throw new Error(res.statusText);

    const createdVideo = await res.json() as Video

    return { data: createdVideo, error: null }
  } catch (error) {
    if (error instanceof Error) {
      return { error, data: null }
    }
    return {
      error: new Error('Unknown error'),
      data: null
    }
  }
}

const deleteOne = async (id: number) => {
  try {
    const res = await fetch(`${API_URL}/videos/${id}`, {
      method: 'DELETE'
    })

    if (res.status !== 204) throw new Error(res.statusText);
    return { error: null }
  } catch (error) {
    if (error instanceof Error) {
      return { error }
    }
    return {
      error: new Error('Unknown error'),
    }
  }
}

export const videosService = {
  getByCategoryId,
  getAll,
  create,
  deleteOne
}
