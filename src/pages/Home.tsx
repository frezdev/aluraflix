import { Categories } from "@/components/Home/Categories"
import { Hero } from "@/components/Home/Hero"

export const Home = () => {
  console.log('render');

  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}
