import { Header } from '@/components/Shared/Header'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}