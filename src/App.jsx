import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Sectors from './sections/Sectors'
import Product from './sections/Product'
import Advantages from './sections/Advantages'
import VisionMission from './sections/VisionMission'
import Values from './sections/Values'
import TargetMarket from './sections/TargetMarket'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Product />
        <Advantages />
        <VisionMission />
        <Values />
        <TargetMarket />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
