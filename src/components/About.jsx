import React from 'react'
import baner from '../../public/assets/img/banner/banner_3.png'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <>
        <div ></div>
            <section  className="flex flex-col xl:flex-row md:flex-row  justify-center items-center max-w-screen-xl mx-auto    ">
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-full flex items-center justify-center relative mb-8 xl:mb-0 md:mb-0 ">
                    <img src={baner} alt="baner" className="md:w-96 w-80 " />
                </motion.div>
                <div className="w-full text-white text-left font-Grandstander items-center justify-center flex flex-col px-4 md:px-8 lg:px-12 xl:mr-4">
                    <h1 className="font-black  text-5xl md:text-7xl lg:text-7xl xl:text-7xl pb-4 text-left xl:text-left md:pr-32">About<samp className='font-Grandstander text-[#0EE9A0]' > Gap-X</samp></h1>
                    <p className="mb-4  md:text-lg lg:text-xl  text-[#f8f6ff]  xl:text-left font-Lotata text-sm">
                        Discover Gapx, where innovation meets reliability in the digital realm. Our mission is to foster a strong community through a dynamic referral program and a robust ecosystem. Gapx introduces a secure token tailored for seamless functionality across gaming, the metaverse, and digital transactions. Explore our cutting-edge offerings: the Gapx Chain, a state-of-the-art blockchain network; the Gapx Wallet, an intuitive digital wallet solution; the Gapx Exchange, your trusted platform for cryptocurrency trading; and the Gapx Gaming Portal, revolutionizing gaming experiences with blockchain integration. Step into the future of secure digital interactions with Gapx today.
                    </p>
                    <p className="  md:text-lg lg:text-xl  text-[#f8f6ff]  xl:text-left font-Lotata text-sm">
                        Embark on the Gapx journey, launched in June 2024 on the BNB Smart Chain with an impressive total supply of 900 crore tokens. Immerse yourself in a world of possibilities: earn generous rewards through our dynamic referral program. Seamlessly acquire Gapx from our dedicated exchange and effortlessly swap it with USDT. Experience enhanced trading on GapXbit, where every transaction is streamlined for your convenience and tailored for unparalleled trading experiences.
                    </p>
                    <div className="circlePosition w-[300px] h-[500px] bg-[#203A04] rounded-full absolute z-1 translate-x-[-50%] translate-y-[-50%] blur-[200px]"></div>
                </div>
            </section>
        </>
    )
}

export default About