import { type Category } from "@/types"

const getAll = async () => {
  try {
    const res = await fetch('/api/categories.json')
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