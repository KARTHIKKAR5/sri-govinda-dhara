import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../sections/Products'

function Home() {
  return (
    <div className="min-h-screen bg-farm-light">
      <Navbar />
      <main>
        <Hero />
        <Products />
      </main>
    </div>
  )
}

export default Home
