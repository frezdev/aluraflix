import { Footer } from '@/components/Shared/Footer'
import { Header } from '@/components/Shared/Header'
import { Outlet } from 'react-router-dom'
import { StateProvider } from './StateProvider'

export const RootLayout = () => {
  return (
    <StateProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StateProvider>
  )
}