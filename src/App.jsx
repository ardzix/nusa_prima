import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Sectors from './sections/Sectors'
import Product from './sections/Product'
import Advantages from './sections/Advantages'
import HowItWorks from './sections/HowItWorks'
import CaseStudy from './sections/CaseStudy'
import VisionMission from './sections/VisionMission'
import Values from './sections/Values'
import TargetMarket from './sections/TargetMarket'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Distributor from './sections/Distributor'

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Product />
        {/* <Advantages /> */}
        <HowItWorks />
        <CaseStudy />
        {/* <VisionMission /> */}
        {/* <Values /> */}
        <Distributor />
        {/* <TargetMarket /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
