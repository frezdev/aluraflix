import { type Category } from "@/types"
import { API_URL } from "./config"

const getAll = async () => {
  try {
    const res = await fetch(`${API_URL}/categories`)
    const data = await res.json() as Category[]

    return { data, error: null }
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

export const categoriesService = {
  getAll
}