import './App.css'
import About from './components/About'
import Audit from './components/Audit'
import Chart from './components/Chart'
import ContactForm from './components/Contact'
import Core from './components/Core'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Navbaar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Top from './components/Top'
import Slider from './components/Slider'
import Tokendetals from './components/Tokendetals'

function App() {


  return (
    <>
      
      <Navbaar />
      <Hero />
      <About />
      <Slider/>
      <Tokendetals/>
      <Mission />
      <Core />
      <Roadmap />
      <Audit />
      <div className='chart bg-[#010011]'>

        <Chart />
      </div>

      <ContactForm />
      <div className='  bg-[#1C252E]'>
        <Footer />
      </div>
      <Top />
    </>
  )
}

export default App
