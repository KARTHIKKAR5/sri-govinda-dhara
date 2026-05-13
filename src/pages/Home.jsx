import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Home() {
  return (
    <div className="min-h-screen bg-farm-light">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home
