import { Header } from './components/header'
import { Hero } from './components/hero'

export default function HomePage() {
  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      <Hero />
    </div>
  )
}
