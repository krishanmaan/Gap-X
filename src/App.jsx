import './App.css'
import About from './components/About'
import Chart from './components/Chart'
import Core from './components/Core'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Navbaar from './components/Navbar'
import Roadmap from './components/Roadmap'

function App() {


  return (
    <>
      <Navbaar />
      <Hero />
      <About />
      <Mission />
      <Core />
      <div className='chart'>

      <Chart />
      </div>
      <Roadmap />
      <div className='  footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
