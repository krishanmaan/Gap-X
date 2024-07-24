import React from 'react'
import baner from '../../public/assets/img/banner/banner2.png'

const About = () => {
  return (
    <>
      <section id='aboutus' className=' xl:flex  md:flex h-screen justify-center'>
        <div className='w-full  flex items-center'>
          <img src={baner} alt="" className=' items-center mr-10 ' />
          <div className="circlePosition w-[500px] h-[500px] bg-[#203A04] rounded-[100%] absolute 
             blur-[250px]">
          </div>
        </div>
        <div className='w-full  text-white font-Grandstander items-center justify-center flex flex-col'>
          <h1 className='font-black text-7xl pb-10'>About GAPX</h1>
          <p className="mb-8 text-1xl font-normal  font-Inter text-white items-center">Discover Gapx, where innovation meets reliability in the digital realm. Our mission is to foster a strong community through a dynamic referral program and a robust ecosystem. Gapx introduces a secure token tailored for seamless functionality across gaming, the metaverse, and digital transactions. Explore our cutting-edge offerings: the Gapx Chain, a state-of-the-art blockchain network; the Gapx Wallet, an intuitive digital wallet solution; the Gapx Exchange, your trusted platform for cryptocurrency trading; and the Gapx Gaming Portal, revolutionizing gaming experiences with blockchain integration. Step into the future of secure digital interactions with Gapx today.</p>
          <p className="mb-8 text-1xl font-normal font-Inter text-gray-300">Embark on the Gapx journey, launched in June 2024 on the BNB Smart Chain with an impressive total supply of 900 crore tokens. Immerse yourself in a world of possibilities: earn generous rewards through our dynamic referral program. Seamlessly acquire Gapx from our dedicated exchange and effortlessly swap it with USDT. Experience enhanced trading on GapXbit, where every transaction is streamlined for your convenience and tailored for unparalleled trading experiences.</p>
          <div className="circlePosition w-[300px] h-[500px] bg-[#203A04] rounded-[100%] absolute z-1 
            translate-x-[-50%] translate-y-[-50%] blur-[200px]">
          </div>
        </div>
      </section>
    </>
  )
}

export default About