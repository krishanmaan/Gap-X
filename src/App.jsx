
import './App.css'
import About from './components/About'
import Chart from './components/Chart'
import Core from './components/Core'

import Hero from './components/Hero'
import Mission from './components/Mission'
import Navbaar from './components/Navbar'

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
      </div>
      <Core/>
      
     
      {/* <Component/> */}

    </>
  )
}

export default App
