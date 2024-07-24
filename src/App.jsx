
import './App.css'
import About from './components/About'
import Chart from './components/Chart'
import Core from './components/Core'
import Footer from './components/Footer'
import Fotr from './components/Fotr'

import Hero from './components/Hero'
import Mission from './components/Mission'
import Misson from './components/Misson'
import Navbaar from './components/Navbar'
import Roadmap from './components/Roadmap'

function App() {


  return (
    <>

      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto '>

        {/* <Background/> */}
        <Navbaar />
        <Hero />
        <About />

      </div>


      <div className='bg-[#8b97291b]  flex flex-wrap items-center justify-center mx-auto'>
        <Mission />
       
        {/* <Misson/> */}
      </div>
      <Core />
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto '>

        {/* <Background/> */}
        
        <Chart />
      
       

      </div>
      <Roadmap />
      <Footer />
      {/* <Fotr /> */}

      {/* <Component/> */}


    </>
  )
}

export default App
