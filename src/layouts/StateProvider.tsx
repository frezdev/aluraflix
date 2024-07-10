import { VideoContextProvider } from '@/context/videosContext'
import React from 'react'

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <VideoContextProvider>
      {children}
    </VideoContextProvider>
  )
}
