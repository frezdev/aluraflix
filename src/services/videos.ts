import { type Video } from "@/types"

const getByCategoryId = async (id: number) => {
  try {
    const res = await fetch('/api/videos.json')
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
    const res = await fetch('/api/videos.json')
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

export const videosService = {
  getByCategoryId,
  getAll
}
